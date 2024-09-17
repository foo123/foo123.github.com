"use strict";

importScripts('./chess.js');

var T = 5,//1000/60,
    ai = {
        mcts: {depth:4, montecarlo:{startAtDepth:1, iterations:1000}},
        minimax: {depth:4, maxBreadth:function(depth, maxDepth) {return depth > 10 ? 2 : (depth > 4 ? 4 : Infinity);}},
        minimaxmcts: {depth:4, montecarlo:{startAtDepth:2, iterations:100}},
        minimaxids: {depth:4, ids:true},
        minimaxmctsids: {depth:4, ids:true, montecarlo:{startAtDepth:2, iterations:100}},
    },
    _stopped = false
;

onmessage = function(e) {
    if (e.data.bestmove && e.data.algo && ai[e.data.algo])
    {
        var game = new Chess(e.data.fen), algo = e.data.algo, opts = ai[algo];
        if (e.data.opts.depth) opts.depth = e.data.opts.depth;
        if (e.data.opts.montecarlo) opts.montecarlo = e.data.opts.montecarlo;
        opts.promotion = 'QUEEN';
        opts.stopped = function() {return _stopped;};
        _stopped = false;
        game.getAIMove(opts, function(move) {game.dispose(); postMessage({move:move});}, T);
    }
    else if (e.data.stop)
    {
        _stopped = true;
    }
};
