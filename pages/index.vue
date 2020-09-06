<template>
  <div id="welcome">
    <a-icon type="cloud" theme="twoTone" class="cloud-1"/>
    <a-icon type="cloud" theme="twoTone" class="cloud-2" />
    <a-icon type="rocket" theme="twoTone" class="rocket"/>
    <a-icon type="cloud" theme="twoTone" class="cloud-3" />
    <hr>
    <span><b>{{$t('welcome')}}</b></span>
  </div>
</template>

<style scoped>

#welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #1890ff;
  height: 100%;
}

#welcome hr {
  background: #1890ff;
}

#welcome span {
  font-size: 40px;
  margin: 10px auto;
}

#welcome .rocket {
  margin: 10px auto;
  font-size: 100px;
  animation: .5s infinite ease-in-out rocket alternate-reverse;
  z-index: 4;
}

#welcome .cloud-1, .cloud-2, .cloud-3{
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
  0%{
    transform: translateX(3px)
  }
  100%{
    transform: translateX(-3px)
  }
}
@keyframes cloud {
  0%{
    opacity: 0;
    transform: translateY(-110px)
  }
  10%{
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(0px)
  }
}

</style>
