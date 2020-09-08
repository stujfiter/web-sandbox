import * as state from './applicationState.js';

export default class NewMember {
    render() {
        return '<div><label>New Member: \
            <input id="name_input" type="text" /></label> \
            <input id="submit_button" type="button" value="Add"/></div>';
    }

    bind(parent) {
        $('#submit_button').on('click', function() {
            state.addMember($('#name_input').val());
            parent.render();
        })
    }
}