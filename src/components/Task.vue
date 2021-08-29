<template>
  <li>
    {{ task.name }}
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task'],
};
</script>

<style>
</style>