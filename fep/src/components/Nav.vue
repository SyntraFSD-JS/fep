<template>
  <div id="nav">
      <router-link to="/"><h2>GRAIN <span class="other-color">&</span>MORTAR</h2></router-link>
      <span id ="bullets">&#8226;&#8226;&#8226;</span>
      <div id="subnav">        
        <span id ="crossmark">x</span>
        <!-- <span @click= "clickOpen">mobileNavOpen = {{mobileNavOpen}}</span> -->
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/account">Account</router-link>
        <router-link to="/board">Board</router-link>
        
      </div>

      
  <div id="content">
  </div>
  </div>
  
</template>

 <script>
import { scrollMixin } from '@/assets/scroll-mixin'
export default {
  name: "Navigation",
  data() {
     return { mobileNavOpen: false};
   },
   mixins: [ scrollMixin ],
   methods: {
    clickOpen: function(){
       this.mobileNavOpen = true;
     }
   }
 };
</script>

<style>


h2{
  margin-left: 1rem;
}

#nav{
  font-family: sans-serif;
  color: white;
  background-color: black;
  padding-top: 0.25rem;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-wrap: wrap;
}

#content{
  width: 100%;
  height: 3rem;
  background-color: darkgrey;
}

#subnav{
  margin-right: 2rem;
  justify-content: flex-end;
   }

a{
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}
.other-color{
  color:white;
}
 input {
    display:none;
  }
#bullets,#crossmark{
  display: none;
}

#content{
  height: 3rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
@media only screen and (max-width: 740px) {

  #show {
    display: none;
  }

  #subnav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    width: 40%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 2;
  }
  #subnav a{
    color: black;
    padding-bottom: 1rem;
    
  }

  .other-color{
  color: orange;
}

  #bullets{
  display: flex;
  flex-direction: column;
  text-align: right;
  color: white;
  font-size: 2rem;
  margin-right: 2rem;
}

#crossmark{
  display: flex;
  flex-direction: column;
  text-align: right;
  color: black;
  font-size: 2rem;
  margin-right: 2rem;
}
}
</style>




