// Shared Props with Skeleton & Skeleton Theme
export interface SkeletonThemeProps {
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    backgroundColor?: string
    animationDuration?: number
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
