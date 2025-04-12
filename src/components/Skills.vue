<template>
  <section id="skills" class="py-10 px-6 bg-slate-900 text-white overflow-hidden relative">
    <div class="container mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-primary">Skills</h2>
    </div>

    <!-- Infinite scroll logo -->
    <div
      ref="scrollContainer"
      class="flex overflow-x-auto no-scrollbar gap-12 px-8 py-6 transition-transform duration-300 scroll-smooth"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      <!-- Duplicate untuk efek loop -->
      <div v-for="i in 2" :key="i" class="flex gap-12 shrink-0">
        <div
          v-for="(skill, index) in skills"
          :key="`${i}-${index}`"
          class="flex flex-col items-center min-w-[100px] transition-all duration-300 group"
        >
          <img
            :src="skill.icon"
            :alt="skill.name"
            class="w-12 h-12 grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
          />
          <p class="text-sm text-gray-400 mt-2 group-hover:text-white">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const paused = ref(false)
const scrollContainer = ref(null)

const skills = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', icon: 'https://www.svgrepo.com/show/353985/laravel.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
]

onMounted(() => {
  setInterval(() => {
    if (!paused.value && scrollContainer.value) {
      scrollContainer.value.scrollBy({ left: 1 })
      if (
        scrollContainer.value.scrollLeft >=
        scrollContainer.value.scrollWidth / 2
      ) {
        scrollContainer.value.scrollLeft = 0
      }
    }
  }, 20)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
