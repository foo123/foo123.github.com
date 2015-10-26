// 1. JSON grammar for Contemplate Engine ( https://github.com/foo123/Contemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
var contemplate_grammar = {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

// Style model
"Style"                         : {

     "comment"                  : "comment"
    ,"atom"                     : "atom"
    ,"keyword"                  : "keyword"
    ,"function"                 : "builtin"
    ,"operator"                 : "operator"
    ,"variable"                 : "variable"
    ,"property"                 : "variable"
    ,"number"                   : "number"
    ,"string"                   : "string"

},


// Lexical model
"Lex"                           : {

     "variable"                 : "RE::/\\$[_A-Za-z][_A-Za-z0-9]*/"
    ,"property"                 : "RE::/\\.[_A-Za-z][_A-Za-z0-9]*/"
    ,"number"                   : [
                                // floats
                                "RE::/\\d*\\.\\d+(e[\\+\\-]?\\d+)?/",
                                "RE::/\\d+\\.\\d*/",
                                "RE::/\\.\\d+/",
                                // integers
                                "RE::/[1-9]\\d*(e[\\+\\-]?\\d+)?/",
                                // just zero
                                "RE::/0(?![\\dx])/"
                                ]
    ,"string:escaped-block"     : ["RE::/(['\"])/", 1]
    ,"operator"                 : [
                                "+", "-", "*", "/", "%", "<", ">", "!", 
                                "==", "!=", "<=", ">=", "<>", "=", "||", "&&", "|", "&"
                                ]
    ,"atom"                     : {"autocomplete":true,"tokens":[
                                "true", "false", "null"
                                ]}
    ,"keyword"                  : {"autocomplete":true,"tokens":[
                                "%extends", "%block", "%endblock", "%super", "%getblock", "%include",
                                "%if", "%elseif", "%else", "%endif", 
                                "%for", "%elsefor", "%endfor", "as", "in",
                                "%set", "%unset", "%isset"
                                ]}
    ,"function"                 : "RE::/%[a-zA-Z_][a-zA-Z0-9_]*/"

},

// what to parse and in what order
"Parser"                        : [
                                "keyword",
                                "function",
                                "atom",
                                "number",
                                "string",
                                "variable",
                                "property",
                                "operator"
                                ]

};

// 2. parse the grammar into a Codemirror syntax-highlight mode
var contemplate_mode = CodeMirrorGrammar.getMode( contemplate_grammar );

// 3. register the mode with Codemirror
CodeMirror.defineMode("contemplate", contemplate_mode);
CodeMirror.defineMIME("text/x-contemplate", "contemplate");
CodeMirror.defineMIME("application/x-contemplate", { name:"htmlembedded", scriptingModeSpec:"contemplate", scriptStartRegex:/^<%/, scriptEndRegex:/^%>/});
