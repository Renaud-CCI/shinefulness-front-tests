<template>
    <NavbarContainer />
    <section id="body-container">
      <h1 class="text-red-500">Hello World</h1>
      <p class="text-blue-500">This is a test</p>
      <p class="text-green-500">This is a test</p>
    </section>
    <FooterContainer />
    
</template>

<script>
import NavbarContainer from '@/components/Navbar/NavbarContainer.vue';
import FooterContainer from '@/components/Footer/FooterContainer.vue';

export default {
  name: 'App',
  components: {
      NavbarContainer,
      FooterContainer,
  },
  setup() {
      return {
      };
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';

#body-container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  background-color: $background;
  min-height: 90vh;
  padding-top: 10vh;
}
</style>