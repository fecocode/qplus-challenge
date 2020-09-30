
<template>
  <login> </login>
</template>


<script>
export default {
  data() {
    return {
      userForm: {
        user: '',
        password: '',
      },
    };
  },
  methods: {
    formSubmit() {
      console.log(this.userForm);
    },
  },
};
</script>


<style lang="scss" scoped>

.container{
  display:flex ;
  align-items: center;
  width: 100%;
  height: 100%;
  
}

.form{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 25%;
  background-color: #001529;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 1px black
}


</style>