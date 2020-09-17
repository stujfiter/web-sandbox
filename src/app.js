import { AuthorizationServiceConfiguration } from '@openid/appauth/built/authorization_service_configuration'
import PageHeader from '../pageHeader.js';
import NewMember from './member-manager/newMember.js';
import Members from './member-manager/members.js';

export default class App {
    constructor() {
        let openIdConnectUrl = "https://dev-397960.okta.com/oauth2/default";
        AuthorizationServiceConfiguration.fetchFromIssuer(openIdConnectUrl)
            .then(response => {
                console.log('Fetched service configuration', response);
                this.configuration = response;
                console.log('Completed fetching configuration');
            })
            .catch(error => {
                console.log('Something bad happened', error);
            });
    }
    
    render() {
        var app = document.getElementById('app');
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }
        
        var pageHeader = new PageHeader();
        var newMember = new NewMember(this);
        var members = new Members(this);

        app.appendChild(pageHeader.render());
        app.appendChild(newMember.render());
        app.appendChild(members.render());
    }

    handleStateChanged() {
        this.render();
    }
}

document.addEventListener('DOMContentLoaded', function (event) {        
    var app = new App();
    app.render();
});