(function() {
  angular.module('giphy')
    .service('giphyGotServed', function($http, $q) {

      var parseHeader = {
        "X-Parse-Application-Id": "FFhsApq36xikHlAz276OoAynS9A0UDFDGsMyI2wZ",
        "X-Parse-REST-API-Key": "npgGSyFCVoAq19cQLEct4BpleYy7US6GoOygdbpc",
        "Content-Type": "application/json"
      };

    this.postBiz = function(biz) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/biznesses',
        data: {name: biz},
        headers: parseHeader
      }).then(function(res) {
          deferred.resolve(res);
      });
      console.log(deferred.promise)
      return deferred.promise;
    };

    this.getBiz = function() {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/biznesses',
      headers: parseHeader
    }).then(function(res) {
      return res.data.results;
    });

  };


});
})();
