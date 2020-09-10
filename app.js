import PageHeader from './pageHeader.js';
import NewMember from './member-manager/newMember.js';
import Members from './member-manager/members.js';

export default class App {
    constructor() {}
    
    render() {
        var app = document.getElementById('app');
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }
        
        var pageHeader = new PageHeader();
        var newMember = new NewMember();
        var members = new Members();

        app.appendChild(pageHeader.render());
        app.appendChild(newMember.render());
        app.appendChild(members.render());
        
        newMember.bind(this);
    }
}

document.addEventListener('DOMContentLoaded', function (event) {        
    var app = new App();
    app.render();
});