var orders = ['10', '20', '30', '40'];
var currentOrder;
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    if (order == '10') {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
