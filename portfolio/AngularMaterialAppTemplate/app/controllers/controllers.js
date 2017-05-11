(function () {

    var ctrls = angular.module('ngPaiControllers', ['ngMaterial']);

    ctrls.controller('sidenavController', ['$scope', '$mdMedia', function ($scope, $mdMedia) {

        var self = this;

        self.isOpen = false;
        self.menuId = 0;
        self.selectedContainer = 0;

        self.lSidenavObjs = [
            { mdSvgIcon: "action:description" },
            { mdSvgIcon: "action:list" },
            { mdSvgIcon: "action:settings" },
            { mdSvgIcon: "action:search" },
            { mdSvgIcon: "action:info_outline" }
        ];

        self.tSidenavObjs = [
            { ngpaiDirective: "ngpaiContenedores" },
            { ngpaiDirective: "ngpaiTest" }
        ];

        self.ngpaiContenedoresObjs = [
            { name: "Ventas", ngRouteHref: "#/ventas", mdSvgIcon: "svgVentas" },
            { name: "Inventario", ngRouteHref: "#/inventario", mdSvgIcon: "svgInventario" },
            { name: "Directiva", ngRouteHref: "#/directiva", mdSvgIcon: "svgInventario" }
        ];

        self.rptObj = {
            rptVentas: [
                { rptName: "Reporte de Ventas Detalladas" },
                { rptName: "Reporte de Ventas Sumarizadas" },
                { rptName: "Matriz de Ventas Mensuales" }
            ],
            rptInventario: [
                { rptName: "Reporte ORV por Proveedor" },
                { rptName: "Reporte de Movimiento de Inventario Diario" },
                { rptName: "Reporte de Recepciones Detalladas" },
                { rptName: "Reporte de Transferecnias Detalladas" }
            ],
            rptDirectiva: [
                { rptName: "Matriz de Compras (Recepciones) y Ventas por Sucursal" },
                { rptName: "Matriz de Ventas Acumuladas por Sucursal y Departamento" },
                { rptName: "Matriz de Ventas Mensuales por Sucursal y Departamento" },
                { rptName: "Matriz de Ventas Totales Diarias por Sucursal" },
                { rptName: "Reporte de Registro de Horas de Facturas" }
            ]
        };

        self.rptCardsCss = {
            gtlg: { 'min-width': '495px', 'max-width': '495px', 'min-height': '196px', 'max-height': '196px' },
            lg: { 'min-width': '425px', 'max-width': '495px', 'min-height': '175px', 'max-height': '196px' }
        };

        self.closeSidenav = function () {
            if (self.isOpen) {
                self.toggleExpanded(0);
                self.isOpen = false;
                self.selectedContainer = 0;
            }
        }

        self.toggleExpanded = function (selectedMenuId) {
            if (!self.isOpen) {
                self.isOpen = true;
                self.menuId = selectedMenuId;
            } else {
                if (self.menuId === selectedMenuId) {
                    self.isOpen = false;
                    selectedMenuId = 0;
                }
                self.menuId = selectedMenuId;
            }
        };

        self.isSelected = function(value) {
            return self.menuId === value;
        };

        self.setSelectedContainer = function(value) {
            self.selectedContainer = value;
        };

        self.isSelectedContainer = function(value) {
            return self.selectedContainer === value;
        };

        self.iconClassesToggler = function(selectedMenuId) {
            var classArray = { 'side-icon-active': false, 'side-icon-inactive': false };
            if (self.isSelected(selectedMenuId) && self.isOpen) {
                classArray["side-icon-active"] = true;
            };
            if (!self.isSelected(selectedMenuId)) {
                classArray["side-icon-inactive"] = true;
            };
            return classArray;
        };

        self.buttonClassesToggler = function(selectedMenuId) {
            var classArray = { 'side-button-active': false };
            if (self.isSelected(selectedMenuId) && self.isOpen) {
                classArray["side-button-active"] = true;
            }
            return classArray;
        };

    }]);

    ctrls.controller('toolbarController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

        this.userMenu = [
            {
                menuLabel: "Opciones de usuario",
                icon: "action:settings",
                action: "menuAction"
            },
            {
                menuLabel: "Cerrar Sesion",
                icon: "action:settings_power",
                action: "accion 2"
            }
        ];

        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        this.menuAction = function(index) {

            $mdDialog.show($mdDialog.alert().title('Opcion' + index).textContent('Opcion seleccionada' + index).ok('Muy bien'));

        };

        this.announceClick = function (index) {
            var ua = detect.parse(navigator.userAgent);

            $mdDialog.show(
              $mdDialog.alert()
                .title('Click!')
                .textContent('Tu explorador es ' + ua.browser.name)
                .ok('Excelente!')
                .targetEvent(originatorEv)
            );
            originatorEv = null;
        };

        //************ jQuery hot scripting *****************//

        //Add the class .toolbar-searchicon-hover on #toolbarSearchIcon when #toolbarSearch.toolbar-input:focus
        $("#toolbarSearch").focusin(function () {
            $("#toolbarSearchIcon").addClass("toolbar-searchicon-hover");
        });
        $("#toolbarSearch").focusout(function () {
            $("#toolbarSearchIcon").removeClass("toolbar-searchicon-hover");
        });
        //-----------------------------------------------------------------------------------------------------

    }]);

    ctrls.controller('paramDialogController', ['$mdDialog', '$q', '$timeout', '$mdMedia', '$scope','$location', function ($mdDialog, $q, $timeout, $mdMedia, $scope, $location) {

        var self = this;
        $scope.$mdMedia = $mdMedia;
        self.twowaytest = "Working!";

        self.title = "paramDialog";
        self.name = "Santi";
        self.status = "...";

        self.notHiddenStateOftab = {
            pDaterange: true,
            pProducts: true,
            pLocaleSelect: false,
            pLocaleOption: false,
            pMonthSelect: true,
            pInputCedula: true,
            pProviders: false,
            pCaja: false,
            pDepartments: false,
            pHourRange: true,
            pNominaGp: false
        };

        self.execCrystalReport = function () {
            var crUrl = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/crCrystalReportViewer2.aspx';
            $location.url(crUrl);
        };

        // Main Functionality
        self.showAdvanced = function (event) {
            $mdDialog.show({
                clickOutsideToClose: false,
                preserveScope: true,
                parent: angular.element(document.body),
                templateUrl: 'views/paramDialogView.html',
                controller: function () {
                    return self;
                },
                controllerAs: 'ctrl',
                locals: self.person
            }).then(function () {
                self.status = 'Dialog Hid!';
            }, function () {
                self.status = 'idk';
            })
        };
        self.hide = function () {
            $mdDialog.hide();
        };
        self.cancel = function () {
            $mdDialog.cancel();
        };


        //datepick param
        self.fromDate = new Date();
        self.toDate = new Date();
        self.today = new Date();

        //month select param
        //define month format for month select param
        self.buildLocaleProvider = function (formatString) {
            return {
                formatDate: function (date) {
                    if (date) {
                        return moment(date).locale("es").format(formatString);
                    } else return null;


                },
                parseDate: function (dateString) {
                    if (dateString) {
                        var m = moment(dateString, formatString, true);
                        return m.isValid() ? m.toDate() : new Date(NaN);
                    } else return null;
                }
            };
        };
        self.monthFormat = self.buildLocaleProvider("MMMM-YYYY");
        self.monthFromDate = new Date();
        self.monthToDate = new Date();

        //locale select param
        self.localesSideA = [
            { id: "C001", name: "C001 - Santa Rita", isSelected: false },
            { id: "C002", name: "C002 - Circunvalacion 2", isSelected: false },
            { id: "C003", name: "C003 - Delicias", isSelected: false },
            { id: "C004", name: "C004 - Las Virtudes", isSelected: false },
            { id: "C005", name: "C005 - La Limpia", isSelected: false },
            { id: "C006", name: "C006 - Cabimas", isSelected: false },
            { id: "C007", name: "C007 - IPSFA", isSelected: false }
        ];
        self.localesSideB = [
            { id: "C008", name: "C008 - Express Delicias", isSelected: false },
            { id: "C009", name: "C009 - Sambil", isSelected: false },
            { id: "C010", name: "C010 - La Lago", isSelected: false },
            { id: "C011", name: "C011 - Ciudad Ojeda", isSelected: false },
            { id: "C012", name: "C012 - Jacinto Lara", isSelected: false },
            { id: "C013", name: "C013 - Express Calle 73", isSelected: false },
            { id: "C014", name: "C014 - Express Santa Lucia", isSelected: false }
        ];

        self.localeSelectAll = false;
        self.toggleAllLocales = function () {

            if (!self.localeSelectAll) {
                for (var i = 0; i < self.localesSideA.length; i++) { self.localesSideA[i].isSelected = true; };
                for (var i = 0; i < self.localesSideB.length; i++) { self.localesSideB[i].isSelected = true; };
            } else {
                for (var i = 0; i < self.localesSideA.length; i++) { self.localesSideA[i].isSelected = false; };
                for (var i = 0; i < self.localesSideB.length; i++) { self.localesSideB[i].isSelected = false; };
            };

        };

        //locale option param
        self.localeOptionSelected = "";

        // Products param
        self.searchText = "";
        self.getMatches = function (searchText) {
            var deferred = $q.defer();
            $timeout(function () {
                var products = self.getProducts().filter(function (product) {
                    return (product.desc.toUpperCase().indexOf(searchText.toUpperCase()) !== -1 ||
                    product.barcode.toUpperCase().indexOf(searchText.toUpperCase()) !== -1 ||
                    product.id.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
                });
                deferred.resolve(products);
            }, 150);

            return deferred.promise;
        }

        self.selectedProducts = new Array();
        self.selectedItem = "";
        self.appendSelected = function () {
            var pushFlag = true;
            if (self.selectedItem) {
                for (var i = self.selectedProducts.length - 1; i >= 0; i--) {
                    if (self.selectedProducts[i].id == self.selectedItem.id) {
                        pushFlag = false;
                    };
                };
                if (pushFlag) {
                    self.selectedItem.removeFlag = false;
                    self.selectedProducts.push(self.selectedItem);
                    self.searchText = "";
                };

            };
        };
        self.enterKeyUp = {};
        self.autocompleteEnterPress = function () {
            if (self.enterKeyUp.keyCode == 13) {
                self.appendSelected(self.selectedItem);
                self.selectedItem = "";
            }
        };

        self.removeChecked = function () {
            for (var i = self.selectedProducts.length - 1; i >= 0; i--) {
                if (self.selectedProducts[i].removeFlag) {
                    self.selectedProducts.splice(i, 1);
                }
            }
        };

        self.getProducts = function () {
            return [
                { id: '001', barcode: '759000', desc: 'Adravil Quick&Fast Relief Ointment 120g', removeFlag: false },
                { id: '002', barcode: '759012', desc: 'Aqua Cure Escape to Ecstasy 300ml', removeFlag: false },
                { id: '003', barcode: '759847', desc: 'Safsprin The Common Cure 30Units', removeFlag: false },
                { id: '004', barcode: '759822', desc: 'T-Vaccine', removeFlag: false },
                { id: '005', barcode: '759852', desc: 'G-Vaccine', removeFlag: false }
            ];
        };

        //search providers param
        self.getProviders = function () {
            return [
                { id: '001', providerName: 'Umbrella Corp', removeFlag: false },
                { id: '002', providerName: 'TerraSave', removeFlag: false },
                { id: '003', providerName: 'Tricell Inc', removeFlag: false },
                { id: '004', providerName: 'WilPharma', removeFlag: false }
            ];
        };
        self.providerSearchText = "";
        self.getProviderMatches = function () {
            var deferred = $q.defer();
            $timeout(function () {
                var providers = self.getProviders().filter(function (provider) {
                    return (provider.id.toUpperCase().indexOf(self.providerSearchText.toUpperCase()) !== -1 ||
                    provider.providerName.toUpperCase().indexOf(self.providerSearchText.toUpperCase()) !== -1);
                });
                deferred.resolve(providers);
            }, 150);

            return deferred.promise;
        };
        self.selectedProviders = new Array();
        self.selectedProvider = "";
        self.appendSelectedProvider = function () {
            var pushFlag = true;
            if (self.selectedProvider) {
                for (var i = self.selectedProviders.length - 1; i >= 0; i--) {
                    if (self.selectedProviders[i].id == self.selectedProvider.id) {
                        pushFlag = false;
                    };
                };
                if (pushFlag) {
                    self.selectedProvider.removeFlag = false;
                    self.selectedProviders.push(self.selectedProvider);
                    self.providerSearchText = "";
                };

            };
        };
        self.keyUpValueProv = {};
        self.autocompleteEnterPressProv = function () {
            if (self.keyUpValueProv.keyCode == 13) {
                self.appendSelectedProvider(self.selectedProvider);
                self.selectedProvider = "";
            }
        };

        self.removeCheckedProvider = function () {
            for (var i = self.selectedProviders.length - 1; i >= 0; i--) {
                if (self.selectedProviders[i].removeFlag) {
                    self.selectedProviders.splice(i, 1);
                }
            }
        };

        //input cedula param
        self.selectedCedulas = new Array();
        self.currentCedula = "";
        self.cedulaRegEx = "^[vV][0-9]*$";
        self.appendCedula = function () {
            var pushFlag = true;
            for (var i = 0; i < self.selectedCedulas.length; i++) {
                if (self.selectedCedulas[i].cedula.toUpperCase() == self.currentCedula.toUpperCase()) {
                    pushFlag = false;
                };
            };

            if (pushFlag) {
                self.selectedCedulas.push({ cedula: self.currentCedula.toUpperCase(), removeFlag: false });
                self.currentCedula = "";
            };

        };
        self.keyUpValue = new Array();
        self.enterPressAppend = function () {
            if (self.keyUpValue.keyCode == 13) {
                self.appendCedula();
            };
        };
        self.removeCheckedCedulas = function () {
            for (var i = self.selectedCedulas.length - 1; i >= 0; i--) {
                if (self.selectedCedulas[i].removeFlag) {
                    self.selectedCedulas.splice(i, 1);
                }
            }
        };

        //input Caja param
        self.selectedCajas = [];
        self.currentCaja = "";
        self.cajaRegEx = "[0-9]*$";
        self.appendCaja = function () {
            var pushFlag = true;
            for (var i = 0; i < self.selectedCajas.length; i++) {
                if (self.selectedCajas[i].Caja == self.currentCaja) {
                    pushFlag = false;
                };
            };

            if (pushFlag) {
                self.selectedCajas.push({ Caja: self.currentCaja, removeFlag: false });
                self.currentCaja = "";
            };

        };
        self.keyUpValueCaja = {};
        self.enterPressAppendCaja = function () {
            if (self.keyUpValueCaja.keyCode == 13) {
                self.appendCaja();
            };
        };
        self.removeCheckedCajas = function () {
            for (var i = self.selectedCajas.length - 1; i >= 0; i--) {
                if (self.selectedCajas[i].removeFlag) {
                    self.selectedCajas.splice(i, 1);
                }
            }
        };

        //department select param
        self.departments = [
            { id: "01", departmentName: "01-Viveres Secos", isSelected: false },
            { id: "02", departmentName: "02-Viveres Refrigerados / Congela", isSelected: false },
            { id: "03", departmentName: "03-Hogar", isSelected: false },
            { id: "04", departmentName: "04-Carniceria", isSelected: false },
            { id: "05", departmentName: "05-Charcuteria", isSelected: false },
            { id: "06", departmentName: "06-Legumbres y Frutas", isSelected: false },
            { id: "07", departmentName: "07-Panaderia", isSelected: false },
            { id: "08", departmentName: "08-Restaurant", isSelected: false },
            { id: "09", departmentName: "09-Perfumeria", isSelected: false },
            { id: "10", departmentName: "10-Licoreria", isSelected: false },
            { id: "11", departmentName: "11-Jugueteria", isSelected: false },
            { id: "12", departmentName: "12-Limpieza", isSelected: false },
            { id: "13", departmentName: "13-Pescaderia", isSelected: false },
            { id: "14", departmentName: "14-Electrodomesticos", isSelected: false },
            { id: "15", departmentName: "15-Linea Marron", isSelected: false },
            { id: "16", departmentName: "16-Jardineria", isSelected: false },
            { id: "17", departmentName: "17-Automotriz", isSelected: false },
            { id: "18", departmentName: "18-Farmacia", isSelected: false },
            { id: "19", departmentName: "19-Textil", isSelected: false },
            { id: "20", departmentName: "20-Lenceria", isSelected: false },
            { id: "21", departmentName: "21-Libreria", isSelected: false },
            { id: "22", departmentName: "22-Ferreteria", isSelected: false },
            { id: "23", departmentName: "23-Electricidad", isSelected: false },
            { id: "24", departmentName: "24-Infantil", isSelected: false },
            { id: "25", departmentName: "25-Tabaqueria y Cigarrillos", isSelected: false },
            { id: "26", departmentName: "26-Comida de la Nonna", isSelected: false },
            { id: "27", departmentName: "27-Mercadeo", isSelected: false },
            { id: "28", departmentName: "28-Arrendamientos", isSelected: false },
            { id: "29", departmentName: "29-Centro Produccion Panaderia", isSelected: false },
            { id: "30", departmentName: "30-Sin Departamento", isSelected: false },
            { id: "99", departmentName: "99-Articulos Franco Italiana", isSelected: false }
        ];

        function arrayByRange(iArray, min, max) {

            var rangedArray = [];

            if (max > iArray.length) { max = iArray.length; };
            if (min < 0) { min = 0; };
            if (min > iArray.length) { min = 0; };

            for (var i = min; i <= max; i++) {
                rangedArray.push(iArray[i]);
            };

            return rangedArray;
        };

        self.departmentsRanged = [];
        self.departmentsRanged[0] = arrayByRange(self.departments, 0, 10);
        self.departmentsRanged[1] = arrayByRange(self.departments, 11, 21);
        self.departmentsRanged[2] = arrayByRange(self.departments, 22, 30);

        self.departmentSelectAll = false;
        self.toggleAlldepartments = function () {
            if (!self.departmentSelectAll) {
                for (var i = 0; i < self.departmentsRanged[0].length; i++) { self.departmentsRanged[0][i].isSelected = true; };
                for (var i = 0; i < self.departmentsRanged[1].length; i++) { self.departmentsRanged[1][i].isSelected = true; };
                for (var i = 0; i < self.departmentsRanged[2].length; i++) { self.departmentsRanged[2][i].isSelected = true; };
            } else {
                for (var i = 0; i < self.departmentsRanged[0].length; i++) { self.departmentsRanged[0][i].isSelected = false; };
                for (var i = 0; i < self.departmentsRanged[1].length; i++) { self.departmentsRanged[1][i].isSelected = false; };
                for (var i = 0; i < self.departmentsRanged[2].length; i++) { self.departmentsRanged[2][i].isSelected = false; };
            };
        };

        //hour range param
        self.hours = [
            { hourValue: "00:00", hourLabel: "12:00am" },
            { hourValue: "00:30", hourLabel: "12:30am" },
            { hourValue: "01:00", hourLabel: "01:00am" },
            { hourValue: "01:30", hourLabel: "01:30am" },
            { hourValue: "02:00", hourLabel: "02:00am" },
            { hourValue: "02:30", hourLabel: "02:30am" },
            { hourValue: "03:00", hourLabel: "03:00am" },
            { hourValue: "03:30", hourLabel: "03:30am" },
            { hourValue: "04:00", hourLabel: "04:00am" },
            { hourValue: "04:30", hourLabel: "04:30am" },
            { hourValue: "05:00", hourLabel: "05:00am" },
            { hourValue: "05:30", hourLabel: "05:30am" },
            { hourValue: "06:00", hourLabel: "06:00am" },
            { hourValue: "06:30", hourLabel: "06:30am" },
            { hourValue: "07:00", hourLabel: "07:00am" },
            { hourValue: "07:30", hourLabel: "07:30am" },
            { hourValue: "08:00", hourLabel: "08:00am" },
            { hourValue: "08:30", hourLabel: "08:30am" },
            { hourValue: "09:00", hourLabel: "09:00am" },
            { hourValue: "09:30", hourLabel: "09:30am" },
            { hourValue: "10:00", hourLabel: "10:00am" },
            { hourValue: "10:30", hourLabel: "10:30am" },
            { hourValue: "11:00", hourLabel: "11:00am" },
            { hourValue: "11:30", hourLabel: "11:30am" },
            { hourValue: "12:00", hourLabel: "12:00pm" },
            { hourValue: "12:30", hourLabel: "12:30pm" },
            { hourValue: "13:00", hourLabel: "01:00pm" },
            { hourValue: "13:30", hourLabel: "01:30pm" },
            { hourValue: "14:00", hourLabel: "02:00pm" },
            { hourValue: "14:30", hourLabel: "02:30pm" },
            { hourValue: "15:00", hourLabel: "03:00pm" },
            { hourValue: "15:30", hourLabel: "03:30pm" },
            { hourValue: "16:00", hourLabel: "04:00pm" },
            { hourValue: "16:30", hourLabel: "04:30pm" },
            { hourValue: "17:00", hourLabel: "05:00pm" },
            { hourValue: "17:30", hourLabel: "05:30pm" },
            { hourValue: "18:00", hourLabel: "06:00pm" },
            { hourValue: "18:30", hourLabel: "06:30pm" },
            { hourValue: "19:00", hourLabel: "07:00pm" },
            { hourValue: "19:30", hourLabel: "07:30pm" },
            { hourValue: "20:00", hourLabel: "08:00pm" },
            { hourValue: "20:30", hourLabel: "08:30pm" },
            { hourValue: "21:00", hourLabel: "09:00pm" },
            { hourValue: "21:30", hourLabel: "09:30pm" },
            { hourValue: "22:00", hourLabel: "10:00pm" },
            { hourValue: "22:30", hourLabel: "10:30pm" },
            { hourValue: "23:00", hourLabel: "11:00pm" },
            { hourValue: "23:30", hourLabel: "11:30pm" }
        ];
        self.hourLabelsForSelect = [
            "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00",
            "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
            "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
        ];
        self.hourFrom = "";
        self.fromAmPm = "";
        self.hourTo = "";
        self.toAmPm = "";
        function getHourValue(hour, ampm, aHours) {
            var cHour = hour + ampm;
            var fhour = "";
            for (var i = 0; i < aHours.length; i++) {
                if (aHours[i].hourLabel == cHour) { fhour = aHours[i].hourValue };
            };
            return fhour;
        };
        self.paramHourFrom = "";
        self.paramHourTo = "";
        self.onChangeHourSelect = function () {
            self.param_HourFrom = getHourValue(self.hourFrom, self.fromAmPm, self.hours);
            self.param_HourTo = getHourValue(self.hourTo, self.toAmPm, self.hours);
        };

        //periodo nomina gp
        function getPgpParam(year, pId) {
            var paramValue = year + pId;
            return paramValue;
        };
        self.apNominaGp = [
            { id: "01", label: "Enero-1     " },
            { id: "02", label: "Enero-2     " },
            { id: "03", label: "Febrero-1   " },
            { id: "04", label: "Febrero-2   " },
            { id: "05", label: "Marzo-1     " },
            { id: "06", label: "Marzo-2     " },
            { id: "07", label: "Abril-1     " },
            { id: "08", label: "Abril-2     " },
            { id: "09", label: "Mayo-1      " },
            { id: "10", label: "Mayo-2      " },
            { id: "11", label: "Junio-1     " },
            { id: "12", label: "Junio-2     " },
            { id: "13", label: "Julio-1     " },
            { id: "14", label: "Julio-2     " },
            { id: "15", label: "Agosto-1    " },
            { id: "16", label: "Agosto-2    " },
            { id: "17", label: "Septiembre-1" },
            { id: "18", label: "Septiembre-2" },
            { id: "19", label: "Octubre-1   " },
            { id: "20", label: "Octubre-2   " },
            { id: "21", label: "Noviembre-1 " },
            { id: "22", label: "Noviembre-2 " },
            { id: "23", label: "Diciembre-1 " },
            { id: "24", label: "Diciembre-2 " }
        ];
        self.pNominaAnos = ["2014", "2015", "2016", "2017"];
        self.pgpYearFrom = "";
        self.pgpYearTo = "";
        self.pgpFrom = "";
        self.pgpTo = "";
        self.param_pgpFrom = "";
        self.param_pgpTo = "";
        self.onChangePgpSelect = function () {
            self.param_pgpFrom = getPgpParam(self.pgpYearFrom, self.pgpFrom);
            self.param_pgpTo = getPgpParam(self.pgpYearTo, self.pgpTo);
        }

    }]);

})();