// 1. JSON grammar for Regular Expressions
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
var regexp_grammar = {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

// Style model
"Style"                         : {

     "keyword"                  : "keyword"
    ,"function"                 : "builtin"
    ,"string"                   : "string"
    ,"atom"                     : "atom"

},

// Lexical model
"Lex"                           : {
     "escaped"                  : "RE::/\\\\(\\\\\\\\)*/"
    ,"repeater"                 : "RE::/[\\+\\*\\?\\|]|\\{\\d+(,\\d*)?\\}/"
    ,"reserved"                 : "RE::/[\\.\\^\\$]/"
    ,"cclass"                   : "RE::/[dDwWsStnvr]/"
    ,"start_re"                 : "/"
    ,"end_re"                   : "RE::#/[gmiy]{0,4}#"
    ,"literal"                  : "RE::/[^\\s]/"
    ,"text"                     : "RE::#[^\\s/]#"
    ,"bracket"                  : "RE::/\\[\\^?/"
    ,"paren"                    : "RE::/\\((\\?[=:])?/"
    ,"open_bra:action"          : {"push":"]"}
    ,"close_bra:action"         : {"pop":"]","msg":"Character Group Delimiters do not match"}
    ,"open_par:action"          : {"push":")"}
    ,"close_par:action"         : {"pop":")","msg":"Group Parentheses do not match"}
},

"Syntax"                        : {
     "special"                  : "reserved.keyword | repeater.function | bracket.function open_bra | ']'.function close_bra | paren.function open_par | ')'.function close_par"
    ,"regexp"                   : "escaped.string (cclass.keyword | literal.string) | special | text.string"
    ,"js-regexp"                : "start_re regexp* end_re"
},

// what to parse and in what order
"Parser"                        : [ ["js-regexp"] ]

};

var regexp_mode = null;

if ( ("undefined" !== typeof CodeMirror) && ("undefined" !== typeof CodeMirrorGrammar) )
{
// 2. parse the grammar into a Codemirror syntax-highlight mode
regexp_mode = CodeMirrorGrammar.getMode( regexp_grammar );

// 3. register the mode with Codemirror
CodeMirror.defineMode("regexp", regexp_mode);
}
