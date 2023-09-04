<template>
    <!-- page-1 메인페이지 -->
    <div class="container main">
      <div class="header">
        <h1>11<br/>月<br/>18<br/>日</h1>
      </div>
      <div class="body">
        <h1>Wedding</h1>
      </div>
      <div class="footer">
        <h1>박병진 / 김유진</h1>
        <p>2023년 11월 18일 토요일 14:00</p>
        <p>더 컨벤션 반포 2F 그랜드볼룸홀</p>
      </div>
    </div>
    <!-- page-2 초대문구 -->
    <div class="container invite-text">
      <div class="content">
        <hr>
        <h1 data-aos="fade-up">" 초대합니다 "</h1>
        <div class="message">
          <span>
            <p data-aos="fade-up">저희 두 사람이 사랑과 믿음으로</p>
            <p data-aos="fade-up">한 가정을 이루게 되었습니다.</p>
            <p data-aos="fade-up">바쁘시더라도 부디 오셔서</p>
            <p data-aos="fade-up">저희의 앞날을 축복해 주시고</p>
            <p data-aos="fade-up">격려해 주시면</p>
            <p data-aos="fade-up">더없는 기쁨이 되겠습니다.</p>
          </span>
        </div>
        <div class="partner">
          <span>
            <p data-aos="fade-up">박우범 · 이정순<em>의 차남</em> 병진</p>
            <p data-aos="fade-up">김기도 · 유현숙<em>의 장녀</em> 유진</p>
          </span>
        </div>
      </div>
      <!-- 추후 유진 컨펌 필요 -->
      <div class="img">

      </div>
    </div>
    <!-- page-3 달력 -->
    <div class="container contact-calendar">
      <div class="contact">
        <div class="groom" data-aos="fade-up">
          <em style="color:var(--blue)">신랑</em>에게 연락하기
            <v-btn class="phone" href="tel:010-2944-6675" icon="mdi-phone"></v-btn>
            <v-btn class="message" href="sms:010-2944-6675" icon="mdi-message"></v-btn>
        </div>
        <div class="bride" data-aos="fade-up">
         <em style="color:var(--pink)">신부</em>에게 연락하기
              <v-btn class="phone" href="tel:010-5553-7373" icon="mdi-phone"></v-btn>
              <v-btn class="message" href="sms:010-5553-7373" icon="mdi-message"></v-btn>
        </div>
      </div>
      <div class="calendar" data-aos="fade-up">
        <div class="calendar-inner">
          <div class="title" data-aos="fade-up">
            <span class="month">11 November</span>
            <span class="day">토. 오후 2시</span>
          </div>
          <hr/>
          <div class="content">
            <div class="week" data-aos="fade-up">
              <span></span>
              <span></span>
              <span></span>
              <span class="normal">1</span>
              <span class="normal">2</span>
              <span class="normal">3</span>
              <span class="normal">4</span>
            </div>
            <div class="week" data-aos="fade-up">
              <span class="sunday">5</span>
              <span class="normal">6</span>
              <span class="normal">7</span>
              <span class="normal">8</span>
              <span class="normal">9</span>
              <span class="normal">10</span>
              <span class="normal">11</span>
            </div>
            <div class="week" data-aos="fade-up">
              <span class="sunday">12</span>
              <span class="normal">13</span>
              <span class="normal">14</span>
              <span class="normal">15</span>
              <span class="normal">16</span>
              <span class="normal">17</span>
              <span class="d-day"><em></em></span>
            </div>
            <div class="week" data-aos="fade-up">
              <span class="sunday">19</span>
              <span class="normal">20</span>
              <span class="normal">21</span>
              <span class="normal">22</span>
              <span class="normal">23</span>
              <span class="normal">24</span>
              <span class="normal">25</span>
            </div>
            <div class="week" data-aos="fade-up">
              <span class="sunday">26</span>
              <span class="normal">27</span>
              <span class="normal">28</span>
              <span class="normal">29</span>
              <span class="normal">30</span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="day">
        <h1 data-aos="fade-up">2023년 11월 18일 토요일 오후 2시</h1>
        <h2 data-aos="fade-up">병진<em style="color:var(--pink)">♥</em>유진의 결혼식이 <em style="color:var(--pink)">{{ dayjs('2023-11-18').diff(dayjs().format('YYYY-MM-DD'), 'day')}}일</em> 남았습니다.</h2>
      </div>
    </div>
     <!--page-4 갤러리 -->
     <div class="container gallery">
      <h1 data-aos="fade-up">Gallery</h1>
      <div class="grid-container">
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/1.jpg" data-aos="fade-up" @click="open(0)"/>
        </div>
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/2.jpg" data-aos="fade-up" @click="open(1)"/>
        </div>
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg" data-aos="fade-up" @click="open(2)"/>
        </div>
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/4.jpg" data-aos="fade-up" @click="open(3)"/>
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/5.jpg" data-aos="fade-up" @click="open(4)"/>
        </div>
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/17.jpg" data-aos="fade-up" @click="open(5)"/>
        </div>
        <div class="grid-item">
          <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/12.jpg" data-aos="fade-up" @click="open(6)"/>
        </div>
        <template v-if="isShow">
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/3.jpg" data-aos="fade-up" @click="open(7)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/7.jpg" data-aos="fade-up" @click="open(8)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/8.jpg" data-aos="fade-up" @click="open(9)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/9.jpg" data-aos="fade-up" @click="open(10)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/10.jpg" data-aos="fade-up" @click="open(11)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/13.jpg" data-aos="fade-up" @click="open(12)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/14.jpg" data-aos="fade-up" @click="open(13)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/15.jpg" data-aos="fade-up" @click="open(14)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/16.jpg" data-aos="fade-up" @click="open(15)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/11.jpg" data-aos="fade-up" @click="open(16)"/>
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/6.jpg" data-aos="fade-up" @click="open(17)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/18.jpg" data-aos="fade-up" @click="open(18)"/>
          </div>
          <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg" data-aos="fade-up" @click="open(19)"/>
          </div>
            <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/20.jpg" data-aos="fade-up" @click="open(20)"/>
          </div>
            <div class="grid-item">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/21.jpg" data-aos="fade-up" @click="open(21)"/>
          </div>
        </template>
      </div>
      <div class="footer" v-if="!isShow">
        <button class="showmore" @click="showMore"><v-icon icon="mdi-chevron-down"/> 사진 더 보기</button> 
      </div>
     </div>
     <!--page-5 지도 -->
     <div class="container location">
      <div class="title">
        <h1 class="main" data-aos="fade-up">LOCATION</h1>
        <h1 class="sub" data-aos="fade-up">오시는 길</h1>
        <div class="subtitle">
          <p class="sub-bold" data-aos="fade-up">더컨벤션 반포 2F 그랜드볼룸홀</p>
          <p data-aos="fade-up">서울 서초구 사평대로 108</p>
          <p data-aos="fade-up">(서울시 서초구 반포동 107-3)</p>
        </div>
      </div>
      <div class="map">
        <!-- 네이버 지도 연동부분 -->
        <div id="map"  style="width: 100%; height: 300px; margin:auto"></div>
        <div class="map-navbar">
          <a class="navbar-item bar" href="https://map.naver.com/p/search/%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%20%EB%B0%98%ED%8F%AC/place/1831004045?c=15.00,0,0,0,dh&isCorrectAnswer=true">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/naver.webp">네이버 지도
          </a>
          <a class="navbar-item bar" href="https://map.kakao.com/link/map/더컨벤션반포점,37.49846066693337,126.99587826519081">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/kakao.svg">카카오맵
          </a>
          <a class="navbar-item" href="https://surl.tmobiapi.com/4e182bea">
            <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/tmap.svg">티맵
          </a>
        </div>
      </div>
      <ul class="guide">
        <li>
          <span class="guide-text">
            <p class="guide-title" data-aos="fade-up">
              <v-btn icon="mdi-train" disabled data-aos="fade-up"/>
              지하철
            </p>
            <p data-aos="fade-up">[<em style="color: orange;">❸</em>호선] 고속터미널역 5번 출구</p>
            <p data-aos="fade-up">[<em style="color: burlywood;">❾</em>호선] 신반포역 4번 출구</p>
            <p data-aos="fade-up">(반포종합운동장 방향 도보 7분)</p>
          </span>
        </li>
        <hr data-aos="fade-up"/>
        <li>
          <span class="guide-text">
            <p class="guide-title" data-aos="fade-up">
              <v-btn icon="mdi-bus" disabled data-aos="fade-up"/>
              버스
            </p>
            <p data-aos="fade-up">간선 142</p>
            <p data-aos="fade-up">마을 서초10 / 서초14 / 서초21</p>
            <p data-aos="fade-up">(반포종합운동장 하차)</p>
          </span>
        </li>
        <hr data-aos="fade-up"/>
        <li>
          <span class="guide-text">
            <p class="guide-title" data-aos="fade-up"><v-btn icon="mdi-parking" disabled data-aos="fade-up"/>
              주차
            </p>
            <p data-aos="fade-up">무료주차 2시간</p>
            <p data-aos="fade-up">건물 내 만차시 외부 주차장 안내</p>
            <p data-aos="fade-up">(도보 10분)</p>
          </span>
        </li>
        <hr data-aos="fade-up"/>
      </ul>
     </div>
     <!--page-6 안내/계좌/공유하기 -->
     <div class="container info">
      <div class="event-info">
        <div class="title" data-aos="fade-up">
          신랑측 피로연 안내
        </div>
        <div class="content">
          <p data-aos="fade-up">예식에 참석하기 어려운 분들을 위해</p>
          <p data-aos="fade-up">작은 피로연 자리를 마련하였습니다.</p>
          <p data-aos="fade-up" style="font-weight: bold;">23년 11월 4일(토) 오후6시</p>
          <p data-aos="fade-up" style="font-weight: bold;">고성대웅뷔페 4층</p>
          <p data-aos="fade-up">(경남고성군 동외리 156번길31)</p>
          <button class="event-btn" @click="moveEventMap" data-aos="fade-up">피로연장 지도보기</button>
        </div>
      </div>
      <div class="account">
        <!-- Flowers Png vectors by Lovepik.com -->
        <h1><img class="icon" src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/flower.png" />마음 전하실 곳</h1>
        <div class="accordion">
          <AccordionItem>
            <template #summary>신랑측 계좌번호</template>
            <template #icon>></template>
            
          </AccordionItem>
          <v-expansion-panels>
            <v-expansion-panel title="신랑측 계좌번호">
              <v-expansion-panel-text>
                <div class="account-info">
                  <p>국민 | 293802-01-220887
                    <button class="copy-btn" @click="copyAccount('29380201220887')">복사<v-icon icon="mdi-content-copy" /></button>
                  </p>
                  <p><em>신랑</em> 박 병 진</p>
                </div>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <div class="account-info">
                    <p>농협 | 849-02-397853
                      <button class="copy-btn" @click="copyAccount('84902397853')">복사<v-icon icon="mdi-content-copy" /></button>
                    </p>
                    <p><em>신랑 아버님</em> 박 우 범</p>
                  </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <br/>
          <v-expansion-panels>
            <v-expansion-panel title="신부측 계좌번호">
              <v-expansion-panel-text>
                <div class="account-info">
                    <p>케이뱅크 | 100-170-250076
                      <button class="copy-btn" @click="copyAccount('100170250076')">복사<v-icon icon="mdi-content-copy" /></button>
                    </p>
                    <p><em>신부</em> 김 유 진</p>
                  </div>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <div class="account-info">
                    <p>신한 | 559-04-101253
                      <button class="copy-btn" @click="copyAccount('55904101253')">복사<v-icon icon="mdi-content-copy" /></button>
                    </p>
                    <p><em>신부 아버님</em> 김 기 도</p>
                  </div>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <div class="account-info">
                    <p>농협 | 750-02-015578
                      <button class="copy-btn" @click="copyAccount('75002015578')">복사<v-icon icon="mdi-content-copy" /></button>
                    </p>
                    <p><em>신부 어머님</em> 유 현 숙</p>
                  </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div class="share">
        <ul>
          <li class="kakao">
            <button class="kakao-btn" @click="sendKakao"></button><span>카카오톡 공유하기</span>
          </li>
          <li class="link">
            <v-btn icon="mdi-link" color="#757575" class="link-btn" @click="shareLink"/><span>링크 복사하기</span>
          </li>
        </ul>
      </div>
     </div>
     <ImagePopup ref="popupRef" v-model="idx">
      <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/1.jpg" style="width:100%;"/>
     </ImagePopup>
