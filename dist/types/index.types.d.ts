export interface SkeletonThemeProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    backgroundColor?: string;
    animationDuration?: number;
    enableAnimation?: boolean;
    inline?: boolean;
}
export interface SkeletonProps extends SkeletonThemeProps {
    rows?: number;
    circle?: boolean;
    containerClass?: string;
    childClass?: string;
}
