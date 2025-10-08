<template>
  <nav class=" shadow-md fixed w-full z-10 top-0 backdrop-blur-sm text-secondary font-semibold ">
    <div class="max-w-7xl mx-auto px-4 md:px-6 ">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#hero" class="text-xl font-bold text-dark text-shadow-lg/30">NACHA</a>

        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 text-sm">
          <a href="#hero" class="relative group hover:text-light "
            :class="{ 'text-light font-bold': activeSection === '#hero', 'text-secondary': activeSection !== '#hero' }">
            &lt;Home/&gt;
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-light transition-all duration-300"
              :class="activeSection === '#hero' ? 'w-[80%]' : 'w-0 group-hover:w-[80%]'">
            </span>
          </a>

          <a href="#about" class="relative group hover:text-light "
            :class="{ 'text-light font-bold': activeSection === '#about', 'text-secondary': activeSection !== '#about' }">
            &lt;About/&gt;
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-light transition-all duration-300"
              :class="activeSection === '#about' ? 'w-[80%]' : 'w-0 group-hover:w-[80%]'">
            </span>
          </a>

          <a href="#projects" class="relative group hover:text-light "
            :class="{ 'text-light font-bold': activeSection === '#projects', 'text-secondary': activeSection !== '#projects' }">
            &lt;Projects/&gt;
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-light transition-all duration-300"
              :class="activeSection === '#projects' ? 'w-[80%]' : 'w-0 group-hover:w-[80%]'">
            </span>
          </a>

          <a href="#contact" class="relative group hover:text-light "
            :class="{ 'text-light font-bold': activeSection === '#contact', 'text-secondary': activeSection !== '#contact' }">
            &lt;Contact/&gt;
            <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-light transition-all duration-300"
              :class="activeSection === '#contact' ? 'w-[80%]' : 'w-0 group-hover:w-[80%]'">
            </span>
          </a>
        </div>



        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->

    <div v-if="isOpen" class="md:hidden bg-white shadow-md text-secondary">
      <a href="#hero" @click="isOpen = false" class="block px-4 py-2 hover:bg-gray-100"
        :class="{ 'text-light font-bold bg-gray-50': activeSection === '#hero' }">Home</a>

      <a href="#about" @click="isOpen = false" class="block px-4 py-2 hover:bg-gray-100"
        :class="{ 'text-light font-bold bg-gray-50': activeSection === '#about' }">About</a>

      <a href="#projects" @click="isOpen = false" class="block px-4 py-2 hover:bg-gray-100"
        :class="{ 'text-light font-bold bg-gray-50': activeSection === '#projects' }">Projects</a>

      <a href="#contact" @click="isOpen = false" class="block px-4 py-2 hover:bg-gray-100"
        :class="{ 'text-light font-bold bg-gray-50': activeSection === '#contact' }">Contact</a>
    </div>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeSection = ref('#hero')

const handleScroll = () => {
  const sections = ['#hero', '#about', '#projects', '#contact']
  for (let sec of sections) {
    const el = document.querySelector(sec)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      activeSection.value = sec
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))


</script>

<style scoped></style>
