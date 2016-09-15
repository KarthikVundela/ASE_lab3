(function () 
 {
    
    
    var Login_ = function ($scope, $location) {
      
        
        
        $scope.check = function () {
            if ($scope.Email_id != null && $scope.Email_id != "" && $scope.Password != null && $scope.Password != "") {
                
            var id = localStorage.getItem($scope.Email_id);
           
               
                 if ( $scope.Password == id){
                    $location.path('/Home');
                }
                else{
                    alert("credentials wrong!!!");
                }
            
        }
        
       
        
    };
        $scope.pull1 = function (paths){
            $location.path(paths);
            
        };

};

    
    Login_.$inject = ['$scope', '$location'];
    angular.module('Karthik').controller('Login_Controller1', Login_);

}());