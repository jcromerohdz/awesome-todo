<template>
  <div class="row q-mb-sm">
    <q-input
      rounded
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      ref="name"
      label="Task Name" 
      class="col"
    />
  </div>
</template>

<script>
export default {
  props: ['name']

}
</script>

<style>

</style>