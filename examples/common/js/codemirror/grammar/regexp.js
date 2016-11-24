// 1. JSON grammar for Regular Expressions
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
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
}("regexp", {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

// Style model
"Style"                         : {

     "SPECIAL"                  : "keyword"
    ,"BUILTIN"                  : "builtin"
    ,"STRING"                   : "string"
    ,"ATOM"                     : "atom"
    ,"CLASS"                    : "variable"

},

// Lexical model
"Lex"                           : {
     "<escaped>"                : "RE::/\\\\(\\\\\\\\)*/"
    ,"<escapes>"                : "RE::/(\\\\\\\\)+/"
    ,"<repeater>"               : "RE::/[\\+\\*\\?]|\\{\\d+(,\\d*)?\\}/"
    ,"<reserved>"               : "RE::/[\\.\\^\\$\\|]/"
    ,"<class>"                  : "RE::/\\\\[dDwWsStnvr]/"
    ,"<start_re>"               : "/"
    ,"<end_re>"                 : "RE::#/[gmiy]{0,4}#"
    ,"<literal>"                : "RE::/(\\\\)?[^\\s]/"
    ,"<notbracket>"             : "RE::#[^\\]]#"
    ,"<text>"                   : "RE::#[^\\s/]#"
    ,"<bracket>"                : "RE::/\\[\\^?/"
    ,"<paren>"                  : "RE::/\\((\\?[!=:])?/"
    ,"@open_bra@:action"        : {"push":"]"}
    ,"@close_bra@:action"       : {"pop":"]","msg":"Brackets do not match"}
    ,"@open_par@:action"        : {"push":")"}
    ,"@close_par@:action"       : {"pop":")","msg":"Parentheses do not match"}
},

"Syntax"                        : {
     "<chargroup>"              : "<bracket>.BUILTIN @open_bra@ (<escaped>& <escapes>.ATOM? (<class>.CLASS | <literal>.ATOM) | <notbracket>.ATOM)* ']'.BUILTIN @close_bra@"
    ,"<regexp>"                 : "(<escaped>& <escapes>.STRING? (<class>.CLASS | <literal>.STRING) | <reserved>.SPECIAL | <repeater>.BUILTIN | <paren>.BUILTIN @open_par@ | ')'.BUILTIN @close_par@ | <chargroup> | ']'.BUILTIN @close_bra@ | <text>.STRING)*"
    ,"<js-regexp>"              : "<start_re> <regexp> <end_re>"
},

// what to parse and in what order
"Parser"                        : [ ["<js-regexp>"] ]

}, {

"supportGrammarAnnotations" : true,
"supportCodeFolding"        : false,
"supportCodeMatching"       : false,
"supportAutoCompletion"     : false

});