</template>

<script setup>
import dayjs from "dayjs"
import 'dayjs/locale/ko'
import "sakura-js/dist/sakura.min.css"
import {Sakura} from "@/script/sakura.js" 
import {ref, nextTick, onMounted} from "vue"
import ImagePopup from "@/components/ImagePopup.vue"

// sakura.js(벚꽃 효과)
new Sakura('body')
// dayjs locale 지정
dayjs.locale('ko')

// 네이버 지도 연동
onMounted(() => {
  const script = document.createElement("script")
  script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bttz51t9w7"
  script.async = true
  script.defer = true
  document.head.appendChild(script)

  script.onload = () => {
    const map = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(37.49846066693337, 126.99587826519081),
      zoom: 15
    })

    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.49846066693337, 126.99587826519081),
      map: map
    })
  }
})

// 더보기 버튼 클릭
const isShow = ref(false)
const showMore = () => {
  isShow.value = !isShow.value
  nextTick(()=> window.scrollTo({ top: document.documentElement.scrollTop+700, behavior: "smooth" }))
}

// 이미지 상세보기 팝업
const popupRef = ref(null)

const open = index => {
  idx.value = index
  popupRef.value.open()
}
// 열리는 이미지 인덱스 정보
const idx = ref(0)

// 피로연장 지도 이동
const moveEventMap = () => window.location.href = "https://map.naver.com/p/search/%EA%B3%A0%EC%84%B1%EB%8C%80%EC%9B%85%EC%98%88%EC%8B%9D%EC%9E%A5/place/13352789?c=15.00,0,0,0,dh&isCorrectAnswer=true"

