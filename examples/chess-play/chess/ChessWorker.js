"use strict";

importScripts('./ChessGame.js');
importScripts('./ChessSearch.js');

var _stopped = false;

onmessage = function(e) {
    if (e.data.bestmove && e.data.fen && e.data.opts)
    {
        var game = new ChessGame(e.data.fen),
            opts = "string" === typeof e.data.opts ? JSON.parse(e.data.opts) : e.data.opts;
        opts.stopped = function() {return _stopped;};
        opts.cb = function(move) {game.dispose(); postMessage({move:move});};
        _stopped = false;
        (new ChessSearch.HybridSearch(game, opts)).bestMove(game.getBoard().turn);
    }
    else if (e.data.stop)
    {
        _stopped = true;
    }
};
