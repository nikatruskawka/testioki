var MyApp = angular.module('MyApp', ['ng', 'ngResource']);

MyApp.factory('flickrPhotos', function ($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});


MyApp.controller('MasonryCtrl', function ($scope, flickrPhotos) {
    $scope.tagList = [
        {name: 'lake'},
        {name: 'mountain'},
        {name: 'sea'},
        {name: 'city'},
        {name: 'village'}
    ]

    $scope.photos = flickrPhotos.load({ tags: 'sea' });
    $scope.photos2 = flickrPhotos.load({ tags: 'mountains' });
    $scope.yourGallery = false;
    $scope.getGallery = function (tag) {
        $scope.photos3 = flickrPhotos.load({ tags: tag });
    };

});

