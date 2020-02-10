# Hyeoktube

clone Youtube

# -----------------------node 시작-----------------------

npm은 인터넷에서 다운받은 후 설치

npm -v 하면 버전 확인 가능(내 PC에 설치가 되어있는지 버전체크 겸 확인 용으로 좋다)

# -----------------------node 끝-----------------------

# -----------------------node 서버세팅 시작-----------------------

터미널에서 폴더로 접속 후 npm init 하면 package.json파일이 생성된다. (수정할 부분 수정 한다.)

그 후에 npm install express를 입력하면 서버세팅 완료

package-lock.json 파일과 node_modules폴더가 생성된다.

package-lock.json 파일과 node_modules폴더를 지우더라도

package.json에 "dependencies": {
"express": "^4.17.1"
}

가 있기 때문에 npm install만 해도 자동으로 package-lock.json 파일과 node_modules폴더가 생성된다.

# -----------------------node 서버세팅 끝-----------------------

# -----------------------gitignore 시작-----------------------

github에 파일 올릴때는 package-lock.json 파일과 node_modules폴더는 git에 올리면 안되므로 .gitignore를 생성한 후
.gitignore파일 안에 node_modules와 package-lock.json를 타이핑 후 gitignore nodejs검색 사이트 들어가서 그 안에 있는
문자 복사후 .gitignore안에 붙혀넣기 한다.

.gitignore안에 있는 타이핑들은 업로드 안된다.

# -----------------------gitignore 끝-----------------------

# -----------------------babel 시작-----------------------

ES6를 사용할 수 있게 해주는?? 공식문서 홈페이지 https://babeljs.io/docs/en/

npm install @babel/node 설치해주고 babel은 stage가 많은데 그 중 하나를 골라 설치한다

npm install @babel/preset-env 설치해주고 babel은 맞는 js를 설치해 주어야 한다.

.babelrc파일을 만들고 그 안에
{
"presets": ["@babel/preset-env"]
}

를 타이핑 한다 (state를 env로 해서 타이핑을 env로 함)

"scripts": {
"start": "node index.js" -> "babel-node index.js"로 변경
}

npm install @babel/core 설치

그 후에 더 세련되게 코드 수정

# -----------------------babel 끝-----------------------

# -----------------------nodemon 시작-----------------------

ps : dependencies는 프로젝트에 필요한 것들, devDependencies는 개발자가 필요한 것들
npm install nodemon -D (-D는 devDependencies로 설정이 된다.)

nodemon은 소스 파일 수정 후 서버를 꼈다 켰다 할 필요 없시 저장만 하면 알아서 새로고침이 된다

(홈페이지에서 따로 새로고침은 해줘야 한다 | vsc에서 live server와는 다름)

"scripts": {
"start": "babel-node index.js" -> "start": "nodemon --exec babel-node index.js"로 변경
}

# -----------------------nodemon 끝-----------------------

# -----------------------Middlewares 시작-----------------------

morgan : 로그 기록을 남기는 모듈 | npm install morgan 후 import한다

helmet : NodeJS 보안을 강화해준다 | npm install helmet 후 import한다

body-parser : POST 요청 데이터를 추출할 수 있도록 만들어 주는 미들웨어 | npm install body-parser 후 import한다

cookie-parser : 요청된 쿠키를 쉽게 추출할 수 있도록 해주는 미들웨어 | npm install cookie-parser 후 import한다

PS. local에 있는 파일은 import할 경우 알파벳 순서로 해주는 것이 좋다 (보기 좋고 찾기 편하다)

# -----------------------Middlewares 끝-----------------------

# -----------------------router 시작-----------------------

라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식

페이지가 많아질수록 관리하기 어렵고 복잡해지는데 그 복잡도를 낮추는 방법중 하나이다.

app.js에서 소스 맨 마지막에 export default app;을 하는 이유는 아무개가 프로젝트는 import할 수 있도록 하기 위해서 (react 수업 들을 때 많이 나온 부분)

같이 위치에서 import를 할 경우 ./아무개 이런식으로

default를 import할때는 import app default가 아닌 상태에서 import할때는 import {app}

# -----------------------router 끝-----------------------

# -----------------------mvc part 1 시작-----------------------

