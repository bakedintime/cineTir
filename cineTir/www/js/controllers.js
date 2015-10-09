angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashboardCtrl', function($scope) {
  $scope.surveys = [
    { title: 'Películas Viernes', id: 1, date: '2015-10-15T10:00:00-00:00', open: true },
    { title: 'Películas Martes', id: 2, date: '2015-07-02T10:00:00-00:00', open: true },
    { title: 'Películas Lunes', id: 3, date: '2015-05-01T10:00:00-00:00', open: true },
    { title: 'Películas Miércoles', id: 4, date: '2015-02-04T10:00:00-00:00', open: false },
    { title: 'Películas Lunes', id: 5, date: '2015-02-02T10:00:00-00:00', open: false },
    { title: 'Películas Martes', id: 6, date: '2015-01-01T10:00:00-00:00', open: false }
  ];

  $scope.format = function(date){
    return moment(date, moment.ISO_8601).format('MMMM D, YYYY');
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
