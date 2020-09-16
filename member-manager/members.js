import * as state from '../applicationState.js';
import TableMenu from './tableMenu.js';

export default class Members {

    constructor(parent) {
        this.parent = parent;
    }

    render () {
        let tableMenu = new TableMenu(this);

        let col2Header = document.createElement('th');
        col2Header.textContent = 'Team Members';

        let col3Header = document.createElement('th');
        col3Header.textContent = '\u2630';
        col3Header.classList.add('menu_icon');
        col3Header.addEventListener('mouseenter', () => {
            tableMenu.show();
        });
        col3Header.addEventListener('click', event => {
            tableMenu.show();
        });

        let headerRow = document.createElement('tr');
        headerRow.appendChild(document.createElement('th'));
        headerRow.appendChild(col2Header);
        headerRow.appendChild(col3Header);
        
        let table = document.createElement('table');
        table.appendChild(headerRow);

        state.getMembers().map((member, index) => {
            let tr = this.renderMember(member);
            tr.addEventListener('click', function () {
                this.querySelector('input[type="checkbox"]').checked = state.toggleMemberSelected(index);
            });
            table.appendChild(tr);
        });

        let table_div = document.createElement('div');
        table_div.setAttribute('id', 'members');
        table_div.appendChild(tableMenu.render());
        table_div.appendChild(table);

        return table_div;
    }

    handleClearAll() {
        state.clearAllSelections();
        this.parent.handleStateChanged();
    }

    handleDeleteSelected() {
        state.deleteSelected();
        this.parent.handleStateChanged();
    }

    renderMember(member) {
        let cb = document.createElement('input');
        cb.setAttribute('type','checkBox');
        cb.checked = member.selected;
        cb.classList.add('memberCheckBox');

        let td_checkBox = document.createElement('td');
        td_checkBox.appendChild(cb)

        let td_name = document.createElement('td');
        td_name.textContent = member.name;
        td_name.colSpan = 2;

        let tr = document.createElement('tr');
        tr.appendChild(td_checkBox)
        tr.appendChild(td_name);
        tr.classList.add("members");
        tr.classList.add("tableRow");

        return tr;
    }
}