<template>
  <q-card>
    <q-card-section
      class="row"
    >
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        color="red"
        icon="close" 
      />

    </q-card-section>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            rounded
            outlined
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            ref="name"
            label="Task Name" 
            class="col"
          />
        </div>

        <div class="row q-mb-sm">
          <q-input
            rounded
            outlined
            label="Due date"
            v-model="taskToSubmit.dueDate"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div 
          v-if="taskToSubmit.dueDate"
          class="row q-mb-sm"
        >
          <q-input
            rounded
            outlined
            label="Due Time"
            v-model="taskToSubmit.dueTime"
          >
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="taskToSubmit.dueTime">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
        </div>
        
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>
    </form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      },
    } 
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      console.log('submitTask')
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  }
};
</script>

<style>
</style>