const menuListJson = [
    {"id":"1","name":"Home","items":[]},
    {"id":"2","name":"About","items":[
        {"id":"2.1","name":"Sub About 1","items":[]},
        {"id":"2.2","name":"Sub About 2","items":[
            {"id":"2.2.1","name":"Sub About 2 2 1","items":[]},
            {"id":"2.2.2","name":"Sub About 2 2 2","items":[]}
        ]}
    ]},
    {"id":"3","name":"Contact Us","items":[
        {"id":"3.1","name":"Sub Contact Us 1","items":[]},
        {"id":"3.1","name":"Sub Contact Us 2","items":[
            {"id":"3.2.1","name":"Sub Contact Us 2.1","items":[
                {"id":"3.2.1.1","name":"Sub Contact Us 2.2.1","items":[]}]}
                ,{"id":"3.2.2","name":"Sub Contact Us 2.2","items":[]}
            ]}
        ]}
];


readItems(menuListJson, document.getElementById('pnlMenuJson'));