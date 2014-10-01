ionic-image-lazy-load
=====================

Directive for the [Ionic Framework](http://ionicframework.com/) that only loads an image when it is seen by the user. 
It uses the scroller event to load the image only when it appears on screen.

## Quick Start

Download the file JS *ionic-image-lazy-load.js*, save on your project and load it on your *index.html*.

``` html
<script src="path/to/ionic-image-lazy-load.js"></script>
```

Load into your module:

``` javascript
angular.module('yourapp',
              ['ionic', 'ionic-image-lazy-load'])
```

Set the `scroller` directive on your `<ion-content>` tag, that will listen to the scroll event:

``` javascript
<ion-content scroller >
```

And set the `img-lazy-src` directive on the image attribute instead of `src`:

``` javascript
 <img image-lazy-src="{{item.thumbnail}}">
```
## Example
 
 http://codepen.io/pavei/pen/oFpCy
 
 
