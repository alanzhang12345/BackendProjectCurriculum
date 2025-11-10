"use strict";
// Weather API Client Implementation
// Complete the TODOs below to build a working weather client
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * WeatherClient class for interacting with the Open-Meteo API
 */
var WeatherClient = /** @class */ (function () {
    function WeatherClient() {
        this.weatherBaseURL = 'https://api.open-meteo.com/v1/forecast';
        this.geocodingBaseURL = 'https://geocoding-api.open-meteo.com/v1/search';
    }
    /**
     * Private helper method to make HTTP requests
     * @param url - The full URL to fetch
     * @returns Parsed JSON response
     */
    WeatherClient.prototype.request = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error(response.status.toString());
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    /**
     * Get current weather for a location
     * @param latitude - Latitude of the location (-90 to 90)
     * @param longitude - Longitude of the location (-180 to 180)
     * @returns Current weather data
     */
    WeatherClient.prototype.getCurrentWeather = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherFullURL, data, currentWeather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // TODO: Implement getCurrentWeather
                        // 1. Validate latitude is between -90 and 90
                        // 2. Validate longitude is between -180 and 180
                        // 3. Build the URL with query parameters:
                        //    - latitude
                        //    - longitude
                        //    - current_weather=true
                        // 4. Use this.request<CurrentWeatherResponse>() to fetch data
                        // 5. Extract and return just the current_weather object from the response
                        //
                        // Example URL: https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true
                        //
                        // Hint: Use URLSearchParams to build query parameters
                        if (latitude < -90 || latitude > 90) {
                            throw new Error("invalid latitude");
                        }
                        if (longitude < -180 || longitude > 180) {
                            throw new Error("invalid longitude");
                        }
                        weatherFullURL = this.weatherBaseURL + "?latitude=".concat(latitude, "&longitude=").concat(longitude, "&current_weather=true");
                        return [4 /*yield*/, this.request(weatherFullURL)];
                    case 1:
                        data = _a.sent();
                        currentWeather = {
                            temperature: data.current_weather.temperature,
                            windspeed: data.current_weather.windspeed,
                            winddirection: data.current_weather.winddirection,
                            weathercode: data.current_weather.weathercode,
                            time: data.current_weather.time,
                        };
                        return [2 /*return*/, currentWeather];
                }
            });
        });
    };
    /**
     * Get weather forecast for a location
     * @param latitude - Latitude of the location (-90 to 90)
     * @param longitude - Longitude of the location (-180 to 180)
     * @param days - Number of days to forecast (default 7, max 16)
     * @returns Weather forecast data
     */
    WeatherClient.prototype.getWeatherForecast = function (latitude_1, longitude_1) {
        return __awaiter(this, arguments, void 0, function (latitude, longitude, days) {
            var params, fullForecastURL, forecastData, forecast;
            if (days === void 0) { days = 7; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // TODO: Implement getWeatherForecast
                        // 1. Validate latitude is between -90 and 90
                        // 2. Validate longitude is between -180 and 180
                        // 3. Validate days is between 1 and 16
                        // 4. Build the URL with query parameters:
                        //    - latitude
                        //    - longitude
                        //    - daily=temperature_2m_max,temperature_2m_min,precipitation_sum
                        //    - forecast_days=<days>
                        //    - timezone=auto (important for correct dates!)
                        // 5. Use this.request<ForecastResponse>() to fetch data
                        // 6. Return the forecast data
                        //
                        // Example URL: https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&forecast_days=7&timezone=auto
                        if (latitude < -90 || latitude > 90) {
                            throw new Error("invalid latitude");
                        }
                        if (longitude < -180 || longitude > 180) {
                            throw new Error("invalid longitude");
                        }
                        if (days > 16) {
                            throw new Error("too many days");
                        }
                        params = new URLSearchParams();
                        params.append('latitude', String(latitude));
                        params.append('longitude', String(longitude));
                        params.append('daily', 'temperature_2m_max,temperature_2m_min,precipitation_sum');
                        params.append('forecast_days', String(days));
                        params.append('timezone', 'auto');
                        fullForecastURL = this.weatherBaseURL + "?" + String(params);
                        return [4 /*yield*/, this.request(fullForecastURL)];
                    case 1:
                        forecastData = _a.sent();
                        forecast = {
                            time: forecastData.daily.time,
                            temperature_2m_max: forecastData.daily.temperature_2m_max,
                            temperature_2m_min: forecastData.daily.temperature_2m_min,
                            precipitation_sum: forecastData.daily.precipitation_sum
                        };
                        return [2 /*return*/, {
                                daily: forecast
                            }];
                }
            });
        });
    };
    /**
     * Search for a city by name
     * @param cityName - Name of the city to search for
     * @returns City data or null if not found
     */
    WeatherClient.prototype.searchCity = function (cityName) {
        return __awaiter(this, void 0, void 0, function () {
            var params, fullSearchCityURL, cityData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // TODO: Implement searchCity
                        // 1. Validate cityName is not empty
                        // 2. Build the URL with query parameters:
                        //    - name=<cityName>
                        //    - count=1 (we only want the top result)
                        // 3. Use this.request<GeocodingResponse>() to fetch data
                        // 4. Check if results array exists and has at least one item
                        // 5. If yes, return the first result
                        // 6. If no, return null
                        //
                        // Example URL: https://geocoding-api.open-meteo.com/v1/search?name=New%20York&count=1
                        //
                        // Hint: URL-encode the city name using encodeURIComponent()
                        if (!cityName) {
                            throw new Error("empty city name");
                        }
                        params = new URLSearchParams();
                        params.append('name', cityName);
                        params.append('count', "1");
                        fullSearchCityURL = this.geocodingBaseURL + "?" + params.toString();
                        return [4 /*yield*/, this.request(fullSearchCityURL)
                            //console.log(cityData)
                        ];
                    case 1:
                        cityData = _a.sent();
                        //console.log(cityData)
                        if (cityData.length < 1) {
                            return [2 /*return*/, null];
                        }
                        else {
                            return [2 /*return*/, cityData.results[0]];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return WeatherClient;
}());
// Test function to verify your implementation
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var client, weather, error_1, forecast, i, error_2, city, error_3, error_4, paris, weather, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new WeatherClient();
                    console.log('=== Weather API Client Tests ===\n');
                    // Test 1: Current Weather for New York City
                    console.log('=== Test 1: Current Weather (NYC) ===');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.getCurrentWeather(40.7128, -74.006)];
                case 2:
                    weather = _a.sent();
                    console.log('NYC Current Weather:');
                    console.log("  Temperature: ".concat(weather.temperature, "\u00B0C"));
                    console.log("  Wind Speed: ".concat(weather.windspeed, " km/h"));
                    console.log("  Weather Code: ".concat(weather.weathercode));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    console.log('\n=== Test 2: 7-Day Forecast (NYC) ===');
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, client.getWeatherForecast(40.7128, -74.006)];
                case 6:
                    forecast = _a.sent();
                    console.log('7-Day Forecast for NYC:');
                    for (i = 0; i < forecast.daily.time.length; i++) {
                        console.log("  ".concat(forecast.daily.time[i], ": ") +
                            "Max ".concat(forecast.daily.temperature_2m_max[i], "\u00B0C, ") +
                            "Min ".concat(forecast.daily.temperature_2m_min[i], "\u00B0C, ") +
                            "Precipitation: ".concat(forecast.daily.precipitation_sum[i], "mm"));
                    }
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _a.sent();
                    console.error('Error:', error_2.message);
                    return [3 /*break*/, 8];
                case 8:
                    console.log('\n=== Test 3: City Search ===');
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, client.searchCity('London')];
                case 10:
                    city = _a.sent();
                    if (city) {
                        console.log("Found city: ".concat(city.name));
                        console.log("  Latitude: ".concat(city.latitude));
                        console.log("  Longitude: ".concat(city.longitude));
                        console.log("  Country: ".concat(city.country));
                    }
                    else {
                        console.log('City not found');
                    }
                    return [3 /*break*/, 12];
                case 11:
                    error_3 = _a.sent();
                    console.error('Error:', error_3.message);
                    return [3 /*break*/, 12];
                case 12:
                    console.log('\n=== Test 4: Error Handling ===');
                    _a.label = 13;
                case 13:
                    _a.trys.push([13, 15, , 16]);
                    // This should throw an error (invalid latitude)
                    return [4 /*yield*/, client.getCurrentWeather(999, 0)];
                case 14:
                    // This should throw an error (invalid latitude)
                    _a.sent();
                    return [3 /*break*/, 16];
                case 15:
                    error_4 = _a.sent();
                    console.log('Caught expected error:', error_4.message);
                    return [3 /*break*/, 16];
                case 16:
                    console.log('\n=== Test 5: Search for Weather by City Name ===');
                    _a.label = 17;
                case 17:
                    _a.trys.push([17, 21, , 22]);
                    return [4 /*yield*/, client.searchCity('Paris')];
                case 18:
                    paris = _a.sent();
                    if (!paris) return [3 /*break*/, 20];
                    console.log("\nWeather for ".concat(paris.name, ", ").concat(paris.country, ":"));
                    return [4 /*yield*/, client.getCurrentWeather(paris.latitude, paris.longitude)];
                case 19:
                    weather = _a.sent();
                    console.log("  Temperature: ".concat(weather.temperature, "\u00B0C"));
                    console.log("  Wind Speed: ".concat(weather.windspeed, " km/h"));
                    _a.label = 20;
                case 20: return [3 /*break*/, 22];
                case 21:
                    error_5 = _a.sent();
                    console.error('Error:', error_5.message);
                    return [3 /*break*/, 22];
                case 22: return [2 /*return*/];
            }
        });
    });
}
// Run the tests
main().catch(console.error);
