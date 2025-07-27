const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const firstNameMale = ['Kacper', 'Michał', 'Dawid', 'Patryk'];
const firstNameFemale = ['Daria', 'Danuta', 'Lena', 'Agata'];
const lastName = ['Nowak', 'Kowalczyk', 'Lewandowski'];

function randomChoiceArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

