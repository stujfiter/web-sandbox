import NewMember from './newMember.js';
import Members from './members.js';

export default class App {
    constructor() {}
    
    render() {
        let comps = [];

        var newMember = new NewMember();
        let nm = document.createElement('template');
        nm.innerHTML = newMember.render();
        comps.push(nm.content.firstChild);

        var members = new Members();
        let m = document.createElement('template');
        m.innerHTML = members.render();
        comps.push(m.content.firstChild);

        $('#app').html(comps);
        
        newMember.bind(this);
    }
}

document.addEventListener('DOMContentLoaded', function (event) {        
    var app = new App();
    app.render();
});