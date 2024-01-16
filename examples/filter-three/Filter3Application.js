(function(window){
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
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    })();

}

var
    $F = FILTER,
    aside, test, restore, container, mouseXOnMouseDown, mouseYOnMouseDown,
    targetRotationOnMouseDownY = 0, targetRotationY = 0,
    targetRotationOnMouseDownX = 0, targetRotationX = 0,
    w, h, w2, h2,

    scene, camera, renderer, cube,
    sides = {bottom:3,top:2,  right:0,left:1, front:4,back:5},
    side = 400, N = 2, dsp = 0,
    colors = {
        inside: 0x2c2c2c,
        top: 0x2e1c3b,
        bottom: 0x2e1c3b,
        left: 0x2e1c3b,
        right: 0x2e1c3b,
        front: 0x2e1c3b,
        back: 0x2e1c3b
    },
    cubelets = [], xx, yy, zz,
    Nz = N, Nx = N, Ny = N,
    sidex = side, sidey = side, sidez = side,
    cubletsidex = sidex/(Nx+(Nx-1)*dsp),
    cubletsidey = sidey/(Ny+(Ny-1)*dsp),
    cubletsidez = sidez/(Nz+(Nz-1)*dsp),
    // build cubelets
    image = [], texture = [], position = [],
    mat, starmat, materials, cubelet,
    displacemap = new $F.Image(),
    // filters
    clr = new $F.ColorMatrixFilter().colorize(0xff0000),
    gray = new $F.ColorMatrixFilter().grayscale(),
    grc = new $F.ColorMatrixFilter().grayscale().contrast(1),
    blur = new $F.ConvolutionMatrixFilter().fastGauss(3),
    twirl = new $F.GeometricMapFilter().twirl(Math.PI/2, 120, 0.33, 0.27),
    sobel = new $F.ConvolutionMatrixFilter().sobel(3).setMode($F.MODE.GRAY),
    grs = new $F.CompositeFilter([gray, sobel]),
    emboss = new $F.ConvolutionMatrixFilter().emboss(),
    dF = new $F.DisplacementMapFilter(displacemap)
;

