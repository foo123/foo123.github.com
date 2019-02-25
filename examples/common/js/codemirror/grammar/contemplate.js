// 1. JSON grammar for Contemplate Engine ( https://github.com/foo123/Contemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
codemirror_define_grammar_mode("contemplate", {
        
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
    ,"keyword"                  : {"autocomplete":true,"tokens":[
                                "extends", "block", "endblock", "super", "getblock", "include",
                                "if", "elseif", "elif", "else", "endif", "fi", 
                                "for", "elsefor", "endfor", "as", "in",
                                "set", "unset", "isset", "empty", "iif", "continue", "break", "local_set"
                                ]}
    ,"function"                 : {"autocomplete":true,"tokens":[
                                's', 'n', 'f', 'q', 'qq', 
                                'echo', 'time', 'count',
                                'lowercase', 'uppercase', 'ucfirst', 'lcfirst', 'sprintf', 'vsprintf',
                                'date', 'ldate', 'locale', 'xlocale',
                                'inline', 'tpl', 'uuid', 'haskey',
                                'concat', 'ltrim', 'rtrim', 'trim', 'addslashes', 'stripslashes',
                                'is_array', 'in_array', 'json_encode', 'json_decode',
                                'camelcase', 'snakecase', 'e', 'url', 'nlocale', 'nxlocale', 'join', 'queryvar', 'striptags',
                                'l','xl','nl','nxl','cc','j','dq','now','template'
                                ]}
    ,"plugin"                   : "RE::/[a-zA-Z_][a-zA-Z0-9_]*/"

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

}, {

"mime"                      : ["text/x-contemplate"],
"mix"                       : {"mime":"application/x-contemplate","mode":"htmlembedded","start":/^<%/,"end":/^%>/},
"supportGrammarAnnotations" : true,
"supportCodeFolding"        : false,
"supportCodeMatching"       : false,
"supportAutoCompletion"     : true

});
