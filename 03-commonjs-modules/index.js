const { myName, myHobbies, myFavoriteNumber } = require('./multiple.exports');
const greeting = require('./my-modules/single-exports');
const { myName: myOtherName, myFriendName, myGreatHobbies } = require('./export-and-import');

greeting(myOtherName);

myHobbies.push('gardening');

console.log(myGreatHobbies);