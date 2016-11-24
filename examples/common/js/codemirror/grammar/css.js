// 1. a partial css grammar in simple JSON format
!function( language, grammar, options ){
"use strict";

window[language + "_grammar"] = grammar;
options = options || {};
var mode = null;

if ( ("undefined" !== typeof CodeMirror) && ("undefined" !== typeof CodeMirrorGrammar) )
{
    // 2. parse the grammar into a Codemirror syntax-highlight mode
    mode = CodeMirrorGrammar.getMode( grammar );
    mode.supportGrammarAnnotations = options.supportGrammarAnnotations ? true : false;
    mode.supportCodeFolding = options.supportCodeFolding ? true : false;
    mode.supportCodeMatching = options.supportCodeMatching ? true : false;
    mode.supportAutoCompletion = options.supportAutoCompletion ? true : false;

    // 3. register the mode with Codemirror
    CodeMirror.defineMode(language, mode);
    if ( mode.supportGrammarAnnotations )
    {
        CodeMirror.registerHelper("lint", language, mode.validator);
    }
    if ( mode.supportCodeFolding )
    {
        CodeMirror.registerHelper("fold", /*language+"-mode-fold"*/mode.foldType, mode.folder);
    }
    if ( mode.supportCodeMatching )
    {
        CodeMirror.defineOption(language+"-mode-match", false, function( cm, val, old ) {
            if ( old && old != CodeMirror.Init )
            {
                cm.off( "cursorActivity", mode.matcher );
                mode.matcher.clear( cm );
            }
            if ( val )
            {
                cm.on( "cursorActivity", mode.matcher );
                mode.matcher( cm );
            }
        });
    }
    if ( mode.supportAutoCompletion )
    {
        mode.autocompleter.options = options.autocompleter || {prefixMatch:true, caseInsensitiveMatch:false, inContext:false};
        CodeMirror.commands[language+"-mode-autocomplete"] = function( cm ) {
            CodeMirror.showHint(cm, mode.autocompleter);
        };
    }
    /*if ( options.supportToggleComments )
    {
        CodeMirror.commands[language+"-mode-togglecomments"] = function( cm ) {
            cm.toggleComment( mode )
        };
    }*/
}
}("css", {
    
"RegExpID"                  : "RE::",

"Extra"                     : {
    
    "fold"                  : "brace"
    
},
    
// Style model
"Style"                     : {
    
     "comment"              : "comment"
    ,"identifier"           : "variable"
    ,"css_id"               : "builtin"
    ,"css_class"            : "qualifier"
    ,"css_atom"             : "atom"
    ,"css_property"         : "property"
    ,"html_element"         : "tag"
    ,"pseudo_element"       : "string"
    ,"number"               : "number"
    ,"string"               : "string"
    ,"unquoted_string"      : "string"
    ,"atrule"               : "def"
    ,"important"            : "builtin"
    
},

// Lexical model
"Lex"                       : {
    
     "comment:comment"      : {"interleave":true,"tokens":[["/*","*/"]]}
    ,"string:line-block"    : ["RE::/(['\"])/", 1]
    ,"unquoted_string"      : "RE::/[^\\(\\)\\[\\]\\{\\}'\"]+/"
    ,"number"               : [
                            // integers
                            // decimal
                            "RE::/[0-9]\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
                            // floats
                            "RE::/\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
                            "RE::/\\d+\\.\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
                            "RE::/\\d*\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
                            // hex color
                            "RE::/#[0-9a-f]{3,6}/i"
                            ]
    ,"identifier"           : "RE::/[a-z_\\-][a-z0-9_\\-]*/i"
    ,"css_id"               : "RE::/#[a-z_\\-][a-z0-9_\\-]*/i"
    ,"css_class"            : "RE::/\\.[a-z_\\-][a-z0-9_\\-]*/i"
    ,"css_property"         : "RE::/[a-z_\\-][a-z0-9_\\-]*/i"
    ,"css_atom"             : "RE::/[a-z_\\-][a-z_\\-]*/i"
    ,"pseudo_element"       : "RE::/::?[a-z_\\-][a-z0-9_\\-]*/i"
    ,"html_element"         : "RE::/[a-z_\\-][a-z0-9_\\-]*/i"
    ,"bracket:action"       : {"push":"}"}
    ,"paren:action"         : {"push":")"}
    ,"matched:action"       : {"pop":"$0","msg":"Bracket \"$0\" does not match"}
    
},

// Syntax model (optional)
"Syntax"                    : {
    
     "url_declaration"      : "'url'.css_atom '(' paren (string | unquoted_string) ')' matched"
    ,"format_declaration"   : "'format'.css_atom '(' paren (string | unquoted_string) ')' matched"
    ,"css_selector"         : "(html_element | css_id | css_class | pseudo_element | string | ',' | '(' paren | ')' matched | '[' | ']' | '=' | '+' | '^' | '>' | '*' | '~')+"
    ,"rhs_assignment"       : "(url_declaration | format_declaration | string | number | css_atom | ',' | '(' paren | ')' matched)+"
    ,"css_assignment"       : "css_property ':' rhs_assignment '!important'.important? ';'*"
    ,"css_block"            : "(number | css_selector) '{' bracket css_assignment* '}' matched"
    ,"css_identifier"       : "identifier | number | string | ',' | '(' paren | ')' matched"
    ,"atrule_line"          : "css_identifier+ ';'*"
    ,"atrule_block"         : "'{' bracket css_assignment* '}' matched"
    ,"import_directive"     : "'@import'.atrule url_declaration ';'"
    ,"keyframes_directive"  : "/@[a-z\\\\-]*keyframes\\\\b/i.atrule identifier '{' bracket css_block* '}' matched"
    ,"media_directive"      : "'@media'.atrule css_identifier+ '{' bracket css_block* '}' matched"
    ,"atrule_directive"     : "/@[a-z_\\\\-][a-z0-9_\\\\-]*/i.atrule (atrule_block | atrule_line)"
    ,"css"                  : "comment | import_directive | keyframes_directive | media_directive | atrule_directive | css_block"
    
},

// what to parse and in what order
"Parser"                    : [ ["css"] ]

}, {

"supportGrammarAnnotations" : true,
"supportCodeFolding"        : true,
"supportCodeMatching"       : true,
"supportAutoCompletion"     : false

});