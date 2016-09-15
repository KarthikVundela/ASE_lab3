(function () 
 {
    
    
    var Register_ = function ($scope, $location) {

      
        $scope.show = false;
        
        
        $scope.match = function () {
            if ($scope.register_Pwd != null  && $scope.Cnf_Pwd != null ) {
                
                if ($scope.register_Pwd == $scope.Cnf_Pwd) {
                    $scope.show = false;
                }
                
                 else {
                    $scope.show = true;
                }
            }
            
        };
        
        $scope.reg = function () {
            
            var user = document.getElementById("reg_Email_id").value;
            var pwd = document.getElementById("reg_Pwd").value;
            if (typeof(Storage) != "undefined") {
                localStorage.setItem(user, pwd);
                alert("User registered successfully");
                $location.path('/');
               
            } 
        }
         
        
    };
    
    Register_.$inject = ['$scope', '$location'];
    angular.module('Karthik').controller('Register_Controller1', Register_);

}());
