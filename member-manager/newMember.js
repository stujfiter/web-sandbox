import * as state from '../applicationState.js';

export default class NewMember {
    constructor(parent) {
        this.parent = parent;
    }

    handleAddMember() {
        state.addMember(document.querySelector('#name_input').value);
        this.parent.handleStateChanged();
    }

    render() {
        let newMemberDiv = document.createElement('div');
        newMemberDiv.setAttribute('id','new_member');
        newMemberDiv.appendChild(this.inputDiv());
        newMemberDiv.appendChild(this.buttonDiv());

        return newMemberDiv;
    }

    inputDiv() {
        let nameInput = document.createElement('input');
        nameInput.setAttribute('id', 'name_input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'New Member Name');

        let inputDiv = document.createElement('div');
        inputDiv.setAttribute('id', 'new_member_input');
        inputDiv.appendChild(nameInput);

        return inputDiv;
    }

    buttonDiv() {
        let submitButton = document.createElement('div');
        submitButton.setAttribute('id', 'submit_button');
        submitButton.setAttribute('tabindex','0');
        submitButton.classList.add('button');
        submitButton.textContent = 'Add';
        submitButton.addEventListener('click', this.handleAddMember.bind(this));
        submitButton.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.handleAddMember();
            }
        });
        
        let buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('id', 'new_member_button');
        buttonDiv.appendChild(submitButton);

        return buttonDiv;
    }
}