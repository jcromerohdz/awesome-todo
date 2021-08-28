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

      <q-item  
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
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

        <q-item-section side>
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
      </q-item>


    </q-list>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Go to shop',
            dueDate: '2021/08/27',
            dueTime: '18:30',
            completed: false
          },
          {
            id: 2,
            name: 'Get bannanas',
            dueDate: '2021/08/28',
            dueTime: '14:00',
            completed: false
          },
          {
            id: 3,
            name: 'Get apples',
            dueDate: '2021/08/29',
            dueTime: '16:00',
            completed: false
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
