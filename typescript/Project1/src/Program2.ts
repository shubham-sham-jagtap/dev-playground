const orders = ['10', '20', '30', '40'];

let currentOrder: string | undefined;

for (let order of orders) {
    if(order == '10') {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);