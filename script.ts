interface Element {
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  textContent: string;
}

class ShoppingCart {
  private nameOfUser: HTMLInputElement;
  private addressOfUser: HTMLInputElement;
  private emailOfUser: HTMLInputElement;
  private passwordOfUser: HTMLInputElement;
  private emailOfOldUser: HTMLInputElement;
  private passwordOfOldUser: HTMLInputElement;
  private logInBtn: Element;
  private storedUsersName: string | null;
  private storedUsersEmail: string | null;
  private storedUsersPassword: string | null;
  private storedUsersAddress: string | null;
  private userAccName: HTMLSpanElement;
  private userAccEmail: HTMLSpanElement;
  private userAccAddress: HTMLSpanElement;
  private sameUserName: HTMLSpanElement;
  private cartPage: HTMLButtonElement;
  private shop: HTMLBodyElement;
  private effect: HTMLInputElement;


  constructor() {
    this.nameOfUser = document.getElementById('userName') as HTMLInputElement;
    this.addressOfUser = document.getElementById('userAddress') as HTMLInputElement;
    this.emailOfUser = document.getElementById('userEmail') as HTMLInputElement;
    this.passwordOfUser = document.getElementById('userPassword') as HTMLInputElement;
    this.emailOfOldUser = document.getElementById('user-email') as HTMLInputElement;
    this.passwordOfOldUser = document.getElementById('user-password') as HTMLInputElement;
    this.userAccName = document.querySelector('.usersName') as HTMLSpanElement;
    this.userAccEmail = document.querySelector('.usersEmail') as HTMLSpanElement;
    this.storedUsersName = localStorage.getItem('userAccName');
    this.storedUsersEmail = localStorage.getItem('userAccEmail');
    this.storedUsersAddress = localStorage.getItem('userAccAddress');
    // this.storedUsersPassword = localStorage.getItem('userAccPin');
    this.effect = document.getElementById('effect') as HTMLInputElement;
    
    this.setUpEventListeners();
    this.initializeValues();
  }

  private setUpEventListeners = async (): Promise<void> => {
    const createBtn = document.getElementById('create') as Element;
    createBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        this.nameOfUser.value.trim() === '' ||
        this.addressOfUser.value.trim() === '' ||
        this.emailOfUser.value.trim() === '' ||
        this.passwordOfUser.value.trim() === ''
      ) {
        alert('Please, fill in all the fields.');
      } else if (this.passwordOfUser.value.length < 10) {
        alert('Password should be greater than or equal ten digits.');
      } else {
        localStorage.setItem('userAccName', this.nameOfUser.value);
        localStorage.setItem('userAccEmail', this.emailOfUser.value);
        window.location.assign('store.html');
      }
    });

    const shopSite = document.getElementById('shop-spot') as HTMLButtonElement;
    const profilePage = document.getElementById('profile') as HTMLBodyElement;
    const cartBtn = document.getElementById('cart-page')
    cartBtn?.addEventListener('click', function(){
      if(profilePage.style.display === 'none'){
        profilePage.style.display = 'block';
      } else{
        shopSite.style.display = 'none';
      }
    })

    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    

    let number = 0;
    // increaseBtn.forEach((increase, effect) => {
    //   increase.addEventListener('click', () => {
    //     effect++;
    //     alert(effect);
    //   })
    // })
    increaseBtn?.addEventListener('click', ()=>{
      
      number++;
      this.effect.textContent = number.toString();
      console.log("isWorking");

    })
    
  }      

  private initializeValues(): void {
    if (this.storedUsersName !== null) {
      this.userAccName.textContent = this.storedUsersName?.replace(/\b\w/g, (c) => c.toUpperCase());
    } else {
      this.userAccName.textContent = 'xxxxxx'
    }

    if (this.storedUsersEmail !== null) {
      this.userAccEmail.textContent = this.storedUsersEmail;
    } else {
      this.userAccEmail.textContent = 'xxxxxx'
    }
  }
}

const cart = new ShoppingCart();

