<template>
    <div>
        <h1>Карточка задачи</h1>

         <router-link to="/">К списку задач</router-link>

        <form @submit.prevent = 'editTask'>
                <div class="input-field">
                    <label> Заголовок</label>
                    <input type="text" v-model="task.title" required>
                </div>

                <div class="input-field">
                    <label> Описание </label>
                    <textarea v-model="task.desc"></textarea>
                </div>

                  <div class="input-field">
                    <label> Статус </label>
                    <select v-model="task.status">
                        <option v-for="status of statuses" :value="status.value" :key="status.id">{{status.value}}</option>
                    </select>
                </div>

                <button type="submit">Обновить</button>
                <a class="delete-btn" href="#" @click.prevent = 'removeTask'>Удалить задачу</a>
        </form>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'EditTask',
    data() {
        return {
            task: {},
            statuses: []
        }
    },

    mounted() {
        const task_id = this.$route.params.id 
        this.task = this.$store.getters.getTaskByID(task_id)
        this.statuses = this.$store.getters.getStatuses
    },

    methods: {
        ...mapActions(['updateTaskInLocalStorage']),

        editTask() {
            this.updateTaskInLocalStorage(this.task)
            this.$router.push('/')
        },

        removeTask() {
            this.$store.dispatch('removeTask', this.task.id)
            this.$router.push('/')
        }

    }
}
</script>

<style lang="scss" scoped>
.delete-btn{
    display: block;
    text-align: center;
}
    
</style>