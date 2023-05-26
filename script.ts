interface Element {
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        textContent: string;
}

class shoppingCart {
        private nameOfUser: HTMLInputElement;
        private addressOfUser: HTMLInputElement;
        private emailOfUser: HTMLInputElement;
        private passwordOfUser: HTMLInputElement;
        private emailOfOldUser: HTMLInputElement;
        private passwordOfOldUser: HTMLInputElement;
        private createBtn: Element;
        private logInBtn: Element;

        // For the Store Page
        private usersName: HTMLSpanElement;
        private 
}
