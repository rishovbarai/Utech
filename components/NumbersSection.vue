<template>
    <div class="numbers-section">
      <div class="row">
        <img src="/numbers.png" alt="Numbers" />
      </div>
    </div>
</template>

<script setup>
// Add any necessary script setup here
</script>

<style scoped>
/* Add your styles for the Numbers section here */
.numbers-section {
    width: 1440px;
    height: 373px;
    gap: 80px;
    padding: 80px;
    border-bottom-width: 1px;
    background-color: #0F172A;
    color: white; /* Assuming text color should contrast with the background */
}

.row {
    width: 1280px;
    height: 213px;
    gap: 80px;
}

@media (max-width: 1024px) {
  .numbers-section {
    width: 100%;
    height: auto;
    padding: 40px 20px;
    background-color: #0F172A;
  }

  .row {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 40px;
  }

  .row img {
    width: 100%;
    max-width: 800px;
    height: auto;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  .numbers-section {
    padding: 32px 16px;
  }

  .row {
    width: 393px;
    gap: 24px;
  }

  .row img {
    max-width: 100%;
    padding: 0 8px;
  }
}
</style>