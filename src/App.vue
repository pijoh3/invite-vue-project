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
    <div class="container invite-text">
      <div class="content">
        <hr>
        <h1>" 초대합니다 "</h1>
        <div class="message">
          <span>
            <p>저희 두 사람이 사랑과 믿음으로</p>
            <p>한 가정을 이루게 되었습니다.</p>
            <p>바쁘시더라도 부디 오셔서</p>
            <p>저희의 앞날을 축복해 주시고</p>
            <p>격려해 주시면</p>
            <p>더없는 기쁨이 되겠습니다.</p>
          </span>
        </div>
        <div class="partner">
          <span>
            <p>박우범 · 이정순<em>의 차남</em> 병진</p>
            <p>김기도 · 유현숙<em>의 장녀</em> 유진</p>
          </span>
        </div>
      </div>
      <!-- 추후 유진 컨펌 필요 -->
      <div class="img">

      </div>
    </div>
    <div class="container contact-calendar">
      <div class="contact">
        <div class="groom">
          <em style="color:var(--blue)">신랑</em>에게 연락하기
            <v-btn class="phone" href="tel:010-2944-6675" icon="mdi-phone"></v-btn>
            <v-btn class="message" href="sms:010-2944-6675?body='축하드립니다.'" icon="mdi-message"></v-btn>
        </div>
        <div class="bride">
          <a href=""><i></i></a>
          <a href=""><i></i></a>
        </div>
      </div>
      <div class="calendar">
        <div class="title">
          <div class="month"></div>
          <div class="day"></div>
        </div>
        <div class="content">
          <div class="week"></div>
          <div class="week"></div>
          <div class="week"></div>
          <div class="week"></div>
          <div class="week"></div>
        </div>
      </div>
      <div class="day">
        <div class="timer">
          <div class="title"></div>
          <div class="time"></div>
        </div>
        <h1></h1>
      </div>
    </div> 
</template>

<script setup>

</script>

<style>
@import '/src/assets/css/style.css';
</style>
