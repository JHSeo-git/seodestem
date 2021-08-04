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

## 3. yarn monorepo

```json
{
  "name": "seodestem",
  "version": "0.0.1",
  "packageManager": "yarn@3.0.0",
  "workspaces": ["packages/*"]
}
```
