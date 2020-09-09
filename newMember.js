import * as state from './applicationState.js';

export default class NewMember {
    render() {
        let t = document.createElement('template');
        t.innerHTML = '<div><label>New Member: \
            <input id="name_input" type="text" /></label> \
            <input id="submit_button" type="button" value="Add"/></div>';
        return t.content.firstChild;
    }

    bind(parent) {
        document.querySelector('#submit_button').addEventListener('click', function() {
            state.addMember(document.querySelector('#name_input').value);
            parent.render();
        })
    }
}