const user = { id: 1, name: 'Gorib Amir', job: 'actor'};
// javascript object notation.

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/*
{ id: 1, name: 'Gorib Amir', job: 'actor' } JS
{"id":1,"name":"Gorib Amir","job":"actor"}  JSON

*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet vooter goli',
        city: 'ranbir',
        country: 'BD',

    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};

//console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);