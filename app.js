const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const firstNameMale = ['Kacper', 'Michał', 'Dawid', 'Patryk'];
const firstNameFemale = ['Daria', 'Danuta', 'Lena', 'Agata'];
const lastName = ['Nowak', 'Kowalczyk', 'Lewandowski'];
const numPhone = [859641286, 542394523, 965412398];

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
    const choiceLastName = randomChoiceArr(lastName);

    const person = {
      gender: choiceGenders,
      firstName: choiceFirstName,
      lastName: choiceLastName,
      age: choiceAge,
      phone: randomChoiceArr(numPhone),
      mail: `${choiceFirstName}.${choiceLastName}@gmail.com`,
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
