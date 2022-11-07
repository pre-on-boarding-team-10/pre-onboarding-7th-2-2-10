# 원티드 프리온보딩 프론트엔드 - Week 2-2

## 10팀 맴버 구성

<br/>

<div align=center>
	
| <img src="https://avatars.githubusercontent.com/u/26901045?v=4" width="130" height="130" />  | <img src="https://avatars.githubusercontent.com/u/105492051?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/92094314?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/101456751?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------:  | :-----------------------------------------------------------------------------------------:  | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------:  |
|                                    :full_moon: 오지수                                         |                                :last_quarter_moon: 정억화                                    |                                           송완준                                            |                                            김미성                                            |
|                [:globe_with_meridians:silviaoh](https://github.com/silviaoh)                 |                 [:globe_with_meridians:oka7759](https://github.com/oka7759)                  |            [:globe_with_meridians:natural-nine](https://github.com/natural-nine)           |                  [:globe_with_meridians:kimitt](https://github.com/kimitt)                  |

| <img src="https://avatars.githubusercontent.com/u/83964261?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/103277726?v=4" width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/93189402?v=4"  width="130" height="130" /> | <img src="https://avatars.githubusercontent.com/u/109638284?v=4" width="130" height="130"/> |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                                           이학성                                            |                                            김숙영                                            |                                            김인표                                            |                                           박민규                                            |
|            [:globe_with_meridians:Hakseong-Lee](https://github.com/Hakseong-Lee)            |                 [:globe_with_meridians:Maiowol](https://github.com/Maiowol)                  |                [:globe_with_meridians:kiminpyo](https://github.com/kiminpyo)                 |              [:globe_with_meridians:kyle970320](https://github.com/kyle970320)              |

</div>

<br/>

## 프로젝트 요약

### 📆 기간

#### 22년 11월 05일 ~ 22년 11월 07일

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><br/>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/react_snap-66595C?style=for-the-badge&logo=reactsnap&logoColor=white"/>   
   <img src="https://img.shields.io/badge/react_recoil_async-3DDC84?style=for-the-badge&logo=react-recoil-async&logoColor=white"/> 
</div>

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

<br/>

### 배포 링크

[배포링크 바로가기](https://pre-onboarding-7th-2-2-10.vercel.app/)

<br/>

## 프로젝트 설명

### 📂 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
🗂 src
 ┣ 📁 assets
   ┣ icon_alarm.svg
   ┣ con_down.svg
   ┣ icon_guide.svg
   ┣ icon_menu01_off.svg
   ┣ icon_menu02_off.svg
   ┣ icon_polygon_down.svg
   ┣ icon_polygon_up.svg
   ┣ icon_profile.svg
   ┣ icon_setting.svg
   ┣ index.js
   ┗ logo.png
 ┣ 📁 components
    ┣ 📁 chart
      ┗ LineChart.js
    ┣ 📁 common
      ┣ MainHeader.jsx
      ┗ SideNavigation.jsx
    ┣ 📁 datepicker
      ┗ ArrangeDatepicker.jsx
    ┣ 📁 layout
      ┣ MainHeaderLayout.jsx
      ┗ SideNavLayout.jsx
    ┗ 📁 select
      ┗ CustomSelect.jsx
 ┣ 📁 constant
   ┗ template.js
 ┣ 📁 hooks
   ┣ useAdManagement.js
   ┣ useAdStatus.js
   ┣ useDatepickerState.js
   ┣ useFilterAdManagement.js
   ┗ useOption.js
 ┣ 📁 pages
	 ┣ AdvertisingManagement.jsx
   ┗ Dashboard.jsx
 ┣ 📁 recoil
   ┣ adManagement.js
   ┣ dashboard.js
   ┗ datepicker.js
 ┣ 📂 service
   ┣ AdListService.js
   ┗ AdStatusService.js
 ┣ 📂 style
   ┣ Global.style.jsx
   ┣ common.style.js
   ┗ theme.style.js
 ┣ 📂 utils
   ┣ get.js
   ┗ time.js
 ┣ index.js
 ┗ router.js
```

</div>
</details>

### ⚙️ 구현기능

1. 대시보드

```
- Chartjs 라이브러리를 이용하여 그래프 구현
- select 태그를 이용하여 데이터를 가공하여 선택된 데이터 그래프 랜더
- React-datepicker 라이브러리를 이용하여 해당 날자별로 데이터 가공
- 선택된 날자와 지난 날짜를 대조하여 데이터 변화를 출력함
```

2.  광고관리

```
- 광고들을 상태(진행중, 종료)에 마추어 선택하여 출력 되도록 구현
- 상태를 진행중 혹은 종료됨으로 변경
```

<br/>

### 10팀의 Best Practice 선정 내용

---

<br/>

**1. 전역상태 관리를 이용하여 페이지 이동, 복귀시 기존 데이터 변화 없이 출력**

- Recoil의 선택 값을 저장하여 페이지를 이동하여도 기존의 값을 불러와 변동없이 출력함

**2. Redux vs useState**

- 다양한 상태값을 저장 유지 해야 하기에 Recoil을 사용하여 상태 값을 관리

**3. 마케팅 용어에 맞게 그래프, 대시보드 출력**

- 익숙 하지 않은 마케팅 용어를 정확하게 기입 하기 위해 마케팅 용어를 숙지하고 해당 위치에 맞게 입력함

### 📝 Meeting Log

[회의록 바로가기](https://www.notion.so/Meeting-log-3eff6566fd844052b7a98702ebab8c5b?p=51dfcfc9db854806a0883eb47e3e767b&pm=s)
