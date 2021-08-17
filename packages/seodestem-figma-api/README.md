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
