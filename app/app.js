import { default as home } from './components/home.module';

function config ($urlRouterProvider, $stateProvider, registryPath) {
  $stateProvider.state('home', {
    url: '/',
    controller:   'HomeController',
    controllerAs: 'home',
    resolve: {
      packages: function ($http) {
        if (localStorage.getItem('cachedList')) {
          return JSON.parse(localStorage.getItem('cachedList'));
        }

        return $http.get(registryPath).then(function (res) {
          var decoded = atob(res.data.content);
          var json    = JSON.parse(decoded);
          var keys    = Object.keys(json);
          var urlMap  = {
            github: 'github.com',
            npm:    'npmjs.com'
          };

          var mapped = keys.map((key) => {
            var split = json[key].split(':');

            return {
              key:    key,
              distro: split[0],
              source: json[key],
              url:    urlMap[split[0]] + '/' + split[1]
            }
          });

          localStorage.setItem('cachedList', JSON.stringify(mapped));
          return mapped;
        });
      }
    },
    templateUrl:  'app/components/home.html'
  });

  $urlRouterProvider.when('', '/');
}

export default angular
  .module('jspmRegistry', [ 'ui.router', home.name ])
  .constant('registryPath', 'https://api.github.com/repos/jspm/registry/contents/registry.json')
  .config(config);

// Stars: https://api.github.com/repos/owner/repo { stargazers_count }
// Watchers: https://api.github.com/repos/owner/repo { watchers_count }
