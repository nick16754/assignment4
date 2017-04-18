// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
 	$('.flexsearch-input').keyup(function(e) {
      // get the value of the input, converted to lower case
    	var searchTerm = $('.flexsearch-input').val();
      searchTerm = searchTerm.toLowerCase();
      // initialize html of results to be displayed
    	$('.flexsearch-results').html("");
      // initialize URL of Google search to append flexsearch results to (from Chrome browser)
      google = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q="


      $.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function(data_all) {
        data_all.data.interests.forEach(function(predictedResults) {
          predictedResults = predictedResults.toLowerCase();
          if(predictedResults.startsWith(searchTerm) && searchTerm.length > 0) {
            $('.flexsearch-results').append("<p>"+predictedResults+"</p")/*.append("<a target='_blank' href=' + google + predictedResults'>'predictedResults'</a><br>")*/;
          }
        });
        data_all.data.programming.forEach(function(predictedResults) {
          predictedResults = predictedResults.toLowerCase();
          if(predictedResults.startsWith(searchTerm) && searchTerm.length > 0) {
            $('.flexsearch-results').append("<p>"+predictedResults+"</p")/*.append("<a target='_blank' href=' + google + predictedResults'>'predictedResults'</a><br>")*/;
          }
        });
      })

      $.getJSON("http://www.mattbowytz.com/simple_api.json?data=comics", function(data_comics) {
        data_comics.data.forEach(function(predictedResults) {
          predictedResults = predictedResults.toLowerCase();
          if(predictedResults.startsWith(searchTerm) && searchTerm.length > 0) {
            $('.flexsearch-results').append("<p>"+predictedResults+"</p")/*.append("<a target='_blank' href=' + google + predictedResults'>'predictedResults'</a><br>")*/;
          }
        });
      })

    });

})();
