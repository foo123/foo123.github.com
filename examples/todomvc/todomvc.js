function todomvc(window, Storage, ModelView) {
"use strict";

function DnDSortable(opts)
{
    var self = this;
    if (!(self instanceof DnDSortable)) return new DnDSortable(opts);
    self.opts = opts || {};
    self.init();
}
DnDSortable.prototype = {
    constructor: DnDSortable
    ,opts: null
    ,handler: null
    ,dispose: function() {
        var self = this;
        if (self.handler)
        {
            document.removeEventListener('touchstart', self.handler, true);
            document.removeEventListener('mousedown', self.handler, true);
        }
        self.handler = null;
        self.opts = null;
        return self;
    }
    ,init: function() {
        if (!Object.prototype.hasOwnProperty.call(window.Element.prototype, '$dndRect'))
            window.Element.prototype.$dndRect = null;

        var self = this, draggingEle, handlerEle, parent, parentRect, y0, isDraggingStarted = false;

        if (self.handler) return;

        var swap = function(nodeA, nodeB, withRect) {
            var siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling, tmp;
            if (withRect)
            {
                tmp = nodeA.$dndRect.top;
                nodeA.$dndRect.top = nodeB.$dndRect.top;
                nodeB.$dndRect.top = tmp;
            }
            // Move `nodeA` to before the `nodeB`
            parent.insertBefore(nodeA, nodeB);
            // Move `nodeB` to before the sibling of `nodeA`
            parent.insertBefore(nodeB, siblingA);
        };

        var intersect = function(nodeA, nodeB) {
            var rectA = nodeA.getBoundingClientRect(), rectB = nodeB.getBoundingClientRect();
            if (rectA.top > rectB.top && rectA.top < rectB.top + rectB.height)
                return (rectA.top-rectB.top) / (rectB.height);
            else if (rectB.top > rectA.top && rectB.top < rectA.top + rectA.height)
                return (rectB.top-rectA.top) / (rectA.height);
            return 0;
        };

        var dragStart = self.handler = function(e) {
            if (isDraggingStarted || !e.target || !e.target.matches(self.opts.handle || '.dnd-handle')) return;
            handlerEle = e.target;
            draggingEle = handlerEle.closest(self.opts.item || '.dnd-item');
            if (!draggingEle) return;

            e.preventDefault();
            parent = draggingEle.parentNode;

            if ('function' === typeof self.opts.onStart) self.opts.onStart(draggingEle);

            isDraggingStarted = true;

            parentRect = parent.getBoundingClientRect();
            [].forEach.call(parent.children, function(el){
                var r = el.getBoundingClientRect();
                el.$dndRect = {top: r.top, left: r.left, width: r.width, height: r.height};
            });
            parent.classList.add(self.opts.container || 'dnd-container');
            parent.style.paddingBottom = String(parentRect.height) + 'px';
            parent.style.height = '0px';
            draggingEle.draggable = false; // disable native drag
            draggingEle.classList.add(self.opts.dragged || 'dnd-dragged');
            [].forEach.call(parent.children, function(el){
                el.style.position = 'absolute';
                el.style.top = String(el.$dndRect.top-parentRect.top)+'px';
                el.style.left = String(el.$dndRect.left-parentRect.left)+'px';
            });
            y0 = (e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.clientY) + parentRect.top - draggingEle.$dndRect.top;
            // Set position for dragging element
            draggingEle.style.top = String((e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.clientY) - y0)+'px';

            // Attach the listeners to `document`
            document.addEventListener('touchmove', dragMove, false);
            document.addEventListener('touchend', dragEnd, false);
            document.addEventListener('touchcancel', dragEnd, false);
            document.addEventListener('mousemove', dragMove, false);
            document.addEventListener('mouseup', dragEnd, false);
        };

        var dragMove = function(e) {
            // Set position for dragging element
            draggingEle.style.top = String((e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.clientY) - y0)+'px';

            var prevEle = draggingEle.previousElementSibling, nextEle = draggingEle.nextElementSibling, p;

            // User moves the dragging element to the top
            if (prevEle && (p=intersect(draggingEle, prevEle)))
            {
                if (p <= 0.5)
                {
                    if (p <= 0.25 && draggingEle !== prevEle.previousElementSibling) swap(draggingEle, prevEle, true);
                    prevEle.style.top = String(prevEle.$dndRect.top-parentRect.top + (draggingEle === prevEle.previousElementSibling ? -p : p)*prevEle.$dndRect.height)+'px';
                }
                return;
            }

            // User moves the dragging element to the bottom
            if (nextEle && (p=intersect(nextEle, draggingEle)))
            {
                if (p <= 0.5)
                {
                    if (p <= 0.25 && draggingEle !== nextEle.nextElementSibling) swap(draggingEle, nextEle, true);
                    nextEle.style.top = String(nextEle.$dndRect.top-parentRect.top + (draggingEle === nextEle.nextElementSibling ? p : -p)*nextEle.$dndRect.height)+'px';
                }
            }
        };

        var dragEnd = function(e) {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('touchmove', dragMove, false);
            document.removeEventListener('touchend', dragEnd, false);
            document.removeEventListener('touchcancel', dragEnd, false);
            document.removeEventListener('mousemove', dragMove, false);
            document.removeEventListener('mouseup', dragEnd, false);

            [].forEach.call(parent.children, function(el){
                el.$dndRect = null;
                el.style.removeProperty('position');
                el.style.removeProperty('top');
                el.style.removeProperty('left');
            });
            parent.style.removeProperty('padding-bottom');
            parent.style.removeProperty('height');
            parent.classList.remove(self.opts.container || 'dnd-container');
            draggingEle.classList.remove(self.opts.dragged || 'dnd-dragged');

            if ('function' === typeof self.opts.onEnd) self.opts.onEnd(draggingEle);

            draggingEle = null;
            handlerEle = null;
            parent = null;
            parentRect = null;
            isDraggingStarted = false;
        };

        document.addEventListener('touchstart', dragStart, true);
        document.addEventListener('mousedown', dragStart, true);
    }
};

function debounce(f, wait, immediate)
{
    var timeout;
    return function() {
        var ctx = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) f.apply(ctx, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) f.apply(ctx, args);
    };
}

