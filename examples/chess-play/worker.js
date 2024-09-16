"use strict";

importScripts('./chess.js');

var T = 1000/60,
    ai = {
        algo: 'mcts',
        mcts: {depth:6, montecarlo:{startAtDepth:1, iterations:1000}},
        minimax: {depth:6, maxBreadth:function(depth, maxDepth){return depth > 10 ? 2 : (depth > 4 ? 4 : Infinity);}},
        minimaxmcts: {depth:6, montecarlo:{startAtDepth:3, iterations:100}},
        minimaxids: {depth:6, deepen:true}
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
