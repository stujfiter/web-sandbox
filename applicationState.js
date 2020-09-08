export function addMember(name) {
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
}

export function getMembers() {
    return JSON.parse(localStorage.getItem('team')) ?? [];
}