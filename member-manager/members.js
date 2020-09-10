import * as state from '../applicationState.js';

export default class Members {
    render () {
        let col2Header = document.createElement('th');
        col2Header.textContent = 'Team Members';

        let row = document.createElement('tr');
        row.appendChild(document.createElement('th'));
        row.appendChild(col2Header);


        let table = document.createElement('table');
        table.appendChild(row);

        let members = state.getMembers();

        for (var i = 0; i < members.length; i++) {
            table.appendChild(this.renderMember(members[i]));
        }

        let table_div = document.createElement('div');
        table_div.setAttribute('id', 'members')
        table_div.appendChild(table);

        return table_div;
    }

    renderMember(name) {
        let cb = document.createElement('input');
        cb.setAttribute('type','checkBox');

        let td_checkBox = document.createElement('td');
        td_checkBox.appendChild(cb)

        let td_name = document.createElement('td');
        td_name.textContent = name;

        let tr = document.createElement('tr');
        tr.appendChild(td_checkBox)
        tr.appendChild(td_name);

        return tr;
    }
}