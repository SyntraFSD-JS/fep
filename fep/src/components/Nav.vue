<template>
  <div id="nav">
      <router-link to="/"><h2>GRAIN <span class="other-color">&</span> MORTAR</h2></router-link>
      <div id ="menuToggle">
        <input type ="checkbox"/>
        <span id ="bullets">&#8226;&#8226;&#8226;</span>     
        
        <!-- <span @click= "clickOpen">mobileNavOpen = {{mobileNavOpen}}</span> -->
        <div id="subnav">
          <span id ="crossmark">x</span>
          <router-link to="/">Home</router-link>
          <router-link to="/register">Register</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/account">Account</router-link>
          <router-link to="/board">Board</router-link>
        </div>
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

body{
  margin: 0;
  padding: 0;
}

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
  color: white;
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

  #input {
    opacity: 0;
  }

  #subnav {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    width: 40vw;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: -3.75rem;
    right: 1rem;
    height: 100%;
    z-index: 2;
    transform-origin: 0% 0%;
    transform:translate(100%,0);
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
#menuToggle
{
  display: block;
  position: absolute;
  top: 25px;
  right: 0px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  opacity: 0;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  right: 1.5rem;
  
  cursor: pointer;
  z-index: 2; 
  
  -webkit-touch-callout: none;
}
#menuToggle input:checked~ #subnav
{
  transform: none;
  opacity: 1;
}

}
</style>




