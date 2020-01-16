const readItems = function (menuList, pnl) {

    const output = document.createElement('ul');

    for (menu of menuList) {
        let li = document.createElement('li');
        li.textContent = menu.name;
        output.append(li);
        if (menu.items.length > 0)
            readChildItems(menu.items, li);
    }

    pnl.append(output);
}

const readChildItems = function (childList, liElement) {

    const output = document.createElement('ul');

    for (menu of childList) {
        
        let li = document.createElement('li');
        li.textContent = menu.name;
        output.append(li);

        if(menu.items.length > 0)
            readChildItems(menu.items, li);
    }

    liElement.append(output);
}