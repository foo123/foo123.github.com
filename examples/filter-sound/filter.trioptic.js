!function($F){
    
    /**
    *
    * Trioptic Sound FX as a FILTER.js plugin
    *
    **/
    
    // upscale
    var upscaleX = 1.7, upscaleY = 1.7, invupscaleX = 1.0/upscaleX, invupscaleY = 1.0/upscaleY;
    $F.TriopticSimpleFilter = $F.Create({
        name: "TriopticSimpleFilter"
        
        // parameters
        ,spectrum: 0
        
        ,path: $F.getPath( )
        
        ,serialize: function( ) {
            return { filter: this.name, params: { spectrum: this.spectrum } };
        }
        
        ,unserialize: function( json ) {
            if ( json && this.name === json.filter )
            {
                this.spectrum = json.params.spectrum || 0;
            }
            return this;
        }
        
        // use a "closure" to store some precomputed values
        ,apply: (function( ) {
                
                // precompute some values
                var i, l=1440, 
                    sintable = new $F.Array32F( l ), 
                    squares = new $F.Array( l ),
                    Sin = Math.sin, 
                    toRad = $F.CONSTANTS.toRad,
                    toCol = $F.Color.Color2RGBA
                    ;
                    
                i = 0;
                while ( i < l )
                {
                    sintable[ i ] = Sin( i*toRad );
                    squares[ i ] = toCol( ~~(16777215*i*i) ); // * 0xFFFFFF
                    i++;
                }
            
                // this is the filter actual apply method routine
                return function( im, w, h ) {
                    // im is a copy of the image data as an image array
                    // w is image width, h is image height
                    // for this filter, no need to clone the image data, operate in-place
                    var l = im.length, iupx, iupy,
                        s = this.spectrum, res=2,
                        off, rgba, i, j, ii, x, y, iw, jw, 
                        ws = upscaleX*w,
                        wr = w*0.5  // w/res
                    ;
                    
                    s = ~~s;
                    i=0; iw=0; iupx=0; iupy=0;
                    while ( i < 1440 )
                    {
                        rgba = squares[ i ];
                        if (s>=0 && s<w && iupy<h)
                        {
                            off = (s + iw)<<2; 
                            im[off] = rgba.r; im[off+1] = rgba.g; im[off+2] = rgba.b;
                        }
                        
                        j = 0; jw=0;
                        while ( j < res )
                        {
                            x = s*sintable[ i ] + jw - 50;  
                            y = iupy-0.5*iupy*(j%2); // i/j;
                            if (x>=0 && x<w && y<h)
                            {
                                off = (~~(x + y*ws))<<2;
                                im[off] = rgba.r; im[off+1] = rgba.g; im[off+2] = rgba.b;
                            }
                            j++; jw+=wr;
                        }
                        i++; iw+=w; iupx+=invupscaleX; iupy+=invupscaleY;
                    }
                    
                    // return the new image data
                    return im;
                }
        })( )
    });
 }(FILTER);   