M odel : data
V iew : how does the data look
C ontroller : function that look for the data

# -----------------------mvc part 1 끝-----------------------

# -----------------------mvc part 2 시작-----------------------

routers.js에 경로를 모아둔 것은 재사용때문에?? URL전체 구조를 외울 필요성을 줄이기 위해??
router에서 경로 설정을 할 때 /user/:id 이런식으로 :가 붙는 경우는 id 값이 변경이 된다는 뜻이다
/user/id 는 id가 그저 id라는 글자로 인식된다
../는 현재 경로에서 한 단계 윗 경로로 이동 (현재경로에서 한 단계 바깥경로로 빠져 나간다고 보면 된다.)

# -----------------------mvc part 2 끝-----------------------

# -----------------------mvc part 3 시작-----------------------

function test() {
return something;
}
위 아래는 같은 의미
const test() => something;

# -----------------------mvc part 3 끝-----------------------

# -----------------------pug 시작-----------------------

pug는 HTML을 더 괜찮게 보이도록 만들어준다

npm install pug

views라는 폴더를 만들고 그 안에 .pug파일을 만들어서 사용

<h1> Hello</h1> 일단 html

h1 Hello pug를 이용한 html

pug는 파이썬처럼 들여쓰기 스타일이다

content는 main이 되는 pug에 block content를 하고 다른 페이지 맨 위에 extents 메인pug를 하면 된다

ex) layouts폴더 안에main.put extents layouts/main

partials은 include로 사용한다 component를 독립시키는 것 조직화 하는 것이 좋다

#{}를 하면 자바스크립트 코드를 사용할 수 있다

# -----------------------pug 끝-----------------------

# -----------------------fontawesome 시작-----------------------

fontawesome.com 접속 후 고유 스크립트를 신청하면 Kits에 본인 스크립트가 나온다
그것을 html -> head 쪽에 입력하면 된다

# -----------------------fontawesome 끝-----------------------

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

## Pages:

# -----------------------MongoDB 시작-----------------------

MongoDB는 NoSQL이다 https://www.mongodb.com/

https://www.mongodb.com/download-center/community 다운로드 url

version, OS, package를 맞춰서 다운로드 한다

ex(version은 current release가 가장 적합, OS는 사용하는 OS, Package는 윈도우의 경우 zip 말고 msi로) 2019-01-07 기준

다운 받은 후 설치 설치 중간 중간 선택해야 되는 상황에서는 recommand되어 있는 걸로 하는게 좋다

url = MongoDB를 설치하면 보통 C:\Program Files 설치가 되고 MongoDB\Server\4.2\bin까지 접속을 한 후
폴더 url 복사 (4.2는 버전 다를 수 있다) 2020-01-07 기준

환경설정 변수잡기 -> 내 PC - (마우스 오른쪽 클릭)속성 - 고급 시스템 설정 - 환경 변수 - 시스템 변수 - Path - 편집 - 새로 만들기 - url - 확인 후 환경설정 변수를 잡는다

터미널에 mongod를 입력 실행 확인 후 다른 터미널에 mongo를 입력 확인 후 exit

https://mongoosejs.com/ 는 몽고db를 js에서 사용할 수 있게 해주는 것

npm install mongooes 몽고DB를 NodeJS에서 사용하기 위해 install해야 한다

use hyeok-tube (내 데이터베이스 이름 | 본인이 확인하고 싶은 데이터베이스 명을 use + 입력해야한다.)

# -----------------------MongoDB 끝-----------------------

# -----------------------dotenv 시작-----------------------

npm install dotenv

DB연결시 공유하고 싶지 않은 정보들은 보안유지 해주는??
import dotenv from "dotenv";

dotenv.config();

process.env.MONGO_URL

process는 dotenv를 사용할 때 쓰는 것 같고
env는 .env파일을 의미
.MONGO_URL은 .env안에 있는 변수

.gitignore에 .env가 있어서 github에 업로드는 안된다

# -----------------------dotenv 끝-----------------------

# -----------------------dotenv 시작-----------------------

npm install dotenv

DB연결시 공유하고 싶지 않은 정보들은 보안유지 해주는??
import dotenv from "dotenv";

dotenv.config();

process.env.MONGO_URL

process는 dotenv를 사용할 때 쓰는 것 같고
env는 .env파일을 의미
.MONGO_URL은 .env안에 있는 변수

.gitignore에 .env가 있어서 github에 업로드는 안된다

# -----------------------dotenv 끝-----------------------

# -----------------------multer 시작-----------------------

npm install multer

Multer는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어

효율성을 최대화 하기 위해 busboy 를 기반으로 하고 있다.

(busboy는 나중에 알아보자 | 서버(홀에서 일하는 사람들) 도와주는게 busboy이긴한데 ;;;)

Multer는 multipart (multipart/form-data)가 아닌 폼에서는 동작하지 않습니다.

github에 동영상을 올리 생각이 없으므로 .gitignore에 uploads를 설정

한 개의 서버에서 데이터베이스(특히 파일들)와 UI단??은 다르게 다뤄야 효율이 좋다

# -----------------------multer 끝-----------------------

# -----------------------eslint 시작-----------------------

eslint는 코드의 에러를 잡아주는 것이라 생각하면 편하다

vscode에서 eslint확장자 설치해주고

npm install eslint -g || -g는 글로벌로 해당 프로젝트 넘은 범위에서 설치가 된다는 의미이다.

(이걸로 설치 ㄴㄴ인줄 알았는데 -g를 해야 eslint --init이 작동한다)

npm install eslint-config-prettier는

vsc에서 prettier이란 소스를 자동으로 변환해주는 확장자를 설치했기 때문에

eslint와 prettier가 맞지 않아서 잡에러를 발생하는 것을 방지하기 위해서

(-D는 프로젝트가 아니라 해당 개발자만 설치하는 방법)

eslint --init 상황에 맞게 클릭 클릭 Yes OR No(어렵네 ㅜㅜ)

npm install eslint-config-airbnb-base -D | npm install eslint-plugin-import -D

npm install eslint-config-prettier -D | npm install eslint-plugin-prettier -D | npm install prettier -D

이 후 eslintrc.js 파일에 extends를 ["airbnb-base", "prettier"]로 변경

rules: { "no-console": "off" } rules에 기능 추가를 할 수 있다

잘을 모르겠으나 완료되면 npm uninstall eslint -g하자

install할것 전부 인스톨 이후 .eslintrc.js 파일 생성후 안에 코드를 직접 입력하는 방식도 있다

# -----------------------eslint 끝-----------------------

# -----------------------webpack 시작-----------------------

npm install webpack webpack-cli

webpack is working with file webpack-cli working with Terminal

webpack.config.js 파일을 생성한다

package.json에서 scripts쪽 수정한다

start -> dev:server, dev:assets: webpack

npm install cross-env 설치 후 dev:assets WEBPACK앞에 cross-env를 붙혀준다.

npm install extract-text-webpack-plugin@next

@를 붙히면 원하는 버전으로 설치가 가능하다

webpack.config.js에서 loader을 활용하기 위해서

npm install css-loader postcss-loader sass-loader 설치한다

npm install node-sass 설치한다

autoprefixer을 사용하기 위해 npm install autoprefixer

postcss.org나 browserslist에서 document같은 형식의 파일을 본다

npm run dev:assets 지정한 폴더와 파일이 생긴다
(package.json에 설정한 이름을 run한 것임)

npm install babel-loader

npm install @babel/polyfill

dev:assets 끝에 -w는 watch라는 뜻으로 -w하면 다 본다 뭐 이런기능???;;

# -----------------------webpack 끝-----------------------

# -----------------------PassportJS 시작-----------------------

authentication middleware for Node.js

npm install passport-local-mongoose

npm i passport passport-local

# -----------------------PassportJS 끝-----------------------

# -----------------------express session 시작-----------------------

npm install express-session

express에서 session을 사용할 수 있게 도와주는

# -----------------------express session 끝-----------------------

# -----------------------connect-mongo 시작-----------------------

npm install connect-mongo

session에 쿠키는 담는 역학이다

# -----------------------connect-mongo 끝-----------------------

# -----------------------github Login 시작-----------------------

npm install passport-github

github홈페이지 -> 개발자페이지 application등록 해야한다. (OAuth Apps)

Authorization callback URL이 포인트

생성하면 ID와 PW를 제공하는데 이거는 절대 비밀이다

arg가 순서대로 여러가지가 있을 경우네 순서가 어긋나면 안된다.

function test(1,2,3,4){} | 다만 첫 번째, 두 번째 사용을 안하고 세 번째를 사용하고 싶을 경우

function test(\_, \_\_, 3, 4)를 해야지 function test(3,4)하면 에러가 난다 || \_가 자동으로 \_로 저장 됌

github email이 public이나 아니냐 때문에 에러가 났다. 각 사이트바다 이메일을 보내는 방식이든

아이디를 통한 로그인 방식이든 application과의 보안 혹은 공유범위에 따라 에러가 날 수도 있다

# -----------------------github Login 끝-----------------------

# -----------------------facebook 시작-----------------------

npm install passport-facebook

developers.facebook.com에 들어가서 등록해야 한다

application 등록하고 설정으로 들어간다음 Site URL입력 후

설정 -> 기본설정에 들어가서 IP와 SECRET번호를 가져온다

상태 off를 on으로 바꿔준다

Privacy Policy URL에

http://www.paaaportjs.org.packages/paaaport-facebook (passportjs에서 facebook 페이지)

Make App Public 에서 Entertainment(나중에 알오보고)로 설정 후 Confirm

App Review에서 My permissions and Features에서 확인해봅시다

facebook은 http를 안 좋아하고 안 믿어서 https가 필요하다

Facebook Login -> Ssettings -> Valid OAuth Redirect URIs에

ngrok http 4000부터 얻은 URI를 추가 한다

# -----------------------facebook 끝-----------------------

# -----------------------localtunnel 시작-----------------------

로컬서버에 https 터널을 만들어 준다

npm install -g localtunner

lt --port 4000(4000은 우리가 처음에 설정한 번호)를 입력하면

새로운 URL을 준다

package.json에서
"tunnel": "lt -- port 4000"추가 (2020-10-20)에서 너무 오래걸리거나 안되어서

npm install -g ngrok설치 후 ngrok http 4000으로 하니까 됌

# -----------------------localtunnel 끝-----------------------

# -----------------------fullScreen 시작-----------------------

동영상 당시에는 브라우저 호환문제? 브라우저 전쟁? 때문에

RequestFullscreen(), exitFullscreen()이 제대로 안 먹힘

그렇기 때문에 webkit, moz, ms라는 브라우저마다의 고유값을 입력했어야 함

오류가 나지만 되는 부류가 있고 아에 안되는 부류가 있다 ㅜㅜ

# -----------------------fullScreen 끝-----------------------

# -----------------------video 시작-----------------------

video element mdn 검색 ㄱㄱ 하면 video에 관한 document가 나온다

media devices navigator mdn 검색 ㄱㄱ 하면 핸드폰이나 브라우저에서 영상활용에 관한 document가 나온다

PC(그 PC가 아님)는 카메라와 마이크가 없어서 테스트를 못 하는 환경이므로

이어폰은 마이크 단자에 연결하고 video는 주석처리 하고 테스트를 해본다

# -----------------------video 끝-----------------------

# -----------------------ajax 시작-----------------------

fetch를 이용하는 방법이 있다

fetch는 get이 기본 post는 fetch("url", {method:"POST"})를 입력해서 post를 가져오게 해야된다

# -----------------------ajax 끝-----------------------

# -----------------------Axios는 시작-----------------------

Axios는 Promise를 기반으로하여 async/await문법을 사용하여 XHR요청을 매우 쉽게 할 수 있습니다.

npm install axios설치한다

# -----------------------Axios는 끝-----------------------

# -----------------------try catch finally 시작-----------------------

try {

\_ 정상이라면 이 코드는 아무런 문제없이 블록의 시작부터 끝까지 실행된다.

\_ 하지만 경우에 따라 예외가 발생할 수 있다.

\_ 예외는 throw 문에 의해 직접적으로 발생할 수도 있고,

\_ 또는 예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.

} catch (e) {

\_ 이 블록 내부의 문장들은 오직 try 블록에서 예외가 발생할 경우에만 실행된다.

\_ 이 문장들에선 지역 변수 e를 사용하여 Error 객체 또는 앞에서 던진 다른 값을 참조할 수 있다.

\_ 이 블록에서는 어떻게든 그 예외를 처리할 수도 있고,

\_ 그냥 아무것도 하지 않고 예외를 무시할 수도 있고,

\_ 아니면 throw 를 사용해서 예외를 다시 발생시킬 수도 있다.

} finally {

\_ 이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.

\_ 이 코드는 try 블록이 어떻게든 종료되면 실행된다.

\_ try 블록이 종료되는 상황은 다음과 같다.

1 정상적으로 블록의 끝에 도달했을 때

2 break, continue 또는 return 문에 의해서

3 예외가 발생했지만 catch 절에서 처리했을 때

4 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때

}

# -----------------------try catch finally 끝-----------------------

# -----------------------AWS 시작-----------------------

aws amazon 검색

회원가입 후 완전 회원가입??을 클릭 하면

전문가와 그냥이나오는데 public을 선택 후 정보 입력하고 next

그럼 신용카드 입력란이 있는데 입력하고 next하면 1달라가 차감된다고 문자가 오지만

실제로는 차감이 되지 않는다.(본인인지 확인용) next

이용료가 나오는데 free로 하면 공짜이다.

이 과정을 해야 완전한 회원가입??이 되서 이용이 가능하다

service에서 Storage -> S3 클릭후 버켓 생선한다.

우리는 public한 홈페이지니까 public을 한다.

처음 만들때 Block을 전부 off하거나 이름 클릭 -> Permissions에서 Block을 전부 해제해도 된다.

Access Control List -> Public access -> Everyone -> 전부 체크하고 save

다시 Service -> S3에 가면 Bucket name 옆 Access가 Public으로 바뀌어 있다.

(2020-02-05 언제든지 바뀔 수 있다. 강의 내용시점과 현 시점도 달랐다)

이 과정이 마무리되면

Security, Identity, & Compliance -> IAM -> Users -> Add User

User name은 알아서 입력하고

Programmatic access와 Programmatic access이 있는데

Programmatic access은 프로그램이 사용

Programmatic access은 사람이 사용해서 자료를 변경할 수 있다 (password방식)

Programmatic access 선택 후 next

Attach existing policies directly -> s3 검색 -> AmazonS3FullAccess 클릭 next:Tags -> Add Tags(공란) next:Review -> Create user

(AmazonS3FullAccess는 유저가 Amazon S3에서 다 볼수 있다. 즉 무엇이든 할 수 있다)

Access key ID와 Secret access key가 나온다

이 페이지를 한 번 나가면 다시는 접근할 수가 없다

비밀리에 두개의 키 값을 보관해야 한다.

npm install asw-sdk multer-s3를 설치하면 기본세팅이 끝

npm install A B C 하면 ABC 차례로 install 된다.

# -----------------------AWS 끝-----------------------

# -----------------------get-blob-duration 시작-----------------------

npm install get-blob-duration

비디오 영상 길이데이터를 제대로 가져오지 못 할때 쓰는 라이브러리

# -----------------------get-blob-duration 끝-----------------------

# -----------------------mongolab 시작-----------------------

https://mlab.com 에 접속

이거 잘 모르겠음 아이디가 자꾸 있다고 해서 수업 듣기만 하고 코딩 안함

# -----------------------mongolab 끝-----------------------

# -----------------------building for Production 시작-----------------------

npm install --save @babel/cli 한 후

package.json에

"build:server" : "babel src -- out-dir build --ignore 'src/assets', 'src/static', src/webpack.config.js"  추가

"dev:assets": "cd src && cross-env WEBPACK_ENV=development webpack -w" 수정

"build:assets": "cd src && WEBPACK_ENV=production webpack" 수정

"copyAll": "cp -R src/static build && cp -R src/views build" 추가

"build": "npm run build:server && npm run build:assets && npm run copyAll" 추가

src폴더를 만든 후 node_modules, babelrc, env, eslintrc, gitignore, package-lock, package, readme

제외한 파일을 전부 src폴더에 넣는다

gitignore에 build추가 한다

# -----------------------building for Production 끝-----------------------

# -----------------------express flash 시작-----------------------

npm install express-flash

# -----------------------express flash 끝-----------------------
