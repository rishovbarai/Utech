<template>
  <section class="main-section">
    <div class="col">
      <div class="section-text">
        <div class="top">
          <div class="main-headline">
            <div class="headline-container">
              <span class="teach">Teach students</span>
              <img src="/vector-14.png" alt="Vector underline" class="vector-14">
            </div>
            <div class="worldwide">worldwide</div>
          </div>
        </div>
        <div class="paragraph">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
        </div>
        <div class="buttons-group">
          <div class="button">
            <div class="text-container">
              <div class="button-text">Sign Up Now</div>
            </div>
          </div>
          <div class="button-2">
            <img src="/play.png" alt="Play Circle" class="play-circle">
            <div class="text-container">
              <div class="button-text">View Demo</div>
            </div>
          </div>
        </div>
      </div>
      <div class="press">
        <div class="trusted-by">Trusted by leading companies</div>
        <div class="black-and-white-collections" style="display: contents;">
          <img src="/black-and-white-collection-3.png" alt="Black and White Collection 3" class="black-and-white-collection">
          <img src="/black-and-white-collection-2.png" alt="Black and White Collection 2" class="black-and-white-collection">
          <img src="/black-and-white-collection-11.png" alt="Black and White Collection 11" class="black-and-white-collection">
          <img src="/black-and-white-collection-20.png" alt="Black and White Collection 20" class="black-and-white-collection">
          <img src="/black-and-white-collection-1.png" alt="Black and White Collection 1" class="black-and-white-collection">
        </div>
      </div>
    </div>
    <div class="group-50">
      <div class="student">
        <img src="/Student.png" alt="Student" class="student-img">
      </div>

      <div class="chat">
        <div class="row">
          <div class="chat-bubble">
            <div class="text">Nunc, at libero neque</div>
          </div>
        </div>
        <div class="row">
          <div class="chat-bubble">
            <div class="text">Viverra sed</div>
          </div>
        </div>
        <div class="chat-bubble dark">
          <div class="text">Turpis platea nunc mattis</div>
        </div>
        <div class="chat-bubble dark">
          <div class="text">Vitae viverra ut non</div>
        </div>
      </div>

      <div class="teacher">
        <img src="/Teacher.png" alt="Teacher" class="teacher-img">
      </div>

      <div class="icons">
        <img src="/Icons.png" alt="Icons" class="icons-img">
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.main-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 393px;
  height: 847px;
  padding: 48px 16px;
  gap: 48px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 361px;
  height: 374px;
  flex: none;
  order: 0;
  flex-grow: 1;
}

.headline-container {
  display: inline-block;
  position: relative;
}

.vector-14 {
  position: absolute;
  width: 190.5px;
  height: 12.4px;
  bottom: 7px;
  left: 0;
  z-index: -1;
}

.teach {
  display: inline-block;
  vertical-align: middle;
}

.worldwide {
  display: inline-block;
  vertical-align: middle;
}

