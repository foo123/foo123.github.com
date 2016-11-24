// 1. a complete json grammar in simple JSON format
!function( language, grammar, options ){
"use strict";

window[language + "_grammar"] = grammar;
options = options || {};
var mode = null;

if ( ("undefined" !== typeof CodeMirror) && ("undefined" !== typeof CodeMirrorGrammar) )
{
    // 2. parse the grammar into a Codemirror syntax-highlight mode
    mode = CodeMirrorGrammar.getMode( grammar );
    mode.supportGrammarAnnotations = options.supportGrammarAnnotations ? true : false;
    mode.supportCodeFolding = options.supportCodeFolding ? true : false;
    mode.supportCodeMatching = options.supportCodeMatching ? true : false;
    mode.supportAutoCompletion = options.supportAutoCompletion ? true : false;

    // 3. register the mode with Codemirror
    CodeMirror.defineMode(language, mode);
    if ( mode.supportGrammarAnnotations )
    {
        CodeMirror.registerHelper("lint", language, mode.validator);
    }
    if ( mode.supportCodeFolding )
    {
        CodeMirror.registerHelper("fold", /*language+"-mode-fold"*/mode.foldType, mode.folder);
    }
    if ( mode.supportCodeMatching )
    {
        CodeMirror.defineOption(language+"-mode-match", false, function( cm, val, old ) {
            if ( old && old != CodeMirror.Init )
            {
                cm.off( "cursorActivity", mode.matcher );
                mode.matcher.clear( cm );
            }
            if ( val )
            {
                cm.on( "cursorActivity", mode.matcher );
                mode.matcher( cm );
            }
        });
    }
    if ( mode.supportAutoCompletion )
    {
        mode.autocompleter.options = options.autocompleter || {prefixMatch:true, caseInsensitiveMatch:false, inContext:false};
        CodeMirror.commands[language+"-mode-autocomplete"] = function( cm ) {
            CodeMirror.showHint(cm, mode.autocompleter);
        };
    }
    /*if ( options.supportToggleComments )
    {
        CodeMirror.commands[language+"-mode-togglecomments"] = function( cm ) {
            cm.toggleComment( mode )
        };
    }*/
}
}("json", {
        
// prefix ID for regular expressions used in the grammar
"RegExpID"                      : "RE::",
    
"Extra"                         : {
    
    "fold"                      : "brace"

},
    
// Style model
"Style"                         : {

     "<comment>"                : "comment"
    ,"ATOM"                     : "atom"
    ,"NUM"                      : "number"
    ,"STRING"                   : "string"
    ,"ERR"                      : "error"

},

// Lexical model
"Lex"                           : {
    
     "<comment>:comment"        : {"interleave":true,"tokens":[["//", null],["/*", "*/"]]}
    ,"<string>:escaped-block"   : ["\"", "\""]
    ,"<atom>"                   : {"autocomplete":true,"tokens":["true","false","null"]}
    ,"<number>"                 : [
                                // floats
                                "RE::/\\d*\\.\\d+(e[\\+\\-]?\\d+)?/",
                                "RE::/\\d+\\.\\d*/",
                                "RE::/\\.\\d+/",
                                // integers
                                // hex
                                "RE::/0x[0-9a-fA-F]+L?/",
                                // decimal
                                "RE::/[1-9]\\d*(e[\\+\\-]?\\d+)?L?/",
                                // just zero
                                "RE::/0(?![\\dx])/"
                                ]
    ,"<other>"                  : "RE::/\\S+/"
    
    ,"@ctx@:action"             : {"context":true}
    ,"\\@ctx@:action"           : {"context":false}
    ,"@unique@:action"          : {"unique":["prop","$1"],"msg":"Duplicate object property \"$0\"","in-context":true}
    ,"@invalid@:error"          : "Invalid JSON"
    
},
    
// Syntax model (optional)
"Syntax"                        : {
    
     "<literal_object>"         : "'{' @ctx@ (<literal_property_value> (',' <literal_property_value>)*)? '}' \\@ctx@"
    ,"<literal_array>"          : "'[' (<literal_value> (',' <literal_value>)*)? ']'"
    // grammar recursion here
    ,"<literal_value>"          : "<atom>.ATOM | <string>.STRING | <number>.NUM | <literal_array> | <literal_object>"
    ,"<literal_property_value>" : "<string>.STRING @unique@ ':' <literal_value>"
    ,"<json>"                   : "<literal_value> | <other>.ERR @invalid@"
    
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
