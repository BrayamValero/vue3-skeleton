<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Skeleton from '@components/Skeleton.vue'
import SkeletonTheme from '@components/SkeletonTheme.vue'

const data: any = ref({})

const loading = ref(true)
const manualLoading = ref(true)

const fetchData = () => {
    // Title & Description
    data.value.title = 'Use Vue3/Skeleton!'
    data.value.description =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, quisquam. Nostrum rerum sequi nulla consectetur, eos doloremque reprehenderit minus voluptate.'
    data.value.small = '@brayamvalero/vue3-skeleton'
    // User Profile
    data.value.img = 'https://i.imgur.com/Jvh1OQm.jpeg'
    data.value.name = 'Brayam Valero'
    data.value.role = 'Software Developer'
    data.value.email = 'example@gmail.com'
}

onMounted(() => {
    setTimeout(() => {
        fetchData()
    }, 3000)
})
</script>

<template>
    <div class="Index">
        <!-- Heading with Paragraph -->
        <section class="hero">
            <h1>
                <Skeleton>{{ data.title }}</Skeleton>
            </h1>
            <p>
                <Skeleton :rows="2">{{ data.description }}</Skeleton>
            </p>
            <small>
                <Skeleton :width="180">{{ data.small }}</Skeleton>
            </small>
        </section>
        <!-- User Profile example -->
        <section class="user">
            <picture class="user-avatar">
                <Skeleton v-if="!data.img" childClass="user-avatar" />
                <img v-else :src="data.img" />
            </picture>
            <div class="user-info">
                <h3>
                    <Skeleton :width="150">{{ data.name }}</Skeleton>
                </h3>
                <p>
                    <Skeleton :width="120">{{ data.role }}</Skeleton>
                </p>
                <small>
                    <Skeleton :width="100">{{ data.email }}</Skeleton>
                </small>
            </div>
        </section>
        <!-- User Profile manually example -->
        <h2 class="mb-2">Inline loading with static data</h2>
        <section class="user">
            <picture class="user-avatar">
                <Skeleton :loading="manualLoading" childClass="user-avatar">
                    <img :src="data.img" />
                </Skeleton>
            </picture>
            <div class="user-info">
                <h3>
                    <Skeleton :loading="manualLoading" :width="150">{{ data.name }}</Skeleton>
                </h3>
                <p>
                    <Skeleton :loading="manualLoading" :width="120">{{ data.role }}</Skeleton>
                </p>
                <small>
                    <Skeleton :loading="manualLoading" :width="100">{{ data.email }}</Skeleton>
                </small>
            </div>
        </section>

        <button @click="manualLoading = !manualLoading">Toggle Manual Loading</button>

        <!-- Inline Elements -->
        <section class="inline">
            <h2 class="mb-2">Inline loading with static data</h2>
            <span>
                <template v-if="!loading">Hello</template>
                <Skeleton v-else width="15%" inline></Skeleton>
            </span>
            <span>
                <template v-if="!loading">World</template>
                <Skeleton v-else width="15%" inline></Skeleton>
            </span>
            <span>
                <template v-if="!loading">Example</template>
                <Skeleton v-else width="15%" :height="200" inline></Skeleton>
            </span>
        </section>

        <button @click="loading = !loading">Toggle Inline Loading</button>
    </div>
</template>

<style>
section {
    margin-bottom: 2rem;
}
.hero h1 {
    margin-bottom: 0.5rem;
}
.hero p {
    margin-bottom: 0.5rem;
}
.user {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.user-avatar {
    width: 70px;
    height: 70px;

    > img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 0.25rem;
    }
}
.user-info {
    flex-grow: 1;
}
.inline > *:not(last-child) {
    margin-right: 1rem;
}
.mb-2 {
    margin-bottom: 8px;
}
</style>
