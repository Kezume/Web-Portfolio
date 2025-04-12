<template>
    <section id="hero" class="min-h-screen flex items-center bg-slate-900 px-6 md:px-16 py-20">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-12">
        
        <!-- Text Section -->
        <div class="md:w-1/2 text-center md:text-left space-y-6">
          <h1 class="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            Hello, I'm <span class="text-primary">Roihan Arrafli</span>
          </h1>
          <p class="text-gray-400 text-lg lg:text-xl max-w-xl">
            A backend developer who loves turning ideas into scalable systems. Let's build something amazing together.
          </p>
  
          <div class="flex justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              View Projects
            </a>
            <a href="#contact" class="text-primary border border-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition">
              Contact Me
            </a>
          </div>
        </div>
  
        <!-- Image Section -->
        <div class="md:w-1/2 flex justify-center">
          <img
            src="../assets/profile-1.png"
            alt="Profile"
            class="rounded-2xl w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover shadow-2xl border-4 border-primary"
          />
        </div>
      </div>
    </section>
  </template>
  