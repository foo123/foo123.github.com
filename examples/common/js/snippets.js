!function( root ) {
    
    var toStr = Object.prototype.toString;
    
    function is_string( s )
    {
        return (s instanceof String) || ('[object String]' === toStr.call( s ));
    }
    
    function snippetHighlight( snippets, snippetsContainer, CodeMirror )
    {
        var i, l = snippets.length, 
            title, type, snippet, textarea, editor, entry,
            container, container2
        ;
        
        snippetsContainer = is_string(snippetsContainer) ? document.getElementById( snippetsContainer ) : snippetsContainer;
        
        for (i=0; i<l; i++)
        {
            entry = is_string(snippets[ i ]) ? document.getElementById( snippets[ i ] ) : snippets[ i ];
            type = entry.getAttribute('data-snippet-type');
            if ( !type && 'script' === entry.tagName.toLowerCase( ) ) 
                type = entry.getAttribute('type') || 'javascript';
            container = document.createElement('div');
            container.className = 'fluid col-1-' + snippets.length + ' code-snippet-wrapper';
            container2 = document.createElement('div');
            container2.className = 'fluid col-9-10 code-snippet';
            container2.style.margin = '10px 5px';
            title = document.createElement('h4');
            title.className = 'code-snippet-title';
            title.innerHTML = entry.getAttribute('data-snippet') + ': <br />';
            textarea = document.createElement('textarea');
            textarea.className = 'fluid col-1-1 code-snippet-editor';
            container2.appendChild( title );
            container2.appendChild( textarea );
            container.appendChild( container2 );
            snippetsContainer.appendChild( container ); 

            snippet = entry.innerHTML;
            //if ( /^html/i.test(type) ) snippet = snippet.split('<').join('&lt;');
            if ( entry.getAttribute('data-snippet-escape') && /^(html|xml)/i.test(type) ) 
                snippet = snippet.split('"').join("'").split('&quot;').join('"');

            editor = CodeMirror.fromTextArea(textarea, {
                mode: type,
                //value: snippet,
                readOnly: true,
                lineWrapping: false,
                lineNumbers : true,
                indentUnit: 4,
                indentWithTabs: false,
                theme: 'lesser-dark'
            });
            editor.setValue( snippet );
        }
    }
    root.Snippets = snippetHighlight;
    if ( 'function' === typeof define && define.amd )
    {
        define('Snippets', [ ], function( ){ return snippetHighlight; });
    }
}( this );