// Shared Props with Skeleton & Skeleton Theme
export interface SkeletonThemeProps {
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    baseColor?: string
    highlightColor?: string
    animationDuration?: number
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    enableAnimation?: boolean
    inline?: boolean
}

// Exclusive Props from Skeleton
export interface SkeletonProps extends SkeletonThemeProps {
    rows?: number
    circle?: boolean
    containerClass?: string
    childClass?: string
}
