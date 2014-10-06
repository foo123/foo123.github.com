!function( window, require, undef ) {
    // use requireJS
    require(['jQuery', 'Storage', 'Contemplate', 'Dromeo', 'ModelView'], 
        function( $, Storage, Contemplate, Dromeo, ModelView ) {
        "use strict";

        if ( ModelView.jquery ) ModelView.jquery( $ );
        
        // Contemplate Templates
        Contemplate.add({
            "todo-tpl": "#todo-tpl"
        });
        Contemplate.setPlurals({
            // auto-plural used here
            'item': null
        });
        
        var $window = $(window), $screen = $( "#todoapp" ), 
            $todoList = $( '#todo-list' ), $toggleAll = $( '#toggle-all' ),
            // pre-parse it
            todoTpl = Contemplate.tpl( 'todo-tpl' ),
            sprintf = Contemplate.sprintf, pluralise = Contemplate.pluralise,
            Model, View, Router, TodoView, 
            TypeCast = ModelView.Type.Cast, Validate = ModelView.Validation.Validate,
            STORAGE_KEY = "modelview_todomvc",
            // View cache(s) refresh interval, 1/2 min
            STORAGE_INTERVAL = 1000, REFRESH_INTERVAL = 30000,
            KEY_ENTER = 13
        ;
        
        // sub-class of ModelView for a single Todo View
        TodoView = function( id, model, atts ) {
            ModelView.View.call( this, id, model, atts );
        };
        TodoView.prototype = ModelView.Extend( Object.create( ModelView.View.prototype ), {
            
            constructor: TodoView
            
            ,do_edit: function(evt, $el, data) {
                var todo = this.$model,
                    $todo = $(this.$dom)
                ;
                if ( !todo.$data.editing )
                {
                    $todo.addClass( 'editing' );
                    todo.$data.editing = true;
                    setTimeout(function(){ $todo.find('.edit').focus( ); }, 10);
                }
            }
            
            ,do_stopEditing: function(evt, $el, data) {
                $el = $($el);
                var todo = this.$model,
                    $todo = $(this.$dom),
                    title, todoList
                ;
                
                if ( todo.$data.editing )
                {
                    if ( evt.which && KEY_ENTER !== evt.which ) return;
                    
                    title = $el.val( );
                    
                    if ( !$.trim( title ).length )
                    {
                        // remove
                        todoList = Model.get( 'todoList' );
                        
                        todoList.todos.splice( $todo.index( ), 1 );
                        
                        if ( todo.get('completed') ) todoList.completed--;
                        else todoList.active--;
                        
                        $todo.remove( );
                        
                        setTimeout(function() {
                            $todo.modelview( 'dispose' );
                        }, 50);
                    }
                    else
                    {
                        // update
                        todo.set('title', title, true);
                        todo.$data.editing = false;
                        $todo.removeClass( 'editing' );
                    }
                    
                    Model.notify( 'todoList' );
                    $todoList.toggleCompleted( );
                }
            }
            
            ,do_complete: function(evt, $el, data) {
                $el = $($el);
                var todo = this.$model,
                    $todo = $(this.$dom), 
                    completeIt = $el.is( ':checked' ), 
                    completed = todo.get( 'completed' ),
                    todoList
                ;
                
                if ( !completed && completeIt )
                {
                    todoList = Model.get( 'todoList' );
                    
                    todo.set('completed', true);
                    $todo.addClass( 'completed' );
                    
                    todoList.completed++;
                    todoList.active--;
                    
                    Model.notify( 'todoList' );
                    $todoList.toggleCompleted( );
                }
                else if ( completed && !completeIt )
                {
                    todoList = Model.get( 'todoList' );
                    
                    todo.set('completed', false);
                    $todo.removeClass( 'completed' );
                    
                    todoList.completed--;
                    todoList.active++;
                    
                    Model.notify( 'todoList' );
                    $todoList.toggleCompleted( );
                }
            }
            
            ,do_remove: function(evt, $el, data) {
                $el = $($el);
                var todo = this.$model,
                    $todo = $(this.$dom), 
                    todoList
                ;
                
                todoList = Model.get( 'todoList' );
                
                $todo.fadeOut( 'fast', function( ) {
                    
                    todoList.todos.splice($todo.index( ), 1);
                    $todo.remove( );
                    
                    if ( todo.get('completed') ) todoList.completed--;
                    else todoList.active--;
                    
                    Model.notify( 'todoList' );
                    $todoList.toggleCompleted( );
                    
                    setTimeout(function() {
                        $todo.modelview( 'dispose' );
                    }, 50);
                });
            }
        });
        
        // helper for single todo modelview
        function getTodoMV(uuid, title, completed)
        {
            // use nested/composite view-model for each todo
            var todo,  $todo;
            
            todo = new ModelView.Model(uuid, { 
                uuid: uuid, 
                title: title || '', 
                completed: false, 
                editing: false 
            }, {
                title: TypeCast.STR
                ,completed: TypeCast.BOOL
            });
            
            $todo = $( todoTpl.render( todo.$data ) );
            
            $todo.modelview({
                
                viewClass: TodoView
                
                ,id: uuid
            
                ,livebind: '$(__KEY__)'
                ,autobind: true
                ,bindAttribute: 'data-bind-todo'
                ,events: [ 'change', 'dblclick', 'click', /*'blur',*/ 'focusout', 'keyup' ]
                
                ,refreshInterval: REFRESH_INTERVAL
                
                ,model: todo
            });
            
            if ( !!completed )
            {
                todo.set( 'completed', true );
                $todo.find( 'input.toggle' ).prop( 'checked', true );
                $todo.addClass( 'completed' );
            }
            
            return $todo;
        }
        
        function initModelAutoStorage( key, interval )
        {
            interval = interval || STORAGE_INTERVAL;
            // if supports localStorage
            if ( Storage.isSupported && key )
            {
                var storeModelParams = function( ) {
                    // should handle sub-models correctly as single json output
                    Storage.set( key, Model.toJSON( ), false );
                    setTimeout( storeModelParams, interval );
                };
                setTimeout( storeModelParams, interval );
                return true;
            }
            return false;
        }
        
        function updateModelFromStorage( key )
        {
            // if supports localStorage
            if ( Storage.isSupported && key )
            {
                var storedOptions = Storage.get( key ), i, $todoMV, todo, 
                    todoList = {
                        todos: [ ],
                        active: 0,
                        completed: 0
                    }
                ;
                if ( storedOptions )
                {
                    for (i=0; i<storedOptions.todoList.todos.length; i++)
                    {
                        todo = storedOptions.todoList.todos[ i ];
                        
                        if ( todo )
                        {
                            $todoMV = getTodoMV( todo.uuid, todo.title, todo.completed );
                            
                            todoList.todos.push( $todoMV.modelview( 'model' ) );
                            
                            $todoList.append( $todoMV );
                        }
                    }
                    todoList.active = storedOptions.todoList.active;
                    todoList.completed = storedOptions.todoList.completed;
                    
                    Model.set( 'displayMode', storedOptions.displayMode );
                    Model.set( 'todoList', todoList, true );
                    
                    $todoList.toggleCompleted( );
                    
                    return true;
                }
            }
            return false;
        }
        
        $todoList.toggleCompleted = function( ) {
            setTimeout(function( ) {
                var visible = $todoList.children( ':visible' ),
                    completed = $todoList.children( '.completed:visible' )
                ;
                if ( visible.length && visible.length === completed.length )
                    $toggleAll.prop('checked', true);
                else
                    $toggleAll.prop('checked', false);
            }, 20);
        };
        
        
        // ModelView for App screen
        $screen.modelview({
        
            id: 'todosview'
            
            ,livebind: '$(__MODEL__.__KEY__)'
            ,autobind: false
            ,bindAttribute: 'data-bind'
            ,events: [ 'change', 'click', 'blur'/*, 'focusout'*/ ]
            
            ,refreshInterval: REFRESH_INTERVAL
                
            ,model: {
                
                id: 'todos'
                
                ,data: {
                    
                    displayMode: 'all'
                    
                    ,todoList: {
                        todos: [ ]
                        ,active: 0
                        ,completed: 0
                    }
                }
                
                // custom getter observable for itemsLabel
                ,getters: {
                    'todoList.items': function( ) { 
                        return pluralise( 'item', this.$data.todoList.active );
                    }
                }
                
                ,types: {
                    displayMode: TypeCast.LCASE.AFTER( TypeCast.TRIM )
                }
                
                ,validators: {
                    displayMode: Validate.IN( 'all', 'active', 'completed' )
                }
            }
            
            ,actions: {
                addTodo: function(evt, $el, data){
                    $el = $($el);
                    var Model = this.$model, title = $el.val( ), $todoModelView, todoList;
                    
                    if ( title && $.trim( title ).length )
                    {
                        todoList = Model.get( 'todoList' );
                        
                        $todoModelView = getTodoMV( ModelView.UUID( 'todo' ), title );
                        
                        $todoList.prepend( $todoModelView );
                        todoList.todos.unshift( $todoModelView.modelview( 'model' ) );
                        todoList.active++;
                        
                        $el.val( '' );
                        
                        //console.log(Model.toJSON( ));
                        
                        Model.notify( 'todoList' );
                        $todoList.toggleCompleted( );
                    }
                }
                
                ,allCompleted: function(evt, $el, data){
                    $el = $($el);
                    var Model = this.$model, todoList, notcompleted, visible, completed, isChecked;
                    
                    isChecked = $el.is( ':checked' );
                    
                    // if checked, complete visible todos on current filter
                    if ( isChecked )
                    {
                        todoList = Model.get( 'todoList' );
                        
                        notcompleted = $todoList
                            .children( '.todo:visible:not(.completed)' )
                            .each(function( ) {
                                var $todo = $(this);
                                
                                todoList.todos[ $todo.index( ) ].set( 'completed', true );
                                
                                $todo
                                    .addClass( 'completed' )
                                    .find( '.toggle' )
                                    .prop( 'checked', true )
                                ;
                            });
                        todoList.completed += notcompleted.length;
                        todoList.active -= notcompleted.length;
                        
                        Model.notify( 'todoList' );
                    }
                    
                    // if unchecked and all visible todos on current filter are completed, uncomplete them
                    else if ( !isChecked )
                    {
                        completed = $todoList.children( '.todo.completed:visible' );
                        visible = $todoList.children( '.todo:visible' );
                        
                        // if all completed on current filter, uncomplete them
                        if ( completed.length === visible.length )
                        {
                            todoList = Model.get( 'todoList' );
                        
                            completed.each(function( ) {
                                var $todo = $(this);
                                
                                todoList.todos[ $todo.index( ) ].set( 'completed', false );
                                
                                $todo
                                    .removeClass( 'completed' )
                                    .find( '.toggle' )
                                    .prop( 'checked', false )
                                ;
                            });
                            
                            todoList.completed -= completed.length;
                            todoList.active += completed.length;
                            
                            Model.notify( 'todoList' );
                        }
                    }
                }
                
                ,removeCompleted: function(evt, $el, data){
                    $el = $($el);
                    var Model = this.$model, i, todoList, l;
                    
                    todoList = Model.get( 'todoList' );
                    
                    $todoList.children( '.completed' ).remove( );
                    
                    l = todoList.todos.length;
                    for (i=l-1; i>=0; i--) 
                    {
                        if ( true == todoList.todos[ i ].get( 'completed' ) ) 
                            todoList.todos.splice( i, 1 );
                    }
                    todoList.completed = 0;
                    todoList.active = todoList.todos.length;
                    
                    Model.notify( 'todoList' );
                    $todoList.toggleCompleted( );
                }
            }
        });
        
        View = $screen.modelview( 'view' ); Model = View.$model;
        Router = new Dromeo( );
        
        // Dromeo router for location.hash changes
        Router.on('#/{%ALPHA%:displayMode}', function( route, params ) {
            if ( params )
            {
                var displayMode = params.displayMode, $el = $('#'+displayMode);
                
                Model.set( 'displayMode', displayMode, 1 );
                
                $todoList.removeClass( 'show-active show-completed' );
                if ( 'all' !== displayMode ) $todoList.addClass( 'show-' + displayMode );
                
                $('#filters').find('a.tab').removeClass('active_tab');
                $el.addClass('active_tab');
                
                $todoList.toggleCompleted( );
            }
        });
        $window.on('hashchange', function( evt ) {
            Router.route( location.hash );
        });
        
        // synchronize UI/View/Model
        //$screen.modelview( 'sync' );
        updateModelFromStorage( STORAGE_KEY );
        
        if ( location.hash )
        {
            //location.hash = location.hash || ('#/' + Model.get( 'displayMode' ));
            $window.trigger( 'hashchange' );
        }
        else
        {
            // auto-trigger
            location.hash = '#/' + Model.get( 'displayMode' );
        }
        
        initModelAutoStorage( STORAGE_KEY );

    });
}( window, require );