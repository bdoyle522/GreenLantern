(function() {
  angular.module('giphy')
    .controller('giphyCtrl', function($scope, giphyGotServed) {

  	$scope.postBiz = function(biz) {
  	    $scope.posts = giphyGotServed.postBiz($scope.biz)
        .then(function(res) {
          $scope.biznesses = res;
            $scope.biz = '';
        });
      };

      $scope.getBiz = function() {
        giphyGotServed.getBiz()
        .then(function(res) {
          console.log(res)
          $scope.biznesses = res;
        });
      };

      $scope.getBiz();

      setInterval(function() {
        $scope.getBiz();
      }, 1000)


  });



})();
