export function addMember(name) {
    if (name.trim() === "") {
        return;
    }
    
    var team = getMembers();
    
    var member = {};
    member.name = name;
    member.selected = false;
    team.push(member);

    localStorage.setItem('team',JSON.stringify(team));
}

export function getMembers() {
    return JSON.parse(localStorage.getItem('team')) ?? [];
}

export function toggleMemberSelected(index) {
    var team = getMembers();
    if (team.length > 0) {
        team[index].selected = !team[index].selected;
    }

    localStorage.setItem('team', JSON.stringify(team));
}