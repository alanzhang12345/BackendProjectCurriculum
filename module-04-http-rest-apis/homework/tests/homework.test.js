"use strict";
// Module 04 Homework Tests
// These tests verify your Weather API Client implementation
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
// Import the WeatherClient class
// Note: Students need to export the class for testing
var WeatherClient;
try {
    var module_1 = require('../starter/index');
    WeatherClient = module_1.WeatherClient;
}
catch (error) {
    console.error('Error loading WeatherClient:', error);
}
describe('Module 04: Weather API Client', function () {
    var client;
    beforeEach(function () {
        if (WeatherClient) {
            client = new WeatherClient();
        }
    });
    describe('Part 1: TypeScript Types', function () {
        test('CurrentWeather interface should be defined', function () {
            // Check that the type can be imported
            var weather = {
                temperature: 15.3,
                windspeed: 10.5,
                winddirection: 270,
                weathercode: 3,
                time: '2025-01-15T12:00',
            };
            expect(weather).toBeDefined();
            expect(weather.temperature).toBe(15.3);
        });
        test('WeatherForecast interface should be defined', function () {
            var forecast = {
                daily: {
                    time: ['2025-01-15'],
                    temperature_2m_max: [15.3],
                    temperature_2m_min: [8.1],
                    precipitation_sum: [0.0],
                },
            };
            expect(forecast).toBeDefined();
            expect(forecast.daily.time).toHaveLength(1);
        });
        test('City interface should be defined', function () {
            var city = {
                name: 'New York',
                latitude: 40.71,
                longitude: -74.01,
                country: 'United States',
            };
            expect(city).toBeDefined();
            expect(city.name).toBe('New York');
        });
    });
    describe('Part 2: WeatherClient Class', function () {
        test('WeatherClient class should be exported', function () {
            expect(WeatherClient).toBeDefined();
            expect(typeof WeatherClient).toBe('function');
        });
        test('WeatherClient should be instantiable', function () {
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(WeatherClient);
        });
        test('WeatherClient should have getCurrentWeather method', function () {
            expect(client.getCurrentWeather).toBeDefined();
            expect(typeof client.getCurrentWeather).toBe('function');
        });
        test('WeatherClient should have getWeatherForecast method', function () {
            expect(client.getWeatherForecast).toBeDefined();
            expect(typeof client.getWeatherForecast).toBe('function');
        });
        test('WeatherClient should have searchCity method', function () {
            expect(client.searchCity).toBeDefined();
            expect(typeof client.searchCity).toBe('function');
        });
    });
    describe('Part 3: getCurrentWeather Method', function () {
        test('should fetch current weather for valid coordinates', function () { return __awaiter(void 0, void 0, void 0, function () {
            var weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getCurrentWeather(40.7128, -74.006)];
                    case 1:
                        weather = _a.sent();
                        expect(weather).toBeDefined();
                        expect(weather.temperature).toBeDefined();
                        expect(typeof weather.temperature).toBe('number');
                        expect(weather.windspeed).toBeDefined();
                        expect(typeof weather.windspeed).toBe('number');
                        expect(weather.weathercode).toBeDefined();
                        expect(typeof weather.weathercode).toBe('number');
                        return [2 /*return*/];
                }
            });
        }); }, 10000); // 10 second timeout for API call
        test('should throw error for invalid latitude', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.getCurrentWeather(999, 0)).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('should throw error for invalid longitude', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.getCurrentWeather(0, 999)).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('should handle different valid coordinates', function () { return __awaiter(void 0, void 0, void 0, function () {
            var weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getCurrentWeather(51.5074, -0.1278)];
                    case 1:
                        weather = _a.sent();
                        expect(weather).toBeDefined();
                        expect(weather.temperature).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
    });
    describe('Part 4: getWeatherForecast Method', function () {
        test('should fetch 7-day forecast by default', function () { return __awaiter(void 0, void 0, void 0, function () {
            var forecast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getWeatherForecast(40.7128, -74.006)];
                    case 1:
                        forecast = _a.sent();
                        expect(forecast).toBeDefined();
                        expect(forecast.daily).toBeDefined();
                        expect(forecast.daily.time).toBeDefined();
                        expect(Array.isArray(forecast.daily.time)).toBe(true);
                        expect(forecast.daily.time.length).toBe(7);
                        expect(forecast.daily.temperature_2m_max).toBeDefined();
                        expect(forecast.daily.temperature_2m_max.length).toBe(7);
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('should fetch custom number of days', function () { return __awaiter(void 0, void 0, void 0, function () {
            var forecast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getWeatherForecast(40.7128, -74.006, 3)];
                    case 1:
                        forecast = _a.sent();
                        expect(forecast).toBeDefined();
                        expect(forecast.daily.time.length).toBe(3);
                        expect(forecast.daily.temperature_2m_max.length).toBe(3);
                        expect(forecast.daily.temperature_2m_min.length).toBe(3);
                        expect(forecast.daily.precipitation_sum.length).toBe(3);
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('should throw error for invalid days parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.getWeatherForecast(40.7128, -74.006, 0)).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(client.getWeatherForecast(40.7128, -74.006, 20)).rejects.toThrow()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('should include all required forecast fields', function () { return __awaiter(void 0, void 0, void 0, function () {
            var forecast, length;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getWeatherForecast(40.7128, -74.006, 1)];
                    case 1:
                        forecast = _a.sent();
                        expect(forecast.daily.time).toBeDefined();
                        expect(forecast.daily.temperature_2m_max).toBeDefined();
                        expect(forecast.daily.temperature_2m_min).toBeDefined();
                        expect(forecast.daily.precipitation_sum).toBeDefined();
                        length = forecast.daily.time.length;
                        expect(forecast.daily.temperature_2m_max.length).toBe(length);
                        expect(forecast.daily.temperature_2m_min.length).toBe(length);
                        expect(forecast.daily.precipitation_sum.length).toBe(length);
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
    });
    describe('Part 5: searchCity Method', function () {
        test('should find a city by name', function () { return __awaiter(void 0, void 0, void 0, function () {
            var city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('London')];
                    case 1:
                        city = _a.sent();
                        expect(city).toBeDefined();
                        expect(city).not.toBeNull();
                        expect(city.name).toBeDefined();
                        expect(city.latitude).toBeDefined();
                        expect(city.longitude).toBeDefined();
                        expect(city.country).toBeDefined();
                        expect(typeof city.latitude).toBe('number');
                        expect(typeof city.longitude).toBe('number');
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('should return null for non-existent city', function () { return __awaiter(void 0, void 0, void 0, function () {
            var city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('NonExistentCityXYZ12345')];
                    case 1:
                        city = _a.sent();
                        expect(city).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('should handle different city names', function () { return __awaiter(void 0, void 0, void 0, function () {
            var paris, tokyo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('Paris')];
                    case 1:
                        paris = _a.sent();
                        expect(paris).toBeDefined();
                        expect(paris === null || paris === void 0 ? void 0 : paris.name).toContain('Paris');
                        return [4 /*yield*/, client.searchCity('Tokyo')];
                    case 2:
                        tokyo = _a.sent();
                        expect(tokyo).toBeDefined();
                        expect(tokyo === null || tokyo === void 0 ? void 0 : tokyo.name).toContain('Tokyo');
                        return [2 /*return*/];
                }
            });
        }); }, 15000);
        test('should throw error for empty city name', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.searchCity('')).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Part 6: Error Handling', function () {
        test('should validate latitude range (-90 to 90)', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.getCurrentWeather(-91, 0)).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(client.getCurrentWeather(91, 0)).rejects.toThrow()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('should validate longitude range (-180 to 180)', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(client.getCurrentWeather(0, -181)).rejects.toThrow()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(client.getCurrentWeather(0, 181)).rejects.toThrow()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        test('should handle network errors gracefully', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // This test checks that errors are properly propagated
                    // We can't easily simulate network errors, but we can check invalid coordinates
                    return [4 /*yield*/, expect(client.getCurrentWeather(100, 200)).rejects.toThrow()];
                    case 1:
                        // This test checks that errors are properly propagated
                        // We can't easily simulate network errors, but we can check invalid coordinates
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Part 7: Integration Tests', function () {
        test('should search city and get its weather', function () { return __awaiter(void 0, void 0, void 0, function () {
            var city, weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('New York')];
                    case 1:
                        city = _a.sent();
                        expect(city).toBeDefined();
                        expect(city).not.toBeNull();
                        return [4 /*yield*/, client.getCurrentWeather(city.latitude, city.longitude)];
                    case 2:
                        weather = _a.sent();
                        expect(weather).toBeDefined();
                        expect(weather.temperature).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); }, 15000);
        test('should search city and get its forecast', function () { return __awaiter(void 0, void 0, void 0, function () {
            var city, forecast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('London')];
                    case 1:
                        city = _a.sent();
                        expect(city).toBeDefined();
                        return [4 /*yield*/, client.getWeatherForecast(city.latitude, city.longitude, 3)];
                    case 2:
                        forecast = _a.sent();
                        expect(forecast).toBeDefined();
                        expect(forecast.daily.time.length).toBe(3);
                        return [2 /*return*/];
                }
            });
        }); }, 15000);
    });
    describe('Part 8: Data Validation', function () {
        test('current weather should have valid data types', function () { return __awaiter(void 0, void 0, void 0, function () {
            var weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getCurrentWeather(40.7128, -74.006)];
                    case 1:
                        weather = _a.sent();
                        expect(typeof weather.temperature).toBe('number');
                        expect(typeof weather.windspeed).toBe('number');
                        expect(typeof weather.winddirection).toBe('number');
                        expect(typeof weather.weathercode).toBe('number');
                        expect(typeof weather.time).toBe('string');
                        // Temperature should be reasonable (-100 to 100°C)
                        expect(weather.temperature).toBeGreaterThan(-100);
                        expect(weather.temperature).toBeLessThan(100);
                        // Wind speed should be non-negative
                        expect(weather.windspeed).toBeGreaterThanOrEqual(0);
                        // Wind direction should be 0-360
                        expect(weather.winddirection).toBeGreaterThanOrEqual(0);
                        expect(weather.winddirection).toBeLessThanOrEqual(360);
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('forecast should have consistent array lengths', function () { return __awaiter(void 0, void 0, void 0, function () {
            var forecast, timeLength;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getWeatherForecast(40.7128, -74.006, 5)];
                    case 1:
                        forecast = _a.sent();
                        timeLength = forecast.daily.time.length;
                        expect(forecast.daily.temperature_2m_max.length).toBe(timeLength);
                        expect(forecast.daily.temperature_2m_min.length).toBe(timeLength);
                        expect(forecast.daily.precipitation_sum.length).toBe(timeLength);
                        // Check that dates are in ISO format
                        forecast.daily.time.forEach(function (date) {
                            expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
                        });
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        test('city search should return valid coordinates', function () { return __awaiter(void 0, void 0, void 0, function () {
            var city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.searchCity('Berlin')];
                    case 1:
                        city = _a.sent();
                        if (city) {
                            expect(city.latitude).toBeGreaterThanOrEqual(-90);
                            expect(city.latitude).toBeLessThanOrEqual(90);
                            expect(city.longitude).toBeGreaterThanOrEqual(-180);
                            expect(city.longitude).toBeLessThanOrEqual(180);
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
    });
});
