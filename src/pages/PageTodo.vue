<template>
  <q-page
    class="q-pa-md"
  >
    <q-list 
      separator
      bordered 
    >

      <q-item-label 
        header
        class="bg-blue-grey text-white"
      >
        Todo
      </q-item-label>

      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>

    </q-list>
  </q-page>
</template>

<script>
import Task from 'components/Task.vue'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        dumy: ''
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    methods: {
      clearMessage() {
        this.message = ''
      },
      alertMessage() {
        alert(this.message)
      }
    },
    components: {
      'task': require('components/Tasks/Task.vue').default
    },
  }
</script>

<style>

</style>
