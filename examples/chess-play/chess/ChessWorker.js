"use strict";

importScripts('./ChessGame.js');
importScripts('./ChessSearch.js');

function return_false()
{
    return false;
}
function return_true()
{
    return true;
}
var opts = null;

onmessage = function(e) {
    if (e.data.bestmove && e.data.fen && e.data.opts)
    {
        if (opts) opts.stopped = return_true;
        opts = "string" === typeof e.data.opts ? JSON.parse(e.data.opts) : e.data.opts;
        (function(game, opts) {
            opts.stopped = return_false;
            opts.cb = function(move) {
                game.dispose();
                setTimeout(function() {postMessage({move:opts.stopped() ? null : move});}, 1);
            };
            (new ChessSearch.HybridSearch(game, opts)).bestMove(game.getBoard().turn);
        })(new ChessGame(e.data.fen), opts);
    }
    else if (e.data.stop)
    {
        if (opts) opts.stopped = return_true;
    }
};
