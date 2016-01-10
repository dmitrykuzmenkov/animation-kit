#animation-kit
Animation KIT for you website using CSS

*Notice.* Animation KIT is optimzed to use with webpack.

## Installation
Use npm to install package

```bash
npm install animation-kit
```

## Usage
First you must require installed npm package and pass to it animated dom element to catch animations.
Follow example

```javascript
require('animation-kit/src/attention/bounce.less');
var anim = require('animation-kit');
var element = document.getElementById('my-dom-element');
anim(element)
  .animate('bounce')
  .start(function (e) {
    console.log('Animation started');
  })
  .iteration(function (e) {
    console.log('Animation iteration');
  })
  .end(function (e) {
    console.log('Animation end');
  })
;
```

Pay attetion that you have to include needed animation

## Animation list
All animation has dash (-) notation in names. Keyframes for animation has camelNotationName.
Here is full list of supported CSS animation classes

*Coming soon*
