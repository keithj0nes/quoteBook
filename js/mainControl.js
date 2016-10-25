angular.module("myApp").controller("mainControl", function($scope, mainService){

  $scope.thisAppIsBroken = "This angular app is working";

  $scope.getQuotes = function(){
    $scope.quotes = mainService.getQuotes();
  }

  $scope.getQuotes();

  $scope.deleteMe = function(textToDelete){
    mainService.removeData(textToDelete);
  }

  $scope.addQuote = function(newQuote){
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    }
    if(mainService.addData(newQuote)){
      $scope.newQuoteText = "";
      $scope.newQuoteAuthor = "";
    };
  }

});
