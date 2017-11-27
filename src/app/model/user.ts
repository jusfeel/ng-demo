import { Address } from './address';

export class User {
  userName: string;
  firstName: string;
  lastName: string;
  address: Address = new Address;
}
