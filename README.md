# Hyeoktube

clone Youtube

npm은 인터넷에서 다운받은 후 설치
npm -v 하면 버전 확인 가능(내 PC에 설치가 되어있는지 버전체크 겸 확인 용으로 좋다)

터미널에서 폴더로 접속 후 npm init 하면 package.json파일이 생성된다. (수정할 부분 수정 한다.)
그 후에 npm install express를 입력하면 서버세팅 완료
package-lock.json 파일과 node_modules폴더가 생성된다.
package-lock.json 파일과 node_modules폴더를 지우더라도
package.json에 "dependencies": {
"express": "^4.17.1"
}
가 있기 때문에 npm install만 해도 자동으로 package-lock.json 파일과 node_modules폴더가 생성된다.

github에 파일 올릴때는 package-lock.json 파일과 node_modules폴더는 올리면 안되므로 .gitignore를 생성한 후
.gitignore폴더 안에 node_modules와 package-lock.json를 타이핑 후 gitignore nodejs검색 사이트 들어가서 그 안에 있는
문자 복사후 .gitignore안에 붙혀넣기 한다.
