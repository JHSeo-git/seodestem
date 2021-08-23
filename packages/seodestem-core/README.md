# seodestem-core

## roll up 설정

> - https://github.com/react-hook-form/react-hook-form/blob/master/scripts/rollup/createRollupConfig.js
> - https://github.com/nhn/tui.editor/blob/master/libs/toastmark/rollup.config.js
> - https://so-so.dev/pattern/mono-repo-config/
> - https://velog.io/@altmshfkgudtjr/yarn2%EC%99%80-%ED%95%A8%EA%BB%98-Plug-n-Play%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90
> - https://dev.to/remshams/rolling-up-a-multi-module-system-esm-cjs-compatible-npm-library-with-typescript-and-babel-3gjg
> - ![chain](https://res.cloudinary.com/practicaldev/image/fetch/s--crgTkvZX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/remshams/node-module-esm/blob/images/images/build-chain.jpeg%3Fraw%3Dtrue)

1. rollup global 설치
2. rollup.config.js 생성
3. [@rollup/plugin-typescript](https://www.npmjs.com/package/@rollup/plugin-typescript) 설치
4. [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs) 설치

> multi output 사용 시 declaration type 중복 호출로 인한 문제
>
> - https://github.com/rollup/plugins/issues/247
>
> 아직 이슈가 완전히 해결되지 않은 것 처럼 보이며, 중간에 어떤 댓글 보면 tsc를 이용해 그냥 type을 생성하는 것으로 변경하였다고 적혀있다.
> 나도 그렇게 emitDelarationOnly flag를 이용해 build와 별개로 type을 생성하도록 함.
