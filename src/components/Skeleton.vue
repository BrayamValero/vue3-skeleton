<script lang="ts" setup>
interface Props {
  variant: any;
}

defineProps<Props>();
</script>

<template>
  <span class="skeleton" :class="[variant]"></span>
</template>

<style scoped>
.skeleton {
  display: inline-block;
  width: 100%;
  height: 10px;
  background-color: #c1c1c1;
}
</style>
