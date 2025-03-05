<template>
    <section class="join-section">
      <img src="/CardsRoundRight.png" alt="Cards Round Right" class="card-image-left" />
      <div class="section-text">
        <h2 class="secondary-headline">Join a world of learning</h2>
        <p class="paragraph">Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi.</p>
        <div class="buttons-group">
          <button class="sign-up-button">
            <span class="button-text">Sign Up Now</span>
          </button>
        </div>
      </div>
      <img src="/CardRoundLeft.png" alt="Card Round Left" class="card-image" />
    </section>
  </template>
  
  <script>
  export default {
    name: 'JoinSection',
  };
  </script>
  
  <style scoped>
  .join-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 256px 80px;
    background-color: #FACC15;
    width: 100%;
    height: auto;
    gap: 80px;
    position: relative; /* Added for z-index context */
  }

  .card-image {
    max-width: 100%;
    height: auto;
  }

  .card-image-left {
    width: 467px;
    height: 636px;
  }

  .section-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%; /* Stretch horizontally */
    max-width: 1280px;
    position: relative; /* Added for z-index context */
    z-index: 10; /* Ensures this section is on top */
  }

  .secondary-headline {
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 56px;
    line-height: 1.1;
    text-align: center;
    color: #0F172A;
    z-index: 10; /* Ensures this text is on top */
    position: relative; /* Added for z-index context */
  }

  .paragraph {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.8;
    text-align: center;
    color: #0F172A;
  }

  .buttons-group {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .sign-up-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 24px;
    background: #EA580C;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 10; /* Ensures button is on top */
  }

  .button-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
  }
  </style>