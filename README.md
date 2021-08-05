# seodestem

# 프로젝트 셋팅

yarn berry를 이용한 monorepo 프로젝트 설정

## 1. yarn set version berry

yarn berry 사용을 위해 version set

```bash
yarn set version berry
```

## 2. sdks vscode

yarn/sdks 중 vscode를 위한 sdk 설치

> - https://yarnpkg.com/getting-started/editor-sdks

```bash
yarn dlx @yarnpkg/sdks vscode
```

## 3. plugins typescript

DT가 있으면 자동으로 추가해주는 기능을 제공하는 Plugin을 설치한다.

```bash
yarn plugin import typescript
```

## 4. yarn monorepo

monorepo 설정

root `package.json` 에서 설정
`private` 값을 `true`로 설정해야 한다.(내가 기억하기론...)

```json
{
  "name": "seodestem",
  "version": "0.0.1",
  "private": true,
  "packageManager": "yarn@3.0.0",
  "workspaces": ["packages/*"]
}
```
