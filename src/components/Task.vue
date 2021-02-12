<template>
   <div :class="['task__card', statusClasses.get(task.status)]">
      <div class="task__card-header">
          <p>{{task.title}}</p>
        <div class="task__card-btns">
            <img src='../assets/edit.svg' style="cursor: pointer;" @click="$router.push(`/task/${task.id}`)">
            <img src='../assets/delete.svg' style="cursor: pointer;" @click="$emit('removeTask', task.id)">
        </div>

      </div>

      <div class="task__card-body">
          <p>{{task.desc}}</p>
           <span>{{task.status}} - </span> <span>{{new Date(task.date).toLocaleDateString('ru-RU')}}</span>
     </div>            
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: ['task'],
    computed: {
         statusClasses : () => new Map([
            ['Новая', 'task--gray'],
            ['В работе', 'task--blue'],
            ['Выполнено', 'task--green']
        ])
    }
}
</script>



<style scoped>
    

    .task__card{
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #fff;
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0 30px 30px rgba(0,0,0,.02);
        border:1px solid lightgray;
    }

    .task__card:hover{
        box-shadow: 0 30px 30px rgba(0,0,0,.04);
        transform: translateY(-6px);
        transition-delay: 0s!important;
    }


    .task__card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .task__card-header p {
        font-size: 22px;
        color: #402caf;
    }

    .task__card-body p {
        margin: 20px 0;
    }
    .task__card-body span {
        font-size: 14px;
        color: #999;
    }
    .task__card-btns{
        display: flex;
        align-items: center;
    }

    .task__card-btns img{
        width: 24px;
        height: 24px;
        margin: 0px 5px;
    }

    .task--gray{
        background-color: aliceblue;
    }

    .task--blue{
        background-color: lightskyblue;
    }

    .task--green {
        background-color: greenyellow;
    }
</style>