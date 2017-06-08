
'use strict';
define(['angularAMD', 'uiRouter', 'bootstrapLightbox', 'angularSanitize', 'angularAnimate', 'angularReadMore', 'embed-videosharing',
    'directives/setViewportHeightDirective'
], function (angularAMD) {
    var app = angular.module('webApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'bootstrapLightbox',
        'videosharing-embed',
        'hm.readmore'
    ]);

    app.run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 60;
    }]);

    // app.config([
    //     '$stateProvider',
    //     '$urlRouterProvider',
    //     '$controllerProvider',
    //     '$compileProvider',
    //     '$filterProvider',
    //     '$provide',
    //     function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    //         app.register = {
    //             controller: $controllerProvider.register,
    //             directive: $compileProvider.directive,
    //             filter: $filterProvider.register,
    //             factory: $provide.factory,
    //             service: $provide.service
    //         };
    //     }
    // ]);

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'home': {
                        templateUrl: 'partials/home.html'
                    },
                    'whatIsVastu': {
                        templateUrl: 'partials/what-is-vastu.html'
                    },
                    'aboutNishant': {
                        templateUrl: 'partials/about-nishant.html'
                    },
                    'whatIsAccurateVastu': {
                        templateUrl: 'partials/what-is-accurate-vastu.html'
                    },
                    'consultingProcess': {
                        templateUrl: 'partials/consulting-process.html'
                    },
                    'pricing': {
                        templateUrl: 'partials/pricing.html'
                    },
                    'videos': {
                        templateUrl: 'partials/videos.html'
                    },
                    'memberArea': {
                        templateUrl: 'partials/member-area.html'
                    },
                    'contact': {
                        templateUrl: 'partials/contact.html'
                    }
                }
            })
        $locationProvider.html5Mode(true);
    });

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

    app.controller('CommonController', ['$anchorScroll', '$location', '$scope', 'Lightbox',
        function ($anchorScroll, $location, $scope, Lightbox) {
            $scope.videos = [{
                'url': 'http://www.youtube.com/watch?v=LOKyEt36Kjc',
            }, {
                'url': 'http://www.youtube.com/watch?v=LOKyEt36Kjc',
            }, {
                'url': 'http://www.youtube.com/watch?v=LOKyEt36Kjc',
            }];

            $scope.videoSelected = function(videoId, provider) {
                if (videoId) {
                    console.log("Video from " + provider + " with id " + videoId + " was selected");
                } else {
                    console.log("No valid URL entered");
                }
            }
            $scope.gotoAnchor = function (x) {
                $location.hash(x);
                $anchorScroll();
            };
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.slides = [{
                id: 0,
                image: 'css/images/ambani_1.png'
            }, {
                id: 1,
                image: 'css/images/ambani_2.jpg'
            }, {
                id: 2,
                image: 'css/images/ambani_3.jpg'
            }]
        }
    ]);

    return angularAMD.bootstrap(app);
});

