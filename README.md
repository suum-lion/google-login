# TS React Template for Modernlion Front-end Team

## ๐จ Development

- `@likelion-campus/*` ํจํค์ง ์ค์น๋ฅผ ์ํ `.npmrc` ํ์ผ์ `.npmrc.sample` ๋ณต์ฌํ์ฌ ์ฌ์ฉ
- gh-token์ ๊ฐ์ `read-package` ๊ถํ๋ง ๊ฐ์ง ํ ํฐ์ผ๋ก ์์ฑํ์ฌ ์ฌ์ฉ
- ๊ณผ์ ์ ํ์ํ gh-token์ ๊ณผ์  ์ ์ถ์ผ๊น์ง ์ฌ์ฉ ๊ฐ๋ฅํ gh-token์ ๋งค๋ฒ ์๋ก ์์ฑํด์ ์ ๋ฌ

```
$ cp .npmrc.sample .npmrc
```

### ๐งฑ Directory

- `@/components/design`: props๋ฅผ ๋ฐ์์ rendering๋ง ํ๋ ๋์์ธ ์ปดํฌ๋ํธ๋ค
- `@/components/* (not design)`: ๋น์ง๋์ค ๋ก์ง์ ๊ฐ์ง๊ณ  ์๋ ์ปดํฌ๋ํธ๋ค
- `@/pages/`: ํ์ด์ง ์ปดํฌ๋ํธ๋ค
- `@/shared/*`: constants, utils, store, services, hooks, config ๋ฑ

## ๐ Stack

- React 18
- Typescript
- Tailwind CSS
- React-Router v6
- React-Query v4