// 계좌 복사 함수
const copyAccount = account => navigator.clipboard.writeText(account).then(()=>alert("계좌번호가 복사되었습니다."))

// 카카오 공유하기
// init 체크
if (!window.Kakao.isInitialized()) {
  window.Kakao.init('c56dc593c7d7c81333fecf5576b04fb2');
}

var sendKakao = function () {
  // 메시지 공유 함수
  window.Kakao.Link.sendScrap({
    requestUrl: 'http://pijoh3.github.io', // 페이지 url
    templateId: 98011, // 메시지템플릿 번호
    templateArgs: {
      PROFILE: 'https://cdn.jsdelivr.net/gh/pijoh3/invite-image/8.jpg', // 프로필 이미지 주소 ${PROFILE}
      THUMB: 'http://pijoh3.github.io', // 썸네일 주소 ${THUMB}
      TITLE: '병진♥유진 결혼식에 초대합니다.', // 제목 텍스트 ${TITLE}
      DESC: '2023년 11월 18일 오후 2시', // 설명 텍스트 ${DESC}
    },
  });
};

const shareLink = () => !!navigator.share({
  url:"http://pijoh3.github.io",
  text: "2023년 11월 18일 오후 2시",
  title:"병진♥유진 결혼식에 초대합니다."})
    .then(()=>alert("해당 링크를 공유하였습니다."))
    .catch((error)=>alert("해당 링크 공유에 실패하였습니다."))
</script>

<style>
@import '/src/assets/css/style.css';
</style>
