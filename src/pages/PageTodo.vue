<template>
  <q-page
    padding
  >
    <p>Todo Page</p>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            name: 'Go to shop',
            dueDate: '2021/08/27',
            dueTime: '18:30'
          },
          {
            name: 'Get bannanas',
            dueDate: '2021/08/28',
            dueTime: '14:00'
          },
          {
            name: 'Get apples',
            dueDate: '2021/08/29',
            dueTime: '16:00'
          },
        ]
      }
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
      'task': require('components/Task.vue').default
    }
  }
</script>

<style>

</style>
