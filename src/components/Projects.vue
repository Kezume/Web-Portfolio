<template>
    <section id="projects" class="p-8 bg-gray-50 text-gray-800">
      <h2 class="text-3xl font-bold text-center mb-6 text-dark">Proyek Saya</h2>
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold text-dark">{{ project.title }}</h3>
          <p class="text-gray-600 mb-2">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-primary hover:underline">Lihat Proyek</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      title: 'Sistem Absensi Sekolah',
      description: 'Aplikasi Laravel untuk manajemen kehadiran siswa berbasis lokasi dan jadwal.',
      link: 'https://github.com/Kezume/absensi-sekolah'
    },
    {
      id: 2,
      title: 'EduPay API',
      description: 'REST API untuk Pembayaran SPP menggunakan laravel dan midtrans.',
      link: 'https://github.com/Kezume/EduPay-API'
    }
  ]
  </script>
  