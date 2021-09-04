<template>
    <q-list
      v-if="Object.keys(tasksTodo).length" 
      separator
      bordered 
    >

      <q-item-label 
        header
        class="bg-blue-grey text-white text-center text-bold"
      >
        Todo
      </q-item-label>

      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      ></task>

    </q-list>

</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }

}
</script>

<style>

</style>