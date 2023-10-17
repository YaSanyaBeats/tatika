class Header {
    constructor(root) {
        this.root = root;
        this.isWhite = this.root.classList.contains('header_white');

        this.bindListeners();
    }

    bindListeners() {
        //Наложение класса при скролле
        document.addEventListener('scroll', (event) => {
            if(window.scrollY > 50) {
                this.root.classList.add('header_scroll');
                this.root.classList.add('header_white');
            }
            else {
                this.root.classList.remove('header_scroll');

                if(!this.isWhite) {
                    this.root.classList.remove('header_white');
                }
            }
        })
    }
}

export default Header;