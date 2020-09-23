import { OktaAuth } from '@okta/okta-auth-js'
import PageHeader from './pageHeader.js';
import NewMember from './member-manager/newMember.js';
import Members from './member-manager/members.js';
import './site.css';
import './mobile.css';
import './member-manager/style.css';

var config = {
    issuer: 'https://dev-397960.okta.com/oauth2/default',
    clientId: '0oaz68pwuMV795ZBF4x6'
};
var authClient = new OktaAuth(config);

export default class App {

    login() {
        authClient.token.getWithRedirect({
            state: 'authenticating'
        }).catch(handleCallback(err));
    }

    handleCallback(err) {
        let shouldHandleCallback = authClient.token.isLoginRedirect();
        console.log("shouldHandleCallback: " + shouldHandleCallback);

        if (shouldHandleCallback) {
            authClient.token.parseFromUrl()
                .then(function (res) {
                    var tokens = res.tokens;
                    authClient.tokenManager.add('idToken', tokens.idToken);
                    authClient.tokenManager.add('accessToken', tokens.accessToken);
                });
        }
    }

    signOut() {
        authClient.signOut({ 'postLogoutRedirectUri': 'http://localhost:8080' });
    }

    render() {
        var app = document.getElementById('app');
        while (app.firstChild) {
            app.removeChild(app.firstChild);
        }

        var pageHeader = new PageHeader(this);
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
    authClient.token.getUserInfo()
        .then(function (user) {
            console.log(user);
            let app = new App();
            app.render();
        })
        .catch(err => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const state = urlParams.get('state');
            console.log(state);

            if (state === 'authenticating') {
                let app = new App();
                app.handleCallback(null);
                app.render()
            } else {
                let app = new App();
                app.login();
            }
        });
});