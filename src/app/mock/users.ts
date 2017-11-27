import { User } from '../model/user';
import { Address } from '../model/address';

let users: User[] = [];
for(let i = 1; i < 10; i++) {
  let user: User = new User;
  user.userName = `tom${i}`;
  user.firstName = "Tom";
  user.lastName = `Sawyer ${i}`;
  user.address = new Address;
  user.address.city = "Beijing";
  user.address.street = "west city district garden road";
  user.address.zipCode = "100034";
  users.push(user);
}

export { users };
