<template>
  <div class="font-sans bg-light text-gray-800 min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>