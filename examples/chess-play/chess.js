/**
*  chess.js
*  A simple class to play chess
*  @VERSION: 0.9.8
*
**/
!function(root, name, factory) {
"use strict";
if ('object' === typeof exports)
    // CommonJS module
    module.exports = factory();
else if ('function' === typeof define && define.amd)
    // AMD. Register as an anonymous module.
    define(function(req) {return factory();});
else
    root[name] = factory();
}('undefined' !== typeof self ? self : this, 'Chess', function(undef) {
"use strict";

var proto = 'prototype',
    stdMath = Math,
    EMPTY = 0,
    WHITE = 1,
    BLACK = 2,
    KING = 1,
    QUEEN = 2,
    BISHOP = 3,
    KNIGHT = 4,
    ROOK = 5,
    PAWN = 6,
    OPPOSITE = [EMPTY, BLACK, WHITE],
    VALUE = [10000, 1000, 100, 10, 100, 1],
    COLOR = ['NONE', 'WHITE', 'BLACK'],
    PIECE = ['NONE', 'KING', 'QUEEN', 'BISHOP', 'KNIGHT', 'ROOK', 'PAWN'],
    PIECE_SHORT = ['', 'K', 'Q', 'B', 'N', 'R', 'P'],
    CODE = {WHITE:WHITE,BLACK:BLACK,KING:KING,QUEEN:QUEEN,ROOK:ROOK,BISHOP:BISHOP,KNIGHT:KNIGHT,PAWN:PAWN,K:KING,Q:QUEEN,R:ROOK,B:BISHOP,N:KNIGHT,P:PAWN},
    XY = null, SQ = null,
    NONE = {color:EMPTY, type:EMPTY}
;

function return_true()
{
    return true;
}
function return_false()
{
    return false;
}
function is_function(f)
{
    return "function" === typeof f;
}
function shuffle(a, a0, a1)
{
    // O(n)
    if (null == a0) a0 = 0;
    if (null == a1) a1 = a.length-1;
    var N = a1-a0+1;
    while (1 < N--)
    {
        var perm = stdMath.round(N*stdMath.random()), swap = a[a0+N];
        a[a0+N] = a[a0+perm]; a[a0+perm] = swap;
    }
    return a;
}
function prep()
{
    if (XY && SQ) return;
    XY = {}; SQ = new Array(8*8);
    for (var y=0; y<8; ++y)
    {
        for (var x=0; x<8;++x)
        {
            var s = String.fromCharCode('a'.charCodeAt(0) + x)+String(y+1);
            XY[s] = {y:y, x:x}; SQ[xy2i(y, x)] = s;
        }
    }
}
function xy2i(y, x)
{
    return (y<<3) + x;
}
function i2xy(i)
{
    return {y:(i>>>3), x:(i&7)};
}
function xy2s(y, x)
{
    //return String.fromCharCode('a'.charCodeAt(0) + x)+''+String(y+1);
    return SQ[xy2i(y, x)];
}
function s2xy(s)
{
    /*var xy = s.split('');
    return {y:parseInt(xy[1])-1, x:xy[0].charCodeAt(0)-'a'.charCodeAt(0)};*/
    return XY[s];
}
function sqcol(y, x)
{
    return (y+1) & 1 ? (x & 1 ? WHITE : BLACK) : (x & 1 ? BLACK : WHITE);
}
function encode_move(move)
{
    return move && move.length ? (4 > move.length ? (xy2s(move[0],move[1])+(move[11]?PIECE_SHORT[move[11]].toLowerCase():'')) : {from:xy2s(move[0],move[1]), to:xy2s(move[2],move[3]), promotion:move[11]?PIECE_SHORT[move[11]].toLowerCase():undef}) : move;
}
function clone_piece(piece)
{
    if (!piece || (NONE === piece)) return piece;
    var cloned = {color:piece.color,type:piece.type};
    if (ROOK === piece.type) {cloned._m = piece._m;}
    if (PAWN === piece.type) {cloned._p2 = piece._p2; cloned._ep = piece._ep; cloned._mj2 = piece._mj2;}
    return cloned;
}
function clone_move(move)
{
    return move && move.length ? [clone_piece(move[0]), move[1], move[2], move[3], move[4], clone_piece(move[5]), move[6], move[7], move[8], move[9], move[10], move[11]] : move;
}
function check_and_add(board, K, color, moves, y1, x1, y, x, promotion)
{
    var move = board.move(y1, x1, y, x, true, promotion),
        king_threatened = board.threatened_at_by(K.y, K.x, OPPOSITE[color]);
    board.unmove(move);
    if (!king_threatened) moves[moves.cnt++] = [y, x];
}
function evaluate_board(board, color)
{
    /*
    Chess evaluation function: a) material balance, b) average mobility, c) average control, d) closeness to opposite king,  e) avoidance of centroids of overpopulated areas, ..
    */
    return 0; // random
}
function evaluate_move(board, move, color)
{
    var opK = board.king[COLOR[OPPOSITE[color]]],
        moved = move[0], placed = board._[move[3]][move[4]], taken = move[5],
        promotion_gain = VALUE[placed.type-1]-VALUE[moved.type-1],
        capture_gain = !taken || (NONE === taken) ? 0 : VALUE[taken.type-1],
        material_gain = promotion_gain + capture_gain,
        closeness_to_king = 0, d1, d2;
    if (!material_gain)
    {
        d1 = stdMath.abs(move[2]-opK.x)+stdMath.abs(move[1]-opK.y);
        d2 = stdMath.abs(move[4]-opK.x)+stdMath.abs(move[3]-opK.y);
        closeness_to_king = 0.1*(d2 > d1 ? (-d2) : (d2 < d1 ? (16-d2) : 0));
    }
    return material_gain + closeness_to_king;
}
function alphabeta(opts, board, color, promotion, d, alpha, beta, is_max)
{
    // Alpha-Beta MiniMax with given evaluation function algorithm
    /*
    The principle behind it is to keep track of the best value that can be achieved by each player: alpha is the minimum score the maximising player is guaranteed, beta is the maximum score the minimising player is guaranteed. The initial values are -infinity and infinity respectively.

    If at any point during the tree search the maximising player finds a move that is valued greater than beta, the search from that parent is stopped. This is because the minimising player on the previous move already has a better option, so will not select that node as a child node during its search. Equally, if the minimising player ever finds a move worth less than alpha, it will stop its search.
    */
    var moves = null, i = 0, n = 0, mov = null, move = null, score = 0, sgn = 1;
    if (opts.aborted()) return 0;
    sgn = is_max ? 1 : -1;
    if (d >= opts.depth) return opts.evaluate ? sgn*opts.evaluate(board, color) : 0;
    moves = board.all_moves_for(color, promotion);
    if (!moves.length) return -sgn*10000;
    shuffle(moves);
    n = opts.nmax ? stdMath.min(opts.nmax(d, opts.depth), moves.length) : moves.length;
    for (i=0; i<n; ++i)
    {
        mov = moves[i]; move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
        score = (opts.evaluate ? 0 : (sgn*evaluate_move(board, move, color))) + alphabeta(opts, board, color, promotion, d+1, alpha, beta, !is_max);
        board.unmove(move);
        if (opts.aborted()) return 0;
        if (is_max)
        {
            if (score >= beta) return beta;   // fail hard beta-cutoff
            if (score > alpha) alpha = score; // alpha acts like max in MiniMax
        }
        else
        {
            if (score <= alpha) return alpha; // fail hard alpha-cutoff
            if (score < beta)   beta = score; // beta acts like min in MiniMax
        }
    }
    return is_max ? alpha : beta;
}
function minimax_move(opts, board, color, promotion)
{
    // Find next move by MiniMax Tree Search with Alpha-Beta Pruning and Iterative Deepening
    var moves = shuffle(board.all_moves_for(color, promotion)),
        i = 0, n = moves.length, best_move = [],
        alpha = -Infinity, beta = Infinity,
        ret = is_function(opts.cb) ?
        function(move) {
            board.dispose();
            opts.depth = opts.depth0;
            opts.cb(move);
        } :
        function(move) {
            board.dispose();
            opts.depth = opts.depth0;
            return move;
        };
    opts.depth = stdMath.max(opts.depth||0, 1);
    if (opts.depth&1) ++opts.depth; // make it even
    opts.depth0 = opts.depth;
    //opts.hash = {};
    if (opts.deepen) opts.depth = 2;
    if (is_function(opts.cb))
    {
        // async
        opts.interval = opts.interval || 60;
        setTimeout(function next() {
            if (opts.aborted()) return ret(null);
            if (i >= n)
            {
                i = 0;
                ++opts.depth;
                if (opts.depth <= opts.depth0) best_move = [];
                else return ret(best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null);
            }
            if (i < n)
            {
                var mov = moves[i++];
                var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
                var score = (opts.evaluate ? 0 : evaluate_move(board, move, color)) + alphabeta(opts, board, OPPOSITE[color], promotion, 2, alpha, beta, false);
                board.unmove(move);
                if (score === alpha) {best_move.push(mov);}
                if (score > alpha)   {alpha = score; best_move = [mov];}
            }
            setTimeout(next, opts.interval);
        }, opts.interval);
    }
    else
    {
        // sync
        do
        {
        best_move = [];
        for (i=0; i<n; ++i)
        {
            var mov = moves[i];
            var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            var score = (opts.evaluate ? 0 : evaluate_move(board, move, color)) + alphabeta(opts, board, OPPOSITE[color], promotion, 2, alpha, beta, false);
            board.unmove(move);
            if (opts.aborted()) return ret(null);
            if (score === alpha) {best_move.push(mov);}
            if (score > alpha)   {alpha = score; best_move = [mov];}
        }
        ++opts.depth;
        } while (opts.depth <= opts.depth0);
        return ret(!opts.aborted() && best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null);
    }
}
function mcts_playout(opts, board, color, promotion, d, alpha, beta, sgn, moves)
{
    // Monte Carlo Tree Search with random playout evaluation algorithm
    if (opts.aborted()) return 0;
    if (d >= opts.depth) return 0;
    if (!moves) moves = board.all_moves_for(color, promotion);
    if (!moves.length) return -sgn*10000;
    moves = shuffle(moves);
    var mov, move, score, i, n, j, m, moves_next;
    /*if (!opts.search || (d > opts.search))
    {*/
        mov = moves[0];
        move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
        score = sgn*evaluate_move(board, move, color) + mcts_playout(opts, board, OPPOSITE[color], promotion, d+1, alpha, beta, -sgn);
        board.unmove(move);
        return score;
    /*}*/
    /*else if (d < opts.search)
    {
        for (i=0,n=moves.length; i<n; ++i)
        {
            mov = moves[i]; move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            score = sgn*evaluate_move(board, move, color) + mcts_playout(opts, board, color, promotion, d+1, alpha, beta, -sgn);
            board.unmove(move);
            if (opts.aborted()) return 0;
            if (0 < sgn)
            {
                if (score >= beta) return beta;   // fail hard beta-cutoff
                if (score > alpha) alpha = score; // alpha acts like max in MiniMax
            }
            else
            {
                if (score <= alpha) return alpha; // fail hard alpha-cutoff
                if (score < beta)   beta = score; // beta acts like min in MiniMax
            }
        }
        return 0 < sgn ? alpha : beta;
    }
    else //if (d === opts.search)
    {
        for (i=0,n=moves.length; i<n; ++i)
        {
            mov = moves[i];
            move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            moves_next = board.all_moves_for(OPPOSITE[color], promotion);
            score = sgn*evaluate_move(board, move, color);
            for (j=0,m=opts.iterations; j<m; ++j) score += mcts_playout(opts, board, color, promotion, d+1, alpha, beta, -sgn, moves_next);
            board.unmove(move);
            if (opts.aborted()) return 0;
            if (0 < sgn)
            {
                if (score >= beta) return beta;   // fail hard beta-cutoff
                if (score > alpha) alpha = score; // alpha acts like max in MiniMax
            }
            else
            {
                if (score <= alpha) return alpha; // fail hard alpha-cutoff
                if (score < beta)   beta = score; // beta acts like min in MiniMax
            }
        }
        return 0 < sgn ? alpha : beta;
    }*/
}
function mcts_move(opts, board, color, promotion)
{
    // Find next move by Monte Carlo Tree Search
    var moves = shuffle(board.all_moves_for(color, promotion)),
        i = 0, n = moves.length, best_move = [],
        alpha = -Infinity, beta = Infinity,
        ret = is_function(opts.cb) ?
        function(move) {
            board.dispose();
            opts.cb(move);
        } :
        function(move) {
            board.dispose();
            return move;
        };
    opts.iterations = stdMath.max(opts.iterations||0, 0);
    opts.depth = stdMath.max(opts.depth||0, 1);
    if (opts.depth&1) ++opts.depth; // make it even
    if (is_function(opts.cb))
    {
        // async
        opts.interval = opts.interval || 60;
        setTimeout(function next() {
            if (opts.aborted()) return ret(null);
            if (i < n)
            {
                var mov = moves[i++];
                var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
                var moves_next = board.all_moves_for(OPPOSITE[color], promotion);
                var score = evaluate_move(board, move, color);
                for (var j=0,jm=opts.iterations; j<jm; ++j) score += mcts_playout(opts, board, OPPOSITE[color], promotion, 2, alpha, beta, -1, moves_next);
                board.unmove(move);
                if (score === alpha) {best_move.push(mov);}
                if (score > alpha)   {alpha = score; best_move = [mov];}
            }
            if (i >= n) ret(best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null);
            else setTimeout(next, opts.interval);
        }, opts.interval);
    }
    else
    {
        // sync
        for (; i<n; ++i)
        {
            var mov = moves[i++];
            var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            var moves_next = board.all_moves_for(OPPOSITE[color], promotion);
            var score = evaluate_move(board, move, color);
            for (var j=0,jm=opts.iterations; j<jm; ++j) score += mcts_playout(opts, board, OPPOSITE[color], promotion, 2, alpha, beta, -1, moves_next);
            board.unmove(move);
            if (opts.aborted()) return ret(null);
            if (score === alpha) {best_move.push(mov);}
            if (score > alpha)   {alpha = score; best_move = [mov];}
        }
        return ret(!opts.aborted() && best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null);
    }
}
function Board(options)
{
    var self = this, other = null, fen = null, c, ep, p2, i, j, e, p, piece, epsq;
    if (options instanceof Board)
    {
        other = options;
        options = null;
    }
    else if ('string' === typeof options)
    {
        // DEFAULT FEN 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        fen = options.trim().split(' ');
        fen[0] = fen[0].split('/');
        epsq = '-' === fen[3] ? s2xy(fen[3]) : null;
        options = null;
    }
    else
    {
        options = options || {};
        c = false !== options.castlingAllowed;
        ep = false !== options.enPassantAllowed;
        p2 = false !== options.pawnDoubleStepAllowed;
    }
    if (other)
    {
        self.hash = Object.keys(other.hash).reduce(function(hash, k) {
            hash[k] = other.hash[k];
            return hash;
        }, {});
        self.history = other.history.map(clone_move);
        self.redo = other.redo.map(clone_move);
        self.king = {WHITE:{y:other.king.WHITE.y,x:other.king.WHITE.x,_kc:other.king.WHITE._kc,_qc:other.king.WHITE._qc,_c:other.king.WHITE._c},BLACK:{y:other.king.BLACK.y,x:other.king.BLACK.x,_kc:other.king.BLACK._kc,_qc:other.king.BLACK._qc,_c:other.king.BLACK._c}};
        self.left = {WHITE:{PAWN:other.left.WHITE.PAWN,KNIGHT:other.left.WHITE.KNIGHT,BISHOP:other.left.WHITE.BISHOP,ROOK:other.left.WHITE.ROOK,QUEEN:other.left.WHITE.QUEEN}, BLACK:{PAWN:other.left.BLACK.PAWN,KNIGHT:other.left.BLACK.KNIGHT,BISHOP:other.left.BLACK.BISHOP,ROOK:other.left.BLACK.ROOK,QUEEN:other.left.BLACK.QUEEN}};
        self.turn = other.turn;
        self.halfMoves = other.halfMoves;
        self.idleMoves = other.idleMoves;
    }
    else if (fen)
    {
        self.hash = {};
        self.history = [];
        self.redo = [];
        self.king = {WHITE:null,BLACK:null};
        self.left = {WHITE:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}, BLACK:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}};
        self.turn = 'b' === fen[1] ? BLACK : WHITE;
        self.halfMoves = (((parseInt(fen[5]) || 1) - 1) << 1) + (BLACK === self.turn ? 1 : 0);
        self.idleMoves = parseInt(fen[4]) || 0;
    }
    else
    {
        self.hash = {};
        self.history = [];
        self.redo = [];
        self.king = {WHITE:null,BLACK:null};
        self.left = {WHITE:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}, BLACK:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}};
        self.turn = WHITE;
        self.halfMoves = 0;
        self.idleMoves = 0;
    }
    self._ = new Array(8);
    for (i=8; i>=1; --i)
    {
        self._[i-1] = new Array(8);
        e = 0;
        for (j=0; j<8; ++j)
        {
            if (other)
            {
                self._[i-1][j] = clone_piece(other._[i-1][j]);
            }
            else if (fen)
            {
                if (0 < e)
                {
                    self._[i-1][j] = NONE;
                    --e;
                }
                else
                {
                    p = fen[0][8-i].charAt(0);
                    fen[0][8-i] = fen[0][8-i].slice(1);
                    if ('1' <= p && p <= '8')
                    {
                        e = parseInt(p);
                        self._[i-1][j] = NONE;
                        --e;
                    }
                    else
                    {
                        switch (p.toUpperCase())
                        {
                            case 'N':
                            piece = {color:'n'===p?BLACK:WHITE,type:KNIGHT};
                            break;
                            case 'B':
                            piece = {color:'b'===p?BLACK:WHITE,type:BISHOP};
                            break;
                            case 'R':
                            piece = {color:'r'===p?BLACK:WHITE,type:ROOK,_m:1};
                            if (BLACK === piece.color)
                            {
                                if (8===i && 7===j && -1 < fen[2].indexOf('k')) piece._m = 0;
                                else if (8===i && 0===j && -1 < fen[2].indexOf('q')) piece._m = 0;
                            }
                            else
                            {
                                if (1===i && 7===j && -1 < fen[2].indexOf('K')) piece._m = 0;
                                else if (1===i && 0===j && -1 < fen[2].indexOf('Q')) piece._m = 0;
                            }
                            break;
                            case 'Q':
                            piece = {color:'q'===p?BLACK:WHITE,type:QUEEN};
                            break;
                            case 'K':
                            piece = {color:'k'===p?BLACK:WHITE,type:KING};
                            if (BLACK === piece.color)
                            {
                                self.king.BLACK = {y:i-1,x:j,_kc:-1<fen[2].indexOf('k'),_qc:-1<fen[2].indexOf('q'),_c:0};
                            }
                            else
                            {
                                self.king.WHITE = {y:i-1,x:j,_kc:-1<fen[2].indexOf('K'),_qc:-1<fen[2].indexOf('Q'),_c:0};
                            }
                            break;
                            case 'P':
                            piece = {color:'p'===p?BLACK:WHITE,type:PAWN,_p2:true,_ep:true,_mj2:0};
                            if (epsq)
                            {
                                if (BLACK === piece.color && epsq.x === j && epsq.y === i) piece._mj2 = self.halfMoves;
                                else if (WHITE === piece.color && epsq.x === j && epsq.y === i-2) piece._mj2 = self.halfMoves;
                            }
                            break;
                            default:
                            piece = NONE;
                            break;
                        }
                        self._[i-1][j] = piece;
                    }
                }
            }
            else
            {
                self._[i-1][j] = NONE;
                if (8 === i || 1 === i)
                {
                    if (0 === j || 7 === j)
                    {
                        self._[i-1][j] = 8 === i ? {color:BLACK,type:ROOK,_m:0} : {color:WHITE,type:ROOK,_m:0};
                    }
                    else if (1 === j || 6 === j)
                    {
                        self._[i-1][j] = 8 === i ? {color:BLACK,type:KNIGHT} : {color:WHITE,type:KNIGHT};
                    }
                    else if (2 === j || 5 === j)
                    {
                        self._[i-1][j] = 8 === i ? {color:BLACK,type:BISHOP} : {color:WHITE,type:BISHOP};
                    }
                    else if (3 === j)
                    {
                        self._[i-1][j] = 8 === i ? {color:BLACK,type:QUEEN} : {color:WHITE,type:QUEEN};
                    }
                    else if (4 === j)
                    {
                        self._[i-1][j] = 8 === i ? {color:BLACK,type:KING} : {color:WHITE,type:KING};
                        if (8 === i) self.king.BLACK = {y:i-1,x:j,_kc:c,_qc:c,_c:0}; else self.king.WHITE = {y:i-1,x:j,_kc:c,_qc:c,_c:0};
                    }
                }
                else if (7 === i || 2 === i)
                {
                    self._[i-1][j] = 7 === i ? {color:BLACK,type:PAWN,_p2:p2,_ep:ep,_mj2:0} : {color:WHITE,type:PAWN,_p2:p2,_ep:ep,_mj2:0};
                }
            }
        }
    }
}
Board[proto] = {
    constructor: Board,
    dispose: function() {
        var self = this;
        self.hash = null;
        self.history = null;
        self.redo = null;
        self.king = null;
        self.left = null;
        self._ = null;
        self._pieces = null;
    },
    clone: function() {
        return new Board(this);
    },
    hash: null,
    history: null,
    redo: null,
    turn: 0,
    halfMoves: 0,
    idleMoves: 0,
    _idleMoves: 0,
    king: null,
    left: null,
    _pos: null,
    _pieces: null,
    _: null,
    xy: function(s, i) {
        return null != i ? i2xy(i) : s2xy(s);
    },
    sq: function(y, x) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8)
        {
            return {color:COLOR[sqcol(y, x)],symbol:xy2s(y, x),x:x+1,y:y+1};
        }
    },
    at: function(y, x) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8)
        {
            var piece = this._[y][x];
            if (piece.type) return {color:COLOR[piece.color],type:PIECE[piece.type],symbol:PIECE_SHORT[piece.type][BLACK===piece.color ? 'toLowerCase' : 'toUpperCase']()};
        }
    },
    at_s: function(s) {
        var xy = s2xy(s);
        return xy ? this.at(xy.y, xy.x) : null;
    },
    at_i: function(i) {
        var xy = i2xy(i);
        return xy ? this.at(xy.y, xy.x) : null;
    },
    _upd: function() {
        var board = this,
            p = {
                WHITE: {
                    pieces: [
                        {piece:board._[board.king.WHITE.y][board.king.WHITE.x],x:board.king.WHITE.x,y:board.king.WHITE.y}
                    ],
                    counts: {KING:1,QUEEN:0,ROOK:0,BISHOP:0,KNIGHT:0,PAWN:0}
                },
                BLACK: {
                    pieces: [
                        {piece:board._[board.king.BLACK.y][board.king.BLACK.x],x:board.king.BLACK.x,y:board.king.BLACK.y}
                    ],
                    counts: {KING:1,QUEEN:0,ROOK:0,BISHOP:0,KNIGHT:0,PAWN:0}
                }
            }, pi, pp, y, x,
            pos = (BLACK === board.turn ? 'b' : 'w')+(board.king.WHITE._kc ? 'K' : '')+(board.king.WHITE._qc ? 'Q' : '')+(board.king.BLACK._kc ? 'k' : '')+(board.king.BLACK._qc ? 'q' : '')+(board._epsq() ? '1' : '0')
        ;
        for (y=0; y<8; ++y)
        {
            for (x=0; x<8; ++x)
            {
                pi = board._[y][x];
                if (NONE !== pi)
                {
                    if (KING !== pi.type)
                    {
                        pp = p[COLOR[pi.color]];
                        pp.pieces.push({piece:pi,x:x,y:y});
                        ++pp.counts[PIECE[pi.type]];
                    }
                    pos += xy2s(y, x)+PIECE_SHORT[pi.type][BLACK === pi.color ? 'toLowerCase' : 'toUpperCase']();
                }
            }
        }
        board._pieces = p;
        board._pos = pos;
    },
    _epsq: function() {
        // find current en passant square on board
        var board = this, col = board.turn, y = WHITE === col ? 4 : 3, x, p, m, k, K = board.king[COLOR[col]];
        for (x=0; x<8; ++x)
        {
            p = board._[y][x];
            if (PAWN !== p.type) continue;
            if (BLACK === col)
            {
                if (x-1 >= 0 && board.halfMoves && board.halfMoves === board._[y][x-1]._mj2 && WHITE === board._[y][x-1].color && EMPTY === board._[y-1][x-1].color)
                {
                    // en passant left
                    m = board.move(y, x, y-1, x-1, true, QUEEN);
                    k = board.threatened_at_by(K.y, K.x, OPPOSITE[col]);
                    board.unmove(m);
                    if (!k) return xy2s(y-1, x-1);
                }
                if (x+1 < 8 && board.halfMoves && board.halfMoves === board._[y][x+1]._mj2 && WHITE === board._[y][x+1].color && EMPTY === board._[y-1][x+1].color)
                {
                    // en passant right
                    m = board.move(y, x, y-1, x+1, true, QUEEN);
                    k = board.threatened_at_by(K.y, K.x, OPPOSITE[col]);
                    board.unmove(m);
                    if (!k) return xy2s(y-1, x+1);
                }
            }
            else
            {
                if (x-1 >= 0 && board.halfMoves && board.halfMoves === board._[y][x-1]._mj2 && BLACK === board._[y][x-1].color && EMPTY === board._[y+1][x-1].color)
                {
                    // en passant left
                    m = board.move(y, x, y+1, x-1, true, QUEEN);
                    k = board.threatened_at_by(K.y, K.x, OPPOSITE[col]);
                    board.unmove(m);
                    if (!k) return xy2s(y+1, x-1);
                }
                if (x+1 < 8 && board.halfMoves && board.halfMoves === board._[y][x+1]._mj2 && BLACK === board._[y][x+1].color && EMPTY === board._[y+1][x+1].color)
                {
                    // en passant right
                    m = board.move(y, x, y+1, x+1, true, QUEEN);
                    k = board.threatened_at_by(K.y, K.x, OPPOSITE[col]);
                    board.unmove(m);
                    if (!k) return xy2s(y+1, x+1);
                }
            }
        }
    },
    pos: function() {
        var board = this;
        if (null == board._pos) board._upd();
        return board._pos;
    },
    pieces: function() {
        var board = this;
        if (null == board._pieces) board._upd();
        return board._pieces;
    },
    move: function(y1, x1, y2, x2, ret_move, promotion) {
        var board = this, p1 = board._[y1][x1], p2 = board._[y2][x2], ep, pp, R, y,
            K = board.king[COLOR[p1.color]], kc = K._kc, qc = K._qc, moved = p1._m;
        promotion = promotion || QUEEN;
        board._[y1][x1] = NONE;
        if (PAWN === p1.type && ((WHITE === p1.color && 7 === y2) || (BLACK === p1.color && 0 === y2)))
        {
            board._[y2][x2] = {color:p1.color,type:promotion};
            pp = promotion;
        }
        else
        {
            board._[y2][x2] = p1;
        }
        if (PAWN === p1.type && NONE === p2 && PAWN === board._[y1][x2].type && p1.color === OPPOSITE[board._[y1][x2].color])
        {
            // en passant
            ep = board._[y1][x2];
            board._[y1][x2] = NONE;
        }
        if (KING === p1.type)
        {
            K.y = y2;
            K.x = x2;
            // no castling
            K._kc = false;
            K._qc = false;
            if (y1 === y2 && 1 < stdMath.abs(x2-x1))
            {
                // castling
                y = y1;
                if (x2 > x1)
                {
                    // kingside castling
                    K._c = 1;
                    R = board._[y][7]; R._m = 1;
                    board._[y][7] = NONE;
                    board._[y][x2-1] = R;
                }
                if (x2 < x1)
                {
                    // queenside castling
                    K._c = 2;
                    R = board._[y][0]; R._m = 1;
                    board._[y][0] = NONE;
                    board._[y][x2+1] = R;
                }
            }
        }
        if (ROOK === p1.type && !moved)
        {
            // no castling
            p1._m = 1;
            if (0 === x1) K._qc = false;
            if (7 === x1) K._kc = false;
        }
        ++board.halfMoves;
        if (NONE === p2 && PAWN !== p1.type)
        {
            ++board.idleMoves;
        }
        else
        {
            board._idleMoves = board.idleMoves;
            board.idleMoves = 0;
        }
        if (PAWN === p1.type && p1._ep && 1 < stdMath.abs(y2-y1)) p1._mj2 = board.halfMoves;
        return ret_move ? [p1, y1, x1, y2, x2, p2, kc, qc, moved, promotion, ep, pp] : null;
    },
    unmove: function(move) {
        var board = this, K = board.king[COLOR[move[0].color]], R, x1, x2, y;
        board._[move[1]][move[2]] = move[0];
        board._[move[3]][move[4]] = move[5];
        if (move[10]) board._[move[1]][move[4]] = move[10]; // en passant
        K._kc = move[6];
        K._qc = move[7];
        if (PAWN === move[0].type && 1 < stdMath.abs(move[3]-move[1])) move[0]._mj2 = 0;
        if (KING === move[0].type)
        {
            K.y = move[1];
            K.x = move[2];
            if (move[3] === move[1] && 1 < stdMath.abs(move[4]-move[2]))
            {
                // castling
                K._c = 0;
                y = move[1];
                x1 = move[2];
                x2 = move[4];
                if (x2 > x1)
                {
                    // kingside castling
                    R = board._[y][x2-1]; R._m = 0;
                    board._[y][7] = R;
                    board._[y][x2-1] = NONE;
                }
                if (x2 < x1)
                {
                    // queenside castling
                    R = board._[y][x2+1]; R._m = 0;
                    board._[y][0] = R;
                    board._[y][x2+1] = NONE;
                }
            }
        }
        if (ROOK === move[0].type)
        {
            move[0]._m = move[8];
        }
        --board.halfMoves;
        if (NONE === move[5] && PAWN !== move[0].type) --board.idleMoves;
        else board.idleMoves = board._idleMoves;
    },
    threatened_at_by: function(y, x, col) {
        var board = this, i, j, p;
        if (
        (BLACK === col && y+1 < 8 && x-1 >= 0 && PAWN === board._[y+1][x-1].type && col === board._[y+1][x-1].color) ||
        (BLACK === col && y+1 < 8 && x+1 < 8 && PAWN === board._[y+1][x+1].type && col === board._[y+1][x+1].color) ||

        (WHITE === col && y-1 >= 0 && x-1 >= 0 && PAWN === board._[y-1][x-1].type && col === board._[y-1][x-1].color) ||
        (WHITE === col && y-1 >= 0 && x+1 < 8 && PAWN === board._[y-1][x+1].type && col === board._[y-1][x+1].color) ||

        (y+2 < 8 && x+1 < 8 && KNIGHT === board._[y+2][x+1].type && col === board._[y+2][x+1].color) ||
        (y+2 < 8 && x-1 >= 0 && KNIGHT === board._[y+2][x-1].type && col === board._[y+2][x-1].color) ||
        (y-2 >= 0 && x+1 < 8 && KNIGHT === board._[y-2][x+1].type && col === board._[y-2][x+1].color) ||
        (y-2 >= 0 && x-1 >= 0 && KNIGHT === board._[y-2][x-1].type && col === board._[y-2][x-1].color) ||
        (x+2 < 8 && y+1 < 8 && KNIGHT === board._[y+1][x+2].type && col === board._[y+1][x+2].color) ||
        (x+2 < 8 && y-1 >= 0 && KNIGHT === board._[y-1][x+2].type && col === board._[y-1][x+2].color) ||
        (x-2 >= 0 && y+1 < 8 && KNIGHT === board._[y+1][x-2].type && col === board._[y+1][x-2].color) ||
        (x-2 >= 0 && y-1 >= 0 && KNIGHT === board._[y-1][x-2].type && col === board._[y-1][x-2].color)
        )
        {
            return true;
        }
        for (i=1; i<8 && x+i<8; ++i)
        {
            p = board._[y][x+i];
            if ((ROOK === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && x-i>=0; ++i)
        {
            p = board._[y][x-i];
            if ((ROOK === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && y+i<8; ++i)
        {
            p = board._[y+i][x];
            if ((ROOK === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && y-i>=0; ++i)
        {
            p = board._[y-i][x];
            if ((ROOK === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && x+i<8 && y+i<8; ++i)
        {
            p = board._[y+i][x+i];
            if ((BISHOP === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && x-i>=0 && y-i>=0; ++i)
        {
            p = board._[y-i][x-i];
            if ((BISHOP === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && x-i>=0 && y+i<8; ++i)
        {
            p = board._[y+i][x-i];
            if ((BISHOP === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=1; i<8 && x+i<8 && y-i>=0; ++i)
        {
            p = board._[y-i][x+i];
            if ((BISHOP === p.type || QUEEN === p.type) && col === p.color) return true;
            if (EMPTY !== p.color) break;
        }
        for (i=-1; i<=1; ++i)
        {
            for (j=-1; j<=1; ++j)
            {
                if ((!i && !j) || y+j<0 || y+j>=8 || x+i<0 || x+i>=8) continue;
                p = board._[y+j][x+i];
                if (KING === p.type && col === p.color) return true;
            }
        }
        return false;
    },
    is_king_trapped: function(color, completely, promotion) {
        var board = this, K = board.king[COLOR[color]], y, x, i, n, m, move, king_threatened;
        if (0 < board.possible_moves_at(K.y, K.x, promotion).length) return false;
        if (false !== completely)
        {
            for (y=0; y<8; ++y)
            {
                for (x=0; x<8; ++x)
                {
                    if (color === board._[y][x].color && board._[y][x].type !== KING && 0 < board.possible_moves_at(y, x, promotion).length)
                    {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    possible_moves_at: function(y, x, promotion) {
        var board = this, piece = board._[y][x],
            moves, type, color, p, c, i, K;
        if (!piece.type) return [];
        moves = new Array(64);
        moves.cnt = 0;
        color = piece.color;
        type = piece.type;
        K = board.king[COLOR[color]];
        if (PAWN === type)
        {
            if (BLACK === color)
            {
                if (y-1 >= 0 && EMPTY === board._[y-1][x].color)
                {
                    check_and_add(board, K, color, moves, y, x, y-1, x, promotion);
                }
                if (y-1 >= 0 && x-1 >= 0 && WHITE === board._[y-1][x-1].color)
                {
                    check_and_add(board, K, color, moves, y, x, y-1, x-1, promotion);
                }
                if (y-1 >= 0 && x+1 < 8 && WHITE === board._[y-1][x+1].color)
                {
                    check_and_add(board, K, color, moves, y, x, y-1, x+1, promotion);
                }
                if (piece._p2 && 6 === y && EMPTY === board._[y-1][x].color && EMPTY === board._[y-2][x].color)
                {
                    check_and_add(board, K, color, moves, y, x, y-2, x, promotion);
                }
                if (3 === y && x-1 >= 0 && board.halfMoves && board.halfMoves === board._[y][x-1]._mj2 && WHITE === board._[y][x-1].color && EMPTY === board._[y-1][x-1].color)
                {
                    // en passant left
                    check_and_add(board, K, color, moves, y, x, y-1, x-1, promotion);
                }
                if (3 === y && x+1 < 8 && board.halfMoves && board.halfMoves === board._[y][x+1]._mj2 && WHITE === board._[y][x+1].color && EMPTY === board._[y-1][x+1].color)
                {
                    // en passant right
                    check_and_add(board, K, color, moves, y, x, y-1, x+1, promotion);
                }
            }
            else
            {
                if (y+1 < 8 && EMPTY === board._[y+1][x].color)
                {
                    check_and_add(board, K, color, moves, y, x, y+1, x, promotion);
                }
                if (y+1 < 8 && x-1 >= 0 && BLACK === board._[y+1][x-1].color)
                {
                    check_and_add(board, K, color, moves, y, x, y+1, x-1, promotion);
                }
                if (y+1 < 8 && x+1 < 8 && BLACK === board._[y+1][x+1].color)
                {
                    check_and_add(board, K, color, moves, y, x, y+1, x+1, promotion);
                }
                if (piece._p2 && 1 === y && EMPTY === board._[y+1][x].color && EMPTY === board._[y+2][x].color)
                {
                    check_and_add(board, K, color, moves, y, x, y+2, x, promotion);
                }
                if (4 === y && x-1 >= 0 && board.halfMoves && board.halfMoves === board._[y][x-1]._mj2 && BLACK === board._[y][x-1].color && EMPTY === board._[y+1][x-1].color)
                {
                    // en passant left
                    check_and_add(board, K, color, moves, y, x, y+1, x-1, promotion);
                }
                if (4 === y && x+1 < 8 && board.halfMoves && board.halfMoves === board._[y][x+1]._mj2 && BLACK === board._[y][x+1].color && EMPTY === board._[y+1][x+1].color)
                {
                    // en passant right
                    check_and_add(board, K, color, moves, y, x, y+1, x+1, promotion);
                }
            }
        }
        if (KNIGHT === type)
        {
            if (y+2 < 8 && x+1 < 8 && color !== board._[y+2][x+1].color)
            {
                check_and_add(board, K, color, moves, y, x, y+2, x+1);
            }
            if (y+2 < 8 && x-1 >= 0 && color !== board._[y+2][x-1].color)
            {
                check_and_add(board, K, color, moves, y, x, y+2, x-1);
            }
            if (y-2 >= 0 && x+1 < 8 && color !== board._[y-2][x+1].color)
            {
                check_and_add(board, K, color, moves, y, x, y-2, x+1);
            }
            if (y-2 >= 0 && x-1 >= 0 && color !== board._[y-2][x-1].color)
            {
                check_and_add(board, K, color, moves, y, x, y-2, x-1);
            }
            if (x+2 < 8 && y+1 < 8 && color !== board._[y+1][x+2].color)
            {
                check_and_add(board, K, color, moves, y, x, y+1, x+2);
            }
            if (x+2 < 8 && y-1 >= 0 && color !== board._[y-1][x+2].color)
            {
                check_and_add(board, K, color, moves, y, x, y-1, x+2);
            }
            if (x-2 >= 0 && y+1 < 8 && color !== board._[y+1][x-2].color)
            {
                check_and_add(board, K, color, moves, y, x, y+1, x-2);
            }
            if (x-2 >= 0 && y-1 >= 0 && color !== board._[y-1][x-2].color)
            {
                check_and_add(board, K, color, moves, y, x, y-1, x-2);
            }
        }
        if (BISHOP === type || QUEEN === type)
        {
            for (i=1; i<8 && y+i<8 && x+i<8; ++i)
            {
                c = board._[y+i][x+i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y+i, x+i);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && y+i<8 && x-i>=0; ++i)
            {
                c = board._[y+i][x-i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y+i, x-i);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && y-i>=0 && x+i<8; ++i)
            {
                c = board._[y-i][x+i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y-i, x+i);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && y-i>=0 && x-i>=0; ++i)
            {
                c = board._[y-i][x-i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y-i, x-i);
                if (EMPTY !== c) break;
            }
        }
        if (ROOK === type || QUEEN === type)
        {
            for (i=1; i<8 && x+i<8; ++i)
            {
                c = board._[y][x+i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y, x+i);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && x-i>=0; ++i)
            {
                c = board._[y][x-i].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y, x-i);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && y+i<8; ++i)
            {
                c = board._[y+i][x].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y+i, x);
                if (EMPTY !== c) break;
            }
            for (i=1; i<8 && y-i>=0; ++i)
            {
                c = board._[y-i][x].color;
                if (color !== c) check_and_add(board, K, color, moves, y, x, y-i, x);
                if (EMPTY !== c) break;
            }
        }
        if (KING === type)
        {
            if (y+1 < 8 && color !== board._[y+1][x].color)
            {
                check_and_add(board, K, color, moves, y, x, y+1, x);
            }
            if (y+1 < 8 && x+1 < 8 && color !== board._[y+1][x+1].color)
            {
                check_and_add(board, K, color, moves, y, x, y+1, x+1);
            }
            if (x+1 < 8 && color !== board._[y][x+1].color)
            {
                check_and_add(board, K, color, moves, y, x, y, x+1);
            }
            if (y-1 >= 0 && x+1 < 8 && color !== board._[y-1][x+1].color)
            {
                check_and_add(board, K, color, moves, y, x, y-1, x+1);
            }
            if (y-1 >= 0 && color !== board._[y-1][x].color)
            {
                check_and_add(board, K, color, moves, y, x, y-1, x);
            }
            if (y-1 >= 0 && x-1 >= 0 && color !== board._[y-1][x-1].color)
            {
                check_and_add(board, K, color, moves, y, x, y-1, x-1);
            }
            if (x-1 >= 0 && color !== board._[y][x-1].color)
            {
                check_and_add(board, K, color, moves, y, x, y, x-1);
            }
            if (y+1 < 8 && x-1 >= 0 && color !== board._[y+1][x-1].color)
            {
                check_and_add(board, K, color, moves, y, x, y+1, x-1);
            }
            if (K._kc && EMPTY === board._[y][x+1].color && EMPTY === board._[y][x+2].color && !board.threatened_at_by(y,x, OPPOSITE[color]) && !board.threatened_at_by(y,x+1, OPPOSITE[color]) && !board.threatened_at_by(y,x+2, OPPOSITE[color]))
            {
                // kingside castling
                moves[moves.cnt++] = [y,x+2];
            }
            if (K._qc && EMPTY === board._[y][x-1].color && EMPTY === board._[y][x-2].color && EMPTY === board._[y][x-3].color && !board.threatened_at_by(y,x, OPPOSITE[color]) && !board.threatened_at_by(y,x-1, OPPOSITE[color]) && !board.threatened_at_by(y,x-2, OPPOSITE[color]))
            {
                // queenside castling
                moves[moves.cnt++] = [y,x-2];
            }
        }
        // truncate if needed
        if (moves.length > moves.cnt) moves.length = moves.cnt;
        return moves;
    },
    all_moves_for: function(color, promotion, except) {
        except = except || 0;
        var board = this, moves = [], m, x, y;
        for (y=0; y<8; ++y)
        {
            for (x=0; x<8; ++x)
            {
                if (color === board._[y][x].color && board._[y][x].type !== except)
                {
                    m = board.possible_moves_at(y, x, promotion);
                    if (m.length) moves.push.apply(moves, m.map(function(m) {return [y, x, m[0], m[1]];}));
                }
            }
        }
        return moves;
    },
    fen: function() {
        // DEFAULT FEN 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
        var board = this, fen = '', castling = '', e, y, x, p;
        for (y=7; y>=0; --y)
        {
            e = 0;
            for (x=0; x<8; ++x)
            {
                p = board._[y][x];
                if (NONE === p)
                {
                    ++e;
                }
                else
                {
                    if (e > 0) {fen += String(e); e = 0;}
                    fen += p.color === WHITE ? PIECE_SHORT[p.type].toUpperCase() : PIECE_SHORT[p.type].toLowerCase();
                }
            }
            if (e > 0) fen += String(e);
            if (y > 0) fen += '/'
        }

        if (board.king.WHITE._kc) castling += 'K';
        if (board.king.WHITE._qc) castling += 'Q';
        if (board.king.BLACK._kc) castling += 'k';
        if (board.king.BLACK._qc) castling += 'q';
        if (!castling.length) castling = '-';

        return (
                fen
        + ' ' + (WHITE === board.turn ? 'w' : 'b')
        + ' ' + castling
        + ' ' + (board._epsq() || '-')
        + ' ' + String(board.idleMoves)
        + ' ' + String((board.halfMoves >>> 1) + 1)
        );
    }
};
function Chess(options)
{
    if ('string' === typeof options) options = {fen:options};
    options = options || {}; options.ai = options.ai || {};
    var self = this, board, fen, kc = null, kt = null, cmi = null, promotion = QUEEN;
    self.reset = function() {
        if (board) board.dispose();
        board = new Board('string' === typeof options.fen ? options.fen : options);
        kc = kt = cmi = null;
        return self;
    };
    self.getBoard = function() {
        return board;
    };
    self.getMoves = function() {
        return board.history.map(function(m) {
            //[p1, y1, x1, y2, x2, p2, kc, qc, moved, promotion, ep, pp]
            return xy2s(m[1], m[2]) + xy2s(m[3], m[4]) + (m[11] ? PIECE_SHORT[m[11]].toLowerCase() : '');
        });
    };
    self.getFEN = function() {
        return board.fen();
    };
    self.getPieceAt = function(pos) {
        var coords = s2xy(pos);
        return board.at(coords.y, coords.x);
    };
    self.getPossibleMovesAt = function(pos) {
        var coords = s2xy(pos);
        return coords.x >= 0 && coords.x < 8 && coords.y >= 0 && coords.y < 8 ? board.possible_moves_at(coords.y, coords.x, promotion).map(encode_move) : [];
    };
    self.getAllMovesFor = function(col) {
        return board.all_moves_for(null == col ? board.turn : ('BLACK' === col ? BLACK : WHITE), promotion).map(encode_move);
    };
    self.getRandomMove = function() {
        var moves = self.getAllMovesFor(self.whoseTurn());
        return moves.length ? moves[stdMath.round((moves.length-1)*stdMath.random())] : null;
    };
    self.getAIMove = function(algorithm, opts) {
        var boardc, move = null, cb;
        if ('minimax' === algorithm || 'alphabeta' === algorithm)
        {
            boardc = board.clone();
            opts = opts || {};
            opts.aborted = opts.aborted || return_false;
            cb = opts.cb;
            opts.cb = is_function(cb) ? function(move) {cb(encode_move(move));} : cb;
            move = minimax_move(opts, boardc, boardc.turn, CODE[String(options.ai.promotion || 'QUEEN').toUpperCase()] || QUEEN);
        }
        else if ('mcts' === algorithm)
        {
            boardc = board.clone();
            opts = opts || {};
            opts.aborted = opts.aborted || return_false;
            cb = opts.cb;
            opts.cb = is_function(cb) ? function(move) {cb(encode_move(move));} : cb;
            move = mcts_move(opts, boardc, boardc.turn, CODE[String(options.ai.promotion || 'QUEEN').toUpperCase()] || QUEEN);
        }
        return encode_move(move);
    };
    self.doMove = function(pos1, pos2, promoted) {
        var coords1 = s2xy(pos1),
            coords2 = s2xy(pos2),
            piece1 = board._[coords1.y][coords1.x],
            piece2 = board._[coords2.y][coords2.x],
            move, pos, promo = promotion;
        switch ((promoted || '').toLowerCase())
        {
            case 'queen': case 'q': promo = QUEEN; break;
            case 'rook': case 'r': promo = ROOK; break;
            case 'bishop': case 'b': promo = BISHOP; break;
            case 'knight': case 'n': promo = KNIGHT; break;
        }
        move = board.move(coords1.y, coords1.x, coords2.y, coords2.x, true, promo);
        board._pos = null;
        board._pieces = null;
        board.history.push(move);
        board.redo = [];
        board.turn = OPPOSITE[board.turn];
        if (piece2.type) ++board.left[COLOR[piece2.color]][PIECE[piece2.type]];
        pos = board.pos();
        board.hash[pos] = (board.hash[pos]||0)+1;
        kc = kt = cmi = null;
        return self;
    };
    self.undoMove = function() {
        if (board.history.length)
        {
            var move = board.history.pop(), piece1 = move[0], piece2 = move[5], pos = board.pos();
            board.redo.push(move);
            board.unmove(move);
            board._pos = null;
            board._pieces = null;
            if (piece2.type) --board.left[COLOR[piece2.color]][PIECE[piece2.type]];
            board.hash[pos] = stdMath.max(0, (board.hash[pos]||0)-1);
            board.turn = OPPOSITE[board.turn];
            kc = kt = cmi = null;
            return [xy2s(move[1],move[2]), {color:COLOR[piece1.color],type:PIECE[piece1.type]}, xy2s(move[3],move[4]), piece2.type ? {color:COLOR[piece2.color],type:PIECE[piece2.type]} : null];
        }
    };
    self.redoMove = function() {
        if (board.redo.length)
        {
            var move = board.redo.pop(), redo = board.redo, promo = promotion;
            promotion = move[9];
            self.doMove(xy2s(move[1],move[2]), xy2s(move[3],move[4]));
            board.redo = redo;
            promotion = promo;
            return [xy2s(move[1],move[2]), xy2s(move[3],move[4])];
        }
    };
    self.whoseTurn = function() {
        return BLACK === board.turn ? 'BLACK' : 'WHITE';
    };
    self.promoteTo = function(piece) {
        promotion = CODE[String(piece).toUpperCase()] || QUEEN;
        return self;
    };
    self.isCheck = function() {
        if (null == kc) kc = board.threatened_at_by(board.king[COLOR[board.turn]].y, board.king[COLOR[board.turn]].x, OPPOSITE[board.turn]);
        return kc;
    };
    self.isKingTrapped = function() {
        if (null == kt) kt = board.is_king_trapped(board.turn, true, promotion);
        return kt;
    };
    self.isCheckMate = function() {
        return self.isCheck() && self.isKingTrapped();
    };
    self.isStaleMate = function() {
        return !self.isCheck() && self.isKingTrapped();
    };
    self.idleMovesGreaterThan = function(count) {
        /*
        The fifty-move rule in chess states that a player can claim a draw if no capture has been made and no pawn has been moved in the last fifty moves (for this purpose a "move" consists of a player completing a turn followed by the opponent completing a turn). The purpose of this rule is to prevent a player with no chance of winning from obstinately continuing to play indefinitely[1] or seeking to win by tiring the opponent.
        */
        return 2*(count||1) <= board.idleMoves;
    };
    self.isCheckMateImpossible = function() {
        if (null == cmi)
        {
            cmi = false;

            var onBoard = board.pieces(), c = null;

            // if material is insufficient

            // k vs k
            if (1 === onBoard.WHITE.pieces.ength && 1 === onBoard.BLACK.pieces.length)
            {
                cmi = true;
            }

            // k vs kb or k vs kn
            else if ((1 === onBoard.WHITE.pieces.length && 2 === onBoard.BLACK.pieces.length && (BISHOP === onBoard.BLACK.pieces[1].piece.type || KNIGHT === onBoard.BLACK.pieces[1].piece.type)) || (1 === onBoard.BLACK.pieces.length && 2 === onBoard.WHITE.pieces.length && (BISHOP === onBoard.WHITE.pieces[1].piece.type || KNIGHT === onBoard.WHITE.pieces[1].piece.type)))
            {
                cmi = true;
            }

            // kb vs kb all on same color
            else if (onBoard.WHITE.pieces.length+onBoard.BLACK.pieces.length === onBoard.WHITE.counts.BISHOP+onBoard.BLACK.counts.BISHOP+2)
            {
                cmi = onBoard.WHITE.counts.BISHOP+onBoard.BLACK.counts.BISHOP === onBoard.WHITE.pieces.slice(1).concat(onBoard.BLACK.pieces.slice(1)).filter(function(b) {
                    if (null == c)
                    {
                        c = sqcol(b.y, b.x);
                        return true;
                    }
                    else
                    {
                        return c === sqcol(b.y, b.x);
                    }
                }).length;
            }
        }
        return cmi;
    };
    self.isRepetition = function(count) {
        /*
        In chess, the threefold repetition rule states that a player may claim a draw if the same position occurs three times during the game. The rule is also known as repetition of position and, in the USCF rules, as triple occurrence of position. Two positions are by definition "the same" if the same types of pieces occupy the same squares, the same player has the move, the remaining castling rights are the same and the possibility to capture en passant is the same. The repeated positions need not occur in succession. The reasoning behind the rule is that if the position occurs three times, no real progress is being made and the game could hypothetically continue indefinitely.
        */
        return (count||1) <= (board.hash[board.pos()]||0);
    };
    self.isDraw = function() {
        return self.idleMovesGreaterThan(50) || self.isStaleMate() || self.isCheckMateImpossible() || self.isRepetition(3);
    };
    self.isGameOver = function() {
        return self.isCheckMate() || self.isDraw();
    };
    self.winner = function() {
        return self.isCheckMate() ? (WHITE === board.turn ? 'BLACK' : 'WHITE') : (self.isDraw() ? 'DRAW' : '');
    };
    self.dispose = function() {
        if (board) board.dispose();
        board = null;
    };
    prep();
    self.reset();
}
Chess.Board = Board;
Chess[proto] = {
    constructor: Chess,
    dispose: null,
    reset: null,
    promoteTo: null,
    whoseTurn: null,
    getBoard: null,
    getMoves: null,
    getFEN: null,
    getPieceAt: null,
    getPossibleMovesAt: null,
    getAllMovesFor: null,
    getRandomMove: null,
    getAIMove: null,
    doMove: null,
    undoMove: null,
    isCheck: null,
    isKingTrapped: null,
    isCheckMate: null,
    isStaleMate: null,
    isCheckMateImpossible: null,
    idleMovesGreaterThan: null,
    isRepetition: null,
    isDraw: null,
    isGameOver: null,
    winner: null
};
Chess.VERSION = "0.9.8";

// export it
return Chess;
});
