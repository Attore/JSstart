 // Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.

    var cels = +prompt("Cколько градусов по Цельсию?");
    var fahr = (9 / 5) * cels + 32;
    alert("Это равно " + fahr + " градусов по Фаренгейту");


// Сделать обмен значений двух числовых переменных без использования третьей

    var a = 5;
    var b = 3;
    a = a + b;
    b = a - b;
    a = a - b;
    alert("a = " + a + "\nb = " + b);

// Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin

    var name =  "Василий";
    var admin;
    admin = name;
    alert(admin);

// Чему будет равно JS-выражение 1000 + "108"

    var a = 1000 + "108";
    alert(a);

// Ответ:1000108