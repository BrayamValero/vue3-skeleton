<script lang="ts" setup>
import { inject, computed, useSlots, type CSSProperties } from 'vue'
import { ThemeInjection } from '@/utils/keys'
import { type SkeletonProps } from '@/types/index.types'

const props = withDefaults(defineProps<SkeletonProps>(), {
    rows: 1,
    enableAnimation: undefined,
    inline: undefined,
    loading: undefined,
})

const theme = inject(ThemeInjection, {})

const getRows = computed<number>(() => {
    const { rows } = props
    return Math.floor(rows)
})

const slots: any = useSlots()

const getLoadingStatus = computed<boolean>(() => {
    if (props.loading !== undefined) return !props.loading

    if (slots.default) return slots.default()[0].children || false
})

const getStyles = (): CSSProperties => {
    const style = {} as CSSProperties

    const width = props.width ?? theme.width ?? null
    const height = props.height ?? theme.height ?? null
    const borderRadius = props.borderRadius ?? theme.borderRadius ?? null
    const baseColor = props.baseColor ?? theme.baseColor ?? null
    const highlightColor = props.highlightColor ?? theme.highlightColor ?? null
    const animationDuration = props.animationDuration ?? theme.animationDuration ?? null
    const animationDirection = props.animationDirection ?? theme.animationDirection ?? 'normal'
    const enableAnimation = props.enableAnimation ?? theme.enableAnimation ?? null
    const customHighlightBackground = props.customHighlightBackground ?? theme.customHighlightBackground ?? undefined
    const circle = props.circle

    // Convert Width
    convertToPx(width, 'width', style)

    // Convert Height
    convertToPx(height, 'height', style)

    // Convert BorderRadius
    convertToPx(borderRadius, 'borderRadius', style)

    // Rounded Circle
    if (circle) style.borderRadius = '50%'

    // Set Custom CSS Variables based on props or theme
    if (baseColor) style['--base-color'] = baseColor
    if (highlightColor) style['--highlight-color'] = highlightColor
    if (animationDuration) style['--animation-duration'] = `${animationDuration}s`
    if (animationDirection) style['--animation-direction'] = animationDirection
    if (enableAnimation !== undefined) {
        style['--pseudo-element-display'] = 'block'
    } else {
        style['--pseudo-element-display'] = enableAnimation ? 'block' : 'none'
    }
    if (customHighlightBackground) {
        style['--custom-highlight-background'] = customHighlightBackground
    }

    return style
}

// Convert numbers to px
function convertToPx(value: string | number | null, name: 'width' | 'height' | 'borderRadius', style: CSSProperties) {
    if (typeof value === 'string') {
        style[name] = value
    } else if (typeof value === 'number') {
        style[name] = `${value}px`
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
@keyframes loading-skeleton {
    100% {
        transform: translateX(100%);
    }
}

.skeleton-loading {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block;

    background-color: var(--base-color);
    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;
    position: relative;
    user-select: none;
    overflow: hidden;
}

.skeleton-loading::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: var(
        --custom-highlight-background,
        linear-gradient(90deg, var(--base-color) 0%, var(--highlight-color) 50%, var(--base-color) 100%)
    );
    transform: translateX(-100%);

    animation-name: loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@media (prefers-reduced-motion) {
    .skeleton-loading {
        --pseudo-element-display: block;
    }
}
</style>
