class HomeController {
  constructor ($scope, $http, $anchorScroll, $location, packages) {
    var rateLimitReached = localStorage.getItem('rateLimitReached');
    var githubPackages = _.filter(packages, { distro: 'github' });

    function successHandler (res) {
      this.stars    = res.data.stargazers_count;
      this.watchers = res.data.watchers_count;
    }

    function errorHandler (error) {
      if (error.headers()['x-ratelimit-remaining'] === 0) {
        rateLimitReached = true;
        localStorage.setItem('rateLimitReached', true);
      }

      return;
    }

    function storeList (res) {
      localStorage.setItem('cachedList', JSON.stringify(packages));
    }

    for (var i = 0; i < githubPackages.length; i++) {
      if (rateLimitReached) { break; }

      if (githubPackages[i].stars || githubPackages[i].watchers) {
        return;
      }

      $http.get('https://api.github.com/repos/' + githubPackages[i].source)
        .then(successHandler.bind(githubPackages[i]))
        .catch(errorHandler)
        .finally(storeList);
    }

    $scope.$watch(() => { return this.q.$; }, (val) => {
      $location.search('q', val === '' ? undefined : val);
    });

    _.extend(this, {
      q: { $: $location.search().q },
      packages: packages,
      $anchorScroll: $anchorScroll
    });
  }

  backToTop () {
    this.$anchorScroll();
  }
}

export { HomeController };
