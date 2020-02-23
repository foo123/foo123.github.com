(function(window){
"use strict";

/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    } )();

}

var container,
    camera, scene, renderer, projector,
    updatecamera = false, carouselupdate = true,

    carousel,
    targetRotationY = 0, targetRotationOnMouseDownY = 0, targetRotationX = 0, targetRotationOnMouseDownX = 0,

    mouse = {x:0, y:0}, prevmouse = {x:0, y:0},
    mouseX = 0, mouseXOnMouseDown = 0, mouseY = 0, mouseYOnMouseDown = 0,
    w, h, w2, h2,
    tapedTwice = null, dblclick = false
;

function recursive_offset( node )
{
    var x = 0, y = 0, nodeStyle;

    while ( node )
    {
        try {
            nodeStyle = window.getComputedStyle(node);
        } catch(e) {
            nodeStyle = null;
        }
        if ( node.scrollLeft ) x += node.scrollLeft;
        if ( node.scrollTop ) y += node.scrollTop;
        if ( node.offsetLeft ) x -= node.offsetLeft;
        if ( node.offsetTop ) y -= node.offsetTop;
        if ( nodeStyle && nodeStyle.marginLeft ) x -= parseInt(nodeStyle.marginLeft, 10);
        if ( nodeStyle && nodeStyle.marginTop ) y -= parseInt(nodeStyle.marginTop, 10);
        node = node.parentNode
    }
    return {x:x, y:y};
}

function onDoubleClick( e )
{
    return onDblClick( e, false );
}
function onDoubleTap( e )
{
    return onDblClick( e, true );
}
function onDblClick( e, isTouch )
{
    if ( isTouch )
    {
        if ( e.target !== tapedTwice )
        {
            tapedTwice = e.target;
            setTimeout(function(){tapedTwice = null;}, 300);
            return false;
        }
    }

    e.preventDefault();
    var clientX = isTouch ? e.changedTouches[0].clientX : e.clientX,
        clientY = isTouch ? e.changedTouches[0].clientY : e.clientY,
        offset = recursive_offset(e.target);

    clientX += offset.x; clientY += offset.y;
    dblclick = true;
    carouselupdate = false;

    mouse.x = ( clientX / w ) * 2 - 1;
    mouse.y = - ( clientY / h ) * 2 + 1;
    var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ), ray, intersects;
    projector.unprojectVector( vector, camera );

    ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );
    intersects = ray.intersectObjects( carousel.children );

    if ( intersects.length > 0 )
        carousel.rotateToItem(intersects[0].object, function( ){
            targetRotationY = this.rotation.y;
            carouselupdate = true;
        });
}

function onDocumentMouseDown( e )
{
    onDocumentDown( e, false )
}
function onDocumentTouchStart( e )
{
    onDocumentDown( e, true )
}
function onDocumentDown( e, isTouch )
{
    e.preventDefault();

    var clientX = isTouch ? e.changedTouches[0].clientX : e.clientX,
        clientY = isTouch ? e.changedTouches[0].clientY : e.clientY,
        offset = recursive_offset(e.target);

    clientX += offset.x; clientY += offset.y;

    if ( isTouch )
    {
        container.addEventListener( 'touchmove', onDocumentTouchMove, false );
        container.addEventListener( 'touchend', onDocumentTouchEnd, false );
        container.addEventListener( 'touchcancel', onDocumentTouchEnd, false );
    }
    else
    {
        container.addEventListener( 'mousemove', onDocumentMouseMove, false );
        container.addEventListener( 'mouseup', onDocumentMouseUp, false );
        container.addEventListener( 'mouseout', onDocumentMouseUp, false );
    }

    mouse.x = ( clientX / w ) * 2 - 1;
    mouse.y = - ( clientY / h ) * 2 + 1;
    prevmouse.x = mouse.x;
    prevmouse.y = mouse.y;
    mouseXOnMouseDown = clientX - w2;
    mouseYOnMouseDown = clientY - h2;
    targetRotationOnMouseDownY = targetRotationY;
    targetRotationOnMouseDownX = targetRotationX;
}

function onDocumentMouseMove( e )
{
    onDocumentMove( e, false );
}
function onDocumentTouchMove( e )
{
    onDocumentMove( e, true );
}
function onDocumentMove( e, isTouch )
{
    e.preventDefault();

    var clientX = isTouch ? e.changedTouches[0].clientX : e.clientX,
        clientY = isTouch ? e.changedTouches[0].clientY : e.clientY,
        offset = recursive_offset(e.target);

    clientX += offset.x; clientY += offset.y;
    mouseX = clientX - w2;
    mouseY = clientY - h2;
    mouse.x = ( clientX / w ) * 2 - 1;
    mouse.y = - ( clientY / h ) * 2 + 1;

    targetRotationY = targetRotationOnMouseDownY + ( mouseX - mouseXOnMouseDown ) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + ( mouseY - mouseYOnMouseDown ) * 0.02;
    updatecamera = true;
}

function onDocumentMouseUp( e )
{
    onDocumentUp( e, false );
}
function onDocumentTouchEnd( e )
{
    onDocumentUp( e, true );
}
function onDocumentUp( e, isTouch )
{
    e.preventDefault();

    if ( isTouch )
    {
        container.removeEventListener( 'touchmove', onDocumentTouchMove, false );
        container.removeEventListener( 'touchend', onDocumentTouchEnd, false );
        container.removeEventListener( 'touchcancel', onDocumentTouchEnd, false );
    }
    else
    {
        container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
        container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
        container.removeEventListener( 'mouseout', onDocumentMouseUp, false );
    }
}

function animate( )
{
    if ( carouselupdate )
        carousel.rotation.y += ( targetRotationY - carousel.rotation.y ) * 0.05;
    if ( updatecamera && Math.abs(mouse.y-prevmouse.y)>Math.abs(mouse.x-prevmouse.x) )
        camera.position.z +=  (mouse.y-prevmouse.y)*20;
    renderer.render( scene, camera );
    updatecamera = false;
    //carouselupdate = true;
    TWEEN.update();
    requestAnimationFrame( animate );
}

function setDimensions( )
{
    w = Math.min(window.innerWidth, 1600)-20;
    h = Math.max(window.innerHeight-80, 500);
    w2 = w/2;
    h2 = h/2;
    container.style.width = w+"px";
    container.style.height = h+"px";
    renderer.setSize( w, h );
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}


// main Application Object
var self={

    init: function(images)  {

        container = document.getElementById('container');

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 70, 1.0, 1, 1000 );
        camera.position.z = 500;
        scene.add( camera );
        projector = new THREE.Projector();
        renderer = new THREE.CanvasRenderer();
        setDimensions( );
        container.appendChild( renderer.domElement );

        // Carousel
        carousel = new Carousel(200, images, 150, 100);
        scene.add( carousel );

        window.addEventListener( 'resize', setDimensions, false );
        container.addEventListener( 'dblclick', onDoubleClick, false );
        container.addEventListener( 'touchstart', onDoubleTap, false );
        container.addEventListener( 'mousedown', onDocumentMouseDown, false );
        container.addEventListener( 'touchstart', onDocumentTouchStart, false );

        requestAnimationFrame( animate );
    },

    animate : animate
};


// export it
window.CarouselApplication=self;
})(window);
