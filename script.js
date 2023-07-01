var ShoppingCart = /** @class */ (function () {
    // private effect: Element;
    function ShoppingCart() {
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
        // this.effect = document.querySelectorAll('.effect') as Element;
        this.setUpEventListeners();
        this.initializeValues();
    }
    ShoppingCart.prototype.setUpEventListeners = function () {
        var _this = this;
        var createBtn = document.getElementById('create');
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
        // const shopSite = document.getElementById('shop-spot') as HTMLButtonElement;
        // const profilePage = document.getElementById('profile') as HTMLBodyElement;
        // const cartBtn = document.getElementById('cart-page')
        // cartBtn?.addEventListener('click', function(){
        //   if(profilePage.style.display === 'none'){
        //     profilePage.style.display = 'block';
        //   } else{
        //     shopSite.style.display = 'none';
        //   }
        // })
        var increaseBtn = document.querySelectorAll('.increase');
        var decreaseBtn = document.querySelectorAll('.decrease');
        var effect = document.querySelectorAll('.effect');
        var addingToCart = document.querySelectorAll('.shoeCart');
        var shoeName = document.querySelectorAll('.shoeName');
        increaseBtn.forEach(function (increase) {
            increase.addEventListener('click', function () {
                var number = Number(effect[increase["name"]]["value"]) + 1;
                effect[increase["name"]]["value"] = number;
            });
        });
        decreaseBtn.forEach(function (decrease) {
            decrease.addEventListener('click', function () {
                var num = Number(effect[decrease["name"]]["value"]);
                if (num <= 0) {
                    num = num;
                }
                else {
                    num = num - 1;
                }
                effect[decrease["name"]]["value"] = num;
            });
        });
        // addingToCart.forEach((cartAdd) => {
        //   cartAdd.addEventListener('click', () => {
        //     const effectIndex = (cartAdd as HTMLInputElement).dataset.effect;
        //     const effectElement = effect[effectIndex];
        //     if (effectElement.value === '0') {
        //       alert('Please, add to cart first.');
        //     }
        //   });
        // });
        addingToCart.forEach(function (cartAdd) {
            cartAdd.addEventListener('click', function () {
                var effectIndex = cartAdd.dataset.effect;
                if (effectIndex !== undefined) {
                    var effectElement = effect[parseInt(effectIndex, 10)];
                    if (effectElement.value === '0') {
                        alert('Please, add to cart first.');
                    }
                    else if (effectElement.value > '0') {
                        var shoeNameElement = shoeName[parseInt(effectIndex, 10)];
                        var cartItems = document.getElementById('cartItems');
                        var listItem = document.createElement('li');
                        listItem.textContent = shoeNameElement.textContent || '';
                        cartItems.appendChild(listItem);
                    }
                }
            });
        });
        // effect.forEach((element: Element) => {
        //   const value = (element as HTMLInputElement).value;
        //   addingToCart.forEach((cartAdd) => {
        //     cartAdd.addEventListener('click', ()=> {
        //       if(value === '0'){
        //         alert("Please, add to cart first.")
        //       }
        //     })
        //   })
        // });
        // increaseBtn?.addEventListener('click', ()=>{
        //   number++;
        //   this.effect.value = number.toString();
        //   // console.log();
        // })
    };
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
