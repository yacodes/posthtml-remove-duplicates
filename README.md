# Posthtml-remove-duplicates <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM version](http://img.shields.io/npm/v/posthtml-remove-duplicates.svg)](https://www.npmjs.org/package/posthtml-remove-duplicates)
[![Travis Build Status](https://travis-ci.org/canvaskisa/posthtml-remove-duplicates.svg)](https://travis-ci.org/canvaskisa/posthtml-remove-duplicates)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Installation
```console
$ npm i --save posthtml-remove-duplicates
```

## Usage
```html
<!-- index.html -->
<html>
<body>
  <style>.a {color: black;}</style>
  <style>.a {color: black;}</style>
</body>
</html>
```

```js
/* index.js */
var fs = require('fs');
var posthtml = require('posthtml');

posthtml()
  .use(require('posthtml-remove-duplicates')('style'))
  .process(fs.readFileSync('index.html', 'utf8'))
  .then(function(result) {
    return result; 

    /**
     * <html>
     *  <body>
     *    <style>.a {color: black;}</style>
     *  </body>
     * </html>
     */
  });
```

## Api
`selector: string`: Selector to match html elements, passed to [posthtml-match-helper](https://github.com/rasmusfl0e/posthtml-match-helper).

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