function autoStoreModel()
{
    // if supports localStorage
    if (Storage.isSupported)
    {
        const todoList = {
            todos: Model.get('todoList.todos').map(todo => ({
                uuid: todo.uuid.val(),
                title: todo.title.val(),
                completed: todo.completed.val(),
                time: todo.time
            }))
            ,active: Model.get('todoList.active')
            ,completed: Model.get('todoList.completed')
        };
        Storage.set(STORAGE_KEY, {todoList});
        return true;
    }
    return false;
}

function updateModelFromStorage()
{
    // if supports localStorage
    if (Storage.isSupported)
    {
        var storedOptions = Storage.get(STORAGE_KEY);
        if (storedOptions)
        {
            // reset any editing flags
            storedOptions.todoList.todos.forEach(todo => {
                todo.editing = false;
                todo.uuid = Value(todo.uuid);
                todo.title = Value(todo.title);
                todo.completed = Value(todo.completed);
                todo.className = Value('todo' + (todo.completed.val() ? ' completed' : ''), null, todo.completed.dirty());
            });
            Model.set('todoList', storedOptions.todoList);
            return true;
        }
    }
    return false;
}

function timeSince(time)
{
  var seconds = Math.floor((new Date().getTime() - time) / 1000), interval;
  interval = Math.floor(seconds / 31536000);
  if (interval > 0) return String(interval) + " "+(1===interval?'year':'years')+" ago";
  interval = Math.floor(seconds / 2592000);
  if (interval > 0) return String(interval) + " "+(1===interval?'month':'months')+" ago";
  interval = Math.floor(seconds / 86400);
  if (interval > 0) return String(interval) + " "+(1===interval?'day':'days')+" ago";
  interval = Math.floor(seconds / 3600);
  if (interval > 0) return String(interval) + " "+(1===interval?'hour':'hours')+" ago";
  interval = Math.floor(seconds / 60);
  if (interval > 0) return String(interval) + " "+(1===interval?'minute':'minutes')+" ago";
  interval = Math.floor(seconds);
  return interval < 30 ? "just now" : String(interval) + " seconds ago";
}

