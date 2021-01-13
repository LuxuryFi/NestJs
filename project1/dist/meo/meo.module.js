"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeoModule = void 0;
const common_1 = require("@nestjs/common");
const meo_controller_1 = require("./meo.controller");
const meo_service_1 = require("./meo.service");
let MeoModule = class MeoModule {
};
MeoModule = __decorate([
    common_1.Module({
        controllers: [meo_controller_1.MeoController],
        providers: [meo_service_1.MeoService]
    })
], MeoModule);
exports.MeoModule = MeoModule;
//# sourceMappingURL=meo.module.js.map