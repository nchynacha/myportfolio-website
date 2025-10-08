<template>
  <div class=" bg-primary  ">

    <Navbar />

    <main class="mt-16"> <!-- ให้ไม่ชน navbar fixed -->
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>

  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './sections/Hero.vue'
import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'
</script>
