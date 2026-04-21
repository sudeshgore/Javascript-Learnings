// Different types to declare variables

// 1st way- Cannot be re-initailized.i.e, Fix value.
const accountId = 144553
// accountId = 2 -> Not allowed.


// 2nd way
let accountEmail = "sudeshgoredev@gmail.com"


// 3rd way- Prefer not to use because of global scope
var accountPassword = "12345"
// 4th way
accountCity = "Pune";
let accountState;  // Give "Undefined"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);