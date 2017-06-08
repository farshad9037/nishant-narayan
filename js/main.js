require.config({
    baseUrl: "js",
    paths: {
        'jQuery': 'vendors/jquery/jquery-3.2.1.min',
        'angular': 'vendors/angular/angular-1.6.1',
        'uiRouter': 'vendors/angular/angular-ui-router',
        'angularAMD': 'vendors/angular/angularAMD.min',
        'uiBootstrap': 'vendors/angular/ui-bootstrap-tpls-2.5.0',
        'bootstrapLightbox': 'vendors/angular/angular-bootstrap-lightbox',
        'angularSanitize': 'vendors/angular/angular-sanitize',
        'angularAnimate': 'vendors/angular/angular-animate',
        'bootstrap': 'vendors/bootstrap/js/bootstrap.min',
        'embed': 'vendors/ng-videosharing-embed/embed',
        'embed-videosharing': 'vendors/ng-videosharing-embed/ng-videosharing-embed.min',

        'angularReadMore': 'vendors/angular/readmore'
    },
    shim: {
        'angular': ['jQuery'],
        'bootstrap': ['jQuery'],
        'angularAMD': ['angular'],
        'uiRouter': ['angular'],
        'uiBootstrap': ['angular', 'bootstrap'],
        'bootstrapLightbox': ['uiBootstrap'],
        'angularSanitize': ['angular'],
        'angularAnimate': ['angular'],
        'angularReadMore': ['angularSanitize'],
        'embed': ['angular'],
        'embed-videosharing': ['embed']
    },
    deps: ['app']
});