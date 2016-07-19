!function( require ) {
require.config({
baseUrl: /^https?:\/\/foo123\./.test( location.href ) ? "/examples/common/js" : "/foo123.github.com/examples/common/js"

,paths: {
     Storage: "Storage"
    ,Snippets: "snippets"
    ,AreaSelect: "areaselect.min"
    ,utils: "utils.min"
    ,jQuery: "jquery"
    ,jQueryUI: "jquery-ui-1.10.4.custom.min"
    ,lodash: "lodash.min"
    ,platform: "platform.min"
    ,Benchmark: "benchmark.min"
    ,Classy: "classy.min"
    ,Asynchronous: "asynchronous.min"
    ,RT: "RT.min"
    ,RegexAnalyzer: "RegexAnalyzer.min"
    ,RegexComposer: "RegexComposer.min"
    ,RegExpX: "RegExpX.min"
    ,DateX: "DateX.min"
    ,Tao: "Tao.min"
    //,ModelView: "modelview.min"
    ,ModelViewBundle: "modelview.bundle"
    ,Importer: "Importer.min"
    ,HtmlWidget: "HtmlWidget.min"
    ,Contemplate: "Contemplate.min"
    ,PublishSubscribe: "PublishSubscribe.min"
    ,Dromeo: "Dromeo.min"
    ,Dialect: "Dialect.min"
    ,GrammarTemplate: "GrammarTemplate.min"
    ,Xpresion: "Xpresion.min"
    ,HAAR: "haar-detector.min"
    ,cascades: "../cascades"
    ,FILTER: "filter.min"
    ,FILTER_PLUGINS: "filter.plugins.min"
    ,FILTER_CODECS: "filter.codecs.min"
    //,FilterBundle: "filter.bundle",
    ,MOD3: "mod3.min"
    ,Sort: "sort.min"
    ,Pattern: "pattern.min"
    ,NEngine: "NEngine.min"
    ,CodeMirror: "codemirror/codemirror.min"
    ,CodeMirrorGrammar: "codemirror_grammar.min"
    ,ACE: "ace/ace"
    ,AceGrammar: "ace_grammar.min"
    ,Prism: "prism/prism.min"
    ,PrismGrammar: "prism_grammar.min"
    ,SyntaxHighlighter: "syntaxhighlighter/shCore"
    ,SyntaxHighlighterGrammar: "syntaxhighlighter_grammar.min"
    ,HighlightJS: "highlightjs/highlight"
    ,HighlightJSGrammar: "highlightjs_grammar.min"
    ,Stats: "stats.min"
    ,DatGUI: "datgui.min"
    ,Parallel: "parallel/parallel.min"
    ,Dancer: "dancer.min"
    ,dsp: "dsp.min"
    ,Three: "three.min"
    ,ThreeX: "THREEx.WindowResize"
    ,ThreeOld: "three_old"
    ,Tween: "Tween"
}
,bundles: {
    //FilterBundle: ["Classy", "Asynchronous", "FILTER", "FILTER_CODECS", "FILTER_PLUGINS"],
    ModelViewBundle: ["ModelView", "ModelViewValidation"]
}        
,shim: {
    Storage: { exports: 'Storage' }
    ,utils: { exports: 'U' }
    ,jQuery: { exports: 'jQuery' }
    ,lodash: { exports: '_' }
    ,platform: { exports: 'platform' }
    ,Benchmark: {
        deps: ['lodash', 'platform'],
        exports: 'Benchmark'
    }
    ,Stats: { exports: 'Stats' }
    ,DatGUI: { exports: 'DAT' }
    ,Parallel: { exports: 'Parallel' }
    ,CodeMirror: { exports: 'CodeMirror' }
    ,Prism: { exports: 'Prism' }
    ,Dancer: { exports: 'Dancer' }
    ,Stats: { exports: 'Stats' }
    ,Tween: { exports: 'Tween' }
    ,Three: {
        //deps: ['underscore', 'jquery'],
        exports: 'Three'
    }
    ,ThreeOld: { exports: 'THREE' }
    ,NEngine: { exports: 'NEngine' }
}
,waitSeconds: 15
});
}( require );