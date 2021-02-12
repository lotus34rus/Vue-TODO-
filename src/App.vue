<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    outline: none;
}
body{
  background-color: #f7f7f7;
}
#app {
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 60px;
  margin-bottom: 60px;
}
h1{
  text-align: center;
}
img{
  margin:  0 auto;
  display: flex;
}
button, input, select, textarea {
    border: 1px solid #dcdfe6;
    cursor: pointer;
}


 input {
        padding: 16px 26px;
        margin-bottom: 30px;
        border-radius: 20px;
    }

    input, textarea {
        width: 100%;
    }

    label {
        display: block;
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
    }
    textarea {
        padding: 30px 27px;
        border-radius: 14px;
        resize: none;
        overflow: auto;
        vertical-align: top;
        box-shadow: none;
        -webkit-box-shadow: none;
        margin-bottom: 30px;
    }
    select{
        padding: 16px 26px;
        margin-bottom: 30px;
        border-radius: 20px;
        width: 100%;
    }
    button{
        display: flex;
        padding: .8em 2.6em;
        margin: 20px 0;
        line-height: 1;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 30px;
        color: #fff;
        border: 1px solid #494ce8;
        background-color: #494ce8;
        font-size: 24px;
        margin: 0 auto;
        margin-top: 40px;        
    }

    a{
      display: inline-block;
      margin: 20px 0px;
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
    }
    a:hover{
      font-weight: 600;
    }

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
    
</style>