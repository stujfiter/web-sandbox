export default class TableMenu {
    render(parent) {
        let deleteMenuItem = document.createElement('div');
        deleteMenuItem.textContent = "Delete";
        deleteMenuItem.addEventListener('click', () => {
            parent.handleDeleteSelected();
        });

        let clearMenuItem = document.createElement('div');
        clearMenuItem.textContent = "Clear";
        clearMenuItem.addEventListener('click', () => {
            parent.handleClearAll();
        });

        let tableMenu = document.createElement('div');
        tableMenu.setAttribute('id','member_table_menu');
        tableMenu.classList.add('table_menu');
        tableMenu.appendChild(deleteMenuItem);
        tableMenu.appendChild(clearMenuItem);
        tableMenu.addEventListener('mouseleave', e => {
            tableMenu.style.display = 'none';
        });

        return tableMenu;
    }

    show() {
        document.querySelector('#member_table_menu').style.display = 'block';
    }
}