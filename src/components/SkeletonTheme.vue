<script lang="ts" setup>
import { themeInjection } from '@/utils/keys'
import { SkeletonThemeProps } from '@/types/index.types'
import { provide } from 'vue'

const props = withDefaults(defineProps<SkeletonThemeProps>(), {
    baseColor: '#ebebeb',
    highlightColor: '#f5f5f5',
    width: '100%',
    height: 'inherit',
    borderRadius: '0.25rem',
    animationDuration: 1.5,
    animationDirection: 'normal',
    enableAnimation: undefined,
    inline: undefined,
})

provide(themeInjection, props)
</script>

<template>
    <div class="skeleton-theme">
        <slot></slot>
    </div>
</template>
