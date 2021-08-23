# seodestem-figma-api

figma api toolkit

# jest + es6

babel 로 es2015 transform 되도록 설정해야한다.

https://stackoverflow.com/questions/49656706/test-es6-modules-with-jest/49656707#49656707

# jest + babel

jest에서 babel과 함께 사용시 옵션없이 사용한다면

```ts
import '@figma/plugins-tpyesidf...';
```

이렇게 하면 module resolver 가 찾지 못한다 하..나..참..

```ts
import type from '@figma/plugins-typesdfs..';
```

이렇게 하면 문제 없이 돌아가는데 옵션같은거 주면 될거 같은데 뭔지를 모르겠음...
문제는 빌드 파일에 해당 lib이 들어가지 않는다.
type으로 인식하기 때문에 resolver가 무시하고 지나가버린다.

# yarn berry triple-slash-directives

> - https://github.com/yarnpkg/berry/issues/589

상대 경로나 절대 경로를 입력해서 지정해야 하는데 node_modules가 없는 yarn berry 같은 경우 경로가 상당히 길어지고 버전 변경으로 인해 주기적으로 변경해줘야될 경우가 있다.

그래서 ts 파일에서 직접 import, export 하여 사용하도록 한다.(global typings일 경우 보통 이런 경우가 자주 생김)
