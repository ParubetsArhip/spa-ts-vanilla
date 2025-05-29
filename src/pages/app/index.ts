class App {
    private container: HTMLElement;

    constructor() {
        this.container = document.body
    }

    run() {
        this.container.innerHTML = 'Single Page Application';
    }
}

