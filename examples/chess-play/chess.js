/**
*  chess.js
*  A simple class to play chess
*  @VERSION: 0.9.7
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

function is_function(f)
{
    return "function" === typeof f;
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
    return move && move.length ? (4 > move.length ? xy2s(move[0],move[1]) : {from:xy2s(move[0],move[1]), to:xy2s(move[2],move[3])}) : move;
}
function shuffle(a, a0, a1)
{
    // O(n)
    if (null == a0) a0 = 0;
    if (null == a1) a1 = a.length-1;
    var N = a1-a0+1;
    while (N--)
    {
        var perm = stdMath.round(N*stdMath.random()), swap = a[a0+N];
        a[a0+N] = a[a0+perm]; a[a0+perm] = swap;
    }
    return a;
}
function threatened_at_by(board, y, x, col)
{
    var i, j, p;
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
}
function check_and_add(board, K, color, moves, y1, x1, y, x, promotion)
{
    var move = board.move(y1, x1, y, x, true, promotion),
        king_threatened = threatened_at_by(board, K.y, K.x, OPPOSITE[color]);
    board.unmove(move);
    if (!king_threatened) moves.push([y, x]);
}
function possible_moves_at(board, y, x, promotion)
{
    var piece = board._[y][x],
        moves = [], type, color, p, c, i, K;
    if (!piece.type) return moves;
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
        if (K._kc && EMPTY === board._[y][x+1].color && EMPTY === board._[y][x+2].color && !threatened_at_by(board, y,x, OPPOSITE[color]) && !threatened_at_by(board, y,x+1, OPPOSITE[color]) && !threatened_at_by(board, y,x+2, OPPOSITE[color]))
        {
            // kingside castling
            moves.push([y,x+2]);
        }
        if (K._qc && EMPTY === board._[y][x-1].color && EMPTY === board._[y][x-2].color && EMPTY === board._[y][x-3].color && !threatened_at_by(board, y,x, OPPOSITE[color]) && !threatened_at_by(board, y,x-1, OPPOSITE[color]) && !threatened_at_by(board, y,x-2, OPPOSITE[color]))
        {
            // queenside castling
            moves.push([y,x-2]);
        }
    }
    return moves;
}
function all_moves_for(board, color, promotion, except)
{
    except = except || 0;
    var moves = [], m, x, y;
    for (y=0; y<8; ++y)
    {
        for (x=0; x<8; ++x)
        {
            if (color === board._[y][x].color && board._[y][x].type !== except)
            {
                m = possible_moves_at(board, y, x, promotion);
                if (m.length) moves.push.apply(moves, m.map(function(m) {return [y, x, m[0], m[1]];}));
            }
        }
    }
    return moves;
}
function is_king_trapped(board, color, completely, promotion)
{
    var K = board.king[COLOR[color]], y, x, i, n, m, move, king_threatened;
    if (0 < possible_moves_at(board, K.y, K.x, promotion).length) return false;
    if (false !== completely)
    {
        for (y=0; y<8; ++y)
        {
            for (x=0; x<8; ++x)
            {
                if (color === board._[y][x].color && board._[y][x].type !== KING && 0 < possible_moves_at(board, y, x, promotion).length)
                {
                    return false;
                }
            }
        }
    }
    return true;
}
function default_evaluate(board, color)
{
    return 0; // constant random
}
function my_evaluate(board, color)
{
    /*
    Chess evaluation: a) material balance, b) average mobility, c) average control, d) closeness to opposite king,  e) avoidance of centroids of overpopulated areas, ..
    */
}
function ab_minmax(evaluate, board, color, depth, promotion, alpha, beta, isMax)
{
    if (0 >= depth) return (isMax ? 1 : -1)*evaluate(board, color);
    var moves = shuffle(all_moves_for(board, color, promotion)), i, n, mov, move, score;
    if (isMax)
    {
        for (i=0,n=moves.length; i<n; ++i)
        {
            mov = moves[i]; move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            score = ab_minmax(evaluate, board, OPPOSITE[color], depth-1, promotion, alpha, beta, !isMax);
            board.unmove(move);
            if (score >= beta) return beta;   // fail hard beta-cutoff
            if (score > alpha) alpha = score; // alpha acts like max in MiniMax
        }
        return alpha;
    }
    else
    {
        for (i=0,n=moves.length; i<n; ++i)
        {
            mov = moves[i]; move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            score = ab_minmax(evaluate, board, OPPOSITE[color], depth-1, promotion, alpha, beta, !isMax);
            board.unmove(move);
            if (score <= alpha) return alpha; // fail hard alpha-cutoff
            if (score < beta)   beta = score; // beta acts like min in MiniMax
        }
        return beta;
    }
}
function ai_move(evaluate, board, color, depth, promotion, cb, interval)
{
    var alpha = -Infinity, beta = Infinity,
        moves = shuffle(all_moves_for(board, color, promotion)),
        i = 0, n = moves.length, best_move = [];
    if (is_function(cb))
    {
        // async
        interval = interval || 40;
        setTimeout(function next() {
            if (i < n)
            {
                var mov = moves[i++];
                var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
                var score = ab_minmax(evaluate, board, OPPOSITE[color], depth-1, promotion, alpha, beta, false);
                board.unmove(move);
                if (score === alpha) {best_move.push(mov);}
                if (score > alpha)   {alpha = score; best_move = [mov];}
            }
            if (i >= n) cb(best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null);
            else setTimeout(next, interval);
        }, interval);
    }
    else
    {
        // sync
        for (; i<n; ++i)
        {
            var mov = moves[i];
            var move = board.move(mov[0], mov[1], mov[2], mov[3], true, promotion);
            var score = ab_minmax(evaluate, board, OPPOSITE[color], depth-1, promotion, alpha, beta, false);
            board.unmove(move);
            if (score === alpha) {best_move.push(mov);}
            if (score > alpha)   {alpha = score; best_move = [mov];}
        }
        return best_move.length ? best_move[stdMath.round((best_move.length-1)*stdMath.random())] : null;
    }
}
function Board(options)
{
    options = options || {};
    var c = false !== options.castlingAllowed,
        ep = false !== options.enPassantAllowed,
        p2 = false !== options.pawnDoubleStepAllowed;
    var self = this;
    self.hash = {};
    self.redo = [];
    self.history = [];
    self.king = {WHITE:null,BLACK:null};
    self.left = {WHITE:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}, BLACK:{PAWN:0,KNIGHT:0,BISHOP:0,ROOK:0,QUEEN:0}};
    self.turn = WHITE;
    self.halfMoves = 0;
    self.idleMoves = 0;
    self._ = new Array(8);
    for (var i=8; i>=1; --i)
    {
        self._[i-1] = new Array(8);
        for (var j=0; j<8; ++j)
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
                    if (8 === i) self.king.BLACK = {y:i-1,x:j,_kc:c,_qc:c}; else self.king.WHITE = {y:i-1,x:j,_kc:c,_qc:c};
                }
            }
            else if (7 === i || 2 === i)
            {
                self._[i-1][j] = 7 === i ? {color:BLACK,type:PAWN,_p2:p2,_ep:ep,_mj2:0} : {color:WHITE,type:PAWN,_p2:p2,_ep:ep,_mj2:0};
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
            if (piece.type) return {color:COLOR[piece.color],type:PIECE[piece.type],symbol:PIECE_SHORT[piece.type]};
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
            pos = (BLACK === board.turn ? 'b' : 'w')+(board._[board.king.WHITE.y][board.king.WHITE.x]._kc ? 'wkc' : '')+(board._[board.king.WHITE.y][board.king.WHITE.x]._qc ? 'wqc' : '')+(board._[board.king.BLACK.y][board.king.BLACK.x]._kc ? 'bkc' : '')+(board._[board.king.BLACK.y][board.king.BLACK.x]._qc ? 'bqc' : '')
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
                    pos += xy2s(y, x)+(BLACK === pi.color ? 'b' : 'w')+PIECE_SHORT[pi.type];
                }
            }
        }
        board._pieces = p;
        board._pos = pos;
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
        var board = this, p1 = board._[y1][x1], p2 = board._[y2][x2], ep, R, y,
            K = board.king[COLOR[p1.color]], kc = K._kc, qc = K._qc, moved = p1._m;
        promotion = promotion || QUEEN;
        board._[y1][x1] = NONE;
        if (PAWN === p1.type && ((WHITE === p1.color && 7 === y2) || (BLACK === p1.color && 0 === y2)))
        {
            board._[y2][x2] = {color:p1.color,type:promotion};
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
                    R = board._[y][7]; R._m = 1;
                    board._[y][7] = NONE;
                    board._[y][x2-1] = R;
                }
                if (x2 < x1)
                {
                    // queenside castling
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
        return ret_move ? [p1, y1, x1, y2, x2, p2, kc, qc, moved, promotion, ep] : null;
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
    }
};
function Chess(options)
{
    options = options || {}; options.ai = options.ai || {};
    var self = this, board, kc = null, kt = null, cmi = null, promotion = QUEEN;
    self.reset = function() {
        if (board) board.dispose();
        board = new Board(options);
        kc = kt = null;
        return self;
    };
    self.getPieceAt = function(pos) {
        var coords = s2xy(pos);
        return board.at(coords.y, coords.x);
    };
    self.getPossibleMovesAt = function(pos) {
        var coords = s2xy(pos);
        return coords.x >= 0 && coords.x < 8 && coords.y >= 0 && coords.y < 8 ? possible_moves_at(board, coords.y, coords.x, promotion).map(encode_move) : [];
    };
    self.getAllMovesFor = function(col) {
        return all_moves_for(board, null == col ? board.turn : ('BLACK' === col ? BLACK : WHITE), promotion).map(encode_move);
    };
    self.getRandomMove = function() {
        var moves = self.getAllMovesFor(self.whoseTurn());
        return moves.length ? moves[stdMath.round(moves.length-1)*stdMath.random()] : null;
    };
    self.getAIMove = function(depth, cb, interval) {
        var move = ai_move(options.ai.evaluate || default_evaluate, board, board.turn, depth || options.ai.depth || 1, CODE[String(options.ai.promotion || 'QUEEN').toUpperCase()] || QUEEN, is_function(cb) ? function(move) {cb(encode_move(move));} : cb, interval);
        return encode_move(move);
    };
    self.doMove = function(pos1, pos2) {
        var coords1 = s2xy(pos1),
            coords2 = s2xy(pos2),
            piece1 = board._[coords1.y][coords1.x],
            piece2 = board._[coords2.y][coords2.x],
            move, pos;
        move = board.move(coords1.y, coords1.x, coords2.y, coords2.x, true, promotion);
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
        if (null == kc) kc = threatened_at_by(board, board.king[COLOR[board.turn]].y, board.king[COLOR[board.turn]].x, OPPOSITE[board.turn]);
        return kc;
    };
    self.isKingTrapped = function() {
        if (null == kt) kt = is_king_trapped(board, board.turn, true, promotion);
        return kt;
    };
    self.isCheckMate = function() {
        return self.isCheck() && self.isKingTrapped();
    };
    self.isStaleMate = function() {
        return !self.isCheck() && self.isKingTrapped();
    };
    self.idleMovesGreaterThan = function(count) {
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
        return (count||1) <= (board.hash[board.pos()]||0);
    };
    self.isDraw = function() {
        return self.idleMovesGreaterThan(50) || self.isStaleMate() || self.isCheckMateImpossible() || self.isRepetition(3);
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
    isDraw: null
};
Chess.VERSION = "0.9.7";

// export it
return Chess;
});
