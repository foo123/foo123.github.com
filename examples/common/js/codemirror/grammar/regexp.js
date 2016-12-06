// 1. JSON grammar for Regular Expressions
// to be used with CodeMirrorGrammar add-on (https://github.com/foo123/codemirror-grammar)
codemirror_define_grammar_mode("regexp", {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",

"Extra"                         : {
    
    "match"                      : "[,]+(,)"

},
    
// Style model
"Style"                         : {

     "COMMENT"                  : "comment"
    ,"SPECIAL"                  : "keyword"
    ,"BUILTIN"                  : "builtin"
    ,"STRING"                   : "string"
    ,"ATOM"                     : "atom"
    ,"CLASS"                    : "variable"
    ,"BACKREF"                  : "keyword"
    ,"<backrefn>"               : "keyword"
    ,"<backrefn>.inside"        : "builtin"
},

// Lexical model
"Lex"                           : {
     "<comment>:comment"        : ["(?#", ")"]
    ,"<escaped>"                : "RE::/\\\\(\\\\\\\\)*/"
    ,"<escapes>"                : "RE::/(\\\\\\\\)+/"
    ,"<repeater>"               : "RE::/(?:[\\+\\*\\?]|\\{\\d+(,\\d*)?\\})\\??/"
    ,"<reserved>"               : "RE::/[\\.\\^\\$\\|]/"
    ,"<class>"                  : "RE::/\\\\([dDwWsStnvr]|x[a-fA-F0-9]{2}|u\\d{2,4})/"
    ,"<start_re>"               : "/"
    ,"<end_re>"                 : "RE::#/[gmiy]{0,4}#"
    ,"<literal>"                : "RE::/(\\\\)?[^\\s]/"
    ,"<notbracket>"             : "RE::#[^\\]]#"
    ,"<text>"                   : "RE::#[^\\s/]#"
    ,"<bracket>"                : "RE::/\\[\\^?/"
    ,"<paren>"                  : "RE::/\\((\\?(?:&lt;=|&lt;!|<=|<!|=|!|:|P?(?:&lt;|<)\\w+(?:&gt;|>)))?/"
    ,"<backref>"                : "RE::/\\\\[1-9][0-9]*/"
    ,"<backrefn>:block"         : ["(?P=", ")"]
    ,"@bracket:action"          : {"push":"]"}
    ,"@paren:action"            : {"push":")"}
    ,"@close:action"            : {"pop":"$0","msg":"Brackets do not match"}
},

"Syntax"                        : {
     "<chargroup>"              : "<bracket>.BUILTIN @bracket (<escaped>& <escapes>.ATOM? (<class>.CLASS | <literal>.ATOM) | <notbracket>.ATOM)* ']'.BUILTIN @close"
    ,"<regexp>"                 : "(<escaped>& <escapes>.STRING? (<backref>.BACKREF | <class>.CLASS | <literal>.STRING) | <comment>.COMMENT | <backrefn> | <reserved>.SPECIAL | <repeater>.BUILTIN | <paren>.BUILTIN @paren | ')'.BUILTIN @close | <chargroup> | ']'.BUILTIN @close | <text>.STRING)*"
    ,"<js-regexp>"              : "<start_re> <regexp> <end_re>"
},

// what to parse and in what order
"Parser"                        : [ ["<js-regexp>"] ]

}, {

"mime"                      : "application/regexp",
"supportGrammarAnnotations" : true,
"supportCodeFolding"        : false,
"supportCodeMatching"       : true,
"supportAutoCompletion"     : false

});