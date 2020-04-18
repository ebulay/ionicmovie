angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])


.factory('MovieService', function($http) {


    var content = [];
    var gc = 'https://untitled-o2334v8oxm2y.runkit.sh/';
    $http.get('https://untitled-d7a4ca7dqc5s.runkit.sh/api/1').then(function(response) {
        for (var i = 0; i < response.data.results.length; i++) {

            content.push(response.data.results[i]);
        }
    })


    return {
        all: function() {
            return content;
        },

        get: function(petId) {
            for (var i = 0; i < content.length; i++) {
                if (content[i].id === parseInt(petId)) {
                    return content[i];
                }
            }
            return null;
        }
    };

})

.factory('DataLoader', function($http) {

    return {
        get: function(url) {
            // Simple index lookup
            return $http.get(url);
        }
    }

})
