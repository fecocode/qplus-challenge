<template>
  <div id="welcome">
    <a-icon type="cloud" theme="twoTone" class="cloud-1" />
    <a-icon type="cloud" theme="twoTone" class="cloud-2" />
    <a-icon type="rocket" theme="twoTone" class="rocket" />
    <a-icon type="cloud" theme="twoTone" class="cloud-3" />
    <hr>
    <span><b>{{$t('welcome')}}</b></span>
    <a-button type="primary">Hola?</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // login: true
    };
  },

  // methods: {
  //   validateLogin() {
  //     if (this.login) {
  //       router.push("http://localhost:3000/es/");
  //     } else {
  //       router.push("http://localhost:3000/es/login");
  //     }
  //   }
  // },

  meta: {
    breadcrumbs: [
      {
        name: "home",
        link: "index"
      }
    ]
  }
};
</script>


<style lang="scss" scoped>
@import '~/assets/variables';

// TODO Please, remove this comment and P L E A S E don't use id selectors (#).

#welcome {  // ? This is NOT a good practice. Feco, I love you aneway.
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $primary-color;
  height: 100%;
}

#welcome hr {
  background: $primary-color;
}

#welcome span {
  font-size: 40px;
  margin: 10px auto;
}

#welcome .rocket {
  margin: 10px auto;
  font-size: 100px;
  animation: 0.5s infinite ease-in-out rocket alternate-reverse;
  z-index: 4;
}

#welcome .cloud-1,
.cloud-2,
.cloud-3 {
  position: absolute;
}

#welcome .cloud-1 {
  margin-left: 60px;
  font-size: 50px;
  animation: 6s infinite ease-in-out cloud;
  z-index: 2;
}
#welcome .cloud-2 {
  margin-left: -60px;
  font-size: 45px;
  animation: 6s infinite ease-in-out cloud;
  animation-delay: 5s;
  opacity: 0;
  z-index: 3;
}
#welcome .cloud-3 {
  margin-left: 10px;
  font-size: 60px;
  animation: 6s infinite ease-in-out cloud;
  animation-delay: 3s;
  opacity: 0;
  z-index: 1;
}

@keyframes rocket {
  0% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(-3px);
  }
}
@keyframes cloud {
  0% {
    opacity: 0;
    transform: translateY(-110px);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(0px);
  }
}
</style>
