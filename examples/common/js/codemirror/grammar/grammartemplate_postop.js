// 1. JSON grammar for GrammarTemplate Engine ( https://github.com/foo123/GrammarTemplate )
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
}("grammar-template-postop", {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

// Style model
"Style"                         : {

     "KEYWORD"                  : "keyword"
    ,"IDENT"                    : "keyword"
    ,"BUILTIN"                  : "builtin"
    ,"ATOM"                     : "string"

},

// Lexical model
"Lex"                           : {
     "<escaped>"                : "RE::/\\\\(\\\\\\\\)*/"
    ,"<modifier>"               : "RE::/(\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})/"
    ,"<ident>"                  : "RE::/[_$A-Za-z0-9]+(\\.[_$A-Za-z0-9]+)?/"
    ,"<renderer>"               : "RE::/:[_$A-Za-z0-9]+/"
    ,"<default_value>"          : "RE::/[\\s\\S]*?(?=>|&gt;)/"
    ,"<text>"                   : "RE::/[^\\s]/"
    ,"<open>"                   : "RE::/(<|&lt;)/"
    ,"<close>"                  : "RE::/(>|&gt;)/"
    ,"<close_def>"              : "RE::/(>|&gt;)(?=:=)/"
    ,"<close_mod>"              : "RE::/(>|&gt;)(?=\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})/"
    ,"<close_mod_def>"          : "RE::/(>|&gt;)(?=(\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})(:=))/"
    ,"@open_block@:action"      : {"push":"]"}
    ,"@close_block@:action"     : {"pop":"]","msg":"Block delimiters do not match"}
},

"Syntax"                        : {
     "<nonterminal>"            : "<open>.KEYWORD '' (<ident>.IDENT '')? (<renderer>.BUILTIN '')? ('|'.BUILTIN <default_value>.ATOM)? (<close_mod_def>.KEYWORD '' <modifier>.BUILTIN '' ':='.KEYWORD '' '['.BUILTIN @open_block@ | <close_mod>.KEYWORD '' <modifier>.BUILTIN | <close_def>.KEYWORD '' ':='.KEYWORD '' '['.BUILTIN @open_block@ | <close>.KEYWORD)"
    ,"<template>"               : "(<escaped> <text> | '['.BUILTIN @open_block@ | ']'.BUILTIN @close_block@ | <nonterminal> | <text>)*"
},

// what to parse and in what order
"Parser"                        : [ ["<template>"] ]

}, {

"supportGrammarAnnotations" : true,
"supportCodeFolding"        : false,
"supportCodeMatching"       : false,
"supportAutoCompletion"     : false

});