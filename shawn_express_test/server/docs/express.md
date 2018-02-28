## Express?

Express 는 웹 응용 프로그램 및 모바일 응용 프로그램에 강력한 기능 세트를 제공하는  유연한 Node.js 웹 응용 프로그램 프레임워크 입니다.

제가 구현한 Express app 의 구조를 파악 하기 위해서 /server/server.js 를 참조 하세요.

server/server.js 는 각 구역별로 담당하는 코드라인이 있습니다.
 
1. 모듈로드
2. 데이터베이스 설정
3. 뷰 엔진 설정
4. 미들웨어 설정
5. 에러 핸들러 설정
6. 서버 설정

해당하는 부분에서 어떤식으로 서버가 동작하는지에 대해서는 글의 다한에서 다시 언급하도록 하겠습니다.

## About Directory Structure

자세한 설명을 하기에 앞서 현제 만들어진 디렉토리 구조를 먼저 확인해 보도록 하죠.

해당하는 디렉토리에서 어떤 코드를 짜야 하는지도 간단히 알아보도록 합시다.

```text
server +
       + config  // 서버설정의 환경변수 및 모듈의 옵션값들을 담당하는 디렉토리
       + docs    // 현제 작업한 서버에 대한 부가적이 설명을 담당하는 문서 디렉토리
       + models  // DB 에 들어갈 데이터 스키마들을 담당하는 디렉토리
       + public  // 공공으로 사용될 이미지, css 등을 담당하는 디렉토리
       + routes  // URL 을 통해서 서버로 들어온 요청에 대한 함수 및 탬플릿의 매핑을 담당하는 디렉토리
       + service // 라우터에서 요청하는 함수들이 적제된 곳, 데이터를 가공등을 담당하는 디렉토리
       + views   // 라우터에서 요청하는 탬플릿들이 적제된 곳, 탬플릿과 뷰를 담당하는 디렉토리
       | server.js // 서버가 시작되는 main 파일
package.json
```

개발 및 유지보수의 용의성을 위해서 각 계층을 구분했다고 메인 README 에 작성을 해 두었습니다.

해당하는 디렉토리는 서로 모듈화가 되어 있고, server/server.js 에서 재조합 되어서 하나의 엡으로 만들어지게 됩니다.

```text
server +
       + config  +
                 | index.js   
       + docs    +
                 | express.md
       + models  +
                 index.js
       + public  +
                 + css
                 + image   
       + routes  +
                 | index.js   
       + service +
                 | index.js
       + views   +
                 | index.js
       | server.js 
package.json
```

디렉토리의 경우 index.js 들을 가지고 있게 되는데요. 각 디렉토리의 메인 파일이라고 생각하시면 될것 같아요.

해당 디렉토리를 require('모듈경로') 를 통해서 가져올 경우 기본으로 디렉토리 파일이 설정되지 않은경우, index.js 를 바라봅니다.

해당 디렉토리에 파일이 여러개가 추가 되더라도 그 파일에 대한 처리를 해당 디렉토리의 index.js 에 심어서 관리하는 것이 유리합니다.

저는 보통 디렉토리에 인덱스에는 해당 디렉토리에서만 사용되어야 할 중간 함수나, 로드 기능이 들어가 있습니다.

따라서 사용자는 만들어 둔 파일에 접근하려면 단지 해당 디렉토리에 해당 파일의 이름을 요청하기만 하면 되는 구조로 만들어 봤습니다.

## Import & Export Modules

우선 첫번째로 모듈에 대한 설명이 필요할것 같습니다.

```javascript
// server/server.js
const config              = require( './config' );
const express             = require( 'express' );
const app                 = express();
const path                = require( 'path' );
const expressHbs          = require( 'express-handlebars' );
const bodyParser          = require( 'body-parser' );
const expressErrorHandler = require( 'express-error-handler' );
const errorHandler        = expressErrorHandler( config.error_handler );
const mongoose            = require( 'mongoose' );
const database            = mongoose.connection;
const router              = require( './routes' );
```

node 에서 모듈을 import / export 하는 과정에 대해서 우선 언급을 하겠습니다.

상단 코드에서처럼 require 를 이용해서 모듈을 로드합니다. node_modules 를 통해서 받는 모듈의 경우 해당하는 모듈 이름으로 호출하시고,  

자신이 만든 디렉토리를 가져오고 싶을때는 경로를 지정해서 가져옵니다. 경로의 마지막이 디렉토리 레벨이라면, node 는 해당 디렉토리의 index.js 파일을 찾아서 로드해 줍니다.

```javascript
// routes/user.js
const express = require( 'express' );
const service = require( './../service' );
const router  = express.Router();
const method  = service.load( 'user' );

// 해당 라우팅에서만 작동하는 미들웨어를 등록
router.use( ( req, res, next ) => {
	console.log( 'data check Time: ', Date.now() );
	next();
} );

router.get( '/', ( req, res ) => method.showUsers( res ) );

router.get( '/:username', ( req, res ) => method.showUser( req, res ) );

router.post( '/', ( req, res ) => method.createUser( req, res ) );

router.put( '/:username', ( req, res ) => method.updateUser( req, res ) );

router.delete( '/:username', ( req, res ) => method.removeUser( req, res ) );

module.exports = router;
```
모듀를 export 하는 방식은 두가지가 있습니다. module.exports 객체를 이용하는 방식이 있구요,

module.myFunc 을 이용해서 모듈자체에 원하는 코드를 담아 낼수도 있습니다. 차이점은 두가지를 불러들이는 방식이 다르다.. 정도만 알아두시고,

module.exports 를 사용하시기를 권장드립니다. 


## About Modules

이제 모듈을 어떻게 사용하는지 간략하게 알아보았습니다.

이제는 어떤 모듈들이 어떤 일을 하는가에 대해서 알아보도록 하죠.

```javascript
// server/server.js
const config              = require( './config' );
const express             = require( 'express' );
const app                 = express();
const path                = require( 'path' );
const expressHbs          = require( 'express-handlebars' );
const bodyParser          = require( 'body-parser' );
const expressErrorHandler = require( 'express-error-handler' );
const errorHandler        = expressErrorHandler( config.error_handler );
const mongoose            = require( 'mongoose' );
const database            = mongoose.connection;
const router              = require( './routes' );
```

현제까지 사용된 모듈들입니다.

* express : 익스프레스는 프레임워크라고 생각하시면 될것 같아요. 원래는 http 모듈을 이용해서 신경쓸게 많았겠지만 간단하게 구현이 가능하도록 만들어진 라이브러리죠.

* path : 이 모듈은 사실 window 와 POSIX 의 경로 체계가 달라서 생겨나게 되었는데요, 각기 다른 경로를 뽑아 내기에 해당하는 경로를 보정해 주기 위한 수단으로 도입되었습니다.

* expressHbs : 이건 탬플릿 엔진인데요, ejs, jade, hbs, freemarker 등 다양합니다만, 이번에는 핸들바를 한번 써보고 싶어서 넣었습니다.

* bodyParser : 이건 req / res 과정에서 바디 부분을 파싱 받을때 contentType을 보정해 주기 위한 수단으로 도입했습니다.

* mongoose : 이건 mongodb 를 node 에서 접근할수 있도록 도와주는 모듈입니다

해당 모듈에 대한 자세한 정보는 간략하게 설명하기 보다 아래의 링크에서 직접 확인하고 테스트 해보시면 좋을것 같습니다.

https://nodejs.org/api/"모듈이름" [링크][https://nodejs.org/api]

