import * as state from './applicationState.js';

export default class NewMember {
    render() {
        let t = document.createElement('template');
        t.innerHTML = ['<div id="new_member">',
                '<div id="new_member_label"><label for="name_input">New Member:</label></div>',
                '<div id="new_member_input"><input id="name_input" type="text" placeholder="Name" /></div>',
                '<div id="new_member_button"><input id="submit_button" type="button" value="Add"/></div>',
            '</div>'
        ].join('\n');
        return t.content.firstChild;
    }

    bind(parent) {
        document.querySelector('#submit_button').addEventListener('click', function() {
            state.addMember(document.querySelector('#name_input').value);
            parent.render();
        })
    }
}