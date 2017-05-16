System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app:*": "app/*",
    "node_modules:*": "node_modules/*"
  },

  map: {
    "gemstoreApp": "app:appConfig/app",
    "storeControllers": "app:controllers/controllers",
    "storeDirectives": "app:directives/directives",
    "angular": "node_modules:angular/angular.min",
    "angularMaterial": "node_modules:angular-material/angular-material.min",
    "angularAnimate": "node_modules:angular-animate/angular-animate.min",
    "angularAria": "node_modules:angular-aria/angular-aria.min",  
    "traceur": "node_modules:traceur/bin/traceur",
    "traceur-runtime": "node_modules:traceur/bin/traceur-runtime"
  }

});
