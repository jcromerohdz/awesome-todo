<template>
  <q-input
    v-model="searchField"
    outlined
    class="col"
    label="Search"
  >

    <template v-slot:append>
    <q-icon
      v-if="searchField !== ''"
      name="close"
      @click="searchField = ''"
      class="cursor-pointer" 
    />
      <q-icon name="search" />
    </template>

  </q-input>  
</template>

<script>
import  { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        

      }
    }
  }

}
</script>

<style>

</style>