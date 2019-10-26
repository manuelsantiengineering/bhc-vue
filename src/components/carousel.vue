<template>
  <div class="carousel-view">
    <div class="card">
      <transition-group class="carousel" tag="div">
        <div
          v-for="slide in slides"
          class="slide has-text-centered"
          :key="slide.id"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="require(`@/assets/${slide.source}`)"
                :alt="`${slide.alt}`"
              />
            </figure>
          </div>
          <div class="content">
            <h3 class="title">{{ slide.title }}</h3>
          </div>
        </div>
      </transition-group>
      <div class="carousel-controls block has-text-centered">
        <button class="pagination-previous" @click="previous">Prev</button>
        <button class="pagination-next" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          title: 'Explore New Horizons',
          alt: 'New Horizons',
          source: '001_womanHiker.jpg',
          id: 1,
        },
        {
          title: 'Enjoy Freedom',
          alt: 'Freedom',
          source: '002_freedom.jpg',
          id: 2,
        },
        {
          title: 'Share it with Friends',
          alt: 'Sharing',
          source: '003_groupselfie.jpg',
          id: 3,
        },
      ],
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
};
</script>
<style>
.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 24em;
  min-height: 25em;
}
.slide {
  flex: 0 0 auto;
  height: 320px;
  width: 350px;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>
