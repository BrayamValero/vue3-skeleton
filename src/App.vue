<script lang="ts" setup>
import { ref } from 'vue'
import Skeleton from '@components/Skeleton.vue'
import SkeletonTheme from '@components/SkeletonTheme.vue'

const isEnabled = ref(true)

const toggleProps = () => {
    isEnabled.value = !isEnabled.value
}
</script>

<template>
    <div>
        <picture class="avatar">
            <Skeleton circle :width="70" :height="70" />
        </picture>
        <SkeletonTheme :enable-animation="isEnabled">
            <h1><Skeleton /></h1>
            <h2><Skeleton /></h2>
            <p>
                <Skeleton :rows="5" :enable-animation="false" />
            </p>
            <p>
                <Skeleton :rows="2" />
            </p>
        </SkeletonTheme>

        <div class="flex">
            <Skeleton class="flex-child" :rows="2" />
        </div>

        <button @click="toggleProps">Toggle Props</button>
    </div>
</template>

<style>
.flex {
    display: flex;
}
.flex-child {
    flex: 1;
}
.avatar {
    display: block;
    width: 70px;
    height: 70px;
}
</style>
