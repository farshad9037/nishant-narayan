define(['angularAMD'], function (angularAMD) {
    angularAMD.directive('setViewportHeight', ['$window', function ($window) {
        return {
            restrict: 'A',
            compile: function (element, attr) {
                element.css({
                    height: $window.innerHeight
                });
            }
        };
    }]);
});