<script lang="ts" setup>
import Skeleton from '@components/Skeleton.vue'
</script>

<template>
    <div>
        <h1>
            <Skeleton :width="90" :rows="3" />
        </h1>
        <h1>
            <Skeleton :width="90" :rows="3" inline />
        </h1>
        <div class="avatar">
            <Skeleton child-class="avatar" circle />
        </div>
        <h1 class="mb-4">
            <Skeleton width="200" height="200" />
        </h1>
        <p>
            <Skeleton :rows="3" animation-direction="alternate" />
        </p>
    </div>
</template>

<style>
.avatar {
    width: 70px;
    height: 70px;
}
</style>
