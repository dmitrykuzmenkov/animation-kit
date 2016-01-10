#animation-kit
Animation KIT for you website using CSS  

*Notice.* Animation KIT is optimzed to use with webpack.
## Demo
You can try animations online here: http://dmitrykuzmenkov.github.io/animation-kit/

## Installation
Use npm to install package

```bash
npm install animation-kit
```

## Usage
First you must require installed npm package and pass to it animated dom element to catch animations.

Import needed less styles for your animation

```less
@import 'node_modules/animation-kit/src/main.less';
@import 'node_modules/animation-kit/src/attention/bounce.less';
```

Then select DOM element using query selector for example and manage animation on it following this example:

```javascript
var animation = require('animation-kit');
var element = document.getElementById('my-dom-element');
animation(element)
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

Pay attetion you need to require used animated styles too.

## Animation list
All animation has dash (-) notation in names. Keyframes for animation has camelNotationName.  
Here is full list of supported CSS animation name that you can use in animate function

 - bounce
 - flash
 - head-shake
 - jello
 - pulse
 - rubber-band
 - shake
 - swing
 - tada
 - wobble
 - boing-in-up
 - boing-out-down
 - bomb-left-out
 - bomb-right-out
 - bounce-in-down
 - bounce-in-left
 - bounce-in-right
 - bounce-in-up
 - bounce-in
 - bounce-out-down
 - bounce-out-left
 - bounce-out-right
 - bounce-out-up-animation
 - bounce-out
 - fade-in-down-big
 - fade-in-down
 - fade-in-left-big
 - fade-in-left
 - fade-in-right-big
 - fade-in-right
 - fade-in-up-big
 - fade-in-up
 - fade-in
 - fade-out-down-big
 - fade-out-down
 - fade-out-left-big
 - fade-out-left
 - fade-out-right-big
 - fade-out-right
 - fade-out-up-big
 - fade-out-up
 - fade-out
 - flip-in-x
 - flip-in-y
 - flip-out-x
 - flip-out-y
 - flip
 - lightspeed-in
 - lightspeed-out
 - rotate-in-down-left
 - rotate-in-down-right
 - rotate-in-up-left
 - rotate-in-up-right
 - rotate-in
 - rotate-out-down-left
 - rotate-out-down-right
 - rotate-out-up-left
 - rotate-out-up-right
 - rotate-out
 - slide-in-down
 - slide-in-left
 - slide-in-right
 - slide-in-up
 - slide-out-down
 - slide-out-left
 - slide-out-right
 - slide-out-up
 - space-in-down
 - space-in-left
 - space-in-right
 - space-in-up
 - space-out-down
 - space-out-left
 - space-out-right
 - space-out-up
 - swash-in
 - swash-out
 - swap
 - twister-in-down
 - twister-in-up
 - hinge
 - hole-out
 - magic
 - roll-in
 - roll-out
 - zoom-in-down
 - zoom-in-left
 - zoom-in-right
 - zoom-in-up
 - zoom-in
 - zoom-out-down
 - zoom-out-left
 - zoom-out-right
 - zoom-out-up
 - zoom-out

## Methods
### animate(animation, opts)
 - **animation** - name of animation to perform
 - **opts** - object with options
 - - *keep* - keep element state after animation is done (default: false)
 - - *infinite* - loop animation infinitly (default: false)

### start(cb)
 - **cb** - callback that will be called after animation start

### end(cb)
 - **cb** - callback that will be called after animation finished

### iteration(cb)
 - **cb** - callback that will be called on animation iteraction
