<template>
    <section class="feature-section">
      <div class="col">
        <div class="section-text">
          <div class="top">
            <div class="secondary-headline">
              <span>All the cool</span>
              <div class="highlight-container">
                <span class="highlight">features</span>
                <img src="/vector-14.png" alt="Vector 14" class="vector-14" />
              </div>
            </div>
          </div>
          <div class="paragraph">Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</div>
          <div class="buttons-group">
            <div class="button">
              <div class="text-container" style="width: 193px; height: 24px; padding-right: 16px;">
                <span class="button-text">View all the features</span>
                <div class="icon-arrow-right">
                  <img src="/rightArrow.png" alt="Right Arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col right" style="position: relative; display: flex; align-items: flex-end; gap: 10px;">
        <img src="/featureBod.png" alt="Feature Body" class="feature-body" />
        <img src="/StarIcon.png" alt="Star Icon" class="star-icon" style="position: absolute; bottom: 0; width: 200px; height: 500px; left: 71%; transform: translateX(-50%); z-index: 2;" />
        <!-- <img src="/StarIcon.png" alt="Star Icon" class="star-icon" style="position: absolute; bottom: 0; width: 100px; height: auto; left: 50%; transform: translateX(-50%);" /> -->
        <div class="content-box">
          <div class="content-inner">
            <div class="badge" style="background-color: #F3E8FF;">
              <div class="badge-text" style="color: #6B21A8;">Featured</div>
            </div>
            <div class="title">Interactive learning</div>
            <div class="paragraph-text">Egestas elit dui scelerisque ut eu purus aliquam vitae.</div>
          </div>
          <div class="buttons-group-container">
            <button class="card-button">
              <div class="text-container-button">
                <div class="button-text-small">Learn more</div>
              </div>
            </button>
          </div>
        </div>

        <img src="/image1.jpeg" alt="Image 1" class="image1" style="position: absolute; bottom: 0; width: 304px; height: 179px; border: 5px solid #FFFFFF; border-radius: 10px; box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A; right: 13rem;" />
        <img src="/image2.jpeg" alt="Image 2" class="image2" style="position: absolute; bottom: 0; width: 232px; height: 179px; border: 5px solid #FFFFFF; border-radius: 10px; box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A; right: -3rem;" />
        <img src="/image3.jpeg" alt="Image 3" class="image3" style="position: absolute; bottom: 0; width: 186px; height: 158px; border: 5px solid #FFFFFF; border-radius: 10px; box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A; right: 4rem; bottom: 13rem;" /> 
        <img src="/userThumb.jpeg" alt="User Thumbnail" class="user-thumbnail" style="position: absolute; bottom: 10px; width: 80px; height: 80px; border: 5px solid #FACC15; border-radius: 100px; box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A; right: 2rem; bottom: 15rem;" />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection',
  };
  </script>
  
  <style scoped>
  .feature-section {
    width: 1440px;
    height: 639px;
    gap: 80px;
    padding: 80px;
    display: flex;
    flex-direction: row; /* Changed to row for side-by-side layout */
    align-items: flex-start;
  }
  
  .col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 32px;
    width: 600px;
    height: 326px;
    flex: none;
    order: 0;
    flex-grow: 1;
    position: relative;
  }

  .right {
    width: 600px; /* Set width for the new section */
    height: 479px; /* Set height for the new section */
    display: flex;
    align-items: center;
    justify-content: center; /* Center the image */
  }

  .feature-body {
    width: 534px; /* Set width for the feature body image */
    height: 522px; /* Set height for the feature body image */
  }
  
  .section-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 32px;
    width: 600px;
    height: 326px;
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
    padding: 0;
    gap: 8px;
    width: 600px;
    height: 62px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .secondary-headline {
    width: 600px;
    height: 62px;
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 56px;
    line-height: 61.6px;
    color: #0F172A;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
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
    width: 600px;
    height: 144px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0%;
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
    padding: 0;
    gap: 32px;
    width: 241px;
    height: 56px;
    flex: none;
    order: 2;
    flex-grow: 0;
  }
  
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 241px;
    height: 56px;
    padding-top: 16px;
    padding-right: 8px;
    padding-bottom: 16px;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .text-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 16px 0 0;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  
  .button-text {
    width: 193px;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #2563EB;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  
  .icon-arrow-right {
    width: 24px; /* Updated width */
    height: 24px; /* Updated height */
    flex: none;
    order: 2;
    flex-grow: 0;
  }
  
  .button-2 {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    display: none;
    width: 168px;
    height: 48px;
    border: 2px solid #2563EB;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
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

  /* Update content box styles */
  .content-box {
    position: absolute;
    width: 200px;
    height: 232px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A;
    z-index: 4;
    display: flex;
    flex-direction: column;
    top: 3rem;
    right: 20rem;
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
  }

  .title {
    width: 168px;
    height: 44px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #0F172A;
    margin-bottom: 8px;
  }

  .paragraph-text {
    width: 168px;
    height: 60px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 19.6px;
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
    width: 168px;
    height: 40px;
    border: 2px solid #2563EB;
    border-radius: 8px;
    background-color: white;
  }

  .text-container-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    width: 100px;
    height: 24px;
  }

  .button-text-small {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #2563EB;
  }

  /* Update existing image styles to work with content boxes */
  .image1, .image2, .image3, .user-thumbnail {
    z-index: 3;
  }

  .feature-body {
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .feature-section {
      width: 100%;
      height: auto;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .col {
      width: 100%;
      height: auto;
      order: 1;
      padding: 0 16px;
    }

    .section-text {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .secondary-headline {
      width: 100%;
      font-size: 48px;
      line-height: 52.8px;
      text-align: center;
    }

    .highlight-container {
      display: inline-block;
      position: relative;
    }

    .vector-14 {
      position: absolute;
      bottom: -2px;
      width: 100%;
      height: 12px;
    }

    .paragraph {
      width: 100%;
      text-align: center;
      font-size: 18px;
      line-height: 28.8px;
    }

    .buttons-group {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .col.right {
      width: 100%;
      height: auto;
      order: 2;
      position: relative;
      margin-top: 32px;
    }

    .feature-body {
      width: 100%;
      height: auto;
      max-width: 500px;
      margin: 0 auto;
    }

    .star-icon {
      display: none;
    }

    .content-box {
      width: 90%;
      max-width: 350px;
      position: relative;
      left: auto;
      right: auto;
      margin: 20px auto;
    }

    .image1, .image2, .image3 {
      position: relative;
      width: 80%;
      max-width: 250px;
      height: auto;
      right: auto;
      bottom: auto;
      margin: 10px auto;
    }

    .user-thumbnail {
      position: relative;
      width: 60px;
      height: 60px;
      right: auto;
      bottom: auto;
      margin: 10px auto;
    }
  }

  @media (max-width: 768px) {
    .feature-section {
      width: 393px;
      padding: 32px 16px;
      gap: 32px;
    }

    .col {
      padding: 0 8px;
    }

    .secondary-headline {
      font-size: 36px;
      line-height: 39.6px;
    }

    .paragraph {
      font-size: 16px;
      line-height: 25.6px;
    }

    .content-box {
      width: 95%;
      margin: 16px auto;
    }

    .image1, .image2, .image3 {
      width: 90%;
      margin: 8px auto;
    }

    .user-thumbnail {
      width: 50px;
      height: 50px;
      margin: 8px auto;
    }
  }
  </style>