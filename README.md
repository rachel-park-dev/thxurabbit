# 🐰흑토끼와 함께하는 감사 연말 정산
![Screenshot 2024-01-22 at 19 54 13](https://github.com/rachel-park-dev/thxurabbit/assets/88074487/ad5f5722-889d-42cb-b820-9c397e41c715)

<hr/>

### 🚩 프로젝트 구성 인원
- 기획자 1명, UI/UX 디자이너 2명, 백엔드 개발자 2명, 프론트엔드 개발자 2명
- 프로젝트를 시작하게 된 계기
  - 연말 연초에 지인들에게 감사 인사를 전하면서 따뜻한 연말을 보냈으면 좋겠다는 취지.
  - 말로 하지 못했던 감사한 마음들을 편지에 담아서 보냈으면 하는 마음에서 시작된 프로젝트.
  - 출시와 실제 사용자들의 서비스 이용이 목표였기에, 이벤트성 페이지를 개발하기로 결정.
 
 <hr/>
 
### 🚩 프로젝트에서 나의 역할
- 로그인 / 회원가입 개발
  - `jwt` 를 사용한 인증/인가 처리
- 중간정산 화면 개발
  - 합산된 데이터 노출
  - 10만원 단위로 3자리마다 `,` 표현
  - 감사 편지를 받았을 경우 1명당 소득 `+100,000원`
  - 감사 편지를 내가 쓸 경우 1명당 지출 `-100,000원`
- 감사 메세지 남김 화면 개발
  - `react-hook-form` 사용
- 최종 결과 화면 개발
  - 2022년 12월 31일 이후 화면을 모두 결과 페이지(`/result`)로 랜딩 시켜서 
    어느 페이지로 접속해도 결과화면이 노출될 수 있도록 함.
- 모바일 사이즈로 화면 개발
- `meta`정보를 등록하여 SNS 공유시 미리보기 제공
- 프론트엔드 배포

<hr/>

### 🚩 프로젝트 상세
![prjarchi 001](https://github.com/rachel-park-dev/thxurabbit/assets/88074487/f9312585-e2a0-4bba-8586-b2257196ff5f)

<hr/>

#### 🗂️ 프론트엔드 폴더 구조
```
.
├── README.md
├── db.json
├── dist
├── index.html
├── package.json
├── public
│   ├── mockServiceWorker.js
│   ├── og_blackRabbit.png
│   ├── rabbit.png
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── NotFound
│   ├── Router.tsx
│   ├── api
│   ├── assets
│   ├── axios
│   ├── components
│   ├── contexts
│   ├── main.tsx
│   ├── mocks
│   ├── pages
│   ├── reset.css
│   ├── services
│   ├── utils
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
![archi 002](https://github.com/rachel-park-dev/thxurabbit/assets/88074487/a19ce956-22d5-4213-8458-ca1156ff4e29)
