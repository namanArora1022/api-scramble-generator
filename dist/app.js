"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// IMPORTING ROUTES
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
// MIDDLEWARE
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ROUTES
app.use('/api', index_1.default);
// STARTING THE SERVER
app.listen(port, function () {
    console.log("Server running at port: " + port);
});
