!function( require ) {
    
    require.config({
        baseUrl: /^https?:\/\/foo123\./.test( location.href ) ? "/examples/common/js" : "/foo123.github.com/examples/common/js"
        
        ,paths: {
            Storage: "Storage"
            ,utils: "utils.min"
            ,jQuery: "jquery"
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
            //,FILTERjs: "filter.min"
            //,FILTERjsPlugins: "filter.plugins.min"
            ,FILTER: "filter.bundle"
            ,MOD3: "mod3.min"
            ,Sort: "sort.min"
            ,Pattern: "pattern.min"
            ,NEngine: "NEngine.min"
            ,codemirror: "codemirror"
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
        
        ,shim: {
            Storage: { exports: 'Storage' }
            ,utils: { exports: 'U' }
            ,jQuery: { exports: 'jQuery' }
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