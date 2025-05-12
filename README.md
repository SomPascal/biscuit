# 🍪 Biscuit

**An object-oriented TypeScript library to manage cookies in JavaScript without the repetitive parsing.**

---

## ✨ Philosophy

Managing cookies in JavaScript has always been awkward—manually splitting strings, decoding values, and formatting expiration dates by hand.

**Biscuit** offers a modern, object-oriented API to manage cookies in a clean, readable, and reusable way—especially for developers who love TypeScript and maintainable code.

> Cookies shouldn't be crumbs of spaghetti code.

---

## 🎯 Goals

- Provide an intuitive object-oriented API to work with cookies
- Eliminate repetitive string manipulation
- Be fully type-safe and developer-friendly
- Work both in browsers and SSR environments

---

## 👩‍💻 Who is this for?

- Frontend developers using JavaScript or TypeScript
- Developers building web apps that rely on session, auth, or preference cookies
- Anyone tired of writing `document.cookie = "name=value"` and then parsing it later

---

## 📦 Installation

With npm

```bash
npm install @somfuncky/biscuit
```

## INTRODUCTION

* 🚫 The Old Way (Vanilla JavaScript)

```js
// Set a cookie
document.cookie = "theme=dark; Path=/; Secure";

// Read cookies
const allCookies = document.cookie.split("; ").reduce((acc, pair) => {
  const [key, val] = pair.split("=");
  acc[key] = decodeURIComponent(val);
  return acc;
}, {});

console.log(allCookies["theme"]); // "dark"
```

* ✅ The Biscuit Way

```js
import { CookieManager, Cookie } from 'biscuit';

// Create a manager instance
const cookies = new CookieManager();

// Set a cookie
cookies.set(new Cookie('theme', 'dark', { path: '/', secure: true }));

// Read a cookie
const theme = cookies.get('theme');
console.log(theme?.value); // "dark"

// Check existence
console.log(cookies.has('theme')); // true

// Delete a cookie
cookies.delete('theme');
```

### 🔧 API Reference

**Cookie:**
```js
new Cookie(name: string, value: string, options?: CookieOptions)
```

**CookieOptions**

```ts
interface {
  path?: string;
  domain?: string;
  expires?: Date;
  secure?: boolean;
  httpOnly?: boolean;
}
```

**CookieManager**

_Main utility to interact with cookies_

**Methods**

* set(cookie: Cookie) — Add or update a cookie
* get(name: string): Cookie | null — Get a cookie by name
* has(name: string): boolean — Check if a cookie exists
* delete(name: string) — Delete a cookie
* (more coming soon: getAll(), clear(), etc.)

## 🤝 Contributing
Pull requests and issues are welcome!

## 🧁 License
MIT — Use it freely, bake your own improvements 🍪