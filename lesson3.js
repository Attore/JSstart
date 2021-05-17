//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var a = 2;

function isPrime(num) {
    var i = 2;
    while (i <= num / 2) {
        if (num % 2 == 0) {
            return false;
        }
        i++;
    }
    return true;
}

while (a <= 100) {
    if (isPrime(a)) {
        console.log(a);
    }
    a++;
}

/*2.  Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

var basket = [{
        titel: "шоколад " / Алёнка / " ",
        manufac: "Красный Октябрь",
        price: 100,
        count: 3
    },
    {
        titel: "шоколад " / Сникерс / " ",
        manufac: "Mars",
        price: 97,
        count: 2
    },
    {
        titel: "шоколад " / Bounty / " ",
        manufac: "Mars",
        price: 75,
        count: 2
    }
]

function countBasketPrice(mas) {
    var sumBasket = 0;
    for (var item of mas) {
        sumBasket += item.price * item.count;
    }
    return sumBasket;
}
console.log(countBasketPrice(basket));

/*4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. */

for (var i = 0; i <= 9; console.log(i++))

    /*5. Нарисовать пирамиду с помощью console.log из 20 рядов*/

    var cross = "";

for (var i = 0; i <= 20; i++) {
    cross += "X";
    console.log(cross);
}