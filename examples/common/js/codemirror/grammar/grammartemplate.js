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
     "escaped"                  : "RE::/\\\\(\\\\\\\\)*/"
    ,"modifier"                 : "RE::/(\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})/"
    ,"identifier"               : "RE::/[_A-Za-z][_A-Za-z0-9]*(\\.[_A-Za-z][_A-Za-z0-9]*)?/"
    ,"renderer"                 : "RE::/[_A-Za-z][_A-Za-z0-9]*/"
    ,"default_value"            : "RE::/[_A-Za-z0-9]*/"
    ,"text"                     : "RE::/[^\\s]/"
    ,"delim1"                   : "RE::/(<|&lt;)/"
    ,"delim2"                   : "RE::/(>|&gt;)(:=)?/"
    ,"block"                    : "RE::/[\\[\\]]/"
    ,"opened:action"            : {"push":">","ci":true}
    ,"closed:action"            : {"pop":">","ci":true,"msg":"Non-Terminal delimiters do not match"}
},

"Syntax"                        : {
     "nonterminal"              : "delim1.keyword '' (modifier.function? identifier.keyword '')? (':'.function '' renderer.function '')? ('|'.function '' default_value.string '')? delim2.keyword"
    ,"template"                 : "escaped text | block.function | nonterminal | text"
},

// what to parse and in what order
"Parser"                        : [ ["template"] ]

};
var grammartemplate_postgrammar = {
        
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
    ,"modifier"                 : "RE::/(\\?!|\\*|\\?|\\{\\d+(,\\d*)?\\})/"
    ,"identifier"               : "RE::/[_A-Za-z][_A-Za-z0-9]*(\\.[_A-Za-z][_A-Za-z0-9]*)?/"
    ,"renderer"                 : "RE::/[_A-Za-z][_A-Za-z0-9]*/"
    ,"default_value"            : "RE::/[_A-Za-z0-9]*/"
    ,"text"                     : "RE::/[^\\s]/"
    ,"delim1"                   : "RE::/(<|&lt;)/"
    ,"delim2"                   : "RE::/(>|&gt;)/"
    ,"block"                    : "RE::/[\\[\\]]/"
    ,"opened:action"            : {"push":">","ci":true}
    ,"closed:action"            : {"pop":">","ci":true,"msg":"Non-Terminal delimiters do not match"}
},

"Syntax"                        : {
     "nonterminal"              : "delim1.keyword '' (identifier.keyword '')? (':'.function '' renderer.function '')? ('|'.function '' default_value.string '')? delim2.keyword modifier.function? ':='.keyword?"
    ,"template"                 : "escaped text | block.function | nonterminal | text"
},

// what to parse and in what order
"Parser"                        : [ ["template"] ]

};

var grammartemplate_mode = null, grammartemplate_postmode = null;

if ( ("undefined" !== typeof CodeMirror) && ("undefined" !== typeof CodeMirrorGrammar) )
{
// 2. parse the grammar into a Codemirror syntax-highlight mode
grammartemplate_mode = CodeMirrorGrammar.getMode( grammartemplate_grammar );
grammartemplate_postmode = CodeMirrorGrammar.getMode( grammartemplate_postgrammar );

// 3. register the mode with Codemirror
CodeMirror.defineMode("grammartemplate", grammartemplate_mode);
CodeMirror.defineMIME("text/x-grammartemplate", "grammartemplate");
CodeMirror.defineMode("grammartemplate-post", grammartemplate_postmode);
CodeMirror.defineMIME("text/x-grammartemplate-post", "grammartemplate-post");
}
