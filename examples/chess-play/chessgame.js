(function(window) {
"use strict";

function ChessGame(Chess, screen, container, container_moves, controls)
{
    var game, squares, moves, active_piece, newgame, undo, redo, flip, init;
    var show_check = function(isCheck, color) {
        squares.classList.remove('w-check');
        squares.classList.remove('b-check');
        if (isCheck) squares.classList.add('BLACK' === color ? 'b-check' : 'w-check');
        if ('BLACK' === color) squares.classList.add('b-turn');
        else squares.classList.remove('b-turn');
    };
    var clear_active = function() {
        [].forEach.call(container.querySelectorAll('.square.active'), function(s) {s.classList.remove('active');});
    };
    flip = function() {
        if (screen)
        {
            if (screen.classList.contains('flipped')) screen.classList.remove('flipped');
            else screen.classList.add('flipped');
        }
    };
    undo = function() {
        var mov = game.undoMove(), pos1, pos2, sq1, sq2, piece;
        if (mov)
        {
            clear_active();
            active_piece = null;
            if ('WHITE' === game.whoseTurn())
            {
                moves.removeChild(moves.lastChild);
            }
            else
            {
                moves.lastChild.innerText = moves.lastChild.innerText.split(' ')[0];
            }
            sq1 = el(pos1=mov[0]); sq2 = el(pos2=mov[2]);
            empty(sq1); empty(sq2); add(sq1, piece=mov[1]); add(sq2, mov[3]);
            if ('KING' === piece.type)
            {
                if ('e1' === pos1)
                {
                    if ('g1' === pos2)
                    {
                        // small castling white
                        move(el('f1'), el('h1'), game.getPieceAt('h1'));
                    }
                    else if ('c1' === pos2)
                    {
                        // large castling white
                        move(el('d1'), el('a1'), game.getPieceAt('a1'));
                    }
                }
                else if ('e8' === pos1)
                {
                    if ('g8' === pos2)
                    {
                        // small castling black
                        move(el('f8'), el('h8'), game.getPieceAt('h8'));
                    }
                    else if ('c8' === pos2)
                    {
                        // large castling black
                        move(el('d8'), el('a8'), game.getPieceAt('a8'));
                    }
                }
            }
            show_check(game.isCheck(), game.whoseTurn());
        }
    };
    redo = function() {
        var mov = game.redoMove(), m, pos1, pos2, piece;
        if (mov)
        {
            clear_active();
            active_piece = null;
            if ('BLACK' === game.whoseTurn())
            {
                moves.appendChild(m = $$('span'));
            }
            else
            {
                m = moves.lastChild;
            }
            pos1 = mov[0];
            pos2 = mov[1];
            move(el(pos1), el(pos2), piece = game.getPieceAt(pos2));
            if ('KING' === piece.type)
            {
                if ('e1' === pos1)
                {
                    if ('g1' === pos2)
                    {
                        // small castling white
                        move(el('h1'), el('f1'), game.getPieceAt('f1'));
                    }
                    else if ('c1' === pos2)
                    {
                        // large castling white
                        move(el('a1'), el('d1'), game.getPieceAt('d1'));
                    }
                }
                else if ('e8' === pos1)
                {
                    if ('g8' === pos2)
                    {
                        // small castling black
                        move(el('h8'), el('f8'), game.getPieceAt('f8'));
                    }
                    else if ('c8' === pos2)
                    {
                        // large castling black
                        move(el('a8'), el('d8'), game.getPieceAt('d8'));
                    }
                }
            }
            // Smith chess notation
            m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
            show_check(game.isCheck(), game.whoseTurn());
        }
    };
    newgame = function() {
        active_piece = null;
        if (game) game.dispose();
        make(container, container_moves, game = new Chess(), squares = $$('div'), moves = $$('div'));
        if (controls && controls.querySelector('select[data-action="promoteto"]')) game.promoteTo(controls.querySelector('select[data-action="promoteto"]').value);
    };
    init = function() {
        container.addEventListener('click', function(evt) {
            var square = evt.target.closest('.square'), pos1, pos2, piece, m;
            if (active_piece)
            {
                if (active_piece === square)
                {
                    clear_active();
                    active_piece = null;
                    return false;
                }
                if (square.classList.contains('active'))
                {
                    pos1 = active_piece.id;
                    pos2 = square.id;
                    clear_active();
                    active_piece = null;
                    if ('WHITE' === game.whoseTurn())
                    {
                        moves.appendChild(m = $$('span'));
                    }
                    else
                    {
                        m = moves.lastChild;
                    }
                    game.doMove(pos1, pos2);
                    move(el(pos1), el(pos2), piece = game.getPieceAt(pos2));
                    if ('KING' === piece.type)
                    {
                        if ('e1' === pos1)
                        {
                            if ('g1' === pos2)
                            {
                                // small castling white
                                move(el('h1'), el('f1'), game.getPieceAt('f1'));
                            }
                            else if ('c1' === pos2)
                            {
                                // large castling white
                                move(el('a1'), el('d1'), game.getPieceAt('d1'));
                            }
                        }
                        else if ('e8' === pos1)
                        {
                            if ('g8' === pos2)
                            {
                                // small castling black
                                move(el('h8'), el('f8'), game.getPieceAt('f8'));
                            }
                            else if ('c8' === pos2)
                            {
                                // large castling black
                                move(el('a8'), el('d8'), game.getPieceAt('d8'));
                            }
                        }
                    }
                    // Smith chess notation
                    m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
                    show_check(game.isCheck(), game.whoseTurn());
                    return false;
                }
                else
                {
                    clear_active();
                    active_piece = null;
                }
            }
            if (square.classList.contains('piece'))
            {
                piece = game.getPieceAt(square.id);
                if (piece && (piece.color === game.whoseTurn()))
                {
                    active_piece = square;
                    clear_active();
                    square.classList.add('active');
                    game.getPossibleMovesAt(square.id).forEach(function(m) {
                        el(m).classList.add('active');
                    });
                }
                else
                {
                    clear_active();
                    active_piece = null;
                }
            }
            else
            {
                clear_active();
                active_piece = null;
            }
            return false;
        }, false);
        if (controls)
        {
            controls.addEventListener('click', function(evt) {
                var ctrl = evt.target.closest('button'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                if ('new' === action) newgame();
                else if ('undo' === action) undo();
                else if ('redo' === action) redo();
                else if ('flip' === action) flip();
                return false;
            }, false);
            controls.addEventListener('change', function(evt) {
                var ctrl = evt.target.closest('select'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                if ('promoteto' === action) game.promoteTo(ctrl.value);
                return false;
            }, false);
        }
        if (screen) screen.classList.add('chessscreen');
        newgame();
    };
    init();
}
window.ChessGame = ChessGame;

// utils
function $$(tag)
{
    return document.createElement(tag);
}
function el(id)
{
    return document.getElementById(id);
}
function make(container, container_moves, game, squares, moves)
{
    var nt, nb, nl, nr, span, i, j, square, piece;
    container.textContent = '';
    container.classList.add('chessboard');
    squares.classList.add('chessboard-squares');
    container.appendChild(squares);
    moves.classList.add('chessboard-moves');
    if (container_moves)
    {
        container_moves.textContent = '';
        container_moves.appendChild(moves);
    }
    nt = $$('div');
    nt.classList.add('chessboard-numbers');
    nt.classList.add('top');
    container.appendChild(nt);
    nb = $$('div');
    nb.classList.add('chessboard-numbers');
    nb.classList.add('bottom');
    container.appendChild(nb);
    nl = $$('div');
    nl.classList.add('chessboard-numbers');
    nl.classList.add('left');
    container.appendChild(nl);
    nr = $$('div');
    nr.classList.add('chessboard-numbers');
    nr.classList.add('right');
    container.appendChild(nr);
    for (i=8; i>=1; --i)
    {
        span = $$('span');
        span.textContent = String(i);
        span.style.setProperty('--x', '0');
        span.style.setProperty('--y', String(8-i));
        nl.appendChild(span);

        span = $$('span');
        span.textContent = String(i);
        span.style.setProperty('--x', '0');
        span.style.setProperty('--y', String(8-i));
        nr.appendChild(span);

        span = $$('span');
        span.textContent = String.fromCharCode('a'.charCodeAt(0) + 8-i);
        span.style.setProperty('--y', '0');
        span.style.setProperty('--x', String(8-i));
        nt.appendChild(span);

        span = $$('span');
        span.textContent = String.fromCharCode('a'.charCodeAt(0) + 8-i);
        span.style.setProperty('--y', '0');
        span.style.setProperty('--x', String(8-i));
        nb.appendChild(span);

        for (j=0; j<8; ++j)
        {
            square = $$('div');
            square.id = String.fromCharCode('a'.charCodeAt(0) + j)+''+String(i);
            square.style.setProperty('--x', String(j));
            square.style.setProperty('--y', String(8-i));
            square.classList.add('square');
            square.classList.add(i & 1 ? (j & 1 ? 'white' : 'black') : (j & 1 ? 'black' : 'white'));
            piece = game.getPieceAt(square.id);
            if (piece)
            {
                square.classList.add('piece');
                square.classList.add(('BLACK' === piece.color ? 'b-' : 'w-')+piece.type.toLowerCase());
            }
            squares.appendChild(square);
        }
    }
}
function empty(square)
{
    if (square)
    {
        square.classList.remove('piece');
        square.classList.remove('w-pawn');
        square.classList.remove('b-pawn');
        square.classList.remove('w-rook');
        square.classList.remove('b-rook');
        square.classList.remove('w-knight');
        square.classList.remove('b-knight');
        square.classList.remove('w-bishop');
        square.classList.remove('b-bishop');
        square.classList.remove('w-queen');
        square.classList.remove('b-queen');
        square.classList.remove('w-king');
        square.classList.remove('b-king');
    }
}
function add(square, piece)
{
    if (square && piece)
    {
        square.classList.add(('BLACK' === piece.color ? 'b-' : 'w-')+piece.type.toLowerCase());
        square.classList.add('piece');
    }
}
function move(square1, square2, piece)
{
    empty(square1);
    empty(square2);
    add(square2, piece);
}
})(window);