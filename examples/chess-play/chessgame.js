/*
ChessGame Visual GUI
*/
(function(window) {
"use strict";

function ChessGame(Chess, container, controls, options, container_moves)
{
    var game, screen = container.parentNode, squares, moves, msg, active_piece, newgame, undo, redo, flip, init;
    var update_gui = function() {
        var isCheck = game.isCheck(), player = game.whoseTurn();
        removeClass(squares, 'w-check'); removeClass(squares, 'b-check');
        if (isCheck) addClass(squares, 'BLACK' === player ? 'b-check' : 'w-check');
        if ('BLACK' === player) addClass(squares, 'b-turn');
        else removeClass(squares, 'b-turn');
        if (msg) msg.innerText = game.isCheckMate() ? (('WHITE' === player ? 'BLACK' : 'WHITE')+' wins with checkmate! Game over.') : (game.isDraw() ? ('It is a draw! Game over.') : (isCheck ? (('WHITE' === player ? 'BLACK' : 'WHITE')+' checks! '+player+'\'s turn to play.') : (player+'\'s turn to play.')));
    };
    var clear_active = function() {
        $('.square.active', container).forEach(function(s) {removeClass(s, 'active');});
    };
    flip = function() {
        if (screen)
        {
            if (hasClass(screen, 'flipped')) removeClass(screen, 'flipped');
            else addClass(screen, 'flipped');
        }
    };
    undo = function() {
        var mov = game.undoMove(), pos1, pos2, sq1, sq2, piece;
        if (mov)
        {
            clear_active();
            active_piece = null;
            if (container_moves)
            {
                if ('WHITE' === game.whoseTurn()) moves.removeChild(moves.lastChild);
                else moves.lastChild.innerText = moves.lastChild.innerText.split(' ')[0];
            }
            sq1 = el(pos1=mov[0]); sq2 = el(pos2=mov[2]);
            empty(sq1); empty(sq2); add(sq1, piece=mov[1]); add(sq2, mov[3]);
            if ('PAWN' === piece.type)
            {
                // handle en passants
                if ('BLACK' === piece.color && '3' === pos2.charAt(1))
                {
                    add(el('a4'), game.getPieceAt('a4'));
                    add(el('b4'), game.getPieceAt('b4'));
                    add(el('c4'), game.getPieceAt('c4'));
                    add(el('d4'), game.getPieceAt('d4'));
                    add(el('e4'), game.getPieceAt('e4'));
                    add(el('f4'), game.getPieceAt('f4'));
                    add(el('g4'), game.getPieceAt('g4'));
                    add(el('h4'), game.getPieceAt('h4'));
                }
                if ('WHITE' === piece.color && '6' === pos2.charAt(1))
                {
                    add(el('a5'), game.getPieceAt('a5'));
                    add(el('b5'), game.getPieceAt('b5'));
                    add(el('c5'), game.getPieceAt('c5'));
                    add(el('d5'), game.getPieceAt('d5'));
                    add(el('e5'), game.getPieceAt('e5'));
                    add(el('f5'), game.getPieceAt('f5'));
                    add(el('g5'), game.getPieceAt('g5'));
                    add(el('h5'), game.getPieceAt('h5'));
                }
            }
            if ('KING' === piece.type)
            {
                if ('e1' === pos1)
                {
                    if ('g1' === pos2)
                    {
                        // kingside castling white
                        move(game.getPieceAt('h1'), el('f1'), el('h1'));
                    }
                    else if ('c1' === pos2)
                    {
                        // queenside castling white
                        move(game.getPieceAt('a1'), el('d1'), el('a1'));
                    }
                }
                else if ('e8' === pos1)
                {
                    if ('g8' === pos2)
                    {
                        // kingside castling black
                        move(game.getPieceAt('h8'), el('f8'), el('h8'));
                    }
                    else if ('c8' === pos2)
                    {
                        // queenside castling black
                        move(game.getPieceAt('a8'), el('d8'), el('a8'));
                    }
                }
            }
            update_gui();
        }
    };
    redo = function() {
        var mov = game.redoMove(), m, pos1, pos2, piece;
        if (mov)
        {
            clear_active();
            active_piece = null;
            if (container_moves)
            {
                if ('BLACK' === game.whoseTurn()) moves.appendChild(m = $$('span'));
                else m = moves.lastChild;
            }
            pos1 = mov[0];
            pos2 = mov[1];
            move(piece = game.getPieceAt(pos2), el(pos1), el(pos2));
            if ('PAWN' === piece.type)
            {
                // handle en passants
                if ('BLACK' === piece.color && '3' === pos2.charAt(1))
                {
                    maybe_remove(el('a4'), game.getPieceAt('a4'));
                    maybe_remove(el('b4'), game.getPieceAt('b4'));
                    maybe_remove(el('c4'), game.getPieceAt('c4'));
                    maybe_remove(el('d4'), game.getPieceAt('d4'));
                    maybe_remove(el('e4'), game.getPieceAt('e4'));
                    maybe_remove(el('f4'), game.getPieceAt('f4'));
                    maybe_remove(el('g4'), game.getPieceAt('g4'));
                    maybe_remove(el('h4'), game.getPieceAt('h4'));
                }
                if ('WHITE' === piece.color && '6' === pos2.charAt(1))
                {
                    maybe_remove(el('a5'), game.getPieceAt('a5'));
                    maybe_remove(el('b5'), game.getPieceAt('b5'));
                    maybe_remove(el('c5'), game.getPieceAt('c5'));
                    maybe_remove(el('d5'), game.getPieceAt('d5'));
                    maybe_remove(el('e5'), game.getPieceAt('e5'));
                    maybe_remove(el('f5'), game.getPieceAt('f5'));
                    maybe_remove(el('g5'), game.getPieceAt('g5'));
                    maybe_remove(el('h5'), game.getPieceAt('h5'));
                }
            }
            if ('KING' === piece.type)
            {
                if ('e1' === pos1)
                {
                    if ('g1' === pos2)
                    {
                        // kingside castling white
                        move(game.getPieceAt('f1'), el('h1'), el('f1'));
                    }
                    else if ('c1' === pos2)
                    {
                        // queenside castling white
                        move(game.getPieceAt('d1'), el('a1'), el('d1'));
                    }
                }
                else if ('e8' === pos1)
                {
                    if ('g8' === pos2)
                    {
                        // kingside castling black
                        move(game.getPieceAt('f8'), el('h8'), el('f8'));
                    }
                    else if ('c8' === pos2)
                    {
                        // queenside castling black
                        move(game.getPieceAt('d8'), el('a8'), el('d8'));
                    }
                }
            }
            if (container_moves)
            {
                // Smith chess notation
                m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
            }
            update_gui();
        }
    };
    newgame = function() {
        active_piece = null;
        if (game) game.dispose();
        var opts = {};
        if (options) $('input', options).forEach(function(i) {
            opts[i.id] = !!i.checked;
        });
        make(container, container_moves, game = new Chess(opts), squares = $$('div'), moves = (container_moves ? $$('div') : null));
        if (controls && controls.querySelector('select[data-action="promoteto"]')) game.promoteTo(controls.querySelector('select[data-action="promoteto"]').value);
        if (msg) msg.innerText = 'Game start. WHITE\'s turn to play.';
    };
    init = function() {
        addEvent(container, 'click', function(evt) {
            evt.preventDefault && evt.preventDefault();
            var square = evt.target.closest('.square'), pos1, pos2, piece, m;
            if (active_piece)
            {
                if (active_piece === square)
                {
                    clear_active();
                    active_piece = null;
                    return false;
                }
                if (hasClass(square, 'active'))
                {
                    pos1 = active_piece.id;
                    pos2 = square.id;
                    clear_active();
                    active_piece = null;
                    if (container_moves)
                    {
                        if ('WHITE' === game.whoseTurn()) moves.appendChild(m = $$('span'));
                        else m = moves.lastChild;
                    }
                    game.doMove(pos1, pos2);
                    move(piece = game.getPieceAt(pos2), el(pos1), el(pos2));
                    if ('PAWN' === piece.type)
                    {
                        // handle en passants
                        if ('BLACK' === piece.color && '3' === pos2.charAt(1))
                        {
                            maybe_remove(el('a4'), game.getPieceAt('a4'));
                            maybe_remove(el('b4'), game.getPieceAt('b4'));
                            maybe_remove(el('c4'), game.getPieceAt('c4'));
                            maybe_remove(el('d4'), game.getPieceAt('d4'));
                            maybe_remove(el('e4'), game.getPieceAt('e4'));
                            maybe_remove(el('f4'), game.getPieceAt('f4'));
                            maybe_remove(el('g4'), game.getPieceAt('g4'));
                            maybe_remove(el('h4'), game.getPieceAt('h4'));
                        }
                        if ('WHITE' === piece.color && '6' === pos2.charAt(1))
                        {
                            maybe_remove(el('a5'), game.getPieceAt('a5'));
                            maybe_remove(el('b5'), game.getPieceAt('b5'));
                            maybe_remove(el('c5'), game.getPieceAt('c5'));
                            maybe_remove(el('d5'), game.getPieceAt('d5'));
                            maybe_remove(el('e5'), game.getPieceAt('e5'));
                            maybe_remove(el('f5'), game.getPieceAt('f5'));
                            maybe_remove(el('g5'), game.getPieceAt('g5'));
                            maybe_remove(el('h5'), game.getPieceAt('h5'));
                        }
                    }
                    if ('KING' === piece.type)
                    {
                        if ('e1' === pos1)
                        {
                            if ('g1' === pos2)
                            {
                                // kingside castling white
                                move(game.getPieceAt('f1'), el('h1'), el('f1'));
                            }
                            else if ('c1' === pos2)
                            {
                                // queenside castling white
                                move(game.getPieceAt('d1'), el('a1'), el('d1'));
                            }
                        }
                        else if ('e8' === pos1)
                        {
                            if ('g8' === pos2)
                            {
                                // kingside castling black
                                move(game.getPieceAt('f8'), el('h8'), el('f8'));
                            }
                            else if ('c8' === pos2)
                            {
                                // queenside castling black
                                move(game.getPieceAt('d8'), el('a8'), el('d8'));
                            }
                        }
                    }
                    if (container_moves)
                    {
                        // Smith chess notation
                        m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
                    }
                    update_gui();
                    return false;
                }
                else
                {
                    clear_active();
                    active_piece = null;
                }
            }
            if (hasClass(square, 'piece'))
            {
                piece = game.getPieceAt(square.id);
                if (piece && (piece.color === game.whoseTurn()))
                {
                    active_piece = square;
                    clear_active();
                    addClass(square, 'active');
                    game.getPossibleMovesAt(square.id).forEach(function(m) {addClass(el(m), 'active');});
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
        }, {capture:false,passive:false});
        if (controls)
        {
            msg = controls.querySelector('.msg');
            addEvent(controls, 'click', function(evt) {
                var ctrl = evt.target.closest('button'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                evt.preventDefault && evt.preventDefault();
                if ('flip' === action) flip();
                else if ('new' === action) newgame();
                else if ('undo' === action) undo();
                else if ('redo' === action) redo();
                return false;
            }, {capture:false,passive:false});
            addEvent(controls, 'change', function(evt) {
                var ctrl = evt.target.closest('select'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                if ('promoteto' === action) game.promoteTo(ctrl.value);
            }, {capture:false,passive:true});
        }
        if (screen) addClass(screen, 'chessscreen');
        newgame();
    };
    init();
}
window.ChessGame = ChessGame;

// utils
function el(id)
{
    return document.getElementById(id);
}
function $(sel, el)
{
    return Array.prototype.slice.call((el || document).querySelectorAll(sel) || []);
}
function $$(tag)
{
    return document.createElement(tag);
}
function hasEventOptions()
{
    if (null == hasEventOptions.supported)
    {
        var passiveSupported = false, options = {};
        try {
            Object.defineProperty(options, 'passive', {
                get: function(){
                    passiveSupported = true;
                    return false;
                }
            });
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        } catch(e) {
            passiveSupported = false;
        }
        hasEventOptions.supported = passiveSupported;
    }
    return hasEventOptions.supported;
}
function addEvent(target, event, handler, options)
{
    if (target.attachEvent) target.attachEvent('on' + event, handler);
    else target.addEventListener(event, handler, hasEventOptions() ? options : ('object' === typeof(options) ? !!options.capture : !!options));
}
function removeEvent(target, event, handler, options)
{
    // if (el.removeEventListener) not working in IE11
    if (target.detachEvent) target.detachEvent('on' + event, handler);
    else target.removeEventListener(event, handler, hasEventOptions() ? options : ('object' === typeof(options) ? !!options.capture : !!options));
}
function hasClass(el, className)
{
    if (el)
    {
        return el.classList
            ? el.classList.contains(className)
            : -1 !== (' ' + el.className + ' ').indexOf(' ' + className + ' ')
        ;
    }
}
function addClass(el, className)
{
    if (el)
    {
        if (el.classList) el.classList.add(className);
        else if (!hasClass(el, className)) el.className = '' === el.className ? className : (el.className + ' ' + className);
    }
}
function removeClass(el, className)
{
    if (el)
    {
        if (el.classList) el.classList.remove(className);
        else el.className = ((' ' + el.className + ' ').replace(' ' + className + ' ', ' ')).trim();
    }
}
function make(container, container_moves, game, squares, moves)
{
    var nt, nb, nl, nr, span, i, j, square, piece;
    container.textContent = '';
    addClass(container, 'chessboard');
    addClass(squares, 'chessboard-squares');
    container.appendChild(squares);
    if (container_moves && moves)
    {
        addClass(moves, 'chessboard-moves');
        container_moves.textContent = '';
        container_moves.appendChild(moves);
    }
    nt = $$('div');
    addClass(nt, 'chessboard-numbers');
    addClass(nt, 'top');
    container.appendChild(nt);
    nb = $$('div');
    addClass(nb, 'chessboard-numbers');
    addClass(nb, 'bottom');
    container.appendChild(nb);
    nl = $$('div');
    addClass(nl, 'chessboard-numbers');
    addClass(nl, 'left');
    container.appendChild(nl);
    nr = $$('div');
    addClass(nr, 'chessboard-numbers');
    addClass(nr, 'right');
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
            addClass(square, 'square');
            addClass(square, i & 1 ? (j & 1 ? 'white' : 'black') : (j & 1 ? 'black' : 'white'));
            piece = game.getPieceAt(square.id);
            if (piece)
            {
                addClass(square, ('BLACK' === piece.color ? 'b-' : 'w-')+piece.type.toLowerCase());
                addClass(square, 'piece');
            }
            squares.appendChild(square);
        }
    }
}
function empty(square)
{
    if (square)
    {
        removeClass(square, 'piece');
        removeClass(square, 'w-pawn');
        removeClass(square, 'b-pawn');
        removeClass(square, 'w-rook');
        removeClass(square, 'b-rook');
        removeClass(square, 'w-knight');
        removeClass(square, 'b-knight');
        removeClass(square, 'w-bishop');
        removeClass(square, 'b-bishop');
        removeClass(square, 'w-queen');
        removeClass(square, 'b-queen');
        removeClass(square, 'w-king');
        removeClass(square, 'b-king');
    }
}
function add(square, piece)
{
    if (square && piece)
    {
        addClass(square, ('BLACK' === piece.color ? 'b-' : 'w-')+piece.type.toLowerCase());
        addClass(square, 'piece');
    }
}
function maybe_remove(square, piece)
{
    if (square && !piece) empty(square);
}
function move(piece, square1, square2)
{
    empty(square1);
    empty(square2);
    add(square2, piece);
}
})(window);