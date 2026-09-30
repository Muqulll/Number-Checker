function formatName(firstName, lastname) {
  return `${firstName} ${lastname}`;
}

function getGreeting(timeOfDay) {
  return `Good ${timeOfDay}`;
}

function createGreeting(firstName, lastname, timeOfDay) {
  return `${getGreeting(timeOfDay)}, ${formatName(firstName,lastname)}`
}

console.log(createGreeting("Ava", "Stone", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));
