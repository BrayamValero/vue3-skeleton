<script lang="ts" setup>
import { type SkeletonThemeProps } from '@/types/index.types'
import { ThemeInjection } from '@/utils/keys'
import { provide } from 'vue'

const props = withDefaults(defineProps<SkeletonThemeProps>(), {
    enableAnimation: undefined,
    inline: undefined,
})

provide(ThemeInjection, props)
</script>

<template>
    <div class="skeleton-theme">
        <slot></slot>
    </div>
</template>
