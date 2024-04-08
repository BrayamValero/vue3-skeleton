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

    const width = props.width ?? theme.width ?? '100%'
    const height = props.height ?? theme.height ?? 'inherit'
    const circle = props.circle
    const borderRadius = props.borderRadius ?? theme.borderRadius ?? '0.25rem'
    const backgroundColor = props.backgroundColor ?? theme.backgroundColor ?? '#ebebeb'
    const animationDuration = props.animationDuration ?? theme.animationDuration ?? 1.5
    const animationDirection = props.animationDirection ?? theme.animationDirection ?? 'normal'
    const enableAnimation = props.enableAnimation ?? theme.enableAnimation ?? true

    // Width
    if (typeof width === 'string') {
        style.width = width
    } else if (typeof width === 'number') {
        style.width = `${width}px`
    }

    // Height
    if (typeof height === 'string') {
        style.height = height
    } else if (typeof height === 'number') {
        style.height = `${height}px`
    }

    // Circle
    if (circle) {
        style.borderRadius = '50%'
    } else {
        // BorderRadius
        if (typeof borderRadius === 'string') {
            style.borderRadius = borderRadius
        } else if (typeof borderRadius === 'number') {
            style.borderRadius = `${borderRadius}px`
        }
    }

    // Background Color
    style.backgroundColor = backgroundColor

    // Animation Duration
    style.animationDuration = `${animationDuration}s`

    // Animation Direction
    style.animationDirection = animationDirection

    // Animation Play State
    style.animationPlayState = enableAnimation ? 'running' : 'paused'

    return style
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
        opacity: 0.2;
    }
}

.skeleton-loading {
    display: inline-flex;
    line-height: 1;
    position: relative;
    user-select: none;
    overflow: hidden;
    animation-name: placeholder-glow;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
</style>
