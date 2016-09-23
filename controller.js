angular.module('userProfiles').controller('MainController', function($scope, mainService){

   (function getUsers() {
     $scope.users = mainService.getUsers();
   })();
    $scope.toggleFavorite = mainService.toggleFavorite;

})
