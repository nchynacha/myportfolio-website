<template>
    <div id="projects" class="p-10 md:p-20  flex flex-col items-center gap-8 w-full">
        <!-- หัวข้อ + เส้นแบ่ง -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold pb-4 border-b-2 border-dashed border-light lg:w-[40%] text-center text-secondary">
            My Projects
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 w-full">
            <!-- web -->
            <ProjectsCard name="Landing Page Christmas" :techs="['HTML', 'CSS', ]" :image="Christmas" />
            <ProjectsCard name="Dashboard" :techs="['HTML', 'CSS', 'JavaScript']" :image="Dashboard" />
            <ProjectsCard name="Login Signup" :techs="['Vue.js', 'CSS','JavaScript']" :image="LoginSignup" />
            <ProjectsCard name="Coffee Shop" :techs="['Vue.js', 'Tailwind','JavaScript']" :image="CoffeeShop" />
            <ProjectsCard name="TicTacToe Game" :techs="['HTML', 'CSS', 'JavaScript']" :image="TicTacToeGame" />
            <!-- mobile -->
            <ProjectsCard name="Login-Signup App" :techs="['Dart', 'Flutter', 'Firebase']" :image="LoginSignupApp" />
            <ProjectsCard name="To do-list App" :techs="['Dart', 'Flutter']" :image="TodolistApp" />
            <ProjectsCard name="Portfolio App" :techs="['Dart', 'Flutter']" :image="PortfolioApp" />
            <ProjectsCard name="TicTacToe App" :techs="['Dart', 'Flutter']" :image="TicTacToeApp" />
            <ProjectsCard name="Sushi Restaurant" :techs="['Dart', 'Flutter']" :image="SushiRestaurant" />
        </div>
    </div>
</template>

<script setup>
import ProjectsCard from '../components/ProjectsCard.vue'
import Dashboard from '../assets/Dashboard.png'
import LoginSignup from '../assets/Login-Signup.png'
import CoffeeShop from '../assets/CoffeeShop.png'
import TicTacToeGame from '../assets/TicTacToeGame.png'
import Christmas from '../assets/Christmas.png'
import TicTacToeApp from '../assets/TicTacToeApp.png'
import PortfolioApp from '../assets/PortfolioApp.png'
import TodolistApp from '../assets/To do-listApp.png'
import SushiRestaurant from '../assets/restaurant.png'
import LoginSignupApp from '../assets/Login-Signup-App.png'

</script>
