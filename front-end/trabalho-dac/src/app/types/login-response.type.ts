export type LoginResponse = {
  token: string,
  name: string;
  userType: 'func' | 'client';
}
