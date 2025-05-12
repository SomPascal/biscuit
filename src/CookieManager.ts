import { Cookie } from "./Cookie";

export class CookieManager {
  constructor(private cookieString: string = document.cookie) {}

  public get(name: string): Cookie | null 
  {
    const cookies = this.parseCookies();
    return cookies[name] ? new Cookie(name, cookies[name]) : null;
  }

  public set(cookie: Cookie) 
  {
    document.cookie = cookie.toString();
  }

  public delete(name: string) 
  {
    this.set(new Cookie(name, "", { expires: new Date(0) }));
  }

  private parseCookies(): Record<string, string> 
  {
    return this.cookieString
      .split('; ')
      .reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');

        acc[name] = decodeURIComponent(value);
        
        return acc;
      }, {} as Record<string, string>);
  }
}