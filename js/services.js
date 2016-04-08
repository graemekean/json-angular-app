//put javascript in strict mode to catch some errors

'use strict';

// CREATE FACTORY TO HANDLE HTTP REQUESTS  -------------------------------------

//angular.module('stormApp')
    app.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://jsonplaceholder.typicode.com/';
    var dataFactory = {};

    dataFactory.getPosts = function () {
        return $http.get(urlBase + 'posts');
    };

    dataFactory.getPost = function (id) {
        return $http.get(urlBase + 'posts/' + id);
    };

    dataFactory.insertPost = function (post) {
        return $http.post(urlBase + 'posts/', post);
    };

    dataFactory.updatePost = function (post) {
        return $http.put(urlBase + 'posts/' + post.id, post)
    };

    dataFactory.deletePost = function (id) {
        return $http.delete(urlBase + 'posts/' + id);
    };

    dataFactory.getComments = function (id) {
        return $http.get(urlBase + 'posts/' + id + '/comments');
    };

    dataFactory.getUsers = function () {
        return $http.get(urlBase + 'users/');
    };

    dataFactory.getUser = function (id) {
        return $http.get(urlBase + 'users/' + id);
    };

    dataFactory.getUserPhotos = function (id) {
        return $http.get(urlBase + 'users/' + id + "/photos");
    };

    dataFactory.getUserAlbums = function (id) {
        return $http.get(urlBase + 'users/' + id + "/albums");
    };

    return dataFactory;
}]);

app.factory('Informer', function(){

  var messages = [];  
  var Informer = {};
  
  Informer.inform = function(msg, type) {
    messages.push({
      msg: msg,
      type: type
    });
  };
  
  Informer.allInfos = function() {
    return messages;
  };
  
  Informer.remove = function(info) {
    messages.splice(messages.indexOf(info), 1);
  };  
  
  return Informer;
});


// CREATE A SERVICE TO DEAL WITH THE FORM TO CREATE A NEW POST

// angular.module('stormApp')
//     .factory('dataFactory')


app.factory('postService', ['dataFactory', function () {
        var getPost = function(id) {
            if (id == 123) {
                return {
                    userId: 1,
                    id: 1,
                    title: "This is the new title from the postService",
                    body: "This is a longer bit of text to make sure it works"
                }
            };
            return undefined;
        };

        var insertPost = function(newPost) {
            dataFactory.insertPost(newPost);
        };

        var updatePost = function(post) {
            dataFactory.updatePost(post);
        };

        return {
            insertPost: insertPost,
            updatePost: updatePost,
            getPost: getPost
        };
    }]);


