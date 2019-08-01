<template>
  <div class="page-loader">
    <span class="page-loader__spinner"/>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>





<style lang="scss" scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
  &__spinner {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5em;
    margin-left: -5em;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255,255,255,.2);
    border-right: 1.1em solid rgba(255,255,255,.2);
    border-bottom: 1.1em solid rgba(255,255,255,.2);
    border-left: 1.1em solid #fff;
    animation: load8 1.1s infinite linear;
  }
  &__spinner,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
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
