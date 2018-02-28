## Express Views

이번에는 뷰 디렉토리에 대해서 알아보자.

뷰 디렉토리는 탬플릿들을 모아 놓은 탬플릿 컨테이너로서 사용자에게 보여질 화면을 구성하는 요소들에 대한 관심이 집중되는 곳이다.

뷰 디렉토리 구조를 보면서 하나씩 확인해 보자.

```text
views   +
        + layouts
        + pages
        + partials
        + error
```

뷰 디렉토리가 활성화 되기 위해서는 서버에서 뷰엔진이 옵션값에 따라 알맞게 구성이 되어야 한다.

뷰 엔진은 화면을 구성하는 고정역역에 따라서 레이아웃을 구성할수 있다.

해당 레이아웃을 담당해 주는 서브 디렉토리가 layouts 이다.

그래고 해당 레이아웃에 고정적인 스테틱 페이지를 담당해주고 각 파트를 분리하여 관리되는 부분이 partials 이다.

pages 에서는 실제로 컨텐츠들이 각 경로에 따라서 화면을 바꾸게 되는 구조로 partials 에 있는 뷰는 고정적, pages 내부에 있는 뷰들은 치환이 가능한 구조라고 볼 수 있다.

하단에는 스테틱한 환경변수 및 각기 모듈에 기입되어야 할 옵션값을 관리하기 위한 config.js 파일이 있다.

```javascript
//server/config/index.js
const path   = require( 'path' );
const config = {};
let viewPath = path.join( __dirname, '..', 'views' );

config.view_engine_options = {
	defaultLayout: 'index',
	extname      : '.hbs',
	layoutsDir   : path.join( viewPath, 'layouts' ),
	partialsDir  : path.join( viewPath, 'partials' )
};

//...

module.exports = config;

```

구현된 서버에서는 뷰 엔지으로 핸들바를 사용하고 있는데 핸들바 뷰 엔진을 가동시키기 위해서는 몇가지 옵션값을 살펴봐야 한다.

* extname : 같은 경우 뷰엔진의 확장자를 의미한다.
* layoutsDir : 레이아웃을 설정하는 경우라면/ 해당 레이아웃 디렉토리의 경로를 지정해 주자.
* partialsDir : 파티얼로 화면을 관리하는 경우라면 파티얼 디렉토리 경로를 지정해 주자.

이런식으로 뷰엔진을 설정하고 각각 필요한 디렉토리의 경로가 설정되었다면, 이것을 기반으로 서버에서 세팅을 해보자.

서버에서 config 파일에서 가져온 뷰 엔진의 옵션값을 이용하여서 뷰 엔진을 셋팅하는 방법이다.
```javascript
//server/server.js
const expressHbs = require( 'express-handlebars' );
const path = require( 'path' );

//...
//뷰 엔진 설정
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', '.hbs' );
app.engine( '.hbs', expressHbs( config.view_engine_options ) );
//...
```

이렇게 뷰 엔진이 서버에서 세팅이 되었다면, 이제 라우터에서 res.render('탬플릿 경로', 데이터) 의 방식으로 이용해서 들어온 요청에 대한 반응이 가능해 진다.

```javascript
//routes/index.js
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

router.get() 부분을 확인해 보면 "/" 이런 경로로 GET 요청이 왔을 경우 pages/index 에 지정된 탬플릿과 객체로 이루어진 데이터를 내보내 주도록 설정이 되어있는 것을 확인할 수 있다.

res.render() 를 이용할 경우 첫번째 인자로 탬플릿 경로를 지정하게 되는데 상단에서 우리가 서버에서 지정했던 것처럼 해당 경로의 기본 경로는 views/ 디렉토리를 기준으로 한다.

따라서 views 하단의 디렉토리부터 설정을 시작하면 올바르게 경로를 지정하게 된다. 