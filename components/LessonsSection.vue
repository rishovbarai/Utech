<template>
    <div class="lessons-section">
      <div class="col">
        <div class="section-text">
          <div class="top">
            <div class="secondary-headline">
              <span>An</span>
              <div class="highlight-container">
                <span class="highlight">all-in-one</span>
                <img src="/vector-14.png" alt="Vector 14" class="vector-14" />
              </div>
              <span>app that makes it easier</span>
            </div>
          </div>
          <div class="paragraph" v-if="false"></div>
          <div class="buttons-group" v-if="false"></div>
        </div>
        <div class="list">
          <div class="list-item-with" style="width: 544px; height: 36px; gap: 8px;">
            <div class="icon">
              <img src="/tick.png" alt="Check Icon" />
            </div>
            <div class="text" style="width: 457px; height: 36px; font-family: 'Roboto'; font-weight: 400; font-size: 20px; line-height: 36px; letter-spacing: 0%;">
              Est et in pharetra magna adipiscing ornare aliquam.
            </div>
          </div>
          <div class="list-item-with" style="width: 544px; height: 36px; gap: 8px;">
            <div class="icon">
              <img src="/tick.png" alt="Check Icon" />
            </div>
            <div class="text" style="width: 457px; height: 36px; font-family: 'Roboto'; font-weight: 400; font-size: 20px; line-height: 36px; letter-spacing: 0%;">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </div>
          </div>
          <div class="list-item-with" style="width: 544px; height: 36px; gap: 8px;">
            <div class="icon">
              <img src="/tick.png" alt="Check Icon" />
            </div>
            <div class="text" style="width: 457px; height: 36px; font-family: 'Roboto'; font-weight: 400; font-size: 20px; line-height: 36px; letter-spacing: 0%;">
              Ullamcorper ornare in et egestas dolor orci.
            </div>
          </div>
        </div>
        <div class="button">
          <div class="text-container" style="width: 140px; height: 24px; padding-right: 16px;">
            <div class="button-text">Find more about the app</div>
            <div class="arrow-icon">
              <img src="/rightArrow.png" alt="Right Arrow" style="width: 24px; height: 24px;" />
            </div>
          </div>
        </div>
      </div>
      <div class="group-51">
        <img src="/BlobLesson.png" alt="Blob Lesson" class="blob-lesson" />
        <img src="/DesktopLesson.png" alt="Desktop Lesson" class="desktop-lesson" />
        <div class="star-icon">
          <img src="/StarIcon.png" alt="Star Icon" />
        </div>
        <div class="content-box content-box-1">
          <div class="content-inner">
            <div class="badge">
              <div class="badge-text">Featured</div>
            </div>
            <div class="title">The map of mathematics</div>
            <div class="paragraph-text">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</div>
          </div>
          <div class="buttons-group-container">
            <button class="card-button" style="background-color: white;">
              <div class="text-container-button">
                <div class="button-text-small">Take a lesson</div>
              </div>
            </button>
          </div>
        </div>
        <div class="content-box content-box-2">
          <div class="content-inner">
            <div class="badge" style="background-color: #DBEAFE;">
              <div class="badge-text" style="color: #1E40AF;">Popular</div>
            </div>
            <div class="title">Design for how people think</div>
            <div class="paragraph-text">Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</div>
          </div>
          <div class="buttons-group-container">
            <button class="card-button" style="background-color: white;">
              <div class="text-container-button">
                <div class="button-text-small">Take a lesson</div>
              </div>
            </button>
          </div>
        </div>
        <div class="content-box content-box-3">
          <div class="content-inner">
            <div class="badge" style="background-color: #DCFCE7;">
              <div class="badge-text" style="color: #166534;">New</div>
            </div>
            <div class="title">International & commercial law</div>
            <div class="paragraph-text">Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.</div>
          </div>
          <div class="buttons-group-container">
            <button class="card-button" style="background-color: white;">
              <div class="text-container-button">
                <div class="button-text-small">Take a lesson</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any necessary script here
  </script>
  
  <style scoped>
  .lessons-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1440px;
    height: auto;
    gap: 80px;
    padding: 80px;
    background-color: #FFFFFF; /* Changed background color to white */
    position: relative;
  }
  
  .col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    isolation: isolate;
    width: 544px;
    height: 352px;
    flex: none;
    order: 1;
    flex-grow: 1;
    z-index: 1;
  }
  
  .section-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 544px;
    height: 124px;
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
    width: 544px;
    height: 124px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .secondary-headline {
    width: 544px;
    height: 124px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 56px;
    line-height: 61.6px;
    color: #0F172A;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .highlight-container {
    position: relative;
    display: inline-block;
  }
  
  .highlight {
    position: relative;
    z-index: 1;
  }
  
  .vector-14 {
    position: absolute;
    width: 100%;
    height: 12px;
    left: 0;
    bottom: 4px;
    z-index: 0;
    border: none;
  }
  
  .paragraph {
    display: none;
  }
  
  .buttons-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;
    display: none;
  }
  
  .list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 544px;
    height: 108px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    z-index: 2;
  }
  
  .list-item-with {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 544px;
    height: 36px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .text {
    width: 457px;
    height: 36px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    color: #0F172A;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 8px 16px 0px;
    width: 277px;
    height: 56px;
    border-radius: 8px;
    flex: none;
    order: 3;
    flex-grow: 0;
    z-index: 3;
  }
  
  .text-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px 0px 0px;
    width: 140px; /* Updated width */
    height: 24px; /* Updated height */
    padding-right: 16px; /* Updated padding */
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  
  .button-text {
    width: 229px; /* Updated width */
    height: 24px; /* Updated height */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500; /* Updated font weight */
    font-size: 20px; /* Updated font size */
    line-height: 24px; /* Updated line height */
    letter-spacing: 0.5px; /* Updated letter spacing */
    color: #2563EB; /* Updated text color */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .arrow-icon {
    width: 24px;
    height: 24px;
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  .group-51 {
    position: relative;
    width: 506.17837841066046px;
    height: 448.0062214113178px;
    overflow: visible; /* Allow overflow to show the blob */
    order: 2; /* Ensure it is on the right */
  }

  .blob-lesson {
    position: absolute;
    height: 90%;
    z-index: 1;
    left: -7rem;
  }

  .desktop-lesson {
    position: absolute;
    height: 411px;
    top: -2rem;
    left: -1rem;
    z-index: 2;
    width: 650px;
  }

  .star-icon img{
    position: relative;
    height: 500px;
    top: -3rem;
    left: -9.5rem;
    z-index: 3;
  }
  
  .content-box {
    position: absolute;
    width: 200.3333282470703px;
    height: 232px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A;
    z-index: 4;
    display: flex;
    flex-direction: column;
  }
  
  .content-box-1 {
    bottom: 0;
    left: -4rem;
  }
  
  .content-box-2 {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .content-box-3 {
    bottom: 0;
    right: -4rem;
  }
  
  .content-inner {
    width: 100%;
    padding: 24px 16px 0 16px;
    display: flex;
    flex-direction: column;
  }
  
  .badge {
    width: 63px;
    height: 20px;
    gap: 10px;
    padding: 0 4px;
    display: flex;
    align-items: center;
    background-color: #F3E8FF;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  
  .badge-text {
    width: 55px;
    height: 20px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: 0%;
    color: #6B21A8;
  }
  
  .title {
    width: 168.3333282470703px;
    height: 44px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    letter-spacing: 0%;
    color: #0F172A;
    margin-bottom: 8px;
  }
  
  .paragraph-text {
    width: 168.3333282470703px;
    height: 60px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
    letter-spacing: 0%;
    color: #0F172A;
    margin-bottom: 8px;
  }
  
  .buttons-group-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;
    width: 100%;
    height: 72px;
    margin-top: -15px;
  }
  
  .card-button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    width: 168.33px;
    height: 40px;
    border: 2px solid #2563EB;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 1;
  }
  
  .icon-plus {
    width: 24px;
    height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .text-container-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: 100px;
    height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  
  .button-text-small {
    width: 84px;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #2563EB;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .icon-arrow-right {
    width: 24px;
    height: 24px;
    flex: none;
    order: 2;
    flex-grow: 0;
  }
  
  .card-button-secondary {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 166px;
    height: 48px;
    border: 2px solid #2563EB;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 1;
  }
  
  /* Add responsive styles for the vector */
  @media (max-width: 768px) {
    .vector-14 {
      height: 10px;
      bottom: 2px;
    }
  }
  
  @media (max-width: 480px) {
    .vector-14 {
      height: 8px;
      bottom: 0;
    }
  }
  </style>