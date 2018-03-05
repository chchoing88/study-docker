/*
* 마지막 수정 : shawn.thecool
*
* model 은 몽구스의 스키마 인스턴스를 생성해주고 만들어둔 스키마들을 매핑 및 관리해주는 역할을 합니다
* 관리를 위해서 각 스키마별로 js 파일을 분리하고 schemaMap 객체를 이용하여 매핑 처리를 합니다
*
* 예를 들어서 user.js 에 user 에 대한 스키마 형태를 지정해 두고 schemaMap 에 등록 하여서 사용 합니다
* model.loadSchema 함수를 이용하서 server.js 로 부터 사용할 스키마의 이름을 받아 왔다면,
* mongoose.model 함수는 스키마의 이름과 schemaMap 에 등록한 스키마의 형태를 토대로 인스턴스 객체를 생성해 줄 것입니다
*
* server.js 에서는 이렇게 사용을 합니다. model.set( 'user' ) -> schema 인스턴스 생성 합니다
*
* */

const mongoose  = require( 'mongoose' );
const user      = require( './user' );
const Schema    = mongoose.Schema;
const model     = {};
const schemaMap = { user };

model.load = ( schemaName ) => mongoose.model( schemaName, new Schema( schemaMap[ schemaName ] ) );

module.exports = model;
