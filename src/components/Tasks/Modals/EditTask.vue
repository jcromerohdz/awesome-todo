<template>
  <q-card>
    
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">

        <modal-header>Edit Task</modal-header>
        
        <modal-task-name 
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />

        <modal-due-date 
          :dueDate.sync="taskToSubmit.dueDate"
        />

        <modal-due-time
          :dueTime.sync="taskToSubmit.dueTime"
          :dueDate.sync="taskToSubmit.dueDate"
        />

      </q-card-section>

      <modal-button />

    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {
      },
    } 
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-button': require('components/Tasks/Modals/Shared/ModalButton.vue').default
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)

  }
};
</script>

<style>
</style>