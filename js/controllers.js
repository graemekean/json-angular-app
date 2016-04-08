// CREATE CONTROLLERS  -------------------------------------------------------

// 'use strict';

// HOMEPAGE CONTROLLER

app.controller("homeCtrl",
  function ($scope, $location, $uibModal) {

      $scope.showNewPostForm = function () {
          // $location.path('/newPostForm');
          $uibModal.open({
              templateUrl: 'partials/post_form.html',
              controller: 'postFormController'
              // controller: 'myCtrl'
          });
      };

      $scope.showUpdatePostForm = function (id) {
          $location.path();
          $uibModal.open({
              templateUrl: 'partials/post_form.html',
              controller: 'postFormController'
          });
      };

  });

// ALL USERS TEMPLATE CONTROLLER

 app.controller("usersListCtrl", function($scope, dataFactory) {
        dataFactory.getUsers().
        success(function(data) {
            $scope.userlist = data;
            console.log($scope.userlist);
        });
  });



// SINGLE USER PROFILE TEMPLATE CONTROLLER

 app.controller("userProfileCtrl", function($scope, $routeParams, dataFactory, $interval) {
        dataFactory.getUser($routeParams.id).
        success(function(data) {
            $scope.user = data;
            $scope.lat = $scope.user.address.geo.lat;
            $scope.lng = $scope.user.address.geo.lng;

            console.log($scope.lat);
            console.log($scope.lng);

              $scope.map = {
                        center: {
                                latitude: $scope.lat,
                                longitude: $scope.lng
                        },
                        zoom: 8
                };
            
        });
        dataFactory.getUserAlbums($routeParams.id).
        success(function(data) {
         $scope.albums = data;
         console.log($scope.albums);
        });  
        dataFactory.getUserPhotos($routeParams.id).
        success(function(data) {
         $scope.photos = data;
         console.log($scope.photos);
        });
  });

 // ALBUMS CONTROLLERS ---------------------------------------------------


// SINGLE USER ALBUMS LIST TEMPLATE CONTROLLER


 app.controller("albumsListCtrl", function($scope, $routeParams, dataFactory) {
        dataFactory.getUserAlbums($routeParams.id).
        success(function(data) {
            $scope.userAlbums = data;
            console.log($scope.userAlbums);
        });
  });


// POSTS CONTROLLERS--------------------------------------------------

// ALL POSTS TEMPLATE CONTROLLER

 app.controller("postsCtrl", function ($scope, dataFactory, $routeParams, $uibModal) {
        dataFactory.getPosts().
        success(function(data) {
            $scope.postslist = data;
            console.log($scope.postslist);
        });
        $scope.status = "go here";
        $scope.showNewPostForm = function () {
            $uibModal.open({
                templateUrl: 'partials/post_form.html',
                controller: 'postFormController'
            });
        };  
  });

// SINGLE POST TEMPLATE CONTROLLER

 app.controller("postCtrl", function($scope, $location, $routeParams, dataFactory, $uibModal) {
      dataFactory.getPost($routeParams.id).success(function(data) { 
            
            $scope.post = data;
            $scope.whichUser = data.userId;
            console.log($scope.post);
            console.log($scope.whichUser);
      });
      dataFactory.getComments($routeParams.id).success(function(data) {
            
            $scope.comments = data;
            console.log($scope.comments);
      });
      $scope.showUpdatePostForm = function (id) {
          $location.path();
          $uibModal.open({
              templateUrl: 'partials/post_form.html',
              controller: 'postFormController'
          });
      };
  });



// NEW POST FORM CONTROLLER

app.controller('postFormController', function($scope, dataFactory, $window, $routeParams, postService, $uibModalInstance ) {
    
    dataFactory.getPosts().success(function (data) {
        $scope.posts = data;
    });
    $scope.post = { userId: 1 };
    $scope.editablePost = angular.copy($scope.post);

    $scope.submitForm = function() {

          dataFactory.insertPost($scope.editablePost).then(function (response) {
                alert('Inserted Post! The server returned:' + JSON.stringify(response));
                console.log(response);
                $scope.posts.push($scope.editablePost);
            },
            function (error) {
                alert('Unable to Create a new post. Error: ' + error.message);
            });
        $scope.post = angular.copy($scope.editablePost);
        // $window.history.back();
        $uibModalInstance.close();
    };

    $scope.cancelForm = function () {
        //$window.history.back();
        $uibModalInstance.dismiss();
    };

});


  