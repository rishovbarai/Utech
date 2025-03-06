<!-- Start of Selection -->
<template>
    <section class="join-section">
      <img src="/CardRoundLeft.png" alt="Card Round Left" class="card-image card-image-left" />
      <div class="section-text">
        <h2 class="secondary-headline">Join a world of learning</h2>
        <p class="paragraph">Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</p>
        <p class="paragraph">Risus elit et fringilla habitant ut facilisi.</p>
        <div class="buttons-group">
          <button class="sign-up-button">
            <span class="button-text">Sign Up Now</span>
          </button>
        </div>
      </div>
      <img src="/CardsRoundRight.png" alt="Cards Round Right" class="card-image card-image-right" />
    </section>
</template>

<script>
export default {
  name: 'JoinSection',
};
</script>

<style scoped>
.join-section {
  position: relative;
  width: 1440px;
  height: 779px;
  background: #FACC15;
}

.card-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.card-image-left {
  width: 430px;
  height: 636px;
  top: 23rem;
  position: relative;
  left: 63.4rem;
}

.card-image-right {
  right: 0;
  width: 467px;
  height: 636px;
  right: 61rem;
}

.section-text {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  height: 267px;
}

.secondary-headline {
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 56px;
  line-height: 110%;
  color: #0F172A;
}

.paragraph {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
  color: #0F172A;
}

.buttons-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top:20px;
}

.sign-up-button {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  width: 239px;
  height: 64px;
  background: #EA580C;
  border: 2px solid #EA580C;
  border-radius: 8px;
  top: 15px;
  position: relative;
}

.button-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .join-section {
    width: 100%;
    height: auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    background: #FACC15;
  }

  .section-text {
    width: 100%;
    max-width: 600px;
    height: auto;
    position: relative;
    transform: none;
    order: 2;
    padding: 0 16px;
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

  .paragraph {
    width: 100%;
    font-size: 18px;
    line-height: 28.8px;
    text-align: center;
  }

  .buttons-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .sign-up-button {
    width: 239px;
    height: 64px;
    position: static;
  }

  .card-image {
    position: relative;
    transform: none;
    width: 100%;
    max-width: 300px;
    height: auto;
    top: auto;
  }

  .card-image-left {
    order: 1;
    left: auto;
    margin-bottom: -24px;
  }

  .card-image-right {
    order: 3;
    right: auto;
    margin-top: -24px;
  }
}

@media (max-width: 768px) {
  .join-section {
    width: 393px;
    padding: 32px 16px;
    gap: 32px;
  }

  .section-text {
    padding: 0 8px;
    gap: 20px;
    left: 0;
  }

  .secondary-headline {
    font-size: 36px;
    line-height: 39.6px;
  }

  .paragraph {
    font-size: 16px;
    line-height: 25.6px;
  }

  .buttons-group {
    margin-top: 16px;
  }

  .sign-up-button {
    width: 200px;
    height: 56px;
    padding: 16px 20px;
  }

  .button-text {
    font-size: 20px;
  }

  .card-image {
    max-width: 250px;
  }

  .card-image-left {
    margin-bottom: -16px;
  }

  .card-image-right {
    margin-top: -16px;
  }
}
</style>
<!-- End of Selection -->