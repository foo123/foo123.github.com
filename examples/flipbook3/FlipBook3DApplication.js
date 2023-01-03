!function(window) {
"use strict";
/**
* Provides requestAnimationFrame in a cross browser way.
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
*/

if (!window.requestAnimationFrame) {

    window.requestAnimationFrame = (function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

    window.setTimeout(callback, 1000 / 60);

    };

    } )();

}

var multx = 0.5*Math.PI,
    multy = -Math.PI,
    Sin = Math.sin,
    Cos = Math.cos,

    container, camera, scene, renderer, projector,
    targetRotationY = 0, targetRotationOnMouseDownY = 0, targetRotationX = 0, targetRotationOnMouseDownX = 0,
    rad = 700, mouse = {x:0,y:0}, mouseX = 0, mouseXOnMouseDown = 0, mouseY = 0, mouseYOnMouseDown = 0,
    mstack, bend,
    windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2,
    w,h,w2,h2,
    book, pagew = 300, pageh = pagew*10/7,
    fl,fr
;

function onDocumentMouseDown(event)
{
    onDocumentDown(event, false);
}
function onDocumentTouchStart(event)
{
    onDocumentDown(event, true);
}
function onDocumentDown(event, isTouch)
{
    event.preventDefault();

    var clientX = isTouch ? event.changedTouches[0].clientX : event.clientX,
        clientY = isTouch ? event.changedTouches[0].clientY : event.clientY;

    mouseX = (clientX / w) * 2 - 1;
    targetRotationY = mouseX;
    mouseY = (clientY / h) * 2 - 1;
    targetRotationX = mouseY;

    if (isTouch)
    {
        container.addEventListener('touchmove', onDocumentTouchMove, false);
        container.addEventListener('touchend', onDocumentTouchEnd, false);
        container.addEventListener('touchcancel', onDocumentTouchEnd, false);
    }
    else
    {
        container.addEventListener('mousemove', onDocumentMouseMove, false);
        container.addEventListener('mouseup', onDocumentMouseUp, false);
        container.addEventListener('mouseout', onDocumentMouseUp, false);
    }
}

function onDocumentMouseMove(event)
{
    onDocumentMove(event, false);
}
function onDocumentTouchMove(event)
{
    onDocumentMove(event, true);
}
function onDocumentMove(event, isTouch)
{
    event.preventDefault();

    var clientX = isTouch ? event.changedTouches[0].clientX : event.clientX,
        clientY = isTouch ? event.changedTouches[0].clientY : event.clientY;

    /*mouseX = clientX - w2;
    mouseY = clientY - h2;

    targetRotationY = targetRotationOnMouseDownY + ( mouseX - mouseXOnMouseDown ) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + ( mouseY - mouseYOnMouseDown ) * 0.02;*/
    //var target=
    //mouse_path.push(e.seenas.ray);

    mouseX = (clientX / w) * 2 - 1;
    targetRotationY = mouseX;
    mouseY = (clientY / h) * 2 - 1;
    targetRotationX = mouseY;
}

function onDocumentMouseUp(event)
{
    onDocumentUp(event, false);
}
function onDocumentTouchEnd(event)
{
    onDocumentUp(event, true);
}
function onDocumentUp(event, isTouch)
{
    if (isTouch)
    {
        container.removeEventListener('touchmove', onDocumentTouchMove, false);
        container.removeEventListener('touchend', onDocumentTouchEnd, false);
        container.removeEventListener('touchcancel', onDocumentTouchEnd, false);
    }
    else
    {
        container.removeEventListener('mousemove', onDocumentMouseMove, false);
        container.removeEventListener('mouseup', onDocumentMouseUp, false);
        container.removeEventListener('mouseout', onDocumentMouseUp, false);
    }
}

function animate()
{
    // use spherical coordinatess
    // for mouse control viewing
    camera.position.x = rad * Sin(targetRotationY * multy) * Cos(targetRotationX * multx);
    camera.position.y = rad * Sin(targetRotationX * multx);
    camera.position.z = rad * Cos(targetRotationY * multy) * Cos(targetRotationX * multx);
    camera.lookAt(scene.position);

    // render
    TWEEN.update();
    renderer.render(scene, camera);

    // setup next animation
    requestAnimationFrame(animate);
}

function setDimensions()
{
    w = Math.min(window.innerWidth, 1600) - 20;
    h = Math.max(window.innerHeight - 80, 500);
    w2 = w/2;
    h2 = h/2;
    container.style.width = String(w)+"px";
    container.style.height = String(h)+"px";
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

var self = {
    init: function(images) {
        // setup the scene
        container = document.getElementById('container');

        scene = new THREE.Scene();
        projector = new THREE.Projector();
        camera = new THREE.PerspectiveCamera(50, 1.0, 1, 1000);
        camera.position.z = rad;
        scene.add(camera);

        // webgl renderer gives better rendering without problems
        renderer = new THREE.WebGLRenderer();
        setDimensions();
        container.appendChild(renderer.domElement);
        container.addEventListener('mousedown', onDocumentMouseDown, false);
        container.addEventListener('touchstart', onDocumentTouchStart, false);
        window.addEventListener('resize', setDimensions, false);

        // create book
        book = new FlipBook3D.Book();
        book.pageWidth = pagew;
        book.pageHeight = pageh;
        scene.add(book);

        // create pages
        for (var i=0; i<images.length; ++i)
            book.addPage(
                THREE.ImageUtils.loadTexture(images[i].f),
                THREE.ImageUtils.loadTexture(images[i].b),
                images[i].hard
            );

        // add flip controls
        fl = document.getElementById('flipleft');
        fl.addEventListener('click', function() {
            var plen = book.pages.length,
                pindex = plen-book.flippedright
            ;
            if (pindex >= 0 && pindex < plen)  book.pages[pindex].flipLeft();
        });
        fr = document.getElementById('flipright');
        fr.addEventListener('click', function() {
            var plen = book.pages.length,
                pindex = book.flippedleft-1
            ;
            if (pindex >= 0 && pindex < plen) book.pages[pindex].flipRight();
        });

        // start rendering
        requestAnimationFrame(animate);
    },

    animate : animate
};

// export it
window.FlipBook3DApplication = self;
}(window);