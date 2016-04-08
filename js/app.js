//put javascript in strict mode to catch some errors

'use strict';  

//DEFINE THE MAIN APPLICATION MODULE AND DEPENDENCIES  ----------------------------

/*global angular */
var app = angular.module('stormApp', [ 
	'ngRoute', 
	'ngResource', 
	'ui.bootstrap',
	'uiGmapgoogle-maps'
	 ]);

// SETUP ROUTES AND ADD A TEMPLATE AND CONTROLLER TO EACH  -----------------------

app.config(function($routeProvider){
    $routeProvider

    .when('/home', {
        controller: 'homeCtrl', 
        templateUrl: 'about.html'
    })


   .when('/users', {
        controller: 'usersListCtrl', 
        templateUrl: 'partials/users_list.html'
    })

   .when('/users/:id', {
        controller: 'userProfileCtrl', 
        templateUrl: 'partials/user.html'
    })

     .when('/users/:id/albums', {
        controller: 'albumsListCtrl', 
        templateURL: 'partials/albums_list.html'
    })

       .when('/albums/:id', {
        controller: 'albumCtrl', 
        templateURL: 'partials/albums.html'
    })

     .when('/posts', {
        controller: 'postsCtrl', 
        templateUrl: 'partials/posts_list.html'
    })

      .when('/posts/:id', {
        controller: 'postCtrl', 
        templateUrl: 'partials/post.html'
    })

      .when('/newPostForm', {
        controller: 'postFormController', 
        templateUrl: 'partials/post_form.html'
    })

      .when('/updatePostForm/:id', {
        controller: 'postFormController', 
        templateUrl: 'partials/post_form.html'
    })
    .otherwise({
         redirectTo: '/home'
    });
});

// AUTOMATICALLY HIDE THE COLLAPSED NAVBAR ON MOBILE WHEN CLICKED

$(document).ready(function () {
    $("#example-navbar-collapse li a").click(function(event) {
        // check if window is small enough so dropdown is created
    $("#example-navbar-collapse").removeClass("in").addClass("collapse");
    });
});








//     app.controller('postsCtrl', ['$scope', 'dataFactory', 
//         function ($scope, dataFactory) {

//     $scope.status;
//     $scope.posts;
//     $scope.comments;
//     $scope.currPost;
    

//     getPosts();

//     function getPosts() {
//         dataFactory.getPosts()
//             .then(function (response) {
//                 $scope.posts = response.data;
//             }, function (error) {
//                 $scope.status = 'Unable to load customer data: ' + error.message;
//             });
//     }

//     $scope.updatePost = function (id) {
//         var post;
//         for (var i = 0; i < $scope.posts.length; i++) {
//             var currPost = $scope.posts[i];
//             if (currPost.id === id) {
//                 post = currPost;
//                 $scope.currPost = post;
//                 break;
//             }
//         }

//          dataFactory.updatePost(post)
//           .then(function (response) {
//               $scope.status = 'Updated Post! Refreshing posts list.';
//           }, function (error) {
//               $scope.status = 'Unable to update post: ' + error.message;
//           });
//     };

//     $scope.insertPost = function () {
//         //Fake customer data
//         var post = {
//             ID: 10,
//             FirstName: 'JoJo',
//             LastName: 'Pikidily'
//         };
//         dataFactory.insertPost(post)
//             .then(function (response) {
//                 $scope.status = 'Inserted Post! Refreshing posts list.';
//                 $scope.posts.push(post);
//             }, function(error) {
//                 $scope.status = 'Unable to insert post: ' + error.message;
//             });
//     };

//     $scope.deletePost = function (id) {
//         dataFactory.deletePost(id)
//         .then(function (response) {
//             $scope.status = 'Deleted Post! Refreshing posts list.';
//             for (var i = 0; i < $scope.posts.length; i++) {
//                 var post = $scope.posts[i];
//                 if (post.id === id) {
//                     $scope.posts.splice(i, 1);
//                     break;
//                 }
//             }
//             $scope.comments = null;
//         }, function (error) {
//             $scope.status = 'Unable to delete post: ' + error.message;
//         });
//     };

//     $scope.getPostComments = function (id) {
//         dataFactory.getComments(id)
//         .then(function (response) {
//             $scope.status = 'Retrieved comments!';
//             $scope.comments = response.data;
//         }, function (error) {
//             $scope.status = 'Error retrieving comments! ' + error.message;
//         });
//     };
// }]);