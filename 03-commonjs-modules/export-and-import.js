const { myName, myHobbies } = require('./multiple.exports');

const myFriendName = 'Betya';

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
module.exports.myGreatHobbies = myHobbies;