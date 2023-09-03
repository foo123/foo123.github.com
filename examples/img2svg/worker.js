"use strict";

importScripts('img2svg.min.js?refresh=1');

function uint8(x)
{
    return Math.min(Math.max(Math.round(x), 0), 255);
}
function grayscale(img, w, h)
{
    const l = img.length, newimg = new Uint8ClampedArray(l);
    for (let i=0; i<l; i+=4)
    {
        newimg[i+2] = newimg[i+1] = newimg[i  ] = uint8(0.2126*img[i  ]+0.7152*img[i+1]+0.0722*img[i+2]);
        newimg[i+3] = img[i+3];
    }
    return newimg;
}
function contrast(img, w, h, amount)
{
    const l = img.length, newimg = new Uint8ClampedArray(l),
        m = 1.0 + amount, b = 128 * (1 - m);
    for (let i=0; i<l; i+=4)
    {
        newimg[i  ] = uint8(m*img[i  ] + b);
        newimg[i+1] = uint8(m*img[i+1] + b);
        newimg[i+2] = uint8(m*img[i+2] + b);
        newimg[i+3] = img[i+3];
    }
    return newimg;
}
function blur(img, w, h, radius)
{
    const l = img.length, size = l >>> 2,
        satR = new Float32Array(size),
        satG = new Float32Array(size),
        satB = new Float32Array(size),
        newimg = new Uint8ClampedArray(l),
        w4 = w << 2, r = radius >>> 1;
    let src = newimg, dst = img, i, j, k,
        x, y, x0, y0, x1, y1, cR, cG, cB;
    for (let repeat=0; repeat<4; ++repeat)
    {
        let tmp = src;
        src = dst;
        dst = tmp;
        cR = cG = cB = 0;
        for (i=0,j=0,x=0; x<w; ++x,i+=4,++j)
        {
            cR += src[i  ]; satR[j] = cR;
            cG += src[i+1]; satG[j] = cG;
            cB += src[i+2]; satB[j] = cB;
        }
        cR = cG = cB = 0;
        for (i=w4,j=0,x=0; i<l; i+=4,++j,++x)
        {
            if (x >= w) {x = 0; cR = cG = cB = 0;}
            cR += src[i  ]; satR[j+w] = satR[j]+cR;
            cG += src[i+1]; satG[j+w] = satG[j]+cG;
            cB += src[i+2]; satB[j+w] = satB[j]+cB;
        }
        for (i=0,x=0,y=0; i<l; i+=4,++x)
        {
            if (x >= w) {x = 0; ++y;}
            x0 = x - r;
            x1 = x + r;
            y0 = y - r;
            y1 = y + r;
            if (x0 < 0) x0 = 0;
            if (x1 >= w) x1 = w-1;
            if (y0 < 0) y0 = 0;
            if (y1 >= h) y1 = h-1;
            j = x0 + y0*w;
            k = x1 + y1*w;
            dst[i  ] = uint8((satR[k] - satR[j])/(k - j + 1));
            dst[i+1] = uint8((satG[k] - satG[j])/(k - j + 1));
            dst[i+2] = uint8((satB[k] - satB[j])/(k - j + 1));
            dst[i+3] = src[i+3];
        }
    }
    return dst;
}
onmessage = function(e) {
    const imageData = e.data.imageData;
    const filters = e.data.filters || {};
    const params = e.data.params || {};
    let img = imageData.data, w = imageData.width, h = imageData.height;
    if (filters.grayscale) img = grayscale(img, w, h);
    if (filters.contrast && 0 < filters.contrast.amount) img = contrast(img, w, h, filters.contrast.amount);
    if (filters.blur && 0 < filters.blur.radius) img = blur(img, w, h, filters.blur.radius);
    postMessage(img2svg(new ImageData(img, w, h), params));
};