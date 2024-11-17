<template>
  <header class="valign">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="cont text-center">
              <h1> Software & Technology <br /> Vue (Nuxt js) Template </h1>
              <a href="#demos" class="btn rounded-pill bg-white fw-bold color-darkBlue mt-50 me-2">
                <small class="text-uppercase"> all demos </small>
              </a>
              <a :href="appData.itemStoreLink" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                <small class="text-uppercase"> Purchase Now </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-img">
        <img src="/landing-preview/img/circle.png" alt="" />
      </div>

      <div class="mag-img">
        <div id="js-scene" data-invert-y="true" data-invert-x="true">
          <div class="imgs one">
            <div :class="`top ${scene.class} layer`" :data-depth="scene.depth" v-for="scene, i in scenes.scene1.one" :key="i">
              <img :src="scene.img" alt="" />
            </div>
          </div>

          <div class="imgs three">
            <div :class="`top ${scene.class} layer`" :data-depth="scene.depth" v-for="scene, i in scenes.scene1.three" :key="i">
              <img :src="scene.img" alt="" />
            </div>
          </div>

          <div class="imgs four">
            <div :class="`top ${scene.class} layer`" :data-depth="scene.depth" v-for="scene, i in scenes.scene1.four" :key="i">
              <img :src="scene.img" alt="" />
            </div>
          </div>

          <div id="js-scene2" data-invert-y="false" data-invert-x="false">
            <div class="imgs two">
              <div :class="`top ${scene.class} layer`" :data-depth="scene.depth" v-for="scene, i in scenes.scene2.two" :key="i">
                <img :src="scene.img" alt="" />
              </div>
            </div>

            <div class="imgs five">
              <div :class="`top ${scene.class} layer`" :data-depth="scene.depth" v-for="scene, i in scenes.scene2.five" :key="i">
                <img :src="scene.img" alt="" />
              </div>
            </div>

            <div class="mob">
              <div class="layer" data-depth="0.10">
                <img src="/landing-preview/img/header/mob.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import appData from '../../data/appData.json';
import scenes from '../../data/Preview/header.json';

export default {
  name: "Header",
  data() {
    return {
      appData,
      scenes
    }
  },
  mounted() {
    setTimeout(() => {
      if (typeof Parallax !== 'undefined') {
        var scene = document.getElementById('js-scene');
        new Parallax(scene);

        var scene2 = document.getElementById('js-scene2');
        new Parallax(scene2);
      }
    });
  },
}
</script>
