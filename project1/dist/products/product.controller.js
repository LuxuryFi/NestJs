"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const product_interface_1 = require("../interfaces/product.interface");
const roles_decorator_1 = require("../Authentication/roles.decorator");
const roles_guard_1 = require("../Authentication/roles.guard");
const role_enum_1 = require("../Authentication/role.enum");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create() {
        return { message: 'inserted' };
    }
    createOne(body, res) {
        let a = new product_interface_1.ProductItem();
        a.product_name = body.name,
            a.description = body.description,
            a.price = body.price;
        this.productsService.create(a);
        res.status(302).redirect('/products/index');
    }
    deleteOne(res, query) {
        let products = this.productsService.findAll();
        let id = query.id;
        res.status(302).redirect('/products/index');
    }
    update(query, body, param) {
        let products = this.productsService.findAll();
        let id = query.id;
        let product = null;
        return { product: product };
    }
    updateOne(res, query, body) {
        let products = this.productsService.findAll();
        let id = query.id;
        let name = body.name;
        let price = body.price;
        let description = body.description;
        console.log(id);
        res.status(302).redirect('/products/index');
    }
    async findAll() {
        let products = await this.productsService.findAll();
        console.log(products);
        return { message: products };
    }
};
__decorate([
    common_1.Get('create'),
    common_1.Render('create.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    roles_decorator_1.Roles(role_enum_1.Role.Admin),
    common_1.Post('createOne'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createOne", null);
__decorate([
    common_1.Get('delete/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteOne", null);
__decorate([
    common_1.Get('update/:id'),
    common_1.Render('update.hbs'),
    __param(0, common_1.Query()), __param(1, common_1.Body()), __param(2, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    common_1.Post('updateOne'),
    __param(0, common_1.Res()), __param(1, common_1.Query()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateOne", null);
__decorate([
    common_1.Get('index'),
    common_1.Render('index.hbs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=product.controller.js.map