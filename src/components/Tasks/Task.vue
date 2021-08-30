<template>
      <q-item  
        @click="updateTask({id: id, updates: { completed: !task.completed }})"
        :class="!task.completed ? 'bg-indigo-1' : 'bg-green-11' "
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strike' : task.completed }"
          >
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section 
          v-if="task.dueDate"
          side
        >
          <div class="row">
            <div class="column justify-center">
              <q-icon
                name="event" 
                size="18px"
                class="q-mr-xs"
              />
            </div>
            <div class="column">

              <q-item-label
                class="row justify-end"
                caption
              >
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label
                class="row justify-end"
                caption
              >
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <q-item-section side>
          <div class="row">

            <q-btn
              @click.stop="showEditTask=true"
              flat
              round
              dense
              color="light-blue-4"
              icon="edit" 
            />
            <q-btn
              @click.stop="prompToDelete(id)"
              flat
              round
              dense
              color="red-13"
              icon="delete" 
            />
          </div>
        </q-item-section>
        <q-dialog v-model="showEditTask">
          <edit-task 
            @close="showEditTask = false"
            :task="task"
            :id="id"
          />
        </q-dialog>
      </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    }

  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    prompToDelete(id){
       this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure to delete task?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>

<style>

</style>