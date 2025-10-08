<template>
  <section id="hero"
    class="h-screen relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-24 gap-8 overflow-hidden">
    <div class="flex flex-col items-center justify-center py-4">

      <!-- ======================================================= -->

      <p class="text-base pl-2 mb-0 font-medium text-light relative z-10">
        Hello There! I am
      </p>

      <h1 class="text-4xl md:text-7xl lg:text-8xl font-extrabold mt-0 mb-3 glitch-neon font-Mono relative z-10">
        NACHANAN
      </h1>

      <p class="text-base text-center md:text-xl  relative z-10 text-secondary/60">
        Aspiring Frontend Developer - learning building and growing everyday.
      </p>

      <p class="text-base text-center font-mono md:text-xl text-light pt-1 relative z-10">
        DART | FLUTTER | FRONT-END DEV | UI & DESIGN
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full relative">
      <div class="absolute top-1/2 left-1/2 w-full  z-0 pointer-events-none " style="color: #9A8174; 
                       animation: image-glitch-pulse 10s infinite ease-in-out;
                        ">
        <img :src="programming" alt="programming Logo"
          class="w-40 sm:w-56 md:w-64 lg:w-[300px] h-auto absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

    </div>
  </section>
</template>

<script setup>
import programming from '../assets/programming.png'

</script>

<style>
/* * Custom CSS for the Neon Glitch Effect */
.glitch-neon {
  color: #5b5680;
  position: relative;
  text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174;
  animation: glitch 2.5s infinite linear;
  color: #5b5680 !important;
}

/* 1. Glitch Animation Keyframes */
@keyframes glitch {
  0% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174,
      2px 2px 0px rgba(255, 0, 0, 0.7);
    transform: translate(0px, 0px);
  }

  15% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174,
      -2px -2px 0px rgba(0, 0, 255, 0.7);
    transform: translate(1px, -1px);
  }

  30% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174,
      3px 0px 0px rgba(255, 0, 255, 0.7);
    transform: translate(-1px, 1px);
  }

  60% {

    text-shadow: none;
    color: #0f172a !important;
  }

  62% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174;
    color: #9a8174 !important;
  }

  75% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174,
      1px 1px 0px rgba(255, 255, 0, 0.7);
    transform: translate(-1px, 0px);
  }

  100% {

    text-shadow: 0 0 7px #9a8174, 0 0 10px #9a8174, 0 0 15px #9a8174;
    transform: translate(0px, 0px);
  }
}

@keyframes image-glitch-pulse {

  0%,
  100% {
    /* Start/End State: Subtle opacity*/
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  50% {
    /*  flipped horizontally */
    opacity: 1;
    transform: translate(-50%, -50%) scaleX(-1);
  }
}
</style>
