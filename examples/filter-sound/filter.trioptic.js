!function(FILTER) {
"use strict";
/**
*
* Trioptic Sound FX as a FILTER.js plugin
*
**/

// upscale
var upscaleX = 2, upscaleY = 2, invupscaleX = 1.0/upscaleX, invupscaleY = 1.0/upscaleY;
// precompute some values
var i, l=1440, sintable = new FILTER.Array32F(l), squares = new FILTER.ImArray(l<<2),
    Sin = Math.sin, toRad = FILTER.CONST.toRad, toCol = FILTER.Color.Color2RGBA;
for (i=0; i<l; ++i)
{
    sintable[i] = Sin(i*toRad);
    toCol(~~(16777215*i*i), squares, i<<2); // * 0xFFFFFF
}

FILTER.Create({
    name: "TriopticSimpleFilter"

    // parameters
    ,spectrum: 0

    ,path: null

    ,serialize: function() {
        return {filter: this.name, params: {spectrum: this.spectrum}};
    }

    ,unserialize: function(json) {
        if (json && this.name === json.filter)
        {
            this.spectrum = json.params.spectrum || 0;
        }
        return this;
    }

    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        // im is a copy of the image data as an image array
        // w is image width, h is image height
        // for this filter, no need to clone the image data, operate in-place
        var l = im.length, iupx, iupy,
            s = this.spectrum, res=2,
            off, i, j, ii, i4, x, y, iw, jw,
            ws = upscaleX*w,
            wr = w*0.5  // w/res
        ;

        s = ~~s;
        i=0; iw=0; iupx=0; iupy=0;
        while (i < 1440)
        {
            i4 = i << 2;
            if (s>=0 && s<w && iupy<h)
            {
                off = (s + iw)<<2;
                im[off] = squares[i4]; im[off+1] = squares[i4+1]; im[off+2] = squares[i4+2];
                im[off+3] = 255;
            }

            j = 0; jw=0;
            while (j < res)
            {
                x = s*sintable[i] + jw - 50;
                y = iupy-0.5*iupy*(j%2); // i/j;
                if (x>=0 && x<w && y<h)
                {
                    off = (~~(x + y*ws))<<2;
                    im[off] = squares[i4]; im[off+1] = squares[i4+1]; im[off+2] = squares[i4+2];
                    im[off+3] = 255;
                }
                ++j; jw+=wr;
            }
            ++i; iw+=w; iupx+=invupscaleX; iupy+=invupscaleY;
        }
        // return the new image data
        return im;
    }
});
}(FILTER);
