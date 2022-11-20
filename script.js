sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

// Задача:
// 1. С массива sports с помощью метода.slice() скопировать в новый массив summer_sports массивы,
//     которые относятся к летним видам спорта.
// 2. С массива sports с помощью метода.slice() скопировать в новый массив winter_sports массивы,
//     которые относятся к зимним видам спорта.
// 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы,
//     которые относятся к фруктам.
// 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде,
//     который изображен на рисунке console.png.


summerSports = sports.slice(5, 11);
winterSports = sports.slice(0, 5);

// console.log(sports)
console.log(summerSports)
console.log(winterSports)

fruits = [];
fruits = fruits.concat(winterSports.splice(2, 1));
fruits = fruits.concat(summerSports.splice(2, 2))

// console.log(fruits)
console.log("")
console.log("*** Winter sports ***")

for (i = 0; i < winterSports.length; i++) {
console.log(winterSports[i].join(": "));
}
console.log("")
console.log("*** Summer sports ***")

for (i = 0; i < summerSports.length; i++) {
    console.log(summerSports[i].join(": "));
}
console.log("")
console.log("*** Fruits ***")

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i].join(": "));
}