<template>
  <div class="loader loader-color-mode">Loading...</div>
</template>

<script>
export default {
  props: ['colorModeAvailable'],
}
</script>

<style lang="scss">
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.loader-color-mode {
  border-left: 1.1em solid var(--color-secondary);
}

.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #{$transparent-border};
  border-right: 1.1em solid #{$transparent-border};
  border-bottom: 1.1em solid #{$transparent-border};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
