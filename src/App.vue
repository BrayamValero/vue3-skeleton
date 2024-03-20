<script lang="ts" setup>
import { ref } from 'vue'
import Skeleton from '@components/Skeleton.vue'
import SkeletonTheme from '@components/SkeletonTheme.vue'

const isEnabled = ref(false)

const toggleProps = () => {
    console.log('Toggled...')
    isEnabled.value = !isEnabled.value
}
</script>

<template>
    <div>
        <SkeletonTheme :enable-animation="isEnabled">
            <p>
                <Skeleton :rows="3" inline />
            </p>
        </SkeletonTheme>

        <button @click="toggleProps">Toggle Props</button>
    </div>
</template>

<style>
.avatar {
    width: 70px;
    height: 70px;
}
</style>
