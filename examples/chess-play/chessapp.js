/*
ChessApp Visual GUI
*/
(function(window) {
"use strict";

function ChessApp(args)
{
    args = args || {};
    var container = args.container, controls = args.controls, options = args.options,
        game, screen = container.parentNode, squares, moves,
        msg, active_piece, move_waiting = null, abort_move = null, sf_move = null, cw_move = null,
        play_with_computer = false, computer_plays = false,
        is_stockfish = false, is_sunfish = false, is_random = false,
        chess = {
            Chess: args.Chess,
            worker: new Worker('./chessworker.js'),
            sendCMD: function(data) {
                //console.log('send:',data);
                if (chess.worker) chess.worker.postMessage(data);
            }
        },
        stockfish = {
            engine: args.stockfishjs ? new Worker(args.stockfishjs) : null,
            elo: 1300,
            depth: 245, time: 10000,
            sendCMD: function(cmd) {
                //console.log('send stockfish:"'+cmd+'"');
                if (stockfish.engine) stockfish.engine.postMessage(cmd);
            }
        },
        sunfish = {
            engine: args.sunfishjs ? new Worker(args.sunfishjs) : null,
            depth: 245, time: 10000,
            sendCMD: function(cmd) {
                //console.log('send sunfish:"'+cmd+'"');
                if (sunfish.engine) sunfish.engine.postMessage(cmd);
            }
        },
        ai = {
            algo: 'mcts',
            mcts: {depth:4, montecarlo:{startAtDepth:1, iterations:1000}},
            minimax: {depth:4},
            minimaxmcts: {depth:4, montecarlo:{startAtDepth:4, iterations:100}},
            minimaxids: {depth:4},
            minimaxmctsids: {depth:4, montecarlo:{startAtDepth:4, iterations:100}},
        };

    if (stockfish.engine)
    {
        stockfish.engine.onmessage = function(evt) {
            var line = evt.data;
            if ((typeof line) !== "string")
            {
                console.log("Got line ("+(typeof line)+"):", line);
            }
            else
            {
                //console.log('receive stockfish:"'+line+'"');
                var match = null;
                if (sf_move && (match = line.match(/^bestmove\s+([a-h][1-8])([a-h][1-8])([qrbn])?/)))
                {
                    sf_move({from:match[1], to:match[2], promotion:match[3]});
                }
            }
        };
        console.log('stockfish.engine running');
    }
    if (sunfish.engine)
    {
        sunfish.engine.onmessage = function(evt) {
            var line = evt.data;
            if ((typeof line) !== "string")
            {
                console.log("Got line ("+(typeof line)+"):", line);
            }
            else
            {
                //console.log('receive sunfish:"'+line+'"');
                var match = null;
                if (sf_move && (match = line.match(/^bestmove\s+([a-h][1-8])([a-h][1-8])([qrbn])?/)))
                {
                    sf_move({from:match[1], to:match[2], promotion:match[3]});
                }
            }
        };
        console.log('sunfish.engine running');
    }
    if (chess.worker)
    {
        chess.worker.onmessage = function(evt) {
            //console.log('receive:',evt.data);
            if (cw_move && evt.data /*&& evt.data.move*/)
            {
                cw_move(evt.data.move);
            }
        };
        console.log('chess.worker running');
    }

    function update_gui()
    {
        var isCheck = game.isCheck(), isCheckMate = game.isCheckMate(),
            isDraw = game.isDraw(), isGameOver = isCheckMate || isDraw,
            player = game.whoseTurn(),
            playwith = play_with_computer ? controls.querySelector('select[data-action="playwith"]').value : 'human-human';
        removeClass(squares, 'w-check'); removeClass(squares, 'b-check');
        if (isCheck) addClass(squares, 'BLACK' === player ? 'b-check' : 'w-check');
        if ('BLACK' === player) addClass(container, 'b-turn');
        else removeClass(container, 'b-turn');
        computer_plays = play_with_computer ? (isGameOver ? false : (('BLACK' === player && -1 < playwith.indexOf('human-')) || ('WHITE' === player && -1 < playwith.indexOf('-human')))) : false;
        if (computer_plays) addClass(el('hourglass'), 'spinning');
        else if (play_with_computer) removeClass(el('hourglass'), 'spinning');
        if (msg) msg.innerText = (isCheckMate ? (('WHITE' === player ? 'BLACK' : 'WHITE')+' wins with checkmate! Game over.') : (isDraw ? ('It is a draw! Game over.') : (isCheck ? (('WHITE' === player ? 'BLACK' : 'WHITE')+' checks! '+player+'\'s turn to play.') : (player+'\'s turn to play.'))));
    }

    function clear_active()
    {
        $('.square.active', container).forEach(function(s) {removeClass(s, 'active');});
    }

    function flip()
    {
        if (screen)
        {
            if (hasClass(screen, 'flipped')) removeClass(screen, 'flipped');
            else addClass(screen, 'flipped');
        }
    }

    function abort_move_in_progress()
    {
        if (abort_move)
        {
            if (computer_plays) removeClass(el('hourglass'), 'spinning');
            abort_move(true);
        }
        abort_move = null;
        sf_move = cw_move = null;
        if (computer_plays)
        {
            if (is_stockfish) stockfish.sendCMD('stop');
            else if (is_sunfish) sunfish.sendCMD('stop');
            else chess.sendCMD({stop:true});
        }
        if (move_waiting)
        {
            clearTimeout(move_waiting);
            move_waiting = null;
        }
    }

    function sfish_move(then)
    {
        sf_move = function(move) {
            sf_move = null;
            if (then) then(move);
        };
        if (is_sunfish)
        {
            sunfish.sendCMD('position startpos moves ' + game.getMovesUpToNow().join(' '));
            sunfish.sendCMD('go ' + (sunfish.depth ? ('depth ' + String(sunfish.depth)) : '') + (sunfish.time ? ('wtime ' + String(sunfish.time) + ' btime ' + String(sunfish.time)) : ''));
        }
        else
        {
            stockfish.sendCMD('position startpos moves ' + game.getMovesUpToNow().join(' '));
            stockfish.sendCMD('go ' + (stockfish.depth ? ('depth ' + String(stockfish.depth)) : '') + (stockfish.time ? ('wtime ' + String(stockfish.time) + ' btime ' + String(stockfish.time)) : ''));
        }
    }

    function chess_move(then)
    {
        cw_move = function(move) {
            cw_move = null;
            if (then) then(move);
        };
        chess.sendCMD({bestmove:true, fen:game.getFEN(), algo:ai.algo, opts:ai[ai.algo]});
    }

    function machine_move()
    {
        if (computer_plays)
        {
            addClass(el('hourglass'), 'spinning');
            if (is_random)
            {
                setTimeout(function() {
                    var computer_move = game.getRandomMove();
                    if (computer_plays && computer_move)
                    {
                        domove(computer_move.from, computer_move.to, computer_move.promotion);
                    }
                }, 10);
            }
            else if (is_stockfish || is_sunfish)
            {
                setTimeout(function() {
                    sfish_move(function(computer_move) {
                        if (computer_plays && computer_move)
                        {
                            domove(computer_move.from, computer_move.to, computer_move.promotion);
                        }
                        else
                        {
                            console.log('ignored move', computer_move);
                        }
                    });
                }, 10);
            }
            else
            {
                setTimeout(function() {
                    chess_move(function(computer_move) {
                        if (computer_plays && computer_move)
                        {
                            domove(computer_move.from, computer_move.to, computer_move.promotion);
                        }
                        else
                        {
                            console.log('ignored move', computer_move);
                        }
                    });
                    /*ai[ai.algo].stopped = abort_move = do_abort();
                    game.getAIMove(ai[ai.algo], function(computer_move) {
                        if (computer_plays && computer_move)
                        {
                            domove(computer_move.from, computer_move.to, computer_move.promotion);
                        }
                        else
                        {
                            console.log('ignored move', computer_move);
                        }
                    }, 33/*1000/30* /);*/
                }, 10);
            }
        }
    }

    function domove(pos1, pos2, promoted)
    {
        var piece;
        clear_active();
        active_piece = null;
        if (args.moves)
        {
            if ('WHITE' === game.whoseTurn()) moves.appendChild(m = $$('span'));
            else m = moves.lastChild;
        }
        game.doMove(pos1, pos2, promoted);
        move(piece = game.getPieceAt(pos2), el(pos1), el(pos2));
        if ('PAWN' === piece.type)
        {
            // handle en passants
            if ('BLACK' === piece.color && '3' === pos2.charAt(1))
            {
                maybe_remove(el(pos2.charAt(0)+'4'), game.getPieceAt(pos2.charAt(0)+'4'));
            }
            if ('WHITE' === piece.color && '6' === pos2.charAt(1))
            {
                maybe_remove(el(pos2.charAt(0)+'5'), game.getPieceAt(pos2.charAt(0)+'5'));
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
        if (args.moves)
        {
            // Smith chess notation
            m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
        }
        update_gui();
    }

    function undo()
    {
        var mov = game.undoMove(), pos1, pos2, sq1, sq2, piece;
        if (mov)
        {
            abort_move_in_progress();
            if (is_stockfish)
            {
                stockfish.sendCMD('ucinewgame');
                stockfish.sendCMD('isready');
            }
            else if (is_sunfish)
            {
                sunfish.sendCMD('ucinewgame');
                sunfish.sendCMD('isready');
            }
            clear_active();
            active_piece = null;
            if (args.moves)
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
                    add(el(pos2.charAt(0)+'4'), game.getPieceAt(pos2.charAt(0)+'4'));
                }
                if ('WHITE' === piece.color && '6' === pos2.charAt(1))
                {
                    add(el(pos2.charAt(0)+'5'), game.getPieceAt(pos2.charAt(0)+'5'));
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
            clearTimeout(move_waiting);
            move_waiting = setTimeout(machine_move, 1500);
        }
    }

    function redo()
    {
        var mov = game.redoMove(), m, pos1, pos2, piece;
        if (mov)
        {
            abort_move_in_progress();
            if (is_stockfish)
            {
                stockfish.sendCMD('ucinewgame');
                stockfish.sendCMD('isready');
            }
            else if (is_sunfish)
            {
                sunfish.sendCMD('ucinewgame');
                sunfish.sendCMD('isready');
            }
            clear_active();
            active_piece = null;
            if (args.moves)
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
                    maybe_remove(el(pos2.charAt(0)+'4'), game.getPieceAt(pos2.charAt(0)+'4'));
                }
                if ('WHITE' === piece.color && '6' === pos2.charAt(1))
                {
                    maybe_remove(el(pos2.charAt(0)+'5'), game.getPieceAt(pos2.charAt(0)+'5'));
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
            if (args.moves)
            {
                // Smith chess notation
                m.innerText += (m.innerText.length ? ' ' : '') + (pos1+pos2).toLowerCase() + (game.isCheckMate() ? '#' : (game.isCheck() ? '+' : ''));
            }
            update_gui();
            clearTimeout(move_waiting);
            move_waiting = setTimeout(machine_move, 1500);
        }
    }

    function newgame()
    {
        active_piece = null;
        abort_move_in_progress();
        if (game) game.dispose();
        removeClass(container, 'b-turn');
        removeClass(container, 'human-human');
        removeClass(container, 'human-computer');
        removeClass(container, 'computer-human');
        var playwith = (controls  ? (controls.querySelector('select[data-action="playwith"]')||{}).value : null) || 'human-human',
            elo = controls ? parseInt(controls.querySelector('input[data-action="elo"]').value) : 1300,
            depth = controls ? parseInt(controls.querySelector('input[data-action="depth"]').value) : 4,
            opts = {};
        play_with_computer = playwith !== 'human-human';
        stockfish.elo = elo;
        //sunfish.depth = stockfish.depth = depth;
        ai.minimaxmctsids.depth = ai.minimaxmcts.depth = ai.minimaxids.depth = ai.minimax.depth = ai.mcts.depth = depth;
        //ai.minimaxmctsids.montecarlo.startAtDepth = ai.minimaxmcts.montecarlo.startAtDepth = depth < 6 ? Math.round(depth/2) : 3;
        //ai.minimaxmctsids.montecarlo.iterations = ai.minimaxmcts.montecarlo.iterations = Math.min(Math.abs(depth-ai.minimaxmcts.montecarlo.startAtDepth)*10, 500);
        ai.mcts.montecarlo.iterations = 1000;
        ai.minimaxmctsids.montecarlo.startAtDepth = ai.minimaxmcts.montecarlo.startAtDepth = depth+1;
        ai.minimaxmctsids.depth = ai.minimaxmcts.depth = depth+5;
        ai.minimaxmctsids.montecarlo.iterations = ai.minimaxmcts.montecarlo.iterations = 600;
        computer_plays = play_with_computer && (-1 < playwith.indexOf('-human'));
        is_random = play_with_computer && (-1 < playwith.indexOf('random'));
        is_stockfish = play_with_computer && (-1 < playwith.indexOf('stockfish'));
        is_sunfish = play_with_computer && (-1 < playwith.indexOf('sunfish'));
        if (!play_with_computer || is_random || is_stockfish || is_sunfish) ai.algo = 'mcts';
        else ai.algo = playwith.replaceAll('human', '').replaceAll('random', '').replaceAll('-', '');
        console.log(playwith, ai.algo);
        if (options) $('input', options).forEach(function(i) {
            if (play_with_computer) i.checked = true;
            opts[i.id] = !!i.checked;
        });
        make(container, args.moves, game = new args.Chess(opts), squares = $$('div'), moves = (args.moves ? $$('div') : null));
        if (controls && controls.querySelector('select[data-action="promoteto"]')) game.promoteTo(controls.querySelector('select[data-action="promoteto"]').value);
        if (msg) msg.innerText = 'Game start. WHITE\'s turn to play.';
        if (play_with_computer)
        {
            removeClass(el('hourglass'), 'hide');
            addClass(el('hourglass'), 'show');
            addClass(container, computer_plays ? 'computer-human' : 'human-computer');
            if (is_stockfish)
            {
                stockfish.sendCMD('uci');
                //stockfish.sendCMD('setoption name Skill Level value ' + stockfish.skill);
                stockfish.sendCMD('setoption name UCI_LimitStrength value true');
                stockfish.sendCMD('setoption name UCI_Elo value ' + String(stockfish.elo));
                stockfish.sendCMD('ucinewgame');
                stockfish.sendCMD('isready');
            }
            else if (is_sunfish)
            {
                sunfish.sendCMD('uci');
                sunfish.sendCMD('ucinewgame');
                sunfish.sendCMD('isready');
            }
            machine_move();
        }
        else
        {
            removeClass(el('hourglass'), 'show');
            addClass(el('hourglass'), 'hide');
            addClass(container, 'human-human');
        }
    }

    function inputs(playwith)
    {
        if ('human-human' === playwith || -1 < playwith.indexOf('random'))
        {
            addClass(removeClass(controls.querySelector('#elo-ctrl'), 'show'), 'hide');
            addClass(removeClass(controls.querySelector('#depth-ctrl'), 'show'), 'hide');
        }
        else if (-1 < playwith.indexOf('stockfish'))
        {
            addClass(removeClass(controls.querySelector('#elo-ctrl'), 'hide'), 'show');
            addClass(removeClass(controls.querySelector('#depth-ctrl'), 'show'), 'hide');
        }
        else if (-1 < playwith.indexOf('sunfish'))
        {
            addClass(removeClass(controls.querySelector('#elo-ctrl'), 'show'), 'hide');
            addClass(removeClass(controls.querySelector('#depth-ctrl'), 'show'), 'hide');
        }
        else
        {
            addClass(removeClass(controls.querySelector('#elo-ctrl'), 'show'), 'hide');
            addClass(removeClass(controls.querySelector('#depth-ctrl'), 'hide'), 'show');
        }
    }

    function init()
    {
        addEvent(container, 'click', function(evt) {
            evt.preventDefault && evt.preventDefault();
            if (computer_plays) return false;
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
                    domove(pos1, pos2);
                    machine_move();
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
            if (msg) msg = msg.querySelector('span') || msg;
            addEvent(controls, 'click', function(evt) {
                var ctrl = evt.target.closest('button'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                evt.preventDefault && evt.preventDefault();
                if ('flip' === action) flip();
                else if ('new' === action) newgame();
                else if ('undo' === action) undo();
                else if ('redo' === action) redo();
                /*else if ('fen' === action) {var fen = game.getFEN(); game.dispose(); make(container, args.moves, game = new args.Chess(fen), squares = $$('div'), moves = (args.moves ? $$('div') : null)); console.log('from fen', fen);}*/
                return false;
            }, {capture:false,passive:false});
            addEvent(controls, 'change', function(evt) {
                var ctrl = evt.target.closest('select'),
                    action = ctrl ? ctrl.getAttribute('data-action') : '';
                if ('promoteto' === action)
                {
                    if (game) game.promoteTo(ctrl.value);
                }
                else if ('playwith' === action)
                {
                    inputs(ctrl.value);
                }
            }, {capture:false,passive:true});
        }
        if (screen) addClass(screen, 'chessscreen');
        inputs(controls ? controls.querySelector('select[data-action="playwith"]').value : 'human-human');
        newgame();
    }
    init();
}
window.ChessApp = ChessApp;

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
    return el;
}
function removeClass(el, className)
{
    if (el)
    {
        if (el.classList) el.classList.remove(className);
        else el.className = ((' ' + el.className + ' ').replace(' ' + className + ' ', ' ')).trim();
    }
    return el;
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
function do_abort()
{
    var aborted_move = false;
    return function(enable) {
        if (true === enable) aborted_move = true;
        return aborted_move;
    };
}
})(window);