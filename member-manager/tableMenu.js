export default class TableMenu {
    constructor (parent) {
        this.parent = parent;
    }

    render() {
        let deleteMenuItem = document.createElement('div');
        deleteMenuItem.setAttribute('id','delete_menu_item');
        deleteMenuItem.textContent = "Delete";

        let clearMenuItem = document.createElement('div');
        clearMenuItem.textContent = "Clear";
        clearMenuItem.addEventListener('click', () => {
            this.parent.handleClearAll();
        });

        let tableMenu = document.createElement('div');
        tableMenu.setAttribute('id','member_table_menu');
        tableMenu.classList.add('table_menu');
        tableMenu.appendChild(deleteMenuItem);
        tableMenu.appendChild(clearMenuItem);
        tableMenu.addEventListener('mouseleave', () => {
            tableMenu.style.display = 'none';
        });

        return tableMenu;
    }

    show() {
        document.querySelector('#member_table_menu').style.display = 'block';
        let deleteMenuItem = document.querySelector('#delete_menu_item');
        setTimeout(() => deleteMenuItem.addEventListener('click', () => {
            this.parent.handleDeleteSelected();
        }), 100);
    }
}