<template >
    <NavbarContainer />
    <section id="body-container">
      <FeedBackContainer />
    </section>
    <FooterContainer />
    
</template>

<script>
import NavbarContainer from '@/components/Navbar/NavbarContainer.vue';
import FooterContainer from '@/components/Footer/FooterContainer.vue';
import FeedBackContainer from './components/FeedBackContainer.vue';

export default {
  name: 'App',
  components: {
      NavbarContainer,
      FeedBackContainer,
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
  width: 100vw;
  min-height: 90vh;
  padding: 10vh 30px 0;
}
</style>