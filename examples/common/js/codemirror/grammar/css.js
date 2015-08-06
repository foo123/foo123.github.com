// 1. a partial css grammar in simple JSON format
var css_grammar = {
    "RegExpID" : "RegExp::",

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
            "RegExp::/[0-9]\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            // floats
            "RegExp::/\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            "RegExp::/\\d+\\.\\d*(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            "RegExp::/\\d*\\.\\d+(rad|grad|deg|turn|vh|vw|vmin|vmax|px|rem|em|%|in|cm|mm|pc|pt|ex|s|ms)?/i",
            // hex color
            "RegExp::/#[0-9a-f]{3,6}/i"
        ],
        
        // strings
        "string" : {
            "type" : "block",
            "multiline": false,
            "tokens" : [
                //  start,           end of string (can be the matched regex group ie. 1 )
                [ "RegExp::/(['\"])/", 1 ]
            ]
        },
        
        "text" : "RegExp::/[^\\(\\)\\[\\]\\{\\}'\"]+/",
        
        // css identifier
        "identifier" : "RegExp::/[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css ids
        "id" : "RegExp::/#[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css classes
        "class" : "RegExp::/\\.[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css pseudo classes / pseudo elements
        "pseudo" : "RegExp::/::?[a-z_\\-][a-z0-9_\\-]*/i",
        
        // css properties
        "property" : "RegExp::/[a-z_\\-][a-z0-9_\\-]*/i",
                              
        // css atoms / values
        "url" : "RegExp::/url\\b/i",
        "format" : "RegExp::/format\\b/i",
        "atom" : "RegExp::/[a-z_\\-][a-z_\\-]*/i",
        
        // css @atrules
        "@import" : "RegExp::/@import\\b/i",
        "@keyframes" : "RegExp::/@[a-z\\-]*keyframes\\b/i",
        "@media" : "RegExp::/@media\\b/i",
        "@atrule" : "RegExp::/@[a-z_\\-][a-z0-9_\\-]*/i",
        
        "!important" : "RegExp::/!important\\b/i",
        
        // css html element
        "html" : "RegExp::/[a-z_\\-][a-z0-9_\\-]*/i"
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