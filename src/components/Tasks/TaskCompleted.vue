<template>

    <q-list
      v-if="Object.keys(tasksCompleted).length" 
      separator
      bordered 
      class="q-mt-lg"
    >

      <q-item-label 
        header
        class="bg-green-7 text-white text-center text-bold"
      >
        You completed this tasks!!
      </q-item-label>

      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      ></task>

    </q-list>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }

}
</script>

<style>

</style>