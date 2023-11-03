<template>
  <HelloWorld msg="Quarter Minutes"/>
  <h2>Who is going?</h2>
  <div class="names-container">
  <UserIconStack 
    v-for="(name, index) in names"
    :key="index"
    :circleColor="blue"
    :userColor="white"
    :name="name" />
  </div>
  <div class="go-button-wrapper">
    <!-- Use CountdownTimer component here -->
    <CountdownTimer />
  </div>
  <div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import UserIconStack from '@/components/UserIconStack.vue'
import CountdownTimer from '@/components/CountdownTimer.vue'

export default {
  name: 'App',
  components: {
    UserIconStack,
    HelloWorld,
    CountdownTimer,
  },
  data() {
    return {
      names: ["Bethany", "Cantor", "Christopher", "Danny", "Faire"],
    }
  },
  methods: { }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('./assets/images/house1.png') no-repeat center center fixed;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.names-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
