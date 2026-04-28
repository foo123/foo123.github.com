"use strict";

importScripts('./ChessGame.js');
importScripts('./ChessSearch.js');

var stopped = false;

onmessage = function(e) {
    if (e.data.bestmove && e.data.fen && e.data.opts)
    {
        var game = new ChessGame(e.data.fen),
            opts = "string" === typeof e.data.opts ? JSON.parse(e.data.opts) : e.data.opts;
        opts.stopped = function() {return stopped;};
        opts.cb = function(move) {game.dispose(); postMessage({move:stopped ? null : move});};
        stopped = false;
        (new ChessSearch.HybridSearch(game, opts)).bestMove(game.getBoard().turn);
    }
    else if (e.data.stop)
    {
        stopped = true;
    }
};
