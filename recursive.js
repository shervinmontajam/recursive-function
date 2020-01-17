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

        if (menu.items.length > 0)
            readChildItems(menu.items, li);
    }

    liElement.append(output);
}









const readItemsFromMongoDB = function (menuList, pnl) {

    const output = document.createElement('ul');
    const root = menuList.filter(m => m.parent === null);

    for (menu of root) {
        let li = document.createElement('li');
        li.textContent = menu.name;
        output.append(li);

        var subList = menuList.filter(m=> m.parent === menu.id);
        if(subList.length > 0)
        readChildItemsFromMongoDB(menuList, subList, li);
    }

    pnl.append(output);
}

const readChildItemsFromMongoDB = function (menuList, subMenuList, liElement) {

    const output = document.createElement('ul');
   
    for (menu of subMenuList) {

        let li = document.createElement('li');
        li.textContent = menu.name;
        output.append(li);

        var subList = menuList.filter(m=> m.parent === menu.id);
        if(subList.length > 0)
        readChildItemsFromMongoDB(menuList, subList, li);
    }

    liElement.append(output);
}