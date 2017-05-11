(function () {
    
    var app = angular.module('ngPai', ['ngMaterial', 'ngRoute', 'ngPaiControllers', 'ngPaiDirectives']);

    app.config(function ($mdIconProvider) {
        $mdIconProvider
            .iconSet("action", "Content/angular-material-icons/action.svg")
            .iconSet("alert", "Content/angular-material-icons/alert.svg")
            .iconSet("av", "Content/angular-material-icons/av.svg")
            .iconSet("communication", "Content/angular-material-icons/communication.svg")
            .iconSet("content", "Content/angular-material-icons/content.svg")
            .iconSet("device", "Content/angular-material-icons/device.svg")
            .iconSet("editor", "Content/angular-material-icons/editor.svg")
            .iconSet("file", "Content/angular-material-icons/file.svg")
            .iconSet("hardware", "Content/angular-material-icons/hardware.svg")
            .iconSet("image", "Content/angular-material-icons/image.svg")
            .iconSet("maps", "Content/angular-material-icons/maps.svg")
            .iconSet("navigation", "Content/angular-material-icons/navigation.svg")
            .iconSet("notification", "Content/angular-material-icons/notification.svg")
            .iconSet("social", "Content/angular-material-icons/social.svg")
            .iconSet("toggle", "Content/angular-material-icons/toggle.svg")

            .icon("logoDecandido", "Content/svg/logoDecandido.svg", 128)
            .icon("logoDecandido2", "Content/svg/logoDecandido2.svg", 128)
            .icon("svgVentas", "Content/svg/cashier-1.svg", 128)
            .icon("svgInventario", "Content/svg/box-2.svg", 128)
            .icon("svgUser", "Content/svg/user.svg", 128);

    });

    app.config(function ($mdThemingProvider) {

        var customPalette = {
            '50': '#ffffff',
            '100': '#f58e63',
            '200': '#f37c4b',
            '300': '#f26b33',
            '400': '#f05a1c',
            '500': '#E34D0F',
            '600': '#cb450d',
            '700': '#b33d0c',
            '800': '#9b350a',
            '900': '#832d09',
            'A100': '#f8b193',
            'A200': '#35A62D', //# f9c2ab
            'A400': '#fbd3c3',
            'A700': '#fbd3c3',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['10', '50', '100', '200', '300', '400', 'A100'], //hues which contrast should be 'dark' by default
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        }

        var paletteHueForPrimary = { 'default': '500', 'hue-1': '50', 'hue-2': '600', 'hue-3': 'A100' };
        var paletteHueForAccent = { 'default': '500', 'hue-1': '50', 'hue-2': '600', 'hue-3': 'A100' };
        var paletteHueForWarn = { 'default': '500', 'hue-1': '50', 'hue-2': '600', 'hue-3': 'A100' };

        $mdThemingProvider.definePalette('custom', customPalette);
        $mdThemingProvider
            .theme('default')
            .primaryPalette('custom', paletteHueForPrimary)
            .accentPalette('custom' /*, paletteHueForAccent*/)
            .warnPalette('custom' /*, paletteHueForWarn*/);

    });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/dashboard", { templateUrl: "views/dashboard.html" })
            .when("/ventas", { templateUrl: "views/ventas.html" })
            .when("/inventario", { templateUrl: "views/inventario.html" })
            .when("/directiva", { templateUrl: "views/directiva.html" })
            .otherwise({ redirectTo: "dashboard" });
    }]);


    app.config(function ($mdDateLocaleProvider) {

        // spanish localization.
        $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        $mdDateLocaleProvider.shortDays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

        // Monday first day of week
        $mdDateLocaleProvider.firstDayOfWeek = 1;

        // Parse using moment.js
        $mdDateLocaleProvider.parseDate = function (dateString) {
            var m = moment(dateString, 'L', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
        // Format using moment.js
        $mdDateLocaleProvider.formatDate = function (date) {
            var m = moment(date);
            m.locale("es");
            return m.isValid() ? m.format('L') : '';
        };


    });


    app.run(function () {
        console.log('ngPai Bootstraping complete! ^^. spg')
    });

})();