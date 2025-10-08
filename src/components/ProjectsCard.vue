<template>
  <div class="card w-full max-w-sm p-4 bg-light/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">


    <!-- รูปโปรเจกต์ -->
    <img v-if="image" :src="image" :alt="name" class="w-full h-40  rounded-md mb-3"/>

    <!-- ชื่อโปรเจกต์ -->
    <h3 class="text-xl font-semibold mb-2">{{ name }}</h3>

    <!-- Tech stack badges -->
    <div class="flex gap-2 flex-wrap ">
      <p 
        v-for="tech in techs" 
        :key="tech" 
        class="bg-dark px-3 py-1 rounded-full text-primary text-center  text-xs"
      >
        {{ tech }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  techs: {
    type: Array,
    default: () => []
  },
  image: String  // เพิ่ม prop สำหรับรูป
})
</script>

<style scoped>

</style>
