ionic-image-lazy-load
=====================


## Quick Start

Download the file JS *ionic-image-lazy-load.js*, save on your project and load it on your *index.html*.

``` html
<script src="path/to/ionic-image-lazy-load.js"></script>
```

Load into your module:

``` javascript
angular.module('yourapp',
              ['ionic', 'ionicLazyLoad'])
```

Set the `lazy-scroll` directive on your `<ion-content>` tag, that will listen to the scroll event:

``` javascript
<ion-content lazy-scroll>
```

And set the `img-lazy-src` directive on the image attribute instead of `src`:

``` javascript
 <img image-lazy-src="{{item.thumbnail}}">
```

You can also set an option to auto call `$ionicScrollDelegate.resize()` when the image `load` (default value is `false`):

``` javascript
 <img image-lazy-src="{{item.thumbnail}}" lazy-scroll-resize="true">
```
