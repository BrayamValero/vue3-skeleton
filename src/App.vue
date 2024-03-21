<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Skeleton from '@components/Skeleton.vue'
import SkeletonTheme from '@components/SkeletonTheme.vue'

const title: any = ref(null)
const description: any = ref(null)

const loadData = () => {
    title.value = 'Lorem, ipsum dolor.'
    description.value = 'Lorem ipsum dolor sit amet.'
}

onMounted(() => {
    setTimeout(() => {
        loadData()
    }, 2000)
})
</script>

<template>
    <div>
        <SkeletonTheme>
            <h1>
                <Skeleton :width="120">{{ title }}</Skeleton>
            </h1>
            <p>
                <Skeleton :width="80">{{ description }}</Skeleton>
            </p>
            <p>
                <Skeleton>Hello</Skeleton>
            </p>
            <p>
                <Skeleton />
            </p>
        </SkeletonTheme>
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
