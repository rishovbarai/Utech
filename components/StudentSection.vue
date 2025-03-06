<template>
    <div class="student-section">
      <div class="col1">
        <img src="/students.png" alt="Students" />
      </div>
      <div class="col2" style="display: flex; flex-direction: column; align-items: flex-start; padding: 0px; gap: 32px; width: 600px; height: 388px; flex: none; order: 0; align-self: stretch; flex-grow: 0; z-index: 0;">
        <div class="top" style="display: flex; flex-direction: column; align-items: flex-start; padding: 0px; gap: 8px; width: 600px; height: 124px; flex: none; order: 0; align-self: stretch; flex-grow: 0;">
          <div class="headline" style="width: 600px; height: 124px; font-family: 'Roboto'; font-weight: 800; font-size: 56px; line-height: 61.6px; letter-spacing: 0%; color: #0F172A;">
            Meet in<span style="position: relative;">ternational<img src="/AeroplaneIcon.png" alt="Aeroplane Icon" style="position: absolute; top: -36px; right: 1rem; width: 63px; height: 63px;" /></span> students & teachers
          </div>
        </div>
        <div class="paragraph" style="width: 600px; height: 144px; font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 36px; letter-spacing: 0%; color: #0F172A;">Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</div>
        <div class="buttons-group" style="display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 16px; width: 333px; height: 56px; flex: none; order: 2; flex-grow: 0;">
          <button class="button" style="display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 16px 8px 16px 0px; width: 333px; height: 56px; border-radius: 8px; flex: none; order: 0; flex-grow: 0; background: transparent; border: none;">
            <div class="text-container" style="display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 0px 16px 0px 0px; width: 301px; height: 24px; flex: none; order: 1; flex-grow: 0;">
              <div class="button-text" style="width: 285px; height: 24px; font-family: 'Roboto'; font-style: normal; font-weight: 500; font-size: 20px; line-height: 24px; letter-spacing: 0.5px; color: #2563EB;">Explore teachers and students</div>
              <div class="arrow-icon" style="width: 24px; height: 24px; flex: none; order: 2; flex-grow: 0;">
                <img src="/rightArrow.png" alt="Right Arrow" style="width: 24px; height: 24px;" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .student-section[data-v-d42b16ff] {
    display: flex;
    width: auto;
    height: auto;
    gap: 16px;
    position: relative;
    padding: 3rem;
  }
  
  .col1 {
    flex: 1;
  }
  
  .col2 {
    flex: 1;
  }

  @media (max-width: 1024px) {
    .student-section {
      width: 100%;
      height: auto;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .col1 {
      width: 100%;
      height: auto;
      order: 2;
      display: flex;
      justify-content: center;
    }

    .col1 img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }

    .col2 {
      width: 393px;
      height: auto;
      order: 1;
      padding: 0;
      gap: 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .top {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .headline {
      width: 100%;
      font-size: 48px;
      line-height: 52.8px;
      position: relative;
    }

    .headline span {
      display: inline-block;
    }

    .headline img {
      position: absolute;
      top: -36px;
      right: 4rem;
      width: 63px;
      height: 63px;
    }

    .paragraph {
      width: 100%;
      font-size: 18px;
      line-height: 28.8px;
      margin-top: 16px;
    }

    .buttons-group {
      width: 333px;
      height: 56px;
      display: flex;
      justify-content: flex-start;
      margin-top: 16px;
    }

    .button {
      width: 100%;
      height: 56px;
      padding: 16px 8px;
    }

    .text-container {
      width: 301px;
      height: 24px;
      padding-right: 16px;
    }

    .button-text {
      width: 285px;
      height: 24px;
      font-size: 20px;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    .student-section {
      padding: 32px 16px;
      gap: 32px;
    }

    .col2 {
      width: 100%;
      padding: 0 8px;
      gap: 24px;
    }

    .headline {
      font-size: 36px;
      line-height: 39.6px;
    }

    .headline img {
      width: 48px;
      height: 48px;
      top: -24px;
      right: 2rem;
    }

    .paragraph {
      font-size: 16px;
      line-height: 25.6px;
      margin-top: 12px;
    }

    .buttons-group {
      width: 100%;
      margin-top: 12px;
    }

    .button {
      padding: 12px 8px;
    }

    .text-container {
      width: 100%;
    }

    .button-text {
      width: 100%;
      font-size: 18px;
    }

    .col1 img {
      max-width: 100%;
    }
  }
  </style>