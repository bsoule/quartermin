<template>
  <div class="icon-stack-button-wrapper">
  <button @click="handleClick" class="icon-stack-button">
    <font-awesome-layers class="fa-4x">
      <font-awesome-icon :icon="circleIcon" transform="grow-8" :color="circleColor"/>
      <font-awesome-icon :icon="['fas', 'user']" transform="shrink-3" :color="personColor"/>
    </font-awesome-layers>
  </button>
  <h3 :class="activeClass">{{name}}</h3>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "User"
    },
  },
  data() {
    return { 
      isActive: false ,
      circleColor: "",
      contrastColor: "white",
    }
  },
  computed: {
    circleIcon() {
      return this.isActive ? ['fas', 'circle']:['far', 'circle']
    },
    personColor() {
      return this.isActive ? this.contrastColor : this.circleColor;
    },
    activeClass() {
      return this.isActive ? 'active' : '';
    }
  },
  mounted() {
    this.setColors();
  },
  methods: {
    handleClick() {
      // Handle the button click here
      this.isActive = !this.isActive;
      console.log(`${this.name} was clicked`);
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getContrastColor(hexColor) {
      // If the passed color is not valid
      if (!/^#[0-9A-F]{6}$/i.test(hexColor)) return 'black';

      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);

      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      return (luminance > 150) ? 'black' : 'white';
    },
    setColors() {
      this.circleColor = this.getRandomColor();
      this.contrastColor = this.getContrastColor(this.circleColor);
    }
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    color: grey;
  }
  h3.active {
    color: black;
  }
</style>