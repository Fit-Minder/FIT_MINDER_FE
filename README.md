# FIT-MINDER FE 리포지토리 관리

<br><br>
* ### branch 관리
#### 💡초기 세팅(순서대로 진행하기 !)
> local 폴더에 git init <br>
> git remote add origin {url} <br>
> git checkout -b develop <br>
> git pull origin develop (올려놓은 파일 있을 시에)<br>
> git checkout -b {개인 브랜치}<br>
> git pull origin develop (올려놓은 파일 있을 시에)<br>
> 세팅 끝. 개인 브랜치에서 진행하면 됩니당
<br>

#### 💡브랜치 세팅 
> main: 최종본 merge<br>
> develop: feat 상위 개발환경 브랜치<br>
> feat-이름: develop 파생 개인 브랜치(주로 여기서 개발)<br>
> 필요하면 개인 브랜치에서 파생 브랜치 생성해서 쓰기<br>
-> 만드는 법: git checkout -b {원하는 브랜치 명} 그 다음 git pull origin {상위 브랜치}

<br><br>

* ### commit 관리
#### 💡커밋명 규칙(중요한 것 정도는 지키기)
> [feat] : 새로운 기능을 추가했을 때<br>
> [fix] : 버그를 수정했을 때<br>
> [docs] : 문서와 관련하여 수정한 부분이 있을 때<br>
> [style] : 코드의 변화와는 관련이 없는, 스타일 관련 기능(코드 포맷팅, 세미콜론 누락)<br>
> [test] : 테스트 코드, 리팩토링 테스트 코드를 추가했을 때<br>

<br><br>


* ### 페이지 구현 관리
#### 링크
>
> (추가사항: 개발 환경)
