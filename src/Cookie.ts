export class Cookie {
    constructor(
      public name: string,
      public value: string,
      public options?: Partial<CookieOptions>
    ) {}
  
    toString(): string {
      const parts = [`${this.name}=${encodeURIComponent(this.value)}`];

      if (this.options?.path) parts.push(`Path=${this.options.path}`);

      if (this.options?.domain) parts.push(`Domain=${this.options.domain}`);

      if (this.options?.expires) parts.push(`Expires=${this.options.expires.toUTCString()}`);

      if (this.options?.secure) parts.push(`Secure`);

      if (this.options?.httpOnly) parts.push(`HttpOnly`);
      
      return parts.join('; ');
    }
}
  
export interface CookieOptions {
    path?: string;
    domain?: string;
    expires?: Date;
    secure?: boolean;
    httpOnly?: boolean;
}