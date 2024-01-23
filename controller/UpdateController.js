window.UpdateController = function($scope, $http, $routeParams){
    const API = "http://localhost:3000/user";

    var id = $routeParams.id;


    $scope.getData = function() {
        $http.get(`${API}/${id}`).then(function(response){
            $scope.inputValue = response.data;
        });   
    }
    $scope.getData();

    $scope.update = function(){
        $http.put(`${API}/${id}`, $scope.inputValue).then(function(){
            window.location.href = "http://127.0.0.1:5500/index.html#!/list";
        });
    }
}