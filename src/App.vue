<script lang="ts" setup>
import Skeleton from '@components/Skeleton.vue'
</script>

<template>
    <div>
        <h1 class="mb-4">
            <Skeleton width="200" height="200" />
        </h1>
        <p>
            <Skeleton :rows="3" animation-direction="alternate" />
        </p>
    </div>
</template>
