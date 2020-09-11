export default class TableMenu {
    render() {
        let deleteMenuItem = document.createElement('div');
        deleteMenuItem.textContent = "Delete";

        let clearMenuItem = document.createElement('div');
        clearMenuItem.textContent = "Clear";

        let tableMenu = document.createElement('div');
        tableMenu.setAttribute('id','member_table_menu');
        tableMenu.classList.add('table_menu');
        tableMenu.appendChild(deleteMenuItem);
        tableMenu.appendChild(clearMenuItem);
        tableMenu.addEventListener('mouseleave', e => {
            tableMenu.style.display = 'none';
        });

        // this.bind();

        return tableMenu;
    }

    bind() {
        document.querySelector('#member_table_menu').addEventListener('mouseleave', function (event) {
            this.style.display = 'none';
        });
    }

    show() {
        document.querySelector('#member_table_menu').style.display = 'block';
    }
}