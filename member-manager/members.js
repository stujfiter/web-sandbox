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
            let member = this.renderMember(members[i]);
            this.bindMember(member, this);
            table.appendChild(member);
        }

        let table_div = document.createElement('div');
        table_div.setAttribute('id', 'members')
        table_div.appendChild(table);

        return table_div;
    }

    bindMember(member, parent) {
        member.addEventListener('click', function (event) {
            var index = Array.from(this.parentNode.children).indexOf(this) - 1;
            state.toggleMemberSelected(index);
            this.querySelector('input[type="checkbox"]').checked = state.getMembers()[index].selected;
        });
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

        let tr = document.createElement('tr');
        tr.appendChild(td_checkBox)
        tr.appendChild(td_name);
        tr.classList.add("members");
        tr.classList.add("tableRow");

        return tr;
    }
}