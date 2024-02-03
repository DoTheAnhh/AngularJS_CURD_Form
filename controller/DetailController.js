window.DetailController = function($scope, $http, $routeParams){
    
    const API = "http://localhost:3000/user";

    var id = $routeParams.id;

    $scope.getData = function() {
        $http.get(`${API}/${id}`).then(function(response){
            $scope.inputValue = response.data;
        });   
    }
    $scope.getData();
}