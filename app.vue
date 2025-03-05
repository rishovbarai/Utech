<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <MainSection />
    <ToolSection />
    <LessonsSection />
    <StudentSection />
    <NumbersSection />
    <TestimonialSection />
    <FeatureSection />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import MainSection from '~/components/MainSection.vue'
import ToolSection from '~/components/ToolSection.vue'
import LessonsSection from '~/components/LessonsSection.vue'
import StudentSection from '~/components/StudentSection.vue'
import NumbersSection from '~/components/NumbersSection.vue'
import TestimonialSection from '~/components/TestimonialSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
</script>

<style>
/* Global styles if needed */
</style>