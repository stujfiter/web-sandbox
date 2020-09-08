import * as state from './applicationState.js';

export default class Members {
    render () {
        let nameTableHeader = "<div><table><tr><th><th>Team Members</th></th></tr>"
        let nameTableData = ""
        let nameTableFooter = "</table></div>"

        let members = state.getMembers();

        for (var i = 0; i < members.length; i++) {
            nameTableData += this.renderMember(members[i]);
        }
        return nameTableHeader + nameTableData + nameTableFooter;
    }

    renderMember(name) {
        return '<tr> \
            <td><input type="checkbox"></input></td> \
            <td>' + $('<span>').text(name).html() + '</td> \
            </tr>';
    }
}