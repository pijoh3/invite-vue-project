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
     <ImagePopup ref="popupRef" v-model="idx">
      <img src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/1.jpg" style="width:100%;"/>
     </ImagePopup>
</template>

<script setup>
import dayjs from "dayjs"
import 'dayjs/locale/ko'
import "sakura-js/dist/sakura.min.css"
import {Sakura} from "@/script/sakura.js" 
import {ref, nextTick} from "vue"
import ImagePopup from "@/components/ImagePopup.vue"

// sakura.js(벚꽃 효과)
new Sakura('body')
// dayjs locale 지정
dayjs.locale('ko')

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
</script>

<style>
@import '/src/assets/css/style.css';
</style>
