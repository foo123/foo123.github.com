!function( require ) {
    
    require.config({
        baseUrl: /^https?:\/\/foo123\./.test( location.href ) ? "/examples/common/js" : "/foo123.github.com/examples/common/js"
        
        ,paths: {
            Storage: "Storage"
            ,Snippets: "snippets"
            ,AreaSelect: "areaselect.min"
            ,utils: "utils.min"
            ,jQuery: "jquery"
            ,lodash: "lodash.min"
            ,platform: "platform.min"
            ,Benchmark: "benchmark.min"
            ,Classy: "classy.min"
            ,Asynchronous: "asynchronous.min"
            ,RegExAnalyzer: "regexanalyzer.min"
            ,RegExComposer: "regexcomposer.min"
            ,Contemplate: "Contemplate.min"
            ,ModelView: "modelview.min"
            ,Dromeo: "Dromeo.min"
            ,PublishSubscribe: "PublishSubscribe.min"
            ,HAAR: "haar-detector.min"
            //,HAARjs: "haar-detector.min"
            ,cascades: "../cascades"
            ,FILTER: "filter.min"
            ,FILTER_PLUGINS: "filter.plugins.min"
            //,FilterBundle: "filter.bundle"
            ,MOD3: "mod3.min"
            ,Sort: "sort.min"
            ,Pattern: "pattern.min"
            ,NEngine: "NEngine.min"
            //,codemirror: "codemirror"
            ,CodeMirror: "codemirror/codemirror.min"
            ,CodeMirrorGrammar: "codemirror_grammar.min"
            ,CodeMirrorGrammarBundle: "codemirror_grammar.bundle"
            ,ACE: "ace/ace"
            ,AceGrammar: "ace_grammar.min"
            ,AceGrammarBundle: "ace_grammar.bundle"
            ,Prism: "prism/prism.min"
            ,PrismGrammar: "prism_grammar.min"
            ,PrismGrammarBundle: "prism_grammar.bundle"
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
        /*,bundles: {
            FilterBundle: ["Classy", "Asynchronous", "FILTER", "FILTER_PLUGINS"]
            ,CodeMirrorGrammarBundle: ["Classy", "RegExAnalyzer", "CodeMirrorGrammar"]
            ,AceGrammarBundle: ["Classy", "RegExAnalyzer", "AceGrammar"]
            ,PrismGrammarBundle: ["Classy", "RegExAnalyzer", "PrismGrammar"]
        }*/        
        ,shim: {
            Storage: { exports: 'Storage' }
            ,AreaSelect: { exports: 'AreaSelect' }
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