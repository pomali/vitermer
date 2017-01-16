const Pageres = require('pageres');
const imageToAscii = require('image-to-ascii')
const w = 800
const h = 2000
const pageres = new Pageres({delay: 2})
    .src('http://sme.sk', [`${w}x${h}`])
    .dest('.')
    .run()
    .then( (x) => 
        {
            imageToAscii(`sme.sk-${w}x${h}.png`, {pxWidth: w, size: {width: w/10, height: 80}}, (e,i) => console.log(e || i ))
        }
    )
    .catch((e) => {
        console.log('Promise rejected', e)
    })
