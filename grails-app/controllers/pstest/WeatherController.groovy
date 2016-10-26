package pstest

import grails.converters.JSON
import grails.plugins.rest.client.RestBuilder
import org.grails.web.json.JSONObject

class WeatherController{

    def getCurrentWeather(){
        def rest = new RestBuilder(connectTimeout:1000, readTimeout:20000)
        def resp = rest.get("http://api.openweathermap.org/data/2.5/weather?zip="+params.zip+",us&appid=28680dd15c2e041f311db4216a3b7eff")
        resp.json instanceof JSONObject
        render resp.json as JSON
    }
}
