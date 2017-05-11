System.config({
    transpiler: "plugin-babel",
    paths: {
        "app:": "app/",
        "node_modules:": "node_modules/"
    },
    map: {
        "boot": "app/appConfig/boot.js",
        "ngPaiApp": "app:appConfig/app.js",
        "ngPaiControllers": "app:controllers/controllers.js",
        "ngPaiDirectives": "app:directives/directives.js",
        "angular": "node_modules:angular/angular.min.js",
        "angularMaterial": "node_modules:angular-material/angular-material.min.js",
        "angularMaterialCustom111": "node_modules:angular-material/angular-materialv111-fh-githubIssue9260.min.js",
        "angularAnimate": "node_modules:angular-animate/angular-animate.min.js",
        "angularAria": "node_modules:angular-aria/angular-aria.min.js",
        "angularMessages": "node_modules/angular-messages/angular-messages.min.js",
        "angularRoute": "node_modules/angular-route/angular-route.min.js",
        "jQuery": "node_modules:jquery/dist/jquery.min.js",
        "detectPlatform": "node_modules/Detectjs/detect.min.js",
        "moment": "/node_modules/moment/min/moment-with-locales.min.js",
        "plugin-babel": "node_modules/plugin-babel-master/plugin-babel.js",
        "systemjs-babel-build": "node_modules/plugin-babel-master/systemjs-babel-browser.js"
    }

});