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

## 5. vscode yarn berry typescript

root package.json에 typescript를 추가시켜줘야 vscode에서 그 typescript 버전을 보고 server 를 실행한다.

yarn berry 설정 시에 프로젝트 typescript 버전으로 선택하여 진행하기 때문에 이런 설정을 해주어야 한다.
(그 외 eslint, prettier도 프로젝트 버전으로 사용하고 싶다면 root package.json에서 설정해주어야 한다.)
