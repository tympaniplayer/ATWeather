"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const shelters_1 = require("./shelters");
const winston_1 = __importDefault(require("winston"));
const PORT = process.env.PORT || 8080;
const APIKEY = process.env.APIKEY;
const app = (0, express_1.default)();
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'at-weather-service' },
    transports: [
        new winston_1.default.transports.Console()
    ]
});
app.get('/api', (req, res) => {
    res.json('');
});
app.get('/api/weather/:shelterId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let shelterId = -1;
    if (req.params && req.params.shelterId && typeof req.params.shelterId === "string") {
        shelterId = Number(req.params.shelterId);
    }
    else {
        res.status(500).send("shelterId must be a number");
        return;
    }
    const shelter = shelters_1.locations[shelterId - 1];
    const response = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.latitude}&lon=${shelter.longitude}&appid=${APIKEY}`);
    const shelterResponse = {
        description: shelter.description,
        weather: response.data
    };
    res.send(shelterResponse);
}));
app.get('/api/shelters', (req, res) => {
    const response = shelters_1.locations.map((shelter, index) => {
        return {
            locationId: index + 1,
            latitude: shelter.latitude,
            longitude: shelter.longitude,
            description: shelter.description,
        };
    });
    res.json(response);
});
app.listen(PORT, () => logger.info(`Server is running on PORT ${PORT}`));
//# sourceMappingURL=index.js.map