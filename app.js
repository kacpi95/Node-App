const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const firstNameMale = ['Kacper', 'Michał', 'Dawid', 'Patryk'];
const firstNameFemale = ['Daria', 'Danuta', 'Lena', 'Agata'];
const lastName = ['Nowak', 'Kowalczyk', 'Lewandowski'];

function randomChoiceArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function choicePeople() {
  const people = [];

  for (let i = 0; i < 20; i++) {
    const choiceGenders = randomChoiceArr(genders);
    const choiceFirstName =
      choiceGenders === 'female'
        ? randomChoiceArr(firstNameFemale)
        : randomChoiceArr(firstNameMale);
    const choiceAge = Math.floor(Math.random() * (78 - 18 + 1) + 18);

    const person = {
      gender: choiceGenders,
      firstName: choiceFirstName,
      lastName: randomChoiceArr(lastName),
      age: choiceAge,
    };

    people.push(person);
  }
  return JSON.stringify(people);
}
const randomPeoples = choicePeople();

fs.writeFile('peopleLists.txt', randomPeoples, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});
