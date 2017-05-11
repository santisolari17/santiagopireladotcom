(function () {

    var d = angular.module('ngPaiDirectives', []);

    d.directive('ngpaiDirective', function ($compile, $interpolate) {
        return {
            template: '',
            link: function($scope, element, attributes) {
                element.replaceWith($compile('<span class=\"' + attributes.ngpaiDirective + '\"></span>')($scope));
            }
        };
    })

    d.directive('ngpaiContenedores', function () {
        return {
            restrict: 'C',
            templateUrl: 'app/directives/directivesTemplates/ngpaiContenedores.html',
        };

    });

    d.directive('ngpaiTest', function () {
        return {
            restrict: 'C',
            templateUrl: 'app/directives/directivesTemplates/ngpaiTest.html'
        };

    });

    d.directive('searchProducts', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_searchProduct.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'searchProducts';
            },
            controllerAs: 'pCtrl'
        };
    });

    d.directive('dateRange', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_dateRange.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'Periodo';
            },
            controllerAs: 'dCtrl'
        };
    });

    d.directive('monthSelect', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_monthSelect.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'monthSelect';
            },
            controllerAs: 'mCtrl'
        };
    });

    d.directive('localeSelect', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_localeSelect.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'localeSelect';
            },
            controllerAs: 'lCtrl'
        };
    });

    d.directive('localeOption', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_localeOption.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'localeOption';
            },
            controllerAs: 'oCtrl'
        };
    });

    d.directive('inputCedula', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_inputCedula.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'inputCedula';
            },
            controllerAs: 'cCtrl'
        };
    });

    d.directive('searchProviders', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_searchProvider.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'searchProviders';
            },
            controllerAs: 'prCtrl'
        };
    });

    d.directive('inputCaja', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_inputCaja.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'inputCaja';
            },
            controllerAs: 'caCtrl'
        };
    });

    d.directive('departmentSelect', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_departmentSelect.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'departmentSelect';
            },
            controllerAs: 'deCtrl'
        };
    });

    d.directive('hourRange', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_hourRange.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'hourRange';
            },
            controllerAs: 'hCtrl'
        };
    });

    d.directive('periodonominaGp', function () {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/directivesTemplates/directiveView_periodonominaGp.html',
            transclude: false,
            controller: function () {
                var self = this;
                self.name = 'periodonominaGp';
            },
            controllerAs: 'pnGpCtrl'
        };
    });

})();