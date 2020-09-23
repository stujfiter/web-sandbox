export default class PageHeader {
    constructor (parent) {
        this.parent = parent;
    }
    
    render() {
        let title = document.createElement('h1');
        title.textContent = 'Web Sandbox';

        let signOut = document.createElement('a');
        signOut.textContent = 'Sign Out';
        signOut.addEventListener('click', e => {
            this.parent.signOut();
        });

        let ph = document.createElement('div');
        ph.setAttribute('id','page_header');
        ph.appendChild(title);
        ph.appendChild(signOut);

        return ph;
    }
}