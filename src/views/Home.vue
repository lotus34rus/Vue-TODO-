<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Список задач</h1>

    <Tasks></Tasks>

    <div class="add_btn">
        <button @click="$router.push('/add')">Добавить задачу</button>
    </div>

  </div>
</template>

<script>
import Tasks from '@/components/Tasks'

export default {
  name: 'Home',
  components: {
    Tasks
  }
}
</script>

<style lang="scss">

</style>
