var age = prompt('Введите свой возраст: ');

age = Number(age);

if (age <= 18) {
    document.write('Вы еще молоды. Вам нужно учиться!');
} else if (age > 18 && age <= 50) {
    document.write('Вам нужно работать!');
} else if (age > 50 && age <= 59) {
    document.write('Вам пора на пенсию!');
} else if (age > 59 && age <= 150) {
    document.write('Вы пенсионер!');
} else {
    document.querySelector('.modal').classList.add('active');
}