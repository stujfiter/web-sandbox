import NewMember from './newMember.js';
import Members from './members.js';

export default class App {
    constructor() {}
    
    render() {
        let comps = [];

        var newMember = new NewMember();
        comps.push(newMember.render());

        var members = new Members();
        comps.push(members.render());

        $('#app').html(comps);
        
        newMember.bind(this);
    }
}

document.addEventListener('DOMContentLoaded', function (event) {        
    var app = new App();
    app.render();
});