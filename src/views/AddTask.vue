<template>
    <div class="add-note">
        <h2>Добавить новую задачу</h2>
        <router-link to="/">К списку задач</router-link>

        <form @submit.prevent = 'addTask'>
                <div class="input-field">
                    <label> Заголовок</label>
                    <input type="text" v-model="title" required>
                </div>

                <div class="input-field">
                    <label> Описание </label>
                    <textarea v-model="desc"></textarea>
                </div>
                <button type="submit">Сохранить</button>
        </form>
    </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
    name: "AddNote",
    data: function(){
        return {
            title: '',
            desc: ''
        }
    },
    methods: {
        ...mapActions(['addTaskToLocalStorage']),

        addTask() {
            let newNote = {
                id: Date.now(),
                title: this.title,
                desc: this.desc,
                status: 'Новая',
                date: Date.now(),
            }
            this.addTaskToLocalStorage(newNote)
            this.$router.push('/')
        }
    },
}
</script>


<style scoped>

    .add-note{
        padding-top: 50px;
    }


   

    .add-note h2{
        font-size: 36px;
        text-align: center;
        margin-bottom: 30px;
    }
</style>