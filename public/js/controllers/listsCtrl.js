angular.module('TravelSite').controller('listsCtrl', function ($scope, $location, $timeout, listsService, $mdDialog) {

  //Scope Functions / Scope API
  $scope.addList = addList;
  $scope.getList = getList;
  $scope.showAddListModal = showAddListModal;


  function addList(list) {
    listsService.addList(list)
        .then(function (res) {
          console.log('Res', res);
        })
  }

  function getList() {
    listsService.getList($scope.search).then(function (data) {
      $scope.places = data;
    });
  }

  function showAddListModal($event) {
    var $body = $(document.body);
    var hide = $mdDialog.show({
      parent: $body,
      targetEvent: $event,
      templateUrl: '../templates/addListModalTemplate.html',
      controller: ModalController
    });

    hide.then(function (data) {
      var list = {
        title: data[0],
        name: data[1],
        category: data[2],
        list: data[3]
      };
      addList(list);
    });

    function ModalController($scope, $mdDialog) {

      var categories = [
        {catName: 'Hiking'},
        {catName: 'Climbing'},
        {catName: 'Clubbing'},
        {catName: 'Fishing'},
        {catName: 'Scuba Diving'},
        {catName: 'Tours'},
        {catName: 'Restaurants'},
        {catName: 'Hotels'},
        {catName: 'Museums'},
        {catName: 'Heritage Sites'},
        {catName: 'Shopping'},
        {catName: 'Snorkeling'},
        {catName: 'National Parks'},
        {catName: 'Historic Sites'},
        {catName: 'Food'},
        {catName: 'Guides'},
        {catName: 'Kid Friendly'},
        {catName: 'Cant Miss'}
      ];

      $scope.getMatches = function (text) {
        if (!text || !text.trim().length) return categories;

        return categories.filter(function (i) {
          return i.catName.toLowerCase().match(text.toLowerCase()) != null;
        });
      };

      $scope.closeDialog = function () {
        $mdDialog.hide(4567);
      };

      $scope.saveLog = function () {
        $mdDialog.hide([$scope.list.title, $scope.list.name, $scope.selectedCategory.catName, $scope.list.list]);
      };
    }
  }
});


