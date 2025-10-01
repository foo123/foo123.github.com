!function(require) {
require.config({
baseUrl: /^https?:\/\/foo123\./i.test(location.href) ? "/examples/common/js" : "/foo123.github.com/examples/common/js"

,paths: {
     Storage: "Storage"
    ,touchTouch: "touchTouch.min"
    ,Snippets: "snippets"
    ,AreaSelect: "areaselect.min"
    ,AreaSortable: "areasortable.min"
    ,utils: "utils.min"
    ,Classy: "classy.min"
    ,Asynchronous: "asynchronous.min"
    ,BigInteger: "BigInteger"
    ,Abacus: "Abacus.min"
    ,XRegExp: "xregexp"
    ,Regex: "Regex.min"
    ,DateX: "DateX.min"
    ,Plot: "Plot.min"
    ,Tao: "Tao.min"
    ,ModelViewBundle: "modelview.simple.bundle"//"modelview_old.bundle"
    ,ModelViewJSX: "modelview.jsx.min"
    ,Importer: "Importer.min"
    ,HtmlWidget: "HtmlWidget.min"
    ,Contemplate: "Contemplate.min"
    ,PublishSubscribe: "PublishSubscribe.min"
    ,Dromeo: "Dromeo.min"
    ,Dialect: "Dialect.min"
    ,GrammarTemplate: "GrammarTemplate.min"
    ,Xpresion: "Xpresion.min"
    ,Unicache: "Unicache.min"
    ,Parallel: "parallel/parallel.min"
    ,HAAR: "haar-detector.min"
    ,cascades: "../cascades"
    //,FILTER: "../../../../FILTER.js/build/filter"
    ,FILTER: "filter.min"
    ,MOD3: "mod3.min"
    ,Matchy: "Matchy.min"
    ,Pattern: "pattern.min"
    ,Sort: "sort.min"
    
    ,platform: "platform.min"
    ,Benchmark: "benchmark.min"
    ,Stats: "stats.min"
    ,DatGUI: "datgui.min"
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
    ,Dancer: "dancer.min"
    ,dsp: "dsp.min"
    ,lodash: "lodash.min"
    ,jQuery: "jquery/jquery-3.7.1.slim.min"
    ,jQueryUI: "jquery/jquery-ui-1.10.4.custom.min"
    ,Tween: "Tween"
    ,Three: "three.min"
    ,ThreeX: "THREEx.WindowResize"
    ,ThreeOld: "three_old"
}
,bundles: {
    //FilterBundle: ["Classy", "Asynchronous", "FILTER", "FILTER_IO", "FILTER_CODECS", "FILTER_FILTERS", "FILTER_PLUGINS"],
    ModelViewBundle: ["ModelView", "ModelViewValidation", "ModelViewjQuery"]
}
,shim: {
     Storage: {exports: 'Storage'}
    ,touchTouch: {exports: 'touchTouch'}
    ,utils: {exports: 'U'}
    ,platform: {exports: 'platform'}
    ,Benchmark: {
        deps: ['lodash', 'platform'],
        exports: 'Benchmark'
    }
    ,Stats: {exports: 'Stats'}
    ,DatGUI: {exports: 'DAT'}
    ,BigInteger: {exports: 'bigInt'}
    ,Parallel: {exports: 'Parallel'}
    ,CodeMirror: {exports: 'CodeMirror'}
    ,Prism: {exports: 'Prism'}
    ,Dancer: {exports: 'Dancer'}
    ,jQuery: {exports: 'jQuery'}
    ,lodash: {exports: '_'}
    ,Three: {
        //deps: ['underscore', 'jquery'],
        exports: 'Three'
    }
    ,ThreeOld: {exports: 'THREE'}
    ,Tween: {exports: 'Tween'}
    ,NEngine: {exports: 'NEngine'}
}
,waitSeconds: 15
});
}(require);