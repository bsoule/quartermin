<template>
  <div class="countdown-timer">
    <h2>{{ count }}</h2> 

    <button @click="startCountdown">
      <font-awesome-layers class="fa-6x">
        <font-awesome-icon :icon="['fas', 'play']" color="#02ec88"/>
        <font-awesome-layers-text inverse transform="shrink-10 left-1" value="Go!"/>
      </font-awesome-layers>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      timer: null
    }
  },
  methods: {
    startCountdown() {
      this.count = 60;      
      this.timer = setInterval(() => {
        if (this.counter > 0) {
          this.counter--;
        } else {
          this.stopCountdown();
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.timer);
    },
  }
}
</script>
<style scoped lang="scss">
  .countdown-timer {
    /* Add your styles here */
    .fa-layers-text {
      color: white;
      font-family: Avenir, Arial, Helvetica, sans-serif;
      font-weight: bold;
    }
    .button-text {
      color: white;
    }
  }
</style>