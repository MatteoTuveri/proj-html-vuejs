<template>
  <header><!-- navigation -->
    <div class="container py-2">
      <HeaderComp />
    </div>
  </header>
  <main>
    <div id="hero" class=""> <!-- hero -->
      <HeroComp  />
    </div>
    <div id="excellence" class=""> <!-- cards excellence in services -->
      <div class="container">
        <ExcellenceComp />
      </div>
    </div>
    <div id="company" class=""> <!-- the company -->
      <div class="container">
        <TheCompanyComp />
      </div>
    </div>
    <div id="actions" class=""> <!-- cards actions and projects -->
      <div class="container">
        <ActionsComp />
      </div>
    </div>
    <div id="results" class=""> <!-- results in numbers -->
      <div class="container">
        <ResultsComp />
      </div>
    </div>
    <div id="get-in" class=""> <!-- get-in touch -->
      <div class="container">
        <GetInComp />
      </div>
    </div>
  </main>
  <footer>
    <!-- info -->
    <FooterComp />
  </footer>
</template>

<script>
import ActionsComp from './components/ActionsComp.vue';
import ExcellenceComp from './components/ExcellenceComp.vue';
import FooterComp from './components/FooterComp.vue';
import GetInComp from './components/GetInComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import ResultsComp from './components/ResultsComp.vue';
import TheCompanyComp from './components/TheCompanyComp.vue';
import { store } from './data/store';
export default {
    name: "App",
    data() {
        return {
            store
        };
    },
    components: { HeaderComp, HeroComp, ExcellenceComp, TheCompanyComp, ActionsComp, ResultsComp, GetInComp, FooterComp }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as*;
#excellence{
  background-color: $excellence-bg;
}
#company{
  background-color: blue;

}
#actions{
  background-color: $secondary-bg-font;

}
#results{
  background-image: url('/Images/imgs/bg-7.jpg');
}
#get-in{
  background-color: $secondary-bg-font;
}
header{
  background-color: $primary-font ;
  height: 5vh;
}
</style>