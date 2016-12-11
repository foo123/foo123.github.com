// 1. a complete json grammar in simple JSON format
ace_define_grammar_mode("json", {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                  : "RE::",

"Extra"                     : {
    
    "fold"                  : "brace"
    
},
    
// Style model
"Style"                     : {
    
     "<comment>"            : "comment"
    ,"ATOM"                 : "constant"
    ,"NUM"                  : "constant.numeric"
    ,"STRING"               : "string"
    ,"ERR"                  : "invalid"

},

// Lexical model
"Lex"                           : {
    
     "<comment>:comment"        : {"interleave":true,"tokens":[["//", null],["/*", "*/"]]}
    ,"<string>:escaped-block"   : ["\"", "\""]
    ,"<atom>"                   : {"autocomplete":true,"tokens":["true","false","null"]}
    ,"<number>"                 : [
                                // floats
                                "RE::/-?\\d*\\.\\d+(e[\\+\\-]?\\d+)?/",
                                "RE::/-?\\d+\\.\\d*/",
                                "RE::/-?\\.\\d+/",
                                // integers
                                // hex
                                "RE::/-?0x[0-9a-fA-F]+L?/",
                                // decimal
                                "RE::/-?[1-9]\\d*(e[\\+\\-]?\\d+)?L?/",
                                // just zero
                                "RE::/0(?![\\dx])/"
                                ]
    ,"<other>"                  : "RE::/\\S+/"
    
    ,"@ctx:action"              : {"context":true}
    ,"ctx@:action"            : {"context":false}
    ,"@unique:action"           : {"unique":["prop","$1"],"msg":"Duplicate object property \"$0\"","mode":"hash","in-context":true}
    ,"@invalid:error"           : "Invalid JSON"
    
},
    
// Syntax model (optional)
"Syntax"                        : {
    
     "<literal_object>"         : "'{' @ctx (<literal_property_value> (',' <literal_property_value>)*)? '}' ctx@"
    ,"<literal_array>"          : "'[' (<literal_value> (',' <literal_value>)*)? ']'"
    // grammar recursion here
    ,"<literal_value>"          : "<atom>.ATOM | <string>.STRING | <number>.NUM | <literal_array> | <literal_object>"
    ,"<literal_property_value>" : "<string>.STRING @unique ':' <literal_value>"
    ,"<json>"                   : "<literal_value> | <other>.ERR @invalid"
    
},

// what to parse and in what order
// allow comments in json ;)
"Parser"                        : [ "<comment>", [ "<json>" ] ]

}, {

"supportGrammarAnnotations" : true,
"supportCodeFolding"        : true,
"supportCodeMatching"       : true,
"supportAutoCompletion"     : false

});
