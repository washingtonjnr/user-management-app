export class AuthUser {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly token: string,
    public readonly role: string,
  ) {}
}
