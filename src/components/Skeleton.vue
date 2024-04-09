<script lang="ts" setup>
import { inject, computed, useSlots, type CSSProperties } from 'vue'
import { ThemeInjection } from '@/utils/keys'
import { type SkeletonProps } from '@/types/index.types'

const props = withDefaults(defineProps<SkeletonProps>(), {
    rows: 1,
    enableAnimation: undefined,
    inline: undefined,
})

const theme = inject(ThemeInjection, {})

const getRows = computed<number>(() => {
    const { rows } = props
    return Math.floor(rows)
})

const slots: any = useSlots()

const getLoadingStatus = computed<boolean>(() => {
    if (slots.default) return slots.default()[0].children || false
})

const getStyles = (): CSSProperties => {
    const style = {} as CSSProperties

    const width = props.width ?? theme.width ?? null
    const height = props.height ?? theme.height ?? null
    const borderRadius = props.borderRadius ?? theme.borderRadius ?? null
    const backgroundColor = props.backgroundColor ?? theme.backgroundColor ?? null
    const animationDuration = props.animationDuration ?? theme.animationDuration ?? null
    const enableAnimation = props.enableAnimation ?? theme.enableAnimation ?? null
    const circle = props.circle

    // Convert Width
    convertToPx(width, style)

    // Convert Height
    convertToPx(height, style)

    // Convert BorderRadius
    convertToPx(borderRadius, style)

    // Rounded Circle
    if (circle) style.borderRadius = '50%'

    // Background Color
    if (backgroundColor) style.backgroundColor = backgroundColor

    // Animation Duration
    if (animationDuration) style.animationDuration = `${animationDuration}s`

    // Animation Play State
    if (enableAnimation) style.animationPlayState = enableAnimation ? 'running' : 'paused'

    return style
}

// Convert numbers to px
function convertToPx(value: string | number | null, style: CSSProperties) {
    if (typeof value === 'string') {
        style.width = value
    } else if (typeof value === 'number') {
        style.width = `${value}px`
    }
}
</script>

<template>
    <span v-if="!getLoadingStatus" class="skeleton-container" :class="containerClass">
        <template v-for=" in getRows">
            <span :style="getStyles()" :class="['skeleton-loading', childClass]" v-html="'&zwnj;'"></span>
            <br v-if="!inline" />
        </template>
    </span>
    <slot v-else></slot>
</template>

<style>
@keyframes placeholder-glow {
    50% {
        opacity: 0.5;
    }
}

.skeleton-loading {
    width: 100%;
    height: inherit;
    border-radius: 0.25rem;
    background-color: #e1e1e1;
    display: inline-flex;
    line-height: 1;
    position: relative;
    user-select: none;
    overflow: hidden;
    animation: placeholder-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
