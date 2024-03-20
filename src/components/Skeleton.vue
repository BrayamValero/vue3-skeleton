<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    rows?: number
    width?: number
    height?: number
    containerClass?: string
    childClass?: string
    baseColor?: string
    highlightColor?: string
    animationDuration?: number
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    enableAnimation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    rows: 1,
    baseColor: '#ebebeb',
    highlightColor: '#f5f5f5',
    animationDuration: 1.5,
    animationDirection: 'normal',
    enableAnimation: true,
})

// Computed => Formatting Data
const getHeight = computed<string>(() => (props.height ? `${props.height}px` : 'inherit'))
const getWidth = computed<string>(() => (props.width ? `${props.width}px` : '100%'))
const getAnimationDuration = computed<string>(() => `${props.animationDuration}s`)
const getAnimationStatus = computed<string>(() => (props.enableAnimation ? 'block' : 'none'))
</script>

<template>
    <span class="skeleton-container" :class="[containerClass]">
        <span
            v-for="index in rows"
            class="skeleton-loading"
            :class="[childClass]"
            :key="'skeleton-loading-' + index"
            v-html="'&zwnj;'"
        ></span>
    </span>
</template>

<style>
@keyframes skeleton-loading {
    100% {
        transform: translateX(100%);
    }
}

.skeleton-loading {
    --base-color: v-bind(baseColor);
    --highlight-color: v-bind(highlightColor);
    --animation-duration: v-bind(getAnimationDuration);
    --animation-direction: v-bind(animationDirection);
    --pseudo-element-display: v-bind(getAnimationStatus);

    background-color: var(--base-color);
    width: v-bind(getWidth);
    height: v-bind(getHeight);
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
