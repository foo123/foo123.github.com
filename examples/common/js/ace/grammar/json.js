// 1. a complete json grammar in simple JSON format
var json_grammar = {
        
    // prefix ID for regular expressions used in the grammar
    "RegExpID" : "RegExp::",
    
    //
    // Style model
    "Style" : {
        // lang token type  -> Editor (style) tag
        "comment":    "comment",
        "atom":       "constant",
        "number":     "constant.numeric",
        "string":     "string"
    },

    
    //
    // Lexical model
    "Lex" : {
        
        // comments
        "comment" : {
            "type" : "comment",
            "interleave": true,
            "tokens" : [
                // line comment
                // start, end delims  (null matches end-of-line)
                [  "//",  null ],
                // block comments
                // start,  end    delims
                [  "/*",   "*/" ]
            ]
        },
        
        // numbers, in order of matching
        "number" : [
            // floats
            "RegExp::/\\d*\\.\\d+(e[\\+\\-]?\\d+)?/",
            "RegExp::/\\d+\\.\\d*/",
            "RegExp::/\\.\\d+/",
            // integers
            // hex
            "RegExp::/0x[0-9a-fA-F]+L?/",
            // octal
            "RegExp::/0o[0-7]+L?/",
            // decimal
            "RegExp::/[1-9]\\d*(e[\\+\\-]?\\d+)?L?/",
            // just zero
            "RegExp::/0(?![\\dx])/"
        ],

        // usual strings
        "string" : {
            "type" : "escaped-block",
            "escape" : "\\",
            // start, end of string (can be the matched regex group ie. 1 )
            "tokens" : [ "\"",   "\"" ]
        },
        
        // atoms
        "atom" : [ "true", "false", "null" ]
    },
    
    //
    // Syntax model (optional)
    "Syntax" : {
        
        "literalObject" : "'{' (literalPropertyValue (',' literalPropertyValue)*)? '}'",
        
        "literalArray" : "'[' (literalValue (',' literalValue)*)? ']'",
        
        // grammar recursion here
        "literalValue" : "atom | string | number | literalArray | literalObject",
        
        "literalPropertyValue" : "string ':' literalValue",
        
        "json" : {
            "type" : "ngram",
            "tokens" : ["literalValue"]
        }
    },

    // what to parse and in what order
    // allow comments in json ;)
    "Parser" : [ "comment", "json" ]
};
