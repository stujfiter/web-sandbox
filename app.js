import NewMember from './newMember.js';
import Members from './members.js';

export default class App {
    constructor() {}
    
    render() {
        let app = document.getElementById('app');
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }
        
        var newMember = new NewMember();
        var members = new Members();

        document.getElementById('app').appendChild(newMember.render());
        document.getElementById('app').appendChild(members.render());
        
        newMember.bind(this);
    }
}

document.addEventListener('DOMContentLoaded', function (event) {        
    var app = new App();
    app.render();
});