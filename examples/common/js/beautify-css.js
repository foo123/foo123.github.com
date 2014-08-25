/*

 CSS Beautifier
---------------

    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

    Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
        http://jsbeautifier.org/


    You are free to use this in any way you want, in case you find this useful or working for you.

    Usage:
        css_beautify(source_text);
        css_beautify(source_text, options);

    The options are:
        indent_size (default 4)          — indentation size,
        indent_char (default space)      — character to indent with,

    e.g

    css_beautify(css_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });
    
    Adapted and customized by Nikos M. <https://github.com/foo123/>
*/

!function (root, moduleName, moduleDefinition) {

    //
    // export the module
    
    // node, CommonJS, etc..
    if ( 'object' == typeof(module) && module.exports ) module.exports = moduleDefinition();
    
    // AMD, etc..
    else if ( 'function' == typeof(define) && define.amd ) define( moduleDefinition );
    
    // browser, etc..
    else root[ moduleName ] = moduleDefinition();


}(this, 'CSSBeautifier', function( undef ) {
    
    // tokenizer
    var whiteRe = /^\s+$/, wordRe = /[\w$\-_]/, indentRe = /^[\r\n]*[\t ]*/;
    
    var CSSBeautifier = function(options) {
        options = options || {};
        this.indentSize = options.indent_size || 4;
        this.indentCharacter = options.indent_char || ' ';
        this.braceOnNewLine = (undef !== options.brace_on_newline) ? options.brace_on_newline : 1;
        this.skipComments = (undef !== options.skip_comments) ? options.skip_comments : 1;
        // compatibility
        if (typeof this.indentSize == "string")
            this.indentSize = parseInt(this.indentSize, 10);
    };
    
    CSSBeautifier.prototype = {
        
        constructor: CSSBeautifier,
        
        indentSize: 4,
        indentCharacter: ' ',
        braceOnNewLine: 1,
        skipComments: 1,
        
        // http://www.w3.org/TR/CSS21/syndata.html#tokenization
        // http://www.w3.org/TR/css3-syntax/
        beautify: function( source ) {

            var pos = -1, ch, isAfterSpace,
                // printer
                braceOnNewLine = this.braceOnNewLine ? 1 : 0,
                skipComments = this.skipComments ? 1 : 0,
                indentSize = this.indentSize, indentCharacter = this.indentCharacter,
                indentString = source.match( indentRe )[0],
                singleIndent = new Array( indentSize + 1 ).join( indentCharacter ),
                indentLevel = 0,
                output = [], print = {}
            ;
            
            // tokenizers
            function next() { return ch = source.charAt(++pos) }
            
            function peek() { return source.charAt(pos+1) }
            
            function eatString(comma) 
            {
                var start = pos;
                while( next() )
                {
                    if ( "\\" == ch )
                    {
                        next();
                        next();
                    } 
                    else if ( comma == ch ) 
                    {
                        break;
                    } 
                    else if ( "\n" == ch ) 
                    {
                        break;
                    }
                }
                return source.substring(start, pos + 1);
            }

            function eatWhitespace() 
            {
                var start = pos;
                while ( whiteRe.test(peek()) )  pos++;
                return pos != start;
            }

            function skipWhitespace() 
            {
                var start = pos;
                do{ }while ( whiteRe.test(next()) ) 
                return pos != start + 1;
            }

            function eatComment() 
            {
                var start = pos;
                next();
                while ( next() ) 
                {
                    if ( "*" == ch  && "/" == peek() ) 
                    {
                        pos ++;
                        break;
                    }
                }

                return source.substring(start, pos + 1);
            }


            function lookBack(str, index) 
            {
                return output.slice(-str.length + (index||0), index).join("").toLowerCase() == str;
            }

            function indent() 
            {
                indentLevel++;
                indentString += singleIndent;
            }
            
            function outdent() 
            {
                indentLevel--;
                indentString = indentString.slice(0, -indentSize);
            }

            print["{"] = function(ch) {
                if ( braceOnNewLine )
                {
                    print.newLine();
                    output.push(ch);
                    indent();
                    print.newLine();
                }
                else
                {
                    indent();
                    print.singleSpace();
                    output.push(ch);
                    print.newLine();
                }
            };
            print["}"] = function(ch) {
                outdent();
                print.newLine();
                output.push(ch);
                print.newLine();
            };
            print.newLine = function(keepWhitespace) {
                if ( !keepWhitespace )
                    while (whiteRe.test(output[output.length - 1]))
                        output.pop();

                if ( output.length )
                    output.push('\n');
                if ( indentString )
                    output.push(indentString);
            };
            print.singleSpace = function() {
                if ( output.length && !whiteRe.test(output[output.length - 1]) )
                    output.push(' ');
            };
            
            /*_____________________--------------------_____________________*/

            if ( indentString ) output.push(indentString);
                
            while ( 1 ) 
            {
                isAfterSpace = skipWhitespace();

                if ( !ch ) break;

                if ( '{' == ch  ) 
                {
                    print["{"](ch);
                } 
                else if ( '}' == ch ) 
                {
                    print["}"](ch);
                } 
                else if ( '"' == ch || '\'' == ch ) 
                {
                    output.push( eatString(ch) );
                } 
                else if ( ':' == ch ) 
                {
                    print.singleSpace();
                    output.push(ch);
                    print.singleSpace();
                } 
                else if ( ';' == ch ) 
                {
                    output.push(ch, "\n", indentString);
                } 
                else if ( '/' == ch && '*' == peek() ) 
                { 
                    // comment
                    print.newLine();
                    if ( skipComments )
                    {
                        eatComment();
                        output.push("\n", indentString);
                    }
                    else
                    {
                        output.push(eatComment(), "\n", indentString);
                    }
                } 
                else if ( '(' == ch ) 
                { 
                    // may be a url
                    output.push(ch);
                    eatWhitespace();
                    if ( lookBack("url", -1) && next() ) 
                    {
                        if ( ')' != ch && '"' != ch && '\'' != ch )
                            output.push( eatString(')') );
                        else
                            pos--;
                    }
                } 
                else if ( ')' == ch ) 
                {
                    output.push(ch);
                } 
                else if ( ',' == ch ) 
                {
                    eatWhitespace();
                    output.push(ch);
                    print.singleSpace();
                } 
                else if ( ']' == ch ) 
                {
                    output.push(ch);
                }  
                else if ( '[' == ch || '=' == ch ) 
                { 
                    // no whitespace before or after
                    eatWhitespace();
                    output.push(ch);
                } 
                else 
                {
                    if ( isAfterSpace )
                        print.singleSpace();

                    output.push(ch);
                }
            }

            return output.join('').replace(/[\n ]+$/gm, '');
        }
    };
    

    // export it
    return CSSBeautifier;
});