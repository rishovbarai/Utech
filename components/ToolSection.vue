<template>
    <div class="tool-section">
      <img src="/left-blob-image.png" alt="Left Tool Image" class="left-tool-image" />
      <img src="/right-blob-image.png" alt="Right Tool Image" class="right-tool-image" />
      <div class="section-text">
        <div class="top">
          <div class="secondary-headline">All the tools that you need</div>
        </div>
        <div class="paragraph">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.<br>
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </div>
      </div>
      <div class="content">
        <img src="/Desktop.png" alt="Desktop Image" class="desktop-image" />
        <div class="lines">
          <svg width="800" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-17">
            <path d="M400 2C405 74 2 29 2 80" stroke="#FB923C" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail1.png" alt="Thumbnail 1" class="thumbnail-image" style="position: absolute; left: 0rem; top: 7rem;" />
          
          <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-21">
            <path d="M150 2C150 63 298 29 298 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail2.png" alt="Thumbnail 2" class="thumbnail-image" style="position: absolute; left: 10rem; top: 7rem;" />
          
          <svg width="4" height="75" viewBox="0 0 4 75" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-26">
            <path d="M2 75L2 0" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail3.png" alt="Thumbnail 3" class="thumbnail-image" style="position: absolute; left: 20rem; top: 7rem;" />
          
          <svg width="500" height="80" viewBox="0 0 500 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-19">
            <path d="M250 2C250 66 498 29 498 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail4.png" alt="Thumbnail 4" class="thumbnail-image" style="position: absolute; left: 30rem; top: 7rem;" />
          
          <svg width="600" height="80" viewBox="0 0 600 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-23">
            <path d="M300 2C300 74 598 29 598 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail5.png" alt="Thumbnail 5" class="thumbnail-image" style="position: absolute; left: 40rem; top: 7rem;" />
          
          <svg width="800" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-15">
            <path d="M400 2C400 82 798 29 798 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail6.png" alt="Thumbnail 6" class="thumbnail-image" style="position: absolute; left: 50rem; top: 7rem;" />
          
          <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-25">
            <path d="M150 2C150 63 298 29 298 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail7.png" alt="Thumbnail 7" class="thumbnail-image" style="position: absolute; left: 60rem; top: 7rem;" />
          
          <svg width="500" height="80" viewBox="0 0 500 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-24">
            <path d="M250 2C250 66 498 29 498 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail8.png" alt="Thumbnail 8" class="thumbnail-image" style="position: absolute; left: 70rem; top: 7rem;" />
          
          <svg width="800" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="vector-22">
            <path d="M400 2C400 82 798 29 798 80" stroke="#CBD5E1" stroke-dasharray="6 6"/>
          </svg>
          <img src="/thumbnail9.png" alt="Thumbnail 9" class="thumbnail-image" style="position: absolute; left: 80rem; top: 7rem;" />
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Add any necessary script here
  </script>
  
  <style scoped>
  .tool-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
    height: 1195px;
    gap: 80px;
    padding: 80px;
    background-color: #F1F5F9;
    position: relative;
  }
  
  .section-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 32px;
    width: 1280px;
    height: 171px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    z-index: 2;
  }
  
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 8px;
    width: 1280px;
    height: 62px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .secondary-headline {
    width: 1280px;
    height: 62px;
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 56px;
    line-height: 61.6px;
    text-align: center;
    color: #0F172A;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .paragraph {
    width: 1280px;
    height: 77px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #0F172A;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
  }
  
  .left-tool-image {
    width: 561.28px;
    height: 652.22px;
    top: 22rem;
    left: 1rem;
    position: absolute;
    z-index: 1;
  }
  
  .right-tool-image {
    width: 523px;
    height: 868.65px;
    position: absolute;
    right: 0;
    z-index: 1;
  }
  
  .desktop-image {
    position: relative;
    width: 1100px;
    height: 640px;
    border-radius: 20px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A;
    margin-top: 32px;
    z-index: 2;
  }
  
  .lines {
    position: relative;
    width: 1100px;
    height: 120px;
    margin-top: -120px;
    z-index: 5;
    top: 7.5rem;
  }
  
  .vector {
    position: absolute;
    border: 1px dashed #CBD5E1;
  }
  
  .vector-15 {
    position: absolute;
    width: 1100px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .vector-17 {
    position: absolute;
    width: 1100px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .vector-19 {
    position: absolute;
    width: 700px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .vector-21 {
    position: absolute;
    width: 400px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .vector-22 {
    position: absolute;
    width: 1100px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%) matrix(-1, 0, 0, 1, 0, 0);
  }
  
  .vector-23 {
    position: absolute;
    width: 900px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%) matrix(-1, 0, 0, 1, 0, 0);
  }
  
  .vector-24 {
    position: absolute;
    width: 700px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%) matrix(-1, 0, 0, 1, 0, 0);
  }

  .vector-25 {
    position: absolute;
    width: 400px;
    height: 120px;
    left: 50%;
    top: 0;
    transform: translateX(-50%) matrix(-1, 0, 0, 1, 0, 0);
  }

  .vector-26 {
    position: absolute;
    width: 4px;
    height: 115px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
</style>