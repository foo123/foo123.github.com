// 1. JSON grammar for Contemplate Engine ( https://github.com/foo123/Contemplate )
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
var contemplate_grammar = {
        
        // prefix ID for regular expressions used in the grammar
        "RegExpID" : "RegExp::",
        
        //
        // Style model
        "Style" : {
            // lang token type  -> CodeMirror (style) tag
            "comment":      "comment",
            "atom":         "atom",
            "keyword":      "keyword",
            "function":     "builtin",
            "operator":     "operator",
            "variable":     "variable",
            "property":     "variable",
            "number":       "number",
            "string":       "string"
        },

        
        //
        // Lexical model
        "Lex" : {
            
            // template variables
            "variable" : "RegExp::/\\$[_A-Za-z][_A-Za-z0-9]*/",
            
            // template variables' properties
            "property" : "RegExp::/\\.[_A-Za-z][_A-Za-z0-9]*/",

            // numbers, in order of matching
            "number" : [
                // floats
                "RegExp::/\\d*\\.\\d+(e[\\+\\-]?\\d+)?/",
                "RegExp::/\\d+\\.\\d*/",
                "RegExp::/\\.\\d+/",
                // integers
                "RegExp::/[1-9]\\d*(e[\\+\\-]?\\d+)?/",
                // just zero
                "RegExp::/0(?![\\dx])/"
            ],

            // strings
            "string" : {
                "type" : "escaped-block",
                "escape" : "\\",
                // start, end of string (can be the matched regex group ie. 1 )
                "tokens" : [ "RegExp::/(['\"])/", 1 ]
            },
            
            // operators
            "operator" : [
                "+", "-", "*", "/", "%", "<", ">", "!", "=",
                "=>", "==", "!=", "<=", ">=", "<>", "||", "&&"
            ],
            
            // atoms
            "atom" : [ "true", "false", "null" ],

            // template keywords, directives, constructs, etc..
            "keyword" : [
                "%extends", "%block", "%endblock", "%template", "%include",
                "%if", "%elseif", "%else", "%endif", 
                "%for", "%elsefor", "%endfor", "as", 
                "%set", "%unset", "%isset"
            ],
                                  
            // template functions, plugins, etc..
            "function" : [
                "RegExp::/%plugin_[a-zA-Z0-9_]+/",
                [
                    "%htmlselect", "%htmltable", "%html", "%url", "%uuid",
                    "%addslashes", "%stripslashes",
                    "%sprintf", "%concat", "%ltrim", "%rtrim", "%trim", 
                    "%lowercase", "%uppercase", "%camelcase", "%snakecase", 
                    "%count", "%haskey", "%now", "%time", "%date", 
                    "%ldate", "%locale", "%l", "%pluralise", 
                    "%dq", "%n", "%s", "%f","%q"
                ]
            ]
        },
    
        // what to parse and in what order
        "Parser" : [
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
var contemplate_mode = CodeMirrorGrammar.getMode(contemplate_grammar);

// 3. register the mode with Codemirror
CodeMirror.defineMode("contemplate", contemplate_mode);
CodeMirror.defineMIME("text/x-contemplate", "contemplate");
CodeMirror.defineMIME("application/x-contemplate", { name:"htmlembedded", scriptingModeSpec:"contemplate", scriptStartRegex:/^<%/, scriptEndRegex:/^%>/});
