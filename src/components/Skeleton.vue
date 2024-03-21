<script lang="ts" setup>
import { inject, computed, useSlots } from 'vue'
import { ThemeInjection } from '@/utils/keys'
import { type SkeletonProps } from '@/types/index.types'

const props = withDefaults(defineProps<SkeletonProps>(), {
    rows: 1,
    enableAnimation: undefined,
    inline: undefined,
})

const theme = inject(ThemeInjection, {})
const slots: any = useSlots()

// Hack AKA Tweak => Computed Props with default values
const _props = computed(() => {
    return {
        width: props.width ?? theme.width ?? '100%',
        height: props.height ?? theme.height ?? 'inherit',
        borderRadius: props.borderRadius ?? theme.borderRadius ?? '0.25rem',
        baseColor: props.baseColor ?? theme.baseColor ?? '#ebebeb',
        highlightColor: props.highlightColor ?? theme.highlightColor ?? '#f5f5f5',
        animationDuration: props.animationDuration ?? theme.animationDuration ?? 1.5,
        animationDirection: props.animationDirection ?? theme.animationDirection ?? 'normal',
        enableAnimation: props.enableAnimation ?? theme.enableAnimation ?? true,
        inline: props.inline ?? theme.inline ?? false,
    }
})

// Computed => Formatting Data
const getHeight = computed<string>(() => {
    const { height } = _props.value
    return typeof height === 'number' ? `${height}px` : height
})
const getWidth = computed<string>(() => {
    const { width } = _props.value
    return typeof width === 'number' ? `${width}px` : width
})

const getBorderRadius = computed<string>(() => {
    const { borderRadius } = _props.value
    return typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius
})
const getAnimationDuration = computed<string>(() => {
    const { animationDuration } = _props.value
    return `${animationDuration}s`
})

const getAnimationStatus = computed<string>(() => {
    const { enableAnimation } = _props.value
    return enableAnimation ? 'block' : 'none'
})
const getRoundedCircle = computed<string | boolean>(() => {
    const { circle } = props
    return circle ? 'skeleton-loading-circle' : false
})

const getRows = computed<number>(() => {
    const { rows } = props
    return Math.floor(rows)
})

const getLoading = computed<boolean>(() => {
    if (slots.default) return slots.default()[0].children || false
})
</script>

<template>
    <span v-if="!getLoading" class="skeleton-container" :class="[containerClass]">
        <template v-for=" in getRows">
            <span class="skeleton-loading" :class="[childClass, getRoundedCircle]" v-html="'&zwnj;'"></span>
            <br v-if="!inline" />
        </template>
    </span>
    <slot v-else></slot>
</template>

<style>
@keyframes skeleton-loading {
    100% {
        transform: translateX(100%);
    }
}

.skeleton-loading {
    --base-color: v-bind(_props.baseColor);
    --highlight-color: v-bind(_props.highlightColor);
    --animation-direction: v-bind(_props.animationDirection);
    --animation-duration: v-bind(getAnimationDuration);
    --pseudo-element-display: v-bind(getAnimationStatus);

    background-color: var(--base-color);
    width: v-bind(getWidth);
    height: v-bind(getHeight);
    border-radius: v-bind(getBorderRadius);
    display: inline-flex;
    line-height: 1;
    position: relative;
    user-select: none;
    overflow: hidden;
}

.skeleton-loading.skeleton-loading-circle {
    border-radius: 50%;
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
    background-image: linear-gradient(90deg, var(--base-color), var(--highlight-color), var(--base-color));
    transform: translateX(-100%);

    animation-name: skeleton-loading;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@media (prefers-reduced-motion) {
    .skeleton-loading {
        /* Disable animation */
        --pseudo-element-display: none;
    }
}
</style>
