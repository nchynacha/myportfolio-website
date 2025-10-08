<template>
<section
  id="contact"
  class="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center text-secondary px-6 gap-8 lg:gap-12 scroll-pt-20 "
>
  <!-- ด้านซ้าย -->
  <div
    class="text-wrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl flex flex-col items-center lg:flex-1 w-full md:w-auto  justify-center font-Script font-bold text-center"
    style="max-width: 500px;"
  >
    <p>Let’s Build</p>
    <p>Something</p>
    <p>Together</p>
  </div>

  <!-- ด้านขวา -->
  <div
    class="text-wrap text-lg sm:text-xl md:text-2xl  flex flex-col items-center justify-center  w-full  mt-6 md:mt-0 "
    style="max-width: 500px;"
  >
    <div class="mb-6 text-center">
      <p>Tel. : 123-456-7890</p>
      <p>E-mail : nachapdxx@hotmail.com</p>
    </div>

    <div class="flex items-center w-full max-w-md my-6">
      <div class="flex-1 h-px bg-gray-300"></div>
      <span class="px-4 text-sm md:text-base">Find me on</span>
      <div class="flex-1 h-px bg-gray-300"></div>
    </div>

    <div class="flex gap-6 sm:gap-8 mt-4 flex-wrap justify-center">
      <img :src="githubLogo" alt="GitHub" class="cursor-pointer w-12 h-12 sm:w-14 sm:h-14" />
      <img :src="XLogo" alt="Twitter" class="cursor-pointer w-12 h-12 sm:w-14 sm:h-14" />
      <img :src="instagramLogo" alt="Instagram" class="cursor-pointer w-12 h-12 sm:w-14 sm:h-14" />
    </div>
  </div>
</section>

</template>

<script setup>
import githubLogo from '@/assets/github.svg'
import XLogo from '@/assets/x.png'
import instagramLogo from '@/assets/instagram.svg'
</script>