function setDimensions()
{
    w = Math.min(window.innerWidth, 1600)-20;
    h = Math.max(window.innerHeight-80, 500);
    w2 = w/2;
    h2 = h/2;
    container.style.width = w+"px";
    container.style.height = h+"px";
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

var self = {

    init : function() {
        container = document.getElementById('container'),
        test = document.getElementById('test'),
        restore = document.getElementById('restore');

        test.addEventListener('click', dotest, false);
        restore.addEventListener('click', dorestore, false);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(70, 1.0, 1, 1000);
        camera.position.z = 700;
        scene.add(camera);

        renderer = new THREE.CanvasRenderer();
        setDimensions();
        container.appendChild(renderer.domElement);

        cube=new THREE.Object3D();
        scene.add(cube);

        for (var i=0; i<8;i++)
        {
            // set closure callback
            image[i] = $F.Image.load(i&1?document.getElementById('Marcos').src:document.getElementById('Che').src, callback(i));
            texture[i] = new THREE.Texture(image[i].domElement);
        }

        mat = new THREE.MeshBasicMaterial( { color: colors.inside } );
        mat.name = 'inside';
        starmat = new THREE.MeshBasicMaterial( { map:THREE.ImageUtils.loadTexture(document.getElementById('RedStar').src) } );
        for (zz=0;zz<Nz;zz++)
        {
            for (xx=0;xx<Nx;xx++)
            {
                for (yy=0;yy<Ny;yy++)
                {
                    materials=[];
                    for (var mii=0;mii<6;mii++)
                    {
                        materials.push( mat );
                    }

                    // color external faces
                    if (yy==0)
                    {
                        //materials[sides['bottom']]=new THREE.MeshBasicMaterial( { map:THREE.ImageUtils.loadTexture('RedStar.jpg') } );
                        materials[sides['bottom']].color.setHex( colors.inside );
                        materials[sides['bottom']].name='bottom';
                    }
                    if (yy==Ny-1)
                    {
                        //materials[sides['top']]=new THREE.MeshBasicMaterial( { map:THREE.ImageUtils.loadTexture('RedStar.jpg') } );
                        materials[sides['top']].color.setHex( colors.inside );
                        materials[sides['top']].name='top';
                    }
                    if (xx==Nx-1)
                    {
                        materials[sides['right']]=starmat;
                        //materials[sides['right']].color.setHex( colors.right );
                        materials[sides['right']].name='right';
                    }
                    if (xx==0)
                    {
                        materials[sides['left']]=starmat;
                        //materials[sides['left']].color.setHex( colors.left );
                        materials[sides['left']].name='left';
                    }
                    if (zz==Nz-1)
                    {
                        materials[sides['front']]=starmat;
                        //materials[sides['front']].color.setHex( colors.front );
                        materials[sides['front']].name='front';
                    }
                    if (zz==0)
                    {
                        materials[sides['back']]=starmat;
                        //materials[sides['back']].color.setHex( colors.back );
                        materials[sides['back']].name='back';
                    }
                    // add diagonal (filtered) images
                    if (yy==1 && xx==0 && zz==1)
                    {
                        materials[sides['front']]=new THREE.MeshBasicMaterial({map:texture[0], transparent:true, overdraw:true});
                    }
                    if (yy==0 && xx==1 && zz==1)
                    {
                        materials[sides['front']]=new THREE.MeshBasicMaterial({map:texture[1], transparent:true, overdraw:true});
                    }
                    if (yy==1 && xx==1 && zz==0)
                    {
                        materials[sides['back']]=new THREE.MeshBasicMaterial({map:texture[2], transparent:true, overdraw:true});
                    }
                    if (yy==0 && xx==0 && zz==0)
                    {
                        materials[sides['back']]=new THREE.MeshBasicMaterial({map:texture[3], transparent:true, overdraw:true});
                    }
                    if (yy==1 && xx==1 && zz==1)
                    {
                        materials[sides['right']]=new THREE.MeshBasicMaterial({map:texture[4], transparent:true, overdraw:true});
                    }
                    if (yy==0 && xx==1 && zz==0)
                    {
                        materials[sides['right']]=new THREE.MeshBasicMaterial({map:texture[5], transparent:true, overdraw:true});
                    }
                    if (yy==1 && xx==0 && zz==1)
                    {
                        materials[sides['left']]=new THREE.MeshBasicMaterial({map:texture[6], transparent:true, overdraw:true});
                    }
                    if (yy==0 && xx==0 && zz==0)
                    {
                        materials[sides['left']]=new THREE.MeshBasicMaterial({map:texture[7], transparent:true, overdraw:true});
                    }

                    // new cubelet
                    cubelet = new THREE.Mesh(  new THREE.CubeGeometry( cubletsidex, cubletsidey, cubletsidez, 3, 3, 3 ), new THREE.MeshFaceMaterial(materials) );

                    // position it centered
                    cubelet.position.x = (cubletsidex+dsp*cubletsidex)*xx -sidex/2 +cubletsidex/2;
                    cubelet.position.y = (cubletsidey+dsp*cubletsidey)*yy -sidey/2 +cubletsidey/2;
                    cubelet.position.z = (cubletsidez+dsp*cubletsidez)*zz -sidez/2 +cubletsidez/2;
                    cubelet.overdraw = true;
                    // add it
                    cube.add(cubelet);
                }
            }
        }

        container.addEventListener( 'touchstart', onDocumentMouseDown, false );
        container.addEventListener( 'mousedown', onDocumentMouseDown, false );
        window.addEventListener( 'resize', setDimensions, false );

        requestAnimationFrame( animate );
    }
};

// closure
function callback(ind)
{
    return function() {
        texture[ind].needsUpdate = true;
        if (ind==7)
        {
            displacemap.setDimensions(image[7].width,image[7].height);
            var octx = displacemap.domElement.getContext('2d');
            octx.fillStyle="rgb(128,128,128)";
            octx.fillRect(0,0,displacemap.width,displacemap.height);
            // create radial gradient
            var grd = octx.createRadialGradient(displacemap.width/2, displacemap.height/2, 0, displacemap.width/2, displacemap.height/2, displacemap.width/2);
            grd.addColorStop(1, "#808080"); // neutral
            grd.addColorStop(0, "#ffffff"); // white
            octx.fillStyle = grd;
            octx.beginPath();
            octx.arc(displacemap.width/2,displacemap.height/2,displacemap.width/2,0,Math.PI*2,true);
            octx.fill();
            displacemap.store();
        }
    };
}

function dotest(event)
{
    clr.apply(image[1]);
    grc.apply(image[2]);
    blur.apply(image[3]);
    twirl.apply(image[4]);
    grs.apply(image[5]);
    emboss.apply(image[6]);
    //dF.setInput("map", displacemap);
    dF.scaleX = 100;
    dF.scaleY = 100;
    dF.apply(image[7]);
    for (var i=1;i<8;++i)
        texture[i].needsUpdate = true;
}
function dorestore(event)
{
    for (var i=1;i<8;i++)
    {
        image[i].restore();
        texture[i].needsUpdate = true;
    }
}

function onDocumentMouseDown( event ) {

    event.preventDefault();
    var clientX = event.changedTouches && event.changedTouches.length ? event.changedTouches[0].clientX : event.clientX,
        clientY = event.changedTouches && event.changedTouches.length ? event.changedTouches[0].clientY : event.clientY;

    container.addEventListener( 'touchmove', onDocumentMouseMove, false );
    container.addEventListener( 'touchend', onDocumentMouseUp, false );
    container.addEventListener( 'touchcancel', onDocumentMouseUp, false );
    container.addEventListener( 'mousemove', onDocumentMouseMove, false );
    container.addEventListener( 'mouseup', onDocumentMouseUp, false );
    container.addEventListener( 'mouseout', onDocumentMouseUp, false );

    mouseXOnMouseDown = clientX - w2;
    mouseYOnMouseDown = clientY - h2;
    targetRotationOnMouseDownY = targetRotationY;
    targetRotationOnMouseDownX = targetRotationX;
}

function onDocumentMouseMove( event ) {

    event.preventDefault();
    var clientX = event.changedTouches && event.changedTouches.length ? event.changedTouches[0].clientX : event.clientX,
        clientY = event.changedTouches && event.changedTouches.length ? event.changedTouches[0].clientY : event.clientY,
        mouseX = clientX - w2, mouseY = clientY - h2;

    targetRotationY = targetRotationOnMouseDownY + ( mouseX - mouseXOnMouseDown ) * 0.02;
    targetRotationX = targetRotationOnMouseDownX + ( mouseY - mouseYOnMouseDown ) * 0.02;
}

function onDocumentMouseUp( event )
{
    event.preventDefault();
    container.removeEventListener( 'touchmove', onDocumentMouseMove, false );
    container.removeEventListener( 'touchend', onDocumentMouseUp, false );
    container.removeEventListener( 'touchcancel', onDocumentMouseUp, false );
    container.removeEventListener( 'mousemove', onDocumentMouseMove, false );
    container.removeEventListener( 'mouseup', onDocumentMouseUp, false );
    container.removeEventListener( 'mouseout', onDocumentMouseUp, false );
}

//

function animate( )
{
    cube.rotation.y += ( targetRotationY - cube.rotation.y ) * 0.05;
    cube.rotation.x += ( targetRotationX - cube.rotation.x ) * 0.05;
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}

// export it
window.Filter3Application = self;

})(window);