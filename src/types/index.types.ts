// Shared Props with Skeleton & Skeleton Theme
export interface SkeletonThemeProps {
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    enableAnimation?: boolean
    inline?: boolean
    baseColor?: string
    highlightColor?: string
    animationDuration?: number
    animationDirection?: 'normal' | 'reverse'
    customHighlightBackground?: string
}

// Exclusive Props from Skeleton
export interface SkeletonProps extends SkeletonThemeProps {
    rows?: number
    circle?: boolean
    containerClass?: string
    childClass?: string
    loading?: boolean
}
