"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./source/config/config"));
var mongoose = require('mongoose');
var dotenv = require("dotenv");
var Validate_1 = require("./controller/Validate");
dotenv.config({ path: './config.env' });
require("./db/connection");
var Register_model = require("./models/RegistrationSchema");
var cookieParser = require("cookie-parser");
var controller = __importStar(require("./controller/controller"));
var authenticate = require("./db/middleware/authenticate");
var app = express_1.default();
app.use(cookieParser());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get("/authenticate", authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("chlga");
        res.status(200).json({ message: "Authenticated", name: req.rootUser.username });
        return [2 /*return*/];
    });
}); });
app.post("/signin", controller.Login);
app.post("/registerdoner", authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, first_name, last_name, age, bloodgroup, address, phoneno, distt, state, coronapositive, coronanegative, gender, createdBy, ModifiedBy, user, add, userregister, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.rootUser);
                req.body.createdBy = req.rootUser.username;
                req.body.ModifiedBy = "";
                _a = req.body, first_name = _a.first_name, last_name = _a.last_name, age = _a.age, bloodgroup = _a.bloodgroup, address = _a.address, phoneno = _a.phoneno, distt = _a.distt, state = _a.state, coronapositive = _a.coronapositive, coronanegative = _a.coronanegative, gender = _a.gender, createdBy = _a.createdBy, ModifiedBy = _a.ModifiedBy;
                if (!first_name || !last_name || !age || !bloodgroup || !phoneno || !distt || !state || !coronapositive || !coronanegative) {
                    return [2 /*return*/, res.status(403).json({ error: "filled all " })];
                }
                req.body.state = req.body.state.toUpperCase();
                req.body.age = parseInt(req.body.age);
                req.body.distt = req.body.distt.toUpperCase();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 9]);
                if (!Validate_1.validate(first_name, last_name, age, phoneno, distt, state, coronapositive, coronanegative, gender)) return [3 /*break*/, 6];
                console.log("validate");
                return [4 /*yield*/, Register_model.findOne({ phoneno: phoneno })];
            case 2:
                user = _b.sent();
                if (!user) return [3 /*break*/, 3];
                console.log("find");
                res.status(400).json("Mobile no already exist");
                return [3 /*break*/, 5];
            case 3:
                req.body.status = true;
                add = new Register_model(req.body);
                return [4 /*yield*/, add.save()];
            case 4:
                userregister = _b.sent();
                res.status(200).json({ message: "User register" });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.send("Validation faied");
                _b.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                e_1 = _b.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
app.get("/getdoners", controller.Getdoners);
app.post("/senddata", controller.Getsearchdata);
// app.post("/editdonor",controller.EditDonor);
app.post("/editdonor", authenticate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var phoneno, user, s, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                phoneno = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, Register_model.findOne({ phoneno: req.body.phoneno })];
            case 2:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                user.status = false;
                user.ModifiedBy = req.rootUser.username;
                console.log(user);
                return [4 /*yield*/, user.save()];
            case 3:
                s = _a.sent();
                res.status(200).json("Updated");
                return [3 /*break*/, 5];
            case 4:
                res.send("Error");
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                console.log(e_2);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
app.listen(config_1.default.server.port, function () {
    console.log("Server is running at:" + config_1.default.server.port);
});
