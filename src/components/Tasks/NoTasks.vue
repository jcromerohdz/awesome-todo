<template>
   <q-banner class="bg-green-11">
      <template v-slot:avatar>
        <q-icon name="check" color="green" />
      </template>
      Awesome no task todo today yay!
      <template v-slot:action>
        <q-btn
          @click="$root.$emit('showAddTask')"
          color="primary"
          label="Add Task" 
        />
      </template>
    </q-banner>
</template>

<script>
export default {

}
</script>

<style>

</style>