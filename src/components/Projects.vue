<template>
    <section id="projects" class="py-10 px-6 bg-slate-800 text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-primary mb-14 md:mb-20 lg:mb-24 pb-3 relative z-10">
                Projects
            </h2>

            <!-- Filter Kategori -->
            <div class="mb-24 relative z-10 pb-4">
                <button v-for="category in categories" :key="category" @click="filterProjects(category)" :class="{
                    'bg-primary text-white': selectedCategory === category,
                    'bg-slate-900 text-gray-300': selectedCategory !== category,
                }" class="px-4 py-2 rounded-full mx-2 mb-4 hover:bg-primary/80 transition">
                    {{ category }}
                </button>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="(project, index) in paginatedProjects" :key="index"
                    class="relative z-10 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    :data-aos="'fade-up'" :data-aos-delay="index * 100" data-aos-duration="800">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                    <div class="p-6 space-y-4 text-left">
                        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed">{{ project.description }}</p>
                        <a :href="project.link" target="_blank"
                            class="inline-block text-primary text-sm font-medium hover:underline">
                            View Project →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Pagination Controls -->
            <!-- Pagination Controls -->
            <div class="mt-10 flex flex-col items-center gap-4">
                <div class="flex items-center justify-center gap-4">
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                        class="px-6 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        Previous
                    </button>

                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="px-6 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>

                <span class="text-white text-sm">Page {{ currentPage }} of {{ totalPages }}</span>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = ref([
    {
        title: "Event Booking API",
        description:
            "A RESTful Laravel API for event ticketing and user registration with payment integration.",
        image: "/assets/projects/project-1.png",
        link: "https://github.com/your-username/event-api",
        category: "API",  // Add category
    },
    {
        title: "Attendance System",
        description:
            "A Laravel + Vue system for student attendance with QR scanning and face detection.",
        image: "/assets/projects/project-1.png",
        link: "https://github.com/your-username/attendance",
        category: "Laravel",  // Add category
    },
    {
        title: "Finance Tracker App",
        description:
            "Personal finance tracker using Go Fiber and clean architecture for transaction logging.",
        image: "/assets/projects/project-1.png",
        link: "https://github.com/your-username/finance-tracker",
        category: "Go",  // Add category
    },
    {
        title: "Dummy Data",
        description:
            "Personal finance tracker using Go Fiber and clean architecture for transaction logging.",
        image: "/assets/projects/project-1.png",
        link: "https://github.com/your-username/finance-tracker",
        category: "Go",  // Add category
    },
])

const categories = ["All", "API", "Laravel", "Go", "Vue"]
const selectedCategory = ref("All")
const currentPage = ref(1)
const projectsPerPage = 3

const filteredProjects = computed(() => {
    if (selectedCategory.value === "All") {
        return projects.value
    }
    return projects.value.filter(project => project.category === selectedCategory.value)
})

const totalPages = computed(() => {
    return Math.ceil(filteredProjects.value.length / projectsPerPage)
})

const paginatedProjects = computed(() => {
    const start = (currentPage.value - 1) * projectsPerPage
    const end = start + projectsPerPage
    return filteredProjects.value.slice(start, end)
})

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

const filterProjects = (category) => {
    selectedCategory.value = category
    currentPage.value = 1 // Reset to first page after changing category
}
</script>