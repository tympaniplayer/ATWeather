"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterService = void 0;
const common_1 = require("@nestjs/common");
const shelter_entity_1 = require("./entities/shelter.entity");
let ShelterService = class ShelterService {
    findOne(id) {
        const shelter = shelter_entity_1.ShelterLocations[id + 1];
        const location = {
            Id: id,
            Longitude: shelter.Latitude,
            Latitude: shelter.Latitude,
            Description: shelter.Description
        };
        return location;
    }
    findAll() {
        return shelter_entity_1.ShelterLocations.map((shelter, index) => {
            const location = {
                LocationId: index + 1,
                Latitude: shelter.Latitude,
                Longitude: shelter.Longitude,
                Description: shelter.Description
            };
            return location;
        });
    }
};
ShelterService = __decorate([
    (0, common_1.Injectable)()
], ShelterService);
exports.ShelterService = ShelterService;
//# sourceMappingURL=shelter.service.js.map