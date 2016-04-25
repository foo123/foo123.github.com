// 1. JSON grammar for Contemplate Engine ( https://github.com/foo123/Contemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
var contemplate_grammar_base = {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

// Style model
"Style"                         : {

     "comment"                  : "comment"
    ,"atom"                     : "atom"
    ,"keyword"                  : "keyword"
    ,"function"                 : "builtin"
    ,"plugin"                   : "variable-2"
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
    ,"atom"                     : {"autocomplete":true,"tokens":[
                                "true", "false", "null"
                                ]}
    ,"keyword"                  : null
    ,"function"                 : null
    ,"plugin"                   : null

},

// what to parse and in what order
"Parser"                        : [
                                "keyword",
                                "function",
                                "plugin",
                                "atom",
                                "number",
                                "string",
                                "variable",
                                "property"
                                ]

};

var contemplate_grammar = {
// Lexical model
"Lex"                           : {

     "keyword"                  : {"autocomplete":true,"tokens":[
                                "extends", "block", "endblock", "super", "getblock", "include",
                                "if", "elseif", "elif", "else", "endif", "fi", 
                                "for", "elsefor", "endfor", "as", "in",
                                "set", "unset", "isset", "empty", "iif", "continue", "break", "local_set"
                                ]}
    ,"function"                 : {"autocomplete":true,"tokens":[
                                "n","s","f","q","qq","dq","addslashes","stripslashes","sprintf",
                                "concat","cc","ltrim","rtrim","trim","lowercase","uppercase",
                                "lcfirst","ucfirst","camelcase","snakecase","count","haskey",
                                "uuid","time","now","date","ldate","locale","l","nlocale","nl","xlocale","xl","nxlocale","nxl",
                                "inline","tpl","e","url","is_array","in_array","json_encode","json_decode"
                                ]}
    ,"plugin"                   : "RE::/[a-zA-Z_][a-zA-Z0-9_]*/"

}
};

var contemplate_grammar_compat = {
// Lexical model
"Lex"                           : {

     "keyword"                  : {"autocomplete":true,"tokens":[
                                "%extends", "%block", "%endblock", "%super", "%getblock", "%include",
                                "%if", "%elseif", "%elif", "%else", "%endif", "%fi", 
                                "%for", "%elsefor", "%endfor", "as", "in",
                                "%set", "%unset", "%isset", "%empty", "%iif", "%continue", "%break", "%local_set"
                                ]}
    ,"function"                 : {"autocomplete":true,"tokens":[
                                "%n","%s","%f","%q","%qq","%dq","%addslashes","%stripslashes","%sprintf",
                                "%concat","%cc","%ltrim","%rtrim","%trim","%lowercase","%uppercase",
                                "%lcfirst","%ucfirst","%camelcase","%snakecase","%count","%haskey",
                                "%uuid","%time","%now","%date","%ldate","%locale","%l","%nlocale","%nl","%xlocale","%xl","%nxlocale","%nxl",
                                "%inline","%tpl","%e","%url","%is_array","%in_array","%json_encode","%json_decode"
                                ]}
    ,"plugin"                   : "RE::/%[a-zA-Z_][a-zA-Z0-9_]*/"

}
};


// 2. parse the grammar into a Codemirror syntax-highlight mode
var contemplate_grammar_full = contemplate_grammar_base;
contemplate_grammar_full.Lex['keyword'] = contemplate_grammar.Lex['keyword'];
contemplate_grammar_full.Lex['function'] = contemplate_grammar.Lex['function'];
contemplate_grammar_full.Lex['plugin'] = contemplate_grammar.Lex['plugin'];
var contemplate_mode = CodeMirrorGrammar.getMode( contemplate_grammar_full );

var contemplate_grammar_full_compat = contemplate_grammar_base;
contemplate_grammar_full_compat.Lex['keyword'] = contemplate_grammar_compat.Lex['keyword'];
contemplate_grammar_full_compat.Lex['function'] = contemplate_grammar_compat.Lex['function'];
contemplate_grammar_full_compat.Lex['plugin'] = contemplate_grammar_compat.Lex['plugin'];
var contemplate_mode_compat = CodeMirrorGrammar.getMode( contemplate_grammar_full_compat );

// 3. register the mode with Codemirror
CodeMirror.defineMode("contemplate", contemplate_mode);
CodeMirror.defineMode("contemplate-compat", contemplate_mode_compat);
CodeMirror.defineMIME("text/x-contemplate", "contemplate");
CodeMirror.defineMIME("text/x-contemplate-compat", "contemplate-compat");
CodeMirror.defineMIME("application/x-contemplate", {name:"htmlembedded", scriptingModeSpec:"contemplate", scriptStartRegex:/^<%/, scriptEndRegex:/^%>/});
CodeMirror.defineMIME("application/x-contemplate-compat", {name:"htmlembedded", scriptingModeSpec:"contemplate-compat", scriptStartRegex:/^<%/, scriptEndRegex:/^%>/});
