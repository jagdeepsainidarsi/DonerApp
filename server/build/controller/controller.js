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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDonor = exports.Getsearchdata = exports.Getdoners = exports.registerdoner = exports.Authenticate = exports.Login = void 0;
var Register_model = require("../models/RegistrationSchema");
var Validate_1 = require("./Validate");
var user_model = require("../models/LoginSchema");
var authenticate = require("../db/middleware/authenticate");
var bcrypt = require('bcryptjs');
var Login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, _a, username, pass, userLogin, isMatch, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body, "9");
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                token = void 0;
                _a = req.body, username = _a.username, pass = _a.pass;
                if (!username || !pass) {
                    return [2 /*return*/, res.status(403).json({ error: "filled all " })];
                }
                return [4 /*yield*/, user_model.findOne({ username: username })];
            case 2:
                userLogin = _b.sent();
                if (!userLogin) return [3 /*break*/, 7];
                console.log(userLogin);
                return [4 /*yield*/, bcrypt.compare(pass, userLogin.pass)];
            case 3:
                isMatch = _b.sent();
                console.log(isMatch, "56");
                if (!!isMatch) return [3 /*break*/, 4];
                res.status(401).json({ error: "incorrect Password" });
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, userLogin.generateAuthToken()];
            case 5:
                token = _b.sent();
                console.log(token, "56");
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 3600000),
                    httpOnly: true
                });
                res.status(200).json({ message: "signin successfully " });
                _b.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                res.status(400).json({ error: "invalid " });
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                err_1 = _b.sent();
                console.log(err_1);
                return [3 /*break*/, 10];
            case 10:
                ;
                return [2 /*return*/];
        }
    });
}); };
exports.Login = Login;
var Authenticate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
exports.Authenticate = Authenticate;
var registerdoner = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, first_name, last_name, age, bloodgroup, address, phoneno, distt, state, coronapositive, coronanegative, gender, user, add, userregister, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.body, first_name = _a.first_name, last_name = _a.last_name, age = _a.age, bloodgroup = _a.bloodgroup, address = _a.address, phoneno = _a.phoneno, distt = _a.distt, state = _a.state, coronapositive = _a.coronapositive, coronanegative = _a.coronanegative, gender = _a.gender;
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
}); };
exports.registerdoner = registerdoner;
var Getdoners = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Register_model.find({})];
            case 1:
                user = _a.sent();
                if (user) {
                    res.send(user);
                }
                else {
                    res.send("Error");
                }
                return [2 /*return*/];
        }
    });
}); };
exports.Getdoners = Getdoners;
var Getsearchdata = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, distt, state, s1, st, sorted, j, i, users, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.body, distt = _a.distt, state = _a.state;
                s1 = req.body.arrarr;
                console.log(s1, "57");
                distt = distt.toUpperCase();
                state = state.toUpperCase();
                st = 0;
                sorted = [];
                for (j = 0; j < s1.length; j++) {
                    if (s1[j] === "All") {
                        console.log("find all");
                        st = 1;
                        break;
                    }
                }
                if (!(st !== 1)) return [3 /*break*/, 1];
                i = 0;
                try {
                    s1.forEach(function (element) { return __awaiter(void 0, void 0, void 0, function () {
                        var userLogin, k;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Register_model.find({ distt: distt, state: state, status: true, bloodgroup: element })];
                                case 1:
                                    userLogin = _a.sent();
                                    i++;
                                    for (k = 0; k < userLogin.length; k++) {
                                        sorted.push(userLogin[k]);
                                    }
                                    if (i === s1.length) {
                                        res.send(sorted);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (e) {
                    console.log(e);
                }
                return [3 /*break*/, 4];
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Register_model.find({ distt: distt, state: state, status: true })];
            case 2:
                users = _b.sent();
                if (users) {
                    users.sort();
                    res.send(users);
                }
                else {
                    res.status(400).json("no record found");
                }
                return [3 /*break*/, 4];
            case 3:
                e_2 = _b.sent();
                console.log(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Getsearchdata = Getsearchdata;
var EditDonor = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var phoneno, user, s, e_3;
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
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.EditDonor = EditDonor;
