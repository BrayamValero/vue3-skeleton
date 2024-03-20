<script lang="ts" setup>
import { provide } from 'vue'

interface Props {
    baseColor?: string
    highlightColor?: string
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    animationDuration?: number
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    enableAnimation?: boolean
    inline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    baseColor: '#ebebeb',
    highlightColor: '#f5f5f5',
    width: '100%',
    height: 'inherit',
    borderRadius: '0.25rem',
    animationDuration: 1.5,
    animationDirection: 'normal',
    enableAnimation: true,
    inline: false,
})

// https://vuejs.org/guide/components/provide-inject.html#working-with-symbol-keys
provide('themeProps', props)
</script>

<template>
    <div class="SkeletonTheme">
        <slot></slot>
    </div>
</template>

<
