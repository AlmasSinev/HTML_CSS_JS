

// 1. ПЕРЕМЕННЫЕ

const isProgrammer = true

let age = 26
let name = 'Almas'

console.log(age)

// 2. МУТИРОВАНИЕ

console.log('Имя: ' + name)
console.log('Возраст: ' + age)

let lastName = prompt('Введите фамилию')

// 3. ОПЕРАТОРЫ

const a = 5
const b = 3

const c = a + b

console.log(c);

// 4. ТИПЫ ДАННЫХ

console.log(typeof a);
console.log(typeof name);
console.log(typeof null);

// 6. УСЛОВНЫЕ ОПЕРАТОРЫ

const day = 'Monday'

if (day === 'Monday') {
  console.log('ПОНЕДЕЛЬНИК')
}
else {
  console.log('НЕ ПОНЕДЕЛЬНИК')
}

const var1 = 1
const var2 = '1'

if (var1 == var2) {
  console.log('2 равно не смотрит на типизацию')
}

if (var1 === var2) {
  console.log('3 равно не смотрит на типизацию')
}else {
  console.log('3 равно смотрит на типизацию')
}

// 8. ФУНКЦИИ

function calculateAge(year){
  return 2020 - year
}

console.log(calculateAge(age))

// 9. МАССИВЫ,
// КВАРТАЛЫ, ЖИЛЫЕ МАССИВЫ
// Я
// УХОЖУ
// УХОЖУ КРАСИВО

const cars = ['audi', 'bmw', 'mersedes']
console.log(cars)

// 10. ЦИКЛЫ

for (let i = 0; i < cars.length; i++) {
  let car = cars[i]
  console.log(car)
}

for (let car of cars) {
  console.log(car)
}

// 11. ОБЪЕКТЫ

const person = {
  firstName: 'Ildar',
  lastName: 'Sinev',
  year: 2000,
  languages: ['Ru', 'Tr', 'En', 'De'],
  hasWife: false,
  greet: function() {
    console.log('greet')
  }
}



































// КОНЕЦ
