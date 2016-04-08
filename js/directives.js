//put javascript in strict mode to catch some errors

'use strict';

app.directive('postForm',
    function () {
        return {
            restrict: 'E', //limits the directive to an element
            templateUrl: 'app/partials/post-form.html'
        }
    });