function submitOnClick() {
    var name = document.getElementById("name_input").value;

    if (name.trim() === "") {
        return;
    }

    if (localStorage.getItem('team') !== null) {
        var team = JSON.parse(localStorage.getItem('team'));
    } else {
        var team = [];
    }

    team.push(name);
    localStorage.setItem('team',JSON.stringify(team));
    
    document.getElementById("name_input").value = "";
    loadData();
}

function fillInformation() {
    if (localStorage.getItem('team') !== null) {
        document.getElementById("name_div").innerHTML = localStorage.getItem('name');
    }
}

function loadData() {
    if (localStorage.getItem('team') !== null) {
        let names = JSON.parse(localStorage.getItem('team'));
        $("#name_div").html(teamMembersTable(names));
    }
}

function teamMembersTable(members) {
    let nameTableHeader = "<table><tr><th><th>Team Members</th></th></tr>"
    let nameTableData = ""
    let nameTableFooter = "</table>"

    for (var i = 0; i < members.length; i++) {
        nameTableData += teamMemberRow(members[i]);
    }
    return nameTableHeader + nameTableData + nameTableFooter;
}

function teamMemberRow(name) {
    return '<tr> \
        <td><input type="checkbox"></input></td> \
        <td>' + $('<span>').text(name).html() + '</td> \
        </tr>';
}