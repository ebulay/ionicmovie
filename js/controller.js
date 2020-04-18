angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', 'MovieService',
function ($scope, $stateParams, MovieService) {
  
     $scope.movie = MovieService.all();
  
}])

.controller('categoryCtrl', ['$scope', '$stateParams', 'DataLoader',
function ($scope, $stateParams,DataLoader) {
   DataLoader.get('https://untitled-d7a4ca7dqc5s.runkit.sh/category').then(function(resp) {
        $scope.list = resp.data;
    });
}])
   
.controller('settingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detailCtrl', ['$scope', '$stateParams', 'MovieService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,MovieService) {
$scope.news = MovieService.get($stateParams.id);

}])
   
.controller('watchCtrl', ['$scope', '$stateParams', 'DataLoader',
function ($scope, $stateParams,DataLoader) {
  //https://untitled-d7a4ca7dqc5s.runkit.sh/yadi/?url=
   DataLoader.get('https://untitled-d7a4ca7dqc5s.runkit.sh/yadi/?url=https://yadi.sk/i/'+$stateParams.id).then(function(response) {
        $scope.data = response.data;
        console.log(response)
    });
}])
   
.controller('moviesCtrl', ['$scope', '$stateParams', 'DataLoader',
function ($scope, $stateParams,DataLoader) {
  console.log('https://untitled-d7a4ca7dqc5s.runkit.sh/category/'+$stateParams.id+'/page/1');
   DataLoader.get('https://untitled-d7a4ca7dqc5s.runkit.sh/category/'+$stateParams.id+'/page/1').then(function(response) {
        $scope.data = response.data.results;
        console.log(response)
    });
}])
 
