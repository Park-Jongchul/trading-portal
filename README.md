# Trading Desk 접속 페이지

GitHub Pages에는 이 정적 접속 페이지만 배포합니다. 로그인 비밀번호, 증권사 키, 계좌 정보, DB, 기존 자동매매 코드는 포함하지 않습니다. 개인 PC의 Tailscale Serve HTTPS 주소로 최상위 페이지를 이동하므로 기존 서버의 세션·CSRF 구조를 그대로 사용합니다.

`index.html`, `style.css`, `app.js`, `url.mjs`를 공개 저장소 루트에 배포하고 GitHub Pages를 main / root로 설정합니다. 실제 PC 주소는 저장소에 넣지 않고 각 브라우저에서 등록합니다. 공개 접속 페이지는 PC가 꺼져도 열리지만 자동매매 사이트는 PC가 실행 중일 때만 열립니다.

검증: `node url.test.mjs`.
