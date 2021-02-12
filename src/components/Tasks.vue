<template>
  <div class="tasks">
    <Loader v-if="loading" />
    <div v-else-if="tasks.length == 0">
        <p>Нет активных задач!</p>
    </div>

    <div class="tasks__list" v-else>
      <Task
        v-for="item of tasks"
        :key="item.id"
        :task="item"
        @removeTask="removeTask"
      ></Task>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
import Loader from "@/components/Loader";

export default {
  name: "TasksList",
  components: {
    Task,
    Loader,
  },
  data() {
    return {
      tasks: [],
      loading: true,
    };
  },

  mounted() {
    this.tasks = this.$store.getters.getTasks.reverse();
    setTimeout(() => {
      this.loading = false
    }, 1500);
  },

  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id != id);
      this.$store.dispatch("removeTask", id);
    },
  },
};
</script>

<style lang="scss">
.tasks__list {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.tasks {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 40px;
  min-height: 150px;
}
</style>