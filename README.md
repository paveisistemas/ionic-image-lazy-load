ionic-image-lazy-load
=====================

Directive to Ionic Framework that's only load image when the image is seen by the user 

## Quick Start

Download the file JS ionic-image-lazy-load.js and load into your index.html

``` html
<script src="lib/ionic-image-lazy-load/ionic-image-lazy-load.js"></script>
```

Load into your module

``` javascript
angular.module('yourapp',
              ['ionic', 'ionic-image-lazy-load'])
```

You will need set scroller directive into your <ion-content>, that's listen the scroll event  

``` javascript
<ion-content scroller >
```

And set the img-lazy-src to the image attribute

``` javascript
 <img image-lazy-src="{{item.thumbs.video}}">
```
## Exemple
 
 http://codepen.io/pavei/pen/oFpCy
 
 