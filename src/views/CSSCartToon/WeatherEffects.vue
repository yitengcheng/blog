<template>
  <div class="contain">
    <div class="icon">
      <div class="sun">
        <div class="rays"></div>
      </div>
    </div>
    <div class="icon rainy">
      <div class="cloud"></div>
      <div class="rain"></div>
    </div>
    <div class="icon cloudy">
      <div class="cloud"></div>
      <div class="cloud"></div>
    </div>
    <div class="icon flurries">
      <div class="cloud"></div>
      <div class="snow">
        <div class="flake"></div>
        <div class="flake"></div>
      </div>
    </div>
    <div class="icon thunder-storm">
      <div class="cloud"></div>
      <div class="lightning">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
    </div>
    <div class="icon sun-shower">
      <div class="cloud"></div>
      <div class="sun">
        <div class="rays"></div>
      </div>
      <div class="rain"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #000;
}
.icon {
  margin: 0 auto;
  position: relative;
  height: 90px;
}
.rainy {
  margin-top: 2rem;
}
.sun {
  width: 2.5em;
  height: 2.5em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em orange;
  animation: spin 12s infinite linear;
}

.rays {
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
}

.rays:before,
.rays:after {
  content: "";
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 0.375em;
  height: 1.125em;
  transform: rotate(60deg);
  transform-origin: 50% 3.25em;
  background: yellow;
  border-radius: 0.25em;
  box-shadow: 0 5.375em yellow;
}
.rays:before {
  transform: rotate(120deg);
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.cloud {
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em lightgray, -2.1875em 0.6875em 0 -0.3125em lightgray,
    2.0625em 0.9375em 0 -0.5625em lightgray;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em lightgray;
}
/* 2.制作雨滴 */
.rain {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: currentColor;
}

.rain:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  transform: rotate(-28deg);
  animation: rain 3s linear infinite;
}
@keyframes rain {
  0% {
    background: #0cf;
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
}
.cloudy {
  margin-top: 3rem;
}
.cloud {
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em lightgray, -2.1875em 0.6875em 0 -0.3125em lightgray,
    2.0625em 0.9375em 0 -0.5625em lightgray;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em lightgray;
}
.cloud:nth-child(2) {
  z-index: 0;
  background: #fff;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff, 0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff, 2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  transform: scale(0.5) translate(6em, -3em);
  animation: cloud 4s linear infinite;
}
@keyframes cloud {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
}
.flurries {
  margin-top: 2rem;
}
.snow {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: currentColor;
}
.cloud {
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em lightgray, -2.1875em 0.6875em 0 -0.3125em lightgray,
    2.0625em 0.9375em 0 -0.5625em lightgray;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em lightgray;
}
.cloud:nth-child(2) {
  z-index: 0;
  background: #fff;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff, 0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff, 2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  transform: scale(0.5) translate(6em, -3em);
  animation: cloud 4s linear infinite;
}
.flake:before,
.flake:after {
  content: "\2745";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: #fff;
  list-height: 1em;
  opacity: 0.2;
  animation: spin 8s linear infinite reverse;
}
.flake:after {
  margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  animation: spin 14s linear infinite;
}
.flake:nth-child(2):before {
  margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  animation: spin 10s linear infinite;
}
.flake:nth-child(2):after {
  margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  animation: spin 16s linear infinite reverse;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.thunder-storm {
  margin-top: 3rem;
}
.cloud {
  position: absolute;
  z-index: 1;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em lightgray, -2.1875em 0.6875em 0 -0.3125em lightgray,
    2.0625em 0.9375em 0 -0.5625em lightgray;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em lightgray;
}
.lightning {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 20%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: currentColor;
}
.bolt {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  -webkit-animation: lightning 2s linear infinite;
  animation: lightning 2s linear infinite;
}
.bolt:nth-child(2) {
  width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  animation: lightning 1.5s linear infinite;
}

.bolt:before,
.bolt:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  transform: skewX(-10deg);
}
.bolt:after {
  margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  transform: skewX(-10deg);
}
.bolt:nth-child(2):before {
  margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
}
.bolt:nth-child(2):after {
  margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
}
@keyframes lightning {
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: #0cf;
    background: #0cf;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
}
.sun-shower {
  margin-top: 4rem;
  margin-bottom: 1rem;
}
.cloud + .sun {
  margin: -2em 1em;
}
</style>
