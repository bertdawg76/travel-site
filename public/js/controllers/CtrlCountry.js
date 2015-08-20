angular.module('TravelSite').controller('CtrlCountry', function($scope, countryService) {
    
   
      
    $scope.addCountry = function(country, cb) {
    	
    	countryService.addCountry(country).then(function(res) {
    		
    	});
    }
    
    $scope.getCountry = function() {
        countryService.getCountry().then(function(dataFromService) {
            $scope.countries = dataFromService;
            
        });
    }

    $scope.deleteCountry = function(index) {
        var id = $scope.countries[index]._id
        countryService.deleteCountryData(id).then(function(res) {
            console.log(res);
            $scope.deleteCountryData();
        });
     };
});
    