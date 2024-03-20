<script lang="ts" setup>
import { computed, inject } from 'vue'

const themeProps = inject('themeProps', {})

interface Props {
    rows?: number
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    circle?: boolean
    containerClass?: string
    childClass?: string
    baseColor?: string
    highlightColor?: string
    animationDuration?: number
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    enableAnimation?: boolean
    inline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    // Skeleton Default Props...
    rows: 1,
    // SkeletonTheme Default Props...
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

// Computed => Formatting Data
const getHeight = computed<string>(() => (typeof props.height === 'number' ? `${props.height}px` : props.height))
const getWidth = computed<string>(() => (typeof props.width === 'number' ? `${props.width}px` : props.width))
const getBorderRadius = computed<string>(() =>
    typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
)
const getAnimationDuration = computed<string>(() => `${props.animationDuration}s`)
const getAnimationStatus = computed<string>(() => (props.enableAnimation ? 'block' : 'none'))
const getRoundedCircle = computed<string | boolean>(() => (props.circle ? 'skeleton-loading-circle' : false))
</script>

<template>
    <span class="skeleton-container" :class="[containerClass]">
        <pre>Child ThemeProps: {{ themeProps }}</pre>
        <pre>Child Props: {{ props }}</pre>
        <!-- <template v-for="index: number in rows" :key="'skeleton-loading-' + index">
            <span class="skeleton-loading" :class="[childClass, getRoundedCircle]" v-html="'&zwnj;'"></span>
            <br v-if="!inline" />
        </template> -->
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
