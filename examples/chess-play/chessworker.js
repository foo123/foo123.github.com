"use strict";

importScripts('./chess.js');

var T = 17,//1000/60,
    ai = {
        mcts: {depth:4, montecarlo:{startAtDepth:1, iterations:1000}},
        minimax: {depth:4, maxBreadth:function(depth, maxDepth) {return depth > 10 ? 2 : (depth > 4 ? 4 : Infinity);}},
        minimaxmcts: {depth:4, montecarlo:{startAtDepth:2, iterations:100}},
        minimaxids: {depth:4, ids:true}
    },
    _stopped = false
;

onmessage = function(e) {
    if (e.data.bestmove && e.data.algo && ai[e.data.algo])
    {
        var game = new Chess(e.data.fen);
        game.promoteTo('QUEEN');
        if (e.data.opts.depth) ai[e.data.algo].depth = e.data.opts.depth;
        if (e.data.opts.montecarlo) ai[e.data.algo].montecarlo = e.data.opts.montecarlo;
        ai[e.data.algo].interval = T;
        ai[e.data.algo].cb = function(move) {game.dispose(); postMessage({move:move});};
        ai[e.data.algo].stopped = function() {return _stopped;};
        _stopped = false;
        game.getAIMove(e.data.algo, ai[e.data.algo]);
    }
    else if (e.data.stop)
    {
        _stopped = true;
    }
};
