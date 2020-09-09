export default class PageHeader {
    render() {
        let title = document.createElement('h1');
        title.textContent = 'Web Sandbox';

        let ph = document.createElement('div');
        ph.setAttribute('id','page_header');
        ph.appendChild(title);

        return ph;
    }
}