.section-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 575.4px;
  height: 400px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 575.4px;
  height: 158px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.main-headline {
  width: 575.4px;
  height: 158px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 110%;
  color: #0F172A;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.paragraph {
  width: 575.4px;
  height: 114px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  color: #0F172A;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.buttons-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 449px;
  height: 64px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

.button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  width: 239px;
  height: 64px;
  background: #EA580C;
  border: 2px solid #EA580C;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.button-2 {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  width: 178px;
  height: 56px;
  border-radius: 8px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

.play-circle {
  width: 24px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.text-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  width: 191px;
  height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.button-text {
  width: 143px;
  height: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.button-2 .text-container {
  padding: 0px 16px;
  width: 138px;
  height: 24px;
}

.button-2 .button-text {
  width: 106px;
  font-weight: 500;
  font-size: 20px;
  color: #2563EB;
}

.press {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 48px;
  width: 575.4px;
  height: 44px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  z-index: 2;
}

.trusted-by {
  width: 135px;
  height: 44px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #475569;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.black-and-white-collection {
  width: 32px;
  height: 32px;
  flex: none;
  flex-grow: 0;
}

.group-50 {
  width: 624.6px;
  height: 544.53px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.teacher {
  position: absolute;
  width: 306.6px;
  height: 345.53px;
  left: 1042px;
  top: 279px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.teacher .vector {
  position: absolute;
  left: 51.6%;
  right: 24.82%;
  top: 40.45%;
  bottom: 22.11%;
  background: #FACC15;
  transform: matrix(0, 1, 1, 0, 0, 0);
}

.teacher .mask-group {
  position: absolute;
  width: 271.25px;
  height: 340px;
  left: 1006.65px;
  top: 279px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.teacher .mask-group .vector {
  position: absolute;
  left: 51.07%;
  right: 25.32%;
  top: 39.6%;
  bottom: 21.9%;
  background: #DDE1E6;
  transform: matrix(0, 1, 1, 0, 0, 0);
}

.teacher .pexels-photo {
  position: absolute;
  width: 280.61px;
  height: 339.53px;
  left: 1006.65px;
  top: 279.47px;
  background: url(.png);
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.icons {
  position: absolute;
  width: 167px;
  height: 248px;
  left: 875px;
  top: 314px;
}

.icons .icon-star-f {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 986px;
  top: 550px;
}

.icons .icon-star-f .vector {
  position: absolute;
  left: 8.37%;
  right: 8.38%;
  top: 10.93%;
  bottom: 9.9%;
  background: #FB923C;
}

.icons .icon-star-f-2 {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 899px;
  top: 318px;
}

.icons .icon-star-f-2 .vector {
  position: absolute;
  left: 8.37%;
  right: 8.38%;
  top: 10.93%;
  bottom: 9.9%;
  background: #FB923C;
}

.icons .icon-circle-f {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 1004px;
  top: 481.69px;
}

.icons .icon-circle-f .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-2 {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 928px;
  top: 336px;
}

.icons .icon-circle-f-2 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-3 {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 1015px;
  top: 518px;
}

.icons .icon-circle-f-3 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-4 {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 892px;
  top: 352px;
}

.icons .icon-circle-f-4 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-5 {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 935px;
  top: 376px;
}

.icons .icon-circle-f-5 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-6 {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 1014px;
  top: 377px;
}

.icons .icon-circle-f-6 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-7 {
  position: absolute;
  width: 4px;
  height: 4px;
  left: 1000px;
  top: 325px;
}

.icons .icon-circle-f-7 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.34%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-circle-f-8 {
  position: absolute;
  width: 4px;
  height: 4px;
  left: 881px;
  top: 314px;
}

.icons .icon-circle-f-8 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.34%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FB923C;
}

.icons .icon-plus {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 979px;
  top: 456.69px;
}

.icons .icon-plus .vector {
  position: absolute;
  left: 22.5%;
  right: 19.17%;
  top: 22.5%;
  bottom: 19.17%;
  background: #FB923C;
}

.icons .icon-plus-2 {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 984px;
  top: 370px;
}

.icons .icon-plus-2 .vector {
  position: absolute;
  left: 22.5%;
  right: 19.17%;
  top: 22.5%;
  bottom: 19.17%;
  background: #FB923C;
}

.icons .icon-close {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 992px;
  top: 398px;
}

.icons .icon-close .vector {
  position: absolute;
  left: 27.69%;
  right: 28.52%;
  top: 27.69%;
  bottom: 28.52%;
  background: #FB923C;
}

.icons .icon-plus-3 {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 912px;
  top: 405px;
}

.icons .icon-plus-3 .vector {
  position: absolute;
  left: 22.5%;
  right: 19.17%;
  top: 22.5%;
  bottom: 19.17%;
  background: #FB923C;
}

.icons .icon-plus-4 {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1026px;
  top: 482px;
}

.icons .icon-plus-4 .vector {
  position: absolute;
  left: 22.5%;
  right: 19.17%;
  top: 22.5%;
  bottom: 19.17%;
  background: #FB923C;
}

.icons .icon-close-2 {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 875px;
  top: 386px;
}

.icons .icon-close-2 .vector {
  position: absolute;
  left: 27.69%;
  right: 28.52%;
  top: 27.69%;
  bottom: 28.52%;
  background: #FB923C;
}

.icons-2 {
  position: absolute;
  width: 159px;
  height: 128px;
  left: 1074px;
  top: 465px;
}

.icons-2 .icon-code-sample {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 1165px;
  top: 545px;
}

.icons-2 .icon-code-sample .vector {
  position: absolute;
  left: 12.49%;
  right: 12.46%;
  top: 20.78%;
  bottom: 23.64%;
  background: #CBD5E1;
}

.icons-2 .icon-codepen {
  position: absolute;
  width: 80px;
  height: 80px;
  left: 1074px;
  top: 487px;
}

.icons-2 .icon-codepen .vector {
  position: absolute;
  left: 9.41%;
  right: 10.29%;
  top: 8.33%;
  bottom: 9.2%;
  background: #F1F5F9;
}

.icons-2 .icon-cloud-thunder {
  position: absolute;
  width: 64px;
  height: 64px;
  left: 1169px;
  top: 465px;
}

.icons-2 .icon-cloud-thunder .vector {
  position: absolute;
  left: 8.35%;
  right: 8.33%;
  top: 6.26%;
  bottom: 6.25%;
  background: #E2E8F0;
}

.student {
  position: absolute;
  width: 270.34px;
  height: 347.68px;
  left: 1089.66px;
  top: 80px;
}

.student .vector {
  position: absolute;
  left: 94.13%;
  right: -15.58%;
  top: 16.87%;
  bottom: 50.24%;
  background: #FB923C;
  transform: rotate(90deg);
}

.student .mask-group {
  position: absolute;
  width: 270.34px;
  height: 340px;
  left: 1089.66px;
  top: 80px;
}

.student .mask-group .vector {
  position: absolute;
  left: 94.44%;
  right: -18.06%;
  top: 11.36%;
  bottom: 50.27%;
  background: #DDE1E6;
  transform: rotate(90deg);
}

.student .pexels-photo {
  position: absolute;
  width: 281.69px;
  height: 336.33px;
  left: 1091.96px;
  top: 83.25px;
  background: url(.png);
}

.student .icons {
  position: absolute;
  width: 236px;
  height: 289px;
  left: 1106px;
  top: 102px;
}

.student .icons .icon-star-f {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 1302px;
  top: 145px;
}

.student .icons .icon-star-f .vector {
  position: absolute;
  left: 8.37%;
  right: 8.38%;
  top: 10.93%;
  bottom: 9.9%;
  background: #FACC15;
}

.student .icons .icon-star-f-2 {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 1153px;
  top: 186px;
}

.student .icons .icon-star-f-2 .vector {
  position: absolute;
  left: 8.37%;
  right: 8.38%;
  top: 10.93%;
  bottom: 9.9%;
  background: #FACC15;
}

.student .icons .icon-circle-f {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 1292px;
  top: 174px;
}

.student .icons .icon-circle-f .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-2 {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 1164px;
  top: 148px;
}

.student .icons .icon-circle-f-2 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-3 {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 1153px;
  top: 364px;
}

.student .icons .icon-circle-f-3 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-4 {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1126px;
  top: 210px;
}

.student .icons .icon-circle-f-4 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.6%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-5 {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 1181px;
  top: 194px;
}

.student .icons .icon-circle-f-5 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-6 {
  position: absolute;
  width: 6px;
  height: 6px;
  left: 1319px;
  top: 117px;
}

.student .icons .icon-circle-f-6 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-7 {
  position: absolute;
  width: 4px;
  height: 4px;
  left: 1287px;
  top: 102px;
}

.student .icons .icon-circle-f-7 .vector {
  position: absolute;
  left: 8.33%;
  right: 8.34%;
  top: 8.61%;
  bottom: 8.06%;
  background: #FACC15;
}

.student .icons .icon-circle-f-8 {
  position: absolute;
  width: 4px;
  height: 4px;
  left: 1129px;
  top: 387px;
}

.student .icons .icon-circle-f-8 .vector {
  position: absolute;
  left: 8.33%;
  width: 16px;
  height: 16px;
  left: 1276px;
  top: 152px;
  background: #FACC15;
}

.icon-plus-student {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 1330px;
  top: 156px;
  background: #FACC15;
}

.icon-close-student {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1314px;
  top: 179px;
  background: #FACC15;
}

.icon-close-student {
  position: absolute;
  width: 10px;
  height: 10px;
  left: 1132px;
  top: 352px;
  background: #FACC15;
}

.icon-plus-student {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 1153px;
  top: 237px;
  background: #FACC15;
}

.icon-plus-student {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1106px;
  top: 329px;
  background: #FACC15;
}

.icon-close-student {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 1137px;
  top: 159px;
  background: #FACC15;
}

.chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 235px;
  height: 228px;
  left: 875px;
  top: 80px;
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;
  width: 235px;
  height: 45px;
  background: #FFFFFF;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.chat-bubble {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  width: 201px;
  height: 45px;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.07);
  border-radius: 15px 15px 3px 15px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.chat-bubble.dark {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  width: 235px;
  height: 45px;
  background: #334155;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.07);
  border-radius: 15px 15px 15px 3px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

@media (max-width: 768px) {
  .main-section {
    flex-direction: column;
  }
  .group-50 {
        width: 361px;
        height: 329px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .student, .teacher, .icons {
        position: static;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .student-img, .teacher-img, .icons-img {
        width: 80%;
        height: auto;
      }

      .chat {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .row {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .chat-bubble {
        width: 90%;
        max-width: 235px;
        padding: 8px 16px;
        border-radius: 15px 15px 3px 15px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A;
      }

      .chat-bubble.dark {
        background: #334155;
        border-radius: 15px 15px 15px 3px;
      }

      .text {
        font-family: Roboto;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0F172A;
      }

      .chat-bubble.dark .text {
        color: #FFFFFF;
      }

  .col {
    width: 393px;
    height: 70px;
    padding-top: 48px;
    padding-right: 16px;
    padding-bottom: 48px;
    padding-left: 16px;
    gap: 48px;
  }

  .section-text {
    width: 100%;
    height: auto;
    padding: 0 16px;
  }

  .top {
    width: 100%;
    height: auto;
  }

  .main-headline {
    width: 100%;
    font-size: 48px;
    text-align: center;
  }

  .paragraph {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }

  .buttons-group {
    width: 100%;
    flex-direction: row;
    gap: 16px;
  }

  .button, .button-2 {
    width: 50%;
    height: auto;
    padding: 16px;
  }

  .button-text {
    font-size: 20px;
  }

  .button-2 .button-text {
    font-size: 18px;
  }

  .press {
    width: 100%;
    gap: 16px;
  }

  .trusted-by {
    text-align: center;
  }

  .black-and-white-collection {
    width: 24px;
    height: 24px;
  }

  .group-50 {
    width: 100%;
    height: auto;
    order: 1;
  }

  .student, .teacher, .icons {
    position: relative;
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
  }

  .chat {
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
  }

  .row, .chat-bubble {
    width: 100%;
    height: auto;
  }

  .chat-bubble .text {
    font-size: 16px;
  }
}
</style>