class Menu {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.items = [];
    }

    addChildItem(menu) {
        this.items.push(menu);
    }
}

const about = new Menu('2', 'About');
const about2_1 = new Menu('2.1', 'Sub About 1');
const about2_2 = new Menu('2.2', 'Sub About 2');
const about2_2_1 =new Menu('2.2.1', 'Sub About 2 2 1');
const about2_2_2 =new Menu('2.2.2', 'Sub About 2 2 2');
about.addChildItem(about2_1);
about.addChildItem(about2_2);
about2_2.addChildItem(about2_2_1);
about2_2.addChildItem(about2_2_2);

const contact = new Menu('3', 'Contact Us');
const contact3_1 = new Menu('3.1', 'Sub Contact Us 1');
const contact3_2 = new Menu('3.1', 'Sub Contact Us 2');
const contact3_2_1 = new Menu('3.2.1', 'Sub Contact Us 2.1');
const contact3_2_2 = new Menu('3.2.2', 'Sub Contact Us 2.2');
const contact3_2_1_1 = new Menu('3.2.1.1', 'Sub Contact Us 2.2.1');

contact.addChildItem(contact3_1);
contact.addChildItem(contact3_2);
contact3_2.addChildItem(contact3_2_1);
contact3_2.addChildItem(contact3_2_2);
contact3_2_1.addChildItem(contact3_2_1_1);

const menuList = [
    new Menu('1', 'Home'),
    about,
    contact
]


readItems(menuList,document.getElementById('pnlMenu'));
console.dir(menuList);