(function(app) {

    app.config(function($mdThemingProvider, $mdIconProvider){
        $mdThemingProvider.theme('default');
    });
    
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($rootScope, $scope, $mdSidenav) {
        var model = this;
        model.toggleMenu = toggleMenuFn;
        
        function toggleMenuFn() {
            $mdSidenav('left').toggle();
        }
        
        $rootScope.$on('$stateChangeStart', function(event, toState){ 
            $rootScope.pageTitle = toState.data.pageTitle;
        });
    });

}(angular.module("<%= projectName %>", [
    '<%= projectName %>.home',
    '<%= projectName %>.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'ngMaterial'
])));