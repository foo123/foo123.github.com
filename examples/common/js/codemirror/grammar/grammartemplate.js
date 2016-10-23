// 1. JSON grammar for GrammarTemplate Engine ( https://github.com/foo123/GrammarTemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
var grammartemplate_grammar = {
        
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

     "modifier"                 : "RE::/(\\?!|\\*|\\?|\\{\\d+(,\\d+)?\\})/"
    ,"identifier"               : "RE::/[_A-Za-z][_A-Za-z0-9]*(\\.[_A-Za-z][_A-Za-z0-9]*)?/"
    ,"renderer"                 : "RE::/[_A-Za-z][_A-Za-z0-9]*/"
    ,"default_value"            : "RE::/[_A-Za-z0-9]*/"
    ,"text"                     : "RE::/[^\\s]/"
    ,"delim1"                   : "RE::/(<|&lt;)/"
    ,"delim2"                   : "RE::/(>|&gt;)(:=)?/"
    ,"block1"                   : "RE::/\\[/"
    ,"block2"                   : "RE::/\\]/"
    ,"opened:action"            : {"push":">","ci":true}
    ,"closed:action"            : {"pop":">","ci":true,"msg":"Non-Terminal delimiters do not match"}
},

"Syntax"                        : {
     "nonterminal"              : "delim1.keyword '' (modifier.function? identifier.keyword '')? (':' '' renderer.function '')? ('|' '' default_value.string '')? delim2.keyword"
    ,"template"                 : "nonterminal | block1.function | block2.function | text"
},

// what to parse and in what order
"Parser"                        : [ ["template"] ]

};


// 2. parse the grammar into a Codemirror syntax-highlight mode
var grammartemplate_mode = CodeMirrorGrammar.getMode( grammartemplate_grammar );

// 3. register the mode with Codemirror
CodeMirror.defineMode("grammartemplate", grammartemplate_mode);
CodeMirror.defineMIME("text/x-grammartemplate", "grammartemplate");
