# Example-Grails-Weather-App
## To get started run the following two commands.
 1. ./gradlew tasks --all
 2.  grails run-app
## Using the application
 1. If you click "Get Weather" 
    with no zip code entered, the 
    application will try to find your
    zip code based on your ip address.
 2. If you enter a zip code it will find the weather
    based on the zip code entered once you click 
    "Get Weather".
    
## Files that are important
1. https://github.com/ermaxw/Example-Grails-Weather-App/blob/master/grails-app/controllers/pstest/WeatherController.groovy
   This is the controller for the rest API I created.  It makes 
   a call to a third party api to obtain the weather and returns
   the json.
2. https://github.com/ermaxw/Example-Grails-Weather-App/blob/master/grails-app/controllers/pstest/UrlMappings.groovy
   The routes for the views and rest APIs.
3. https://github.com/ermaxw/Example-Grails-Weather-App/blob/master/grails-app/assets/javascripts/weather.js
   This is a library I created ti encapsulate the calls to the rest APIs
   from the client side.  I would have used Angular or React but seemed to
   be overkill for this example.
4. https://github.com/ermaxw/Example-Grails-Weather-App/blob/master/grails-app/views/index.gsp
   This is the page containing the input for the application and
   it is also used to to display the results.
