<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="usda" target="_blank" rel="noopener noreferrer">
            <i class="far fa-question-circle fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usda: 'https://www.fs.usda.gov/recarea/shoshone/recarea/?recid=80899',
    };
  },
};
</script>
