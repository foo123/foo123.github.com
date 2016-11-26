function ace_define_grammar_mode( language, grammar, options, ace, AceGrammar )
{
    "use strict";

    ace = ace || window.ace;
    AceGrammar = AceGrammar || window.AceGrammar;
    options = options || {};
    var mode = null;

    if ( ace && AceGrammar )
    {
        // 2. parse the grammar into a Ace syntax-highlight mode
        mode = AceGrammar.getMode( grammar );
        mode.supportGrammarAnnotations = options.supportGrammarAnnotations ? true : false;
        mode.supportCodeFolding = options.supportCodeFolding ? true : false;
        mode.supportCodeMatching = options.supportCodeMatching ? true : false;
        mode.supportAutoCompletion = options.supportAutoCompletion ? true : false;
        ace.grammar_mode = ace.grammar_mode || {};
        ace.grammar_mode[language] = mode;
    }
    else
    {
        window[language + "_grammar"] = grammar;
    }
}