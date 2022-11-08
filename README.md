# TS React Template for Modernlion Front-end Team

## 🔨 Development

- `@likelion-campus/*` 패키지 설치를 위한 `.npmrc` 파일은 `.npmrc.sample` 복사하여 사용
- gh-token은 각자 `read-package` 권한만 가진 토큰으로 생성하여 사용
- 과제시 필요한 gh-token은 과제 제출일까지 사용 가능한 gh-token을 매번 새로 생성해서 전달

```
$ cp .npmrc.sample .npmrc
```

### 🧱 Directory

- `@/components/design`: props를 받아서 rendering만 하는 디자인 컴포넌트들
- `@/components/* (not design)`: 비지니스 로직을 가지고 있는 컴포넌트들
- `@/pages/`: 페이지 컴포넌트들
- `@/shared/*`: constants, utils, store, services, hooks, config 등

## 🖋 Stack

- React 18
- Typescript
- Tailwind CSS
- React-Router v6
- React-Query v4
