'use strict';

// set default marked opt
marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    highlight: highlight,
    langPrefix: ''
});

function highlight (code, lang){
  var o;

  if(lang === 'js') {
    lang = 'javascript';
  } else if (lang === 'html') {
    lang = 'xml';
  }

  hljs.configure({ classPrefix: '' });

  if(lang){
    o = hljs.highlight(lang, code);
  } else {
    o = hljs.highlightAuto(code).value;
  }

  var html = o.value;
  if(html){
    return html;
  } else {
    return code;
  }
}

function parseGist (gist) {
  var files = gist.files;
  // supported language
  //  github language ==> highlight.js language
  var langHash = {
    'javascript': 'js',
    'shell': 'bash',
    'css': 'css',
    'c': 'c',
    'c#': 'cs',
    'html': 'html',
    'java': 'java',
    'python': 'python',
    'php': 'php'
  };

  Object.keys(files).forEach(function (name) {
    var file = files[name];
    var lang = file.language;

    lang = lang && lang.toLowerCase();
    // convert, such as shell -> bash
    var hlLang = langHash[lang] ? langHash[lang] : '';

    if (lang === 'markdown') {
      file.html = marked(file.content);
    } else if (lang) {
      file.html = marked('```' + hlLang + '\n' + file.content + '\n```');
    } else {
      file.html = '<pre class="unsupported-type">' + file.content + '</pre>';
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
  .factory('gistLoader', ['Gist', '$q', function (Gist, $q) {
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
