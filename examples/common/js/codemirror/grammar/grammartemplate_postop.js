// 1. JSON grammar for GrammarTemplate Engine ( https://github.com/foo123/GrammarTemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
codemirror_define_grammar_mode("grammar-template-postop", {
        
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
    ,"<ident>"                  : "RE::/[_$A-Za-z0-9]+(\\.[_$A-Za-z0-9]+)*/"
    ,"<renderer>"               : "RE::/:[_$A-Za-z0-9]+/"
    ,"<default>"                : "RE::/[\\s\\S]*?(?=>|&gt;)/"
    ,"<text>"                   : "RE::/[^\\s]/"
    ,"<open>"                   : "RE::/(<|&lt;)/"
    ,"<close>"                  : "RE::/(>|&gt;)/"
    ,"<close_def>"              : "RE::/(>|&gt;)(?=:=)/"
    ,"<close_mod>"              : "RE::/(>|&gt;)(?=\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})/"
    ,"<close_mod_def>"          : "RE::/(>|&gt;)(?=(\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})(:=))/"
    ,"@open:action"             : {"push":"]"}
    ,"@close:action"            : {"pop":"]","msg":"Block delimiters do not match"}
},

"Syntax"                        : {
     "<nonterminal>"            : "<open>.KEYWORD '' (<ident>.IDENT '')? (<renderer>.BUILTIN '')? ('|'.BUILTIN <default>.ATOM)? (<close_mod_def>.KEYWORD '' <modifier>.BUILTIN '' ':='.KEYWORD '' '['.BUILTIN @open | <close_mod>.KEYWORD '' <modifier>.BUILTIN | <close_def>.KEYWORD '' ':='.KEYWORD '' '['.BUILTIN @open | <close>.KEYWORD)"
    ,"<template>"               : "(<escaped> <text> | '['.BUILTIN @open | ']'.BUILTIN @close | <nonterminal> | <text>)*"
},

// what to parse and in what order
"Parser"                        : [ ["<template>"] ]

}, {

"supportGrammarAnnotations" : true,
"supportCodeFolding"        : false,
"supportCodeMatching"       : false,
"supportAutoCompletion"     : false

});