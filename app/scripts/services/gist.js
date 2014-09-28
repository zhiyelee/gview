'use strict';

// set default marked opt
marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    langPrefix: ''
});

function parseGist (gist) {
    var files = gist.files;
    gist.fileCount = Object.keys(files).length;
    Object.keys(files).forEach(function (name) {
        var file = files[name];
        if ('Markdown' === file.language) {
            file.html = marked(file.content);
        }
    });
    return gist;
}

/**
 * @ngdoc service
 * @name gView.Gist
 * @description
 * # Gist
 * Factory in the gView.
 */
angular.module('gView')
    .factory('Gist', ['$resource', function ($resource) {
        return $resource('https://api.github.com/gists/:id', {id: '@id'});
    }])
    .factory('GistLoader', ['Gist', '$q', function (Gist, $q) {
        return function (params) {
            var defer = $q.defer();
            Gist.get({id: params.gistId},
                function (gist) {
                    gist = parseGist(gist);
                    defer.resolve(gist);
                },
                function (){
                    defer.reject('fail to load gits' + params.gistId);
                }
            );

            return defer.promise;
        };

    }]);
