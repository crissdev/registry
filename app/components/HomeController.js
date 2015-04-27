class HomeController {
  constructor ($scope, $anchorScroll, $location, packages) {
    _.extend(this, {
      q: { $: $location.search().q },
      packages: packages,
      $anchorScroll: $anchorScroll
    });

    $scope.$watch(() => { return this.q.$; }, (val) => {
      $location.search('q', val === '' ? undefined : val);
    });
  }

  backToTop () {
    this.$anchorScroll();
  }
}

export { HomeController };
