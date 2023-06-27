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
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        var _this = this;
        this.setUpEventListeners = function () { return __awaiter(_this, void 0, void 0, function () {
            var createBtn, shopSite, profilePage, cartBtn, increaseBtn, decreaseBtn, effect;
            var _this = this;
            return __generator(this, function (_a) {
                createBtn = document.getElementById('create');
                createBtn === null || createBtn === void 0 ? void 0 : createBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    if (_this.nameOfUser.value.trim() === '' ||
                        _this.addressOfUser.value.trim() === '' ||
                        _this.emailOfUser.value.trim() === '' ||
                        _this.passwordOfUser.value.trim() === '') {
                        alert('Please, fill in all the fields.');
                    }
                    else if (_this.passwordOfUser.value.length < 10) {
                        alert('Password should be greater than or equal ten digits.');
                    }
                    else {
                        localStorage.setItem('userAccName', _this.nameOfUser.value);
                        localStorage.setItem('userAccEmail', _this.emailOfUser.value);
                        window.location.assign('store.html');
                    }
                });
                shopSite = document.getElementById('shop-spot');
                profilePage = document.getElementById('profile');
                cartBtn = document.getElementById('cart-page');
                cartBtn === null || cartBtn === void 0 ? void 0 : cartBtn.addEventListener('click', function () {
                    if (profilePage.style.display === 'none') {
                        profilePage.style.display = 'block';
                    }
                    else {
                        shopSite.style.display = 'none';
                    }
                });
                increaseBtn = document.querySelectorAll('.increase');
                decreaseBtn = document.querySelectorAll('.decrease');
                effect = document.querySelectorAll('.effect');
                increaseBtn.forEach(function (increase) {
                    increase.addEventListener('click', function () {
                        var number = Number(effect[increase["name"]]["value"]) + 1;
                        effect[increase["name"]]["value"] = number;
                    });
                });
                return [2 /*return*/];
            });
        }); };
        this.nameOfUser = document.getElementById('userName');
        this.addressOfUser = document.getElementById('userAddress');
        this.emailOfUser = document.getElementById('userEmail');
        this.passwordOfUser = document.getElementById('userPassword');
        this.emailOfOldUser = document.getElementById('user-email');
        this.passwordOfOldUser = document.getElementById('user-password');
        this.userAccName = document.querySelector('.usersName');
        this.userAccEmail = document.querySelector('.usersEmail');
        this.storedUsersName = localStorage.getItem('userAccName');
        this.storedUsersEmail = localStorage.getItem('userAccEmail');
        this.storedUsersAddress = localStorage.getItem('userAccAddress');
        // this.storedUsersPassword = localStorage.getItem('userAccPin');
        // this.effect = document.querySelectorAll('.effect') ;
        this.setUpEventListeners();
        this.initializeValues();
    }
    ShoppingCart.prototype.initializeValues = function () {
        var _a;
        if (this.storedUsersName !== null) {
            this.userAccName.textContent = (_a = this.storedUsersName) === null || _a === void 0 ? void 0 : _a.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
        }
        else {
            this.userAccName.textContent = 'xxxxxx';
        }
        if (this.storedUsersEmail !== null) {
            this.userAccEmail.textContent = this.storedUsersEmail;
        }
        else {
            this.userAccEmail.textContent = 'xxxxxx';
        }
    };
    return ShoppingCart;
}());
var cart = new ShoppingCart();