function route(displayMode)
{
    if (displayMode)
    {
        if ('#/' === displayMode.slice(0, 2)) displayMode = displayMode.slice(2);
        Model.set('displayMode', displayMode, true);
    }
}

var Model, View, Value = ModelView.Model.Value, TypeCast = ModelView.Type.Cast, Validate = ModelView.Validation.Validate,
    STORAGE_KEY = "modelview_todomvc", KEY_ENTER = 13, autostore = debounce(autoStoreModel, 500);

// ModelView for App
Model = new ModelView.Model('model', {
    displayMode: 'all'
    ,todoList: {
        todos: []
        ,active: 0
        ,completed: 0
    }
})
.types({
    'displayMode': function(v) {return String(v).trim().toLowerCase();}
    //,'todoList.todos.*.title': TypeCast.STR
    //,'todoList.todos.*.completed': TypeCast.BOOL
})
.validators({
    'displayMode': Validate.IN('all', 'active', 'completed')
})
.getters({
    'todoList.all': function() {
        return this.$data.todoList.todos.length;
    }
    ,'todoList.display': function() {
        switch(this.$data.displayMode)
        {
            case 'active':
                return this.$data.todoList.todos.filter(todo => !todo.completed.val());
            case 'completed':
                return this.$data.todoList.todos.filter(todo => todo.completed.val());
            default:
                return this.$data.todoList.todos;
        }
    }
    ,'todoList.todos.active': function() {
        return this.$data.todoList.todos.filter(todo => !todo.completed.val());
    }
    ,'todoList.todos.completed': function() {
        return this.$data.todoList.todos.filter(todo => todo.completed.val());
    }
    ,'todoList.allCompleted': function() {
        var visible = this.get('todoList.display'), completed = visible.filter(todo => todo.completed.val());
        return 0 < visible.length && visible.length === completed.length;
    }
})
.on('change', function(evt, data){
    if ('todoList' === data.key.slice(0, 8))
        autostore();
})
;

