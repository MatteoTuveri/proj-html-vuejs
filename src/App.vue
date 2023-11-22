<template>
  <header><!-- navigation -->
    <HeaderComp />
  </header>
  <main>
    <div v-for="(item, index) in store.sectionList" :id="item.id">
      <HomeComp v-if="item.name === 'home'" />
      <ServicesComp v-if="item.name === 'services'" :title="item.details.title" :special="item.details.specialTitle"
        :paragraph="item.details.paragraph" :description="item.details.description" />
      <AboutComp v-if="item.name === 'about'" />
      <ProjectsComp v-if="item.name === 'projects'" />
      <ResultsComp v-if="item.name === 'results'" />
      <GetInTouchComp v-if="item.name === 'get in touch'" />
    </div>
  </main>
  <footer><!-- info -->
    <FooterComp />
  </footer>
</template>

<script>
import ProjectsComp from './components/ProjectsComp.vue';
import ServicesComp from './components/ServicesComp.vue';
import FooterComp from './components/FooterComp.vue';
import GetInTouchComp from './components/GetInTouchComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import HomeComp from './components/HomeComp.vue';
import ResultsComp from './components/ResultsComp.vue';
import AboutComp from './components/AboutComp.vue';
import { store } from './data/store';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  components: { HeaderComp, HomeComp, ServicesComp, AboutComp, ProjectsComp, ResultsComp, GetInTouchComp, FooterComp }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as*;

img {
  width: 100%;
}

#services {
  background-color: $excellence-bg;
}

#about {
  background-color: black;

}

#projects {
  background-color: $secondary-bg-font;

}

#results {
  background-image: url('/Images/imgs/bg-7.jpg');
}

#get-in-touch {
  background-color: $secondary-bg-font;
}

header {
  background-color: $primary-font ;
  height: 5vh;
}
</style>