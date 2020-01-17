const menuListMongo = [
    { "id": 1, parent: null, "name": "Root" },

    { "id": 2, parent: 1, "name": "Home" },
    { "id": 3, parent: 1, "name": "About" },
    { "id": 4, parent: 1, "name": "Contact Us" },

    { "id": 5, parent: 3, "name": "About Sub 1" },
    { "id": 6, parent: 3, "name": "About Sub 2" },
    { "id": 7, parent: 6, "name": "About Sub Sub 2" },
    { "id": 8, parent: 6, "name": "About Sub Sub 2" },


    { "id": 9, parent: 4, "name": "Contact Us Sub 1" },
    { "id": 10, parent: 4, "name": "Contact Us Sub 3" },
    { "id": 11, parent: 10, "name": "Contact Us Sub Sub 3" },
    { "id": 12, parent: 10, "name": "Contact Us Sub Sub 3" },
    { "id": 13, parent: 11, "name": "Contact Us Sub Sub suv 3" },

    
];


readItemsFromMongoDB(menuListMongo, document.getElementById('pnlMenuMongodb'));