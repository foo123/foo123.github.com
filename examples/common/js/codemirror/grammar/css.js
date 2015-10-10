// 1. a partial css grammar in simple JSON format
var css_grammar = {
    "RegExpID" : "RE::",

    "Extra" : {
        "fold" : "brace"
    },
    
    //
    // Style model
    "Style" : {
        "comment":         "comment",
        "@atrule":         "def",
        "@import":         "def",
        "@keyframes":      "def",
        "@media":          "def",
        "identifier":      "variable",
        "!important":      "builtin",
        "atom":            "atom",
        "url":             "atom",
        "format":          "atom",
        "property":        "property",
        "html":            "tag",
        "id":              "builtin",
        "class":           "qualifier",
        "pseudo":          "string",
        "number":          "number",
        "string":          "string",
        "text":            "string"
    },

    
    //
    // Lexical model
    "Lex" : {
        
        // comments
        "comment" : {
            "type" : "comment",
            "interleave": true,
            "tokens" : [
                // block comments
                // start, end     delims
                [  "/*",  "*/" ]
            ]
        },
        
        // numbers, in order of matching
        "number" : [
            // integers
            // decimal
            "RE::/[0-9]\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            // floats
            "RE::/\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            "RE::/\\d+\\.\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            "RE::/\\d*\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            // hex color
            "RE::/#[0-9a-f]{3,6}/i"
        ],
        
        // strings
        "string" : {
            "type" : "block",
            "multiline": false,
            "tokens" : [
                //  start,           end of string (can be the matched regex group ie. 1 )
                [ "RE::/(['\"])/", 1 ]
            ]
        },
        
        "text" : "RE::/[^\\(\\)\\[\\]\\{\\}'\"]+/",
        
        // css identifier
        "identifier" : "RE::/[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css ids
        "id" : "RE::/#[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css classes
        "class" : "RE::/\\.[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css pseudo classes / pseudo elements
        "pseudo" : "RE::/::?[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css properties
        "property" : "RE::/[a-z_\\-][a-z0-9_\\-]*/i",
                              
        // css atoms / values
        "url" : "RE::/url\\b/i",
        "format" : "RE::/format\\b/i",
        "atom" : "RE::/[a-z_\\-][a-z_\\-]*/i",
        
        // css @atrules
        "@import" : "RE::/@import\\b/i",
        "@keyframes" : "RE::/@[a-z\\-]*keyframes\\b/i",
        "@media" : "RE::/@media\\b/i",
        "@atrule" : "RE::/@[a-z_\\-][a-z0-9_\\-]*/i",
        
        "!important" : "RE::/!important\\b/i",
        
        // css html element
        "html" : "RE::/[a-z_\\-][a-z0-9_\\-]*/i"
    },

    //
    // Syntax model (optional)
    "Syntax" : {
        
        "selector" : "(html|id|class|pseudo|string|','|'('|')'|'['|']'|'='|'+'|'^'|'>'|'*'|'~')+",
        
        "identifiers" : "(identifier|number|string|','|'('|')')+",
        
        "urlDeclaration" : "url '(' (string|text) ')'",
        
        "formatDeclaration" : "format '(' (string|text) ')'",
        
        "assignment" : "property ':' (urlDeclaration|formatDeclaration|string|number|atom|','|'('|')')+ !important? ';'*",
        
        "block" : "number '{' assignment* '}' | selector '{' assignment* '}'",
        
        "@importDirective" : "@import urlDeclaration ';'",
        
        "@keyframesDirective" : "@keyframes identifier '{' block* '}'",
        
        "@mediaDirective" : "@media identifiers '{' block* '}'",
        
        "@atruleDirective"  : "@atrule ('{' assignment* '}' | identifiers ';'*)",
        
        "css" : {
            "type": "ngram",
            "tokens": [
                ["@importDirective"],
                ["@keyframesDirective"],
                ["@mediaDirective"],
                ["@atruleDirective"],
                ["block"]
            ]
        }
    },

    // what to parse and in what order
    "Parser" : [ "comment", "css" ]
};