View = new ModelView.View('todoview')
.model(Model)
.template(document.getElementById('content').innerHTML)
.autovalidate(false)
.autobind(false)
.livebind(true)
.components({
    Todo: new ModelView.View.Component(
        'Todo',
        document.getElementById('TodoComponent').innerHTML,
        {
            changed: (_old, _new) => (_old !== _new) || _new.uuid.dirty() || _new.title.dirty() || _new.completed.dirty()
        }
    )
})
.context({
    timeSince: function(time) {
        return null!=time ? timeSince(time) : '';
    }
})
.actions({
    addTodo: function(evt, el) {
        var title = el.value.trim(), todo;
        el.value = '';

        if (title.length )
        {
            Model.$data.todoList.todos.unshift(todo={
                uuid: Value(ModelView.UUID('todo')),
                title: Value(title),
                time: new Date().getTime(),
                completed: Value(false),
                className: Value('todo'),
                editing: false
            });
            Model.$data.todoList.active++;
            Model.notify('todoList');
        }
    }
    ,allCompleted: function(evt, el) {
        var completed, visible;

        visible = Model.get('todoList.display');
        completed = visible.filter(todo => todo.completed.val());

        if (completed.length === visible.length)
        {
            // if all completed on current filter, uncomplete them
            completed.forEach(todo => {
                todo.completed.set(false);
                todo.className = Value('todo' + (todo.completed.val() ? ' completed' : ''), null, todo.completed.dirty());
            });
            Model.$data.todoList.completed -= completed.length;
            Model.$data.todoList.active += completed.length;
            Model.notify('todoList');
        }
        else
        {
            // complete visible todos on current filter
            visible.forEach(todo => {
                if (!todo.completed.val())
                {
                    todo.completed.set(true);
                    todo.className = Value('todo' + (todo.completed.val() ? ' completed' : ''), null, todo.completed.dirty());
                    Model.$data.todoList.completed++;
                    Model.$data.todoList.active--;
                }
            })
            Model.notify('todoList');
        }
    }
    ,removeCompleted: function(evt, el){
        Model.$data.todoList.todos = Model.$data.todoList.todos.filter(todo => !todo.completed.val());
        Model.$data.todoList.completed = 0;
        Model.$data.todoList.active = Model.$data.todoList.todos.length;
        Model.notify('todoList');
    }
    ,edit: function(evt, el) {
        var $todo = el.closest('.todo'),
            todo = $todo ? Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.id)[0] : null;

        if (todo && !todo.editing)
        {
            $todo.classList.add('editing');
            todo.editing = true;
            setTimeout(() => {$todo.querySelector('.edit').focus();}, 10);
        }
    }
    ,stopEditing: function(evt, el) {
        var title, $todo = el.closest('.todo'),
            todo = $todo ? Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.id)[0] : null;

        if (todo && todo.editing)
        {
            if (evt.keyCode && KEY_ENTER !== evt.keyCode) return;
            title = el.value.trim();
            if (!title.length)
            {
                // remove
                Model.$data.todoList.todos.splice(Model.$data.todoList.todos.indexOf(todo), 1);
                if (todo.completed.val()) Model.$data.todoList.completed--;
                else Model.$data.todoList.active--;
                Model.notify('todoList');
            }
            else
            {
                // update
                todo.editing = false;
                todo.title.set(title);
                $todo.classList.remove('editing');
                Model.notify('todoList');
            }
        }
    }
    ,complete: function(evt, el) {
        var $todo = el.closest('.todo'),
            todo = $todo ? Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.id)[0] : null;

        if (!todo) return;

        if (!todo.completed.val() && el.checked)
        {
            todo.completed.set(true);
            todo.className = Value('todo' + (todo.completed.val() ? ' completed' : ''), null, todo.completed.dirty());
            Model.$data.todoList.completed++;
            Model.$data.todoList.active--;
            Model.notify('todoList');
        }
        else if (todo.completed.val() && !el.checked)
        {
            todo.completed.set(false);
            todo.className = Value('todo' + (todo.completed.val() ? ' completed' : ''), null, todo.completed.dirty());
            Model.$data.todoList.completed--;
            Model.$data.todoList.active++;
            Model.notify('todoList');
        }
    }
    ,remove: function(evt, el) {
        var $todo = el.closest('.todo'),
            todo = $todo ? Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.id)[0] : null;

        if (todo)
        {
            // remove
            Model.$data.todoList.todos.splice(Model.$data.todoList.todos.indexOf(todo), 1);
            if (todo.completed.val()) Model.$data.todoList.completed--;
            else Model.$data.todoList.active--;
            Model.notify('todoList');
        }
    }
    ,reorder: function($todo) {
        /*var todos = Model.$data.todoList.todos.reduce(function(todos, todo){
            todos[todo.uuid.val()] = todo;
            return todos;
        }, {});
        Model.$data.todoList.todos = [].map.call(document.getElementById('todo-list').children, function($todo){
            return todos[$todo.id];
        });*/
        var todo = $todo ? Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.id)[0] : null;

        if (todo)
        {
            if ($todo.nextElementSibling)
            {
                Model.$data.todoList.todos.splice(Model.$data.todoList.todos.indexOf(todo), 1);
                Model.$data.todoList.todos.splice(Model.$data.todoList.todos.indexOf(Model.$data.todoList.todos.filter(todo => todo.uuid.val() == $todo.nextElementSibling.id)[0]), 0, todo);
            }
            else
            {
                Model.$data.todoList.todos.splice(Model.$data.todoList.todos.indexOf(todo), 1);
                Model.$data.todoList.todos.push(todo);
            }
            autoStoreModel();
        }
    }
})
.bind(['change', 'click', 'dblclick', 'blur'/*'focusout'*/], document.getElementById('todoapp'))
;

// synchronize UI/View/Model
updateModelFromStorage();

window.addEventListener('hashchange', function() {route(location.hash);}, false);

DnDSortable({
    handle: '.drag',
    item: '.todo',
    onEnd: function($todo){
        View.do_reorder($todo);
    }
});

if (location.hash) route(location.hash);
// auto-trigger
else location.hash = '#/all';

View.render();
}
window.todomvc = todomvc;