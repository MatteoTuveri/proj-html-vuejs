<template>
  <header><!-- navigation -->
    <HeaderComp />
  </header>
  <main>
    <div :id="store.sectionList.home.id">
      <HomeComp />
    </div>
    <div :id="store.sectionList.services.id">
      <ServicesComp />
    </div>
    <div :id="store.sectionList.about.id">
      <AboutComp />
    </div>
    <div :id="store.sectionList.projects.id">
      <ProjectsComp />
    </div>
    <div :id="store.sectionList.results.id">
      <ResultsComp />
    </div>
    <div :id="store.sectionList.getInTouch.id">
      <GetInTouchComp />
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
  background-size: cover;
  background-position: center
}

#get-in-touch {
  background-color: $secondary-bg-font;
}

header {
  background-color: $primary-font ;
  height: 40px;
}</style>