/**
 * Created by PAVEI on 30/09/2014.
 */

angular.module('ionic-img-lazy-load', []);

angular.module('ionic-img-lazy-load').directive(
    'scroller', function ($rootScope, $timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $element) {

                var scrollTimeoutId = 0;

                $scope.invoke = function () {
                    $rootScope.$broadcast('scrollEvent');
                };

                $element.bind('scroll', function () {

                    $timeout.cancel(scrollTimeoutId);

                    // wait for 200ms and then invoke listeners (simulates stop event)
                    scrollTimeoutId = $timeout($scope.invoke, 50);

                });


            }
        };
    });

angular.module('ionic-img-lazy-load').directive(
    'imageLazySrc', function ($document) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attributes) {

                var deregistration = $scope.$on('scrollEvent', function () {
                        console.log('scroll');
                        if (isInView()) {
                            $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)
                            deregistration();
                        }
                    }
                );

                function isInView() {

                    var clientHeight = $document[0].documentElement.clientHeight;
                    var clientWidth = $document[0].documentElement.clientWidth;
                    var imageRect = $element[0].getBoundingClientRect();
                    return  (imageRect.top >= 0 && imageRect.bottom <= clientHeight) && (imageRect.left >= 0 && imageRect.right <= clientWidth);
                }

                // bind listener
                // listenerRemover = scrollAndResizeListener.bindListener(isInView);

                // unbind event listeners if element was destroyed
                // it happens when you change view, etc
                $element.on('$destroy', function () {
                    deregistration();
                });

                // explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
                if (isInView()) {
                    $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)
                    deregistration();
                }
            }
        };
    }
);