<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheUsers from "./components/userComponent.vue"
</script>
<script>
export default {
  data() {
    return {
      activeUser : "test",
      userModalDisplayed:true
    }
  },
  methods:{
    changeActiveUser(newUser)
    {
      console.log(this.activeUser)
      this.activeUser = newUser
      console.log(this.activeUser)
    },
  }
}

</script>

<template>
  <header class="layoutVertical">
    <nav class="layoutVertical">
      <div id="logoContainer" class="layoutHorizontal">
        <img class="icon" src="./assets/images/tiny_hackerman.png" alt="hackerman_epitech"/>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Time Manager</text>
        </svg>
      </div>
      <div class="separationHorizontal"></div>
      <RouterLink to="/">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Home</text>
        </svg>
      </RouterLink>
      <div class="separationHorizontal"></div>

      <a @click="userModalDisplayed = !userModalDisplayed">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">User</text>
        </svg>
      </a>
      
      <div class="separationHorizontal"></div>
      <RouterLink to="/workingTime">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Working Time</text>
        </svg>
      </RouterLink>
      
      <div class="separationHorizontal"></div>
      <RouterLink to="/workingTimes">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Working times</text>
        </svg>
      </RouterLink>
      
      <div class="separationHorizontal"></div>
      <RouterLink to="/clock">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Clock</text>
        </svg>
      </RouterLink>
      
      <div class="separationHorizontal"></div>
      <RouterLink to="/chart">
        <svg class="icon" viewBox="0 0 100 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="characterIcon" cx="50" cy="27.1481" r="23.1481"/>
          <path class="characterIcon" d="M50 50.25C0 50.25 6.25 109.525 0 139.185H100C93.75 109.556 100 50.25 50 50.25Z"/>
        </svg>
        <svg class="text" viewbox="0 0 100 100">
          <text x="60" y="40">Chart Manager</text>
        </svg>
      </RouterLink>
    </nav>
  </header>
  <main class="layoutVertical">
    
    <Transition>
      <TheUsers :activeUser=activeUser v-if=userModalDisplayed @changeActiveUser="changeActiveUser($event)" @closeUserModal="userModalDisplayed = !userModalDisplayed"/>
    </Transition>

    
    <RouterView :activeUser=activeUser />
  </main>
</template>

<style scoped>
@import url(./assets/general.css);
</style>
