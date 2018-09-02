export interface User {
  name: string;
  gender:boolean;
  account: {
    email: string;
    address: string;
  }
}