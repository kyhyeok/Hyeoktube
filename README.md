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
