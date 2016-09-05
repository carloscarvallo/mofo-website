var app = angular.module('profileApp', [])

function mainController($scope, $http) {
  $scope.formData = {}

  $http.get('/api/profile')
    .success(function(data) {
      $scope.profile = data;
      console.log(data);
    })
}
