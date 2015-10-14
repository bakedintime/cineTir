angular.module('cineTir.surveys.controllers', [])

.controller('DashboardCtrl', function($scope, $state) {
  $scope.surveys = [
    { title: 'Películas Viernes', id: 1, date: '2015-10-15T10:00:00-00:00', open: true },
    { title: 'Películas Martes', id: 2, date: '2015-07-02T10:00:00-00:00', open: true },
    { title: 'Películas Miércoles', id: 4, date: '2015-02-04T10:00:00-00:00', open: false },
    { title: 'Películas Lunes', id: 5, date: '2015-02-02T10:00:00-00:00', open: false },
    { title: 'Películas Martes', id: 6, date: '2015-01-01T10:00:00-00:00', open: false },
    { title: 'Películas Lunes', id: 3, date: '2015-05-01T10:00:00-00:00', open: true }
  ];

  $scope.format = function(date){
    return moment(date, moment.ISO_8601).format('MMMM D, YYYY');
  };

  $scope.goToSurvey = function(surveyID){
    $state.go('app.single', {'surveyID': surveyID});
  }

  $scope.noop = function(){};
});
