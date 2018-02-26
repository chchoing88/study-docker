## Express Routing?

라우팅은 어떤 네트워크 안에서 통신 데이터를 보낼 경로를 선택하는 과정이다.

express 에서의 routing 이란 client 로 부터 들어온 request 대한 서버의 response 를 지정해 두는 행위 정도라고 생각한다.

라우팅의 다양한 방법에 대한 이미지를 첨부한다. 

![routing_img](server/public/image/routing_img)

우선 라우터 디렉토리에서 이루어져야 할 작업에 대해서 생각해 보자.

라우터 index 에서는 서버로 들어온 여청에 대해서 어떤 반응을 보여야 하는지 지정해 주어야 한다.

요청에 따른 반응에는 탬플릿정보 ( 사용자에게 보여줘야 할 뷰 ) 가 있을 것이고, 해당하는 뷰에 매핑되어야 할 정보 ( 데이터 ) 가 필요할 것이다.

따라서 라우터는 nodeapp:8080/ 이라는 경로로 요청이 들어왔을때, 해당 하는 탬플릿 + 데이터가 반응으로 내려가야 한다는 것이다.

요청이 들어올수 있는 루트별로 관리가 되어야 하기 때문에 index 의 역할은 해당하는 라우터를 로드하고, 그 안에 있는 매핑정보를 끌어다가 결과화면으로 노출하면 끝.

탬플릿과 데이터를 가져오는 방식에 관해서는 views / service 파트에서 소개하도록 하겠다. 

```javascript
//server/routes/index.js
const user      = require( './user' );
const express   = require( 'express' );
const router    = express.Router();
const route     = {};
const routerMap = { user };

route.load = ( routerName ) => routerMap[ routerName ];

router.get( '/', ( req, res ) => res.render( 'pages/index', { msg: 'hello index' } ) );

route.init = () => router;

module.exports = route;
```

라우터를 상단처럼 구성하였다면, 이제 require 를 통해서 해당 모듈을 가져온다.

그리고 app.use( ) 함수를 이용하여 해당 라우터를 express App 의 미들웨어로 등록한다.

그렇다면 해당하는 요청에 대해서는 지정해논 미들웨어가 작동을 할 것이다.

우선 라우터를 가동시키기 위해서 router.init() 함수를 통해서 index 로 들어오는 요청을 핸들링 한다.

요청이 좀더 세부경로에 관한 것이라면 경로를 "/" 기준으로 나누어서 관리하도록 하고 거기에 맞는 라우터를 매핑해 준다.

만약 추가적인 파일을 등록하여 라우팅을 파일수가 많아진 경우라면, 라우터 index.js 에 있는 routerMap 에 해당 모듈을 로드 해주고,

서버에서는 똑같이 router.load('라우팅 이름') 을 통해서 미들웨어로 등록만 해주면 작동하게 된다.

이런식으로 라우팅에 대한 부분을 한 디렉토리로 한정하여 관심사를 분리 시킬 수 있다는 것이 장접인 것 같다.

```javascript
//server/server.js
const router              = require( './routes' );

//...

//라우팅 설정
app.use( '/', router.init() );
app.use( '/user', router.load( 'user' ) );

//...

```

