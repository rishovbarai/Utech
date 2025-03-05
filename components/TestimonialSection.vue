<template>
    <div class="testimonial-section">
      <div class="row">
        <div class="section-text" style="display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 32px; width: 1112px; height: 62px; flex: none; order: 0; flex-grow: 1;">
          <div class="top" style="display: flex; flex-direction: row; align-items: center; padding: 0px; gap: 8px; width: 100%; height: 62px; flex: none; order: 0; align-self: stretch; flex-grow: 0;">
            <div class="secondary-headline" style="flex: 1; height: 62px; font-family: 'Roboto'; font-style: normal; font-weight: 800; font-size: 56px; line-height: 61.6px; letter-spacing: 0%; color: #0F172A;">What everyone says</div>
            <div class="arrows" style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
              <div class="button" @click="prevSlide" style="width: 48px; height: 48px; padding: 12px; border: 2px solid #EA580C; border-radius: 100px; display: flex; justify-content: center; align-items: center;">
                <img src="/buttonlefttesti.png" alt="Left Arrow" style="width: 24px; height: 24px; display: block;" />
              </div>
              <div class="button" @click="nextSlide" style="width: 48px; height: 48px; padding: 12px; border: 2px solid #EA580C; border-radius: 100px; display: flex; justify-content: center; align-items: center;">
                <img src="/buttonrighttesti.png" alt="Right Arrow" style="width: 24px; height: 24px; display: block;" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider" style="display: flex; overflow: hidden; width: 1280px; height: 312px; gap: 24px; position: relative;">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="content-box" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="paragraph" style="width: 348px; height: 145px; font-family: 'Roboto'; font-weight: 400; font-size: 18px; line-height: 28.8px; letter-spacing: 0%; color: #000000;">{{ testimonial.text }}</div>
          <div class="user-card" style="display: flex; flex-direction: row; align-items: center; padding-top: 16px; gap: 16px; width: 348px; height: 80px; flex: none; order: 4; align-self: stretch; flex-grow: 0;">
            <div class="user-thumbnail" :style="{ backgroundImage: `url(${testimonial.thumbnail})`, width: '80px', height: '80px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
            <div class="details" style="display: flex; flex-direction: column; align-items: flex-start; padding: 0px; width: 268px; height: 51px;">
              <div class="user-name" style="width: 268px; height: 29px; font-family: 'Roboto'; font-weight: 400; font-size: 18px; line-height: 160%; color: #000000;">{{ testimonial.name }}</div>
              <div class="user-role" style="width: 268px; height: 22px; font-family: 'Roboto'; font-weight: 400; font-size: 16px; line-height: 140%; color: #475569;">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  { text: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.', name: 'Hellen Jummy', role: 'Financial Counselor', thumbnail: '/user1.jpeg' },
  { text: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.', name: 'Ralph Edwards', role: 'Math Teacher', thumbnail: '/user2.jpeg' },
  { text: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.', name: 'Hellena John', role: 'Psychology Student', thumbnail: '/user3.jpeg' },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  if (currentSlide.value < testimonials.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to the first slide
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = testimonials.value.length - 1; // Loop back to the last slide
  }
};
</script>

<style scoped>
.testimonial-section {
    width: 1440px;
    height: 614px;
    gap: 80px;
    padding: 80px;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 48px;
    width: 1280px;
    height: 62px;
}

.section-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;
    width: 1112px;
    height: 62px;
}

.top {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 62px;
}

.content-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    gap: 16px;
    width: 412px;
    height: 305px;
    background: #FFFFFF;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    transition: transform 0.5s ease;
}
</style>