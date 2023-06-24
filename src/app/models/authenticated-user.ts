export class AuthenticatedUser {
  private readonly decodedToken: Record<string, unknown>;

  constructor(decodedToken: Record<string, unknown>) {
    this.decodedToken = decodedToken;
  }

  get sub(): string {
    return this.decodedToken['sub'] as string;
  }
}
