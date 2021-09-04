<template>
  <q-page
    class="q-pa-md"
  >
    <div class="row q-mb-lg">
      <search />
    </div>
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
    />

    <task-todo 
      :tasksTodo="tasksTodo"
    />

    <task-completed 
      :tasksCompleted="tasksCompleted"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        dense
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task 
        @close="showAddTask = false"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import TaskCompleted from 'components/Tasks/TaskCompleted.vue'
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
    },
    methods: {
      clearMessage() {
        this.message = ''
      },
      alertMessage() {
        alert(this.message)
      }
    },
    mounted() {
      this.$root.$on('showAddTask', () => {
        this.showAddTask = true
      })

    },
    components: {
      'add-task': require('components/Tasks/Modals/AddTask.vue').default,
      'task-todo': require('components/Tasks/TaskTodo.vue').default,
      'task-completed': require('components/Tasks/TaskCompleted.vue').default,
      'no-tasks': require('components/Tasks/NoTasks.vue').default,
      'search': require('components/Tasks/Tools/Search.vue').default,
    },
  }
</script>

<
        TaskCompletedstyle>

</style>
