!function( $, undef ){
    
    var images, $ul, coords, wl, hl, 
        duration, overlap, easing, delay, index, timer = null,
    
        cutimage = function( img, hl, wl, coords ) {
            var el = [ ], i, j, hli, $div, coord;
            for (i=0,hli=0; i<wl; i++,hli+=hl)
            {
                for (j=0; j<hl; j++)
                {
                    coord = coords[j + hli];
                    if ( coord.vis )
                    {
                        $div = $("<div class='diag-inside' data-coords='"+i+" "+j+"'></div>");
                        $div.css({
                            position: "absolute",
                            "z-index": 100,
                            left: coord.left+"px",
                            top: coord.top+"px",
                            width: coord.side+"px", 
                            height: coord.side+"px",
                            "background-position": coord.posx+"px "+coord.posy+"px",
                            "background-image": "url("+img+")","background-repeat":"no-repeat"
                        });
                        el.push({piece: $div, li: coord.li});
                    }
                }
            }
            return el;
        },
    
        //+ Jonas Raoni Soares Silva
        //@ http://jsfromhell.com/array/shuffle [v1.0]
        shuffle = function( o ) { //v1.0
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        },
    
        endTransition = function( ) {
            if ( null != timer ) clearTimeout( timer );
            $ul.children("li").children(".diag-remove").remove( );
            index=(index+1) % images.length;
            var nextimg = new Image();
            nextimg.onload = function( ) {
                setTimeout(function( ){ doTransition(index); }, 1000*delay);
            };
            nextimg.onerror = nextimg.onload;
            nextimg.src = images[index];
        },
        
        doTransition = function( ind ) {
            var p = cutimage( images[ind], wl, hl, coords );
            
            for (var i=0; i<p.length; i++)
            {
                //var $li=$ul.children("li[data-coords='"+p[i].coords.i+" "+p[i].coords.j+"']");
                p[i].li.children("div").css({'z-index':0}).addClass("diag-remove");
                p[i].piece.css({opacity:0}).appendTo(p[i].li);
            }
            var p = shuffle(p);
            var ngroups = p.length;
            var d = 1000*duration / (ngroups-(ngroups-1)*overlap);
            var o = d*overlap;
            var sd = d-o;
            for (var i=0;i<p.length;i++)
            {
                var animateoptions = {duration:d, easing:easing};
                var animateoptions2 = {duration:d, easing:easing};
                if ( i==p.length-1 )
                    animateoptions2.complete = function(){endTransition();};
                //p[i].li.children(".diag-remove").delay(i*sd).animate({opacity:0},animateoptions);
                p[i].piece.delay(i*sd).animate({opacity:1},animateoptions2);
            }
        }
    ;
    
    
$.fn.diagonalSlideshow = function( options ) {
    
    var defaults = {
        width: 500,
        height: 500,
        side: 100,
        easing: 'linear',
        duration: 3,
        delay: 5,
        overlap: 0.9,
        strict: true,
        images: [ ]
    };
    options = $.extend( defaults, options );

    
    var w = options.width;
    var h = options.height;
    var side = options.side;
    duration = options.duration;
    overlap = options.overlap;
    easing = options.easing;
    delay = options.delay;
    images = options.images;
    var i,j;
    $this = $(this);
    $this.empty( );
    var $cont = $("<div class='diag-container'></div>");
    $cont.appendTo( $this );
    $ul = $("<ul class='diag-list'></ul>");
    $ul.appendTo( $cont );
    coords = [ ];
    wl = Math.round( w/side );
    hl = Math.round( h/side );
    // re-adjust side if not exact multiple
    side = Math.min( Math.round(w/wl), Math.round(h/hl) );
    //var mrg=Math.floor(Math.sin(Math.PI/4)*Math.sqrt(2*(side*side)));
    // angle is 45 degrees
    var mrg = Math.floor( 0.5*Math.sqrt(2*(side*side)) );
    var mrg2 = 0.5*mrg;
    var mrgx2 = 2*mrg;
    wl = Math.round((w/mrg));
    hl = Math.round((0.5*h/mrg))+1;
    $cont.css({
        position: "relative",
        /*"margin-left":mrg2+"px",*/
        "margin-top": /*mrg+*/mrg2+"px",
        width: (w)+"px",
        height:(h)+"px"
    });
    var offset = 0;
    //console.log(mrg,wl,hl);
    for (i=0; i<wl; i++)
    {
        for (j=0; j<hl; j++)
        {
            var $li = $("<li data-coords='"+i+" "+j+"'></li>");
            $li.css({
                position: "absolute",
                width: (side)+"px", 
                height: (side)+"px",
                left: (i*(mrg))+"px",
                top: (j*(mrgx2)+offset)+"px"
            });
            var imgx = (-i*(mrg));
            var imgy = (-j*(mrgx2)-offset);
            coords[j+hl*i] = {li:$li,i:i,j:j,posx:imgx,posy:imgy,top:-mrg2,left:-mrg2,side:side+mrg,vis:false};
            // skip showing empty cells (no image)
            if (options.strict)
            {
                if (-imgx<(w-mrgx2) && -imgy<(h-mrgx2) && imgx<=0 && imgy<=0)
                {
                    $li.appendTo($ul); //$cont.append(el);
                    coords[j+hl*i].vis=true;
                }
            }
            else
            {
                if (-imgx<(w) && -imgy<(h))
                {
                    $li.appendTo($ul); //$cont.append(el);
                    coords[j+hl*i].vis=true;
                }
            }
        }
        if (offset==0)
        {
            offset = -mrg;
        }
        else
        {
            offset = 0;
        }
    }
    
    // init
    if (images.length>0)
    {
        index=0;
        var nextimg = new Image( );
        nextimg.onload = function( ) {
            doTransition( index );
        };
        nextimg.onerror = nextimg.onload;
        nextimg.src = images[index];
    }
};

}(jQuery);