import { type App } from 'vue'

// Export Individual Components
import Skeleton from '@components/Skeleton.vue'
import SkeletonTheme from '@components/SkeletonTheme.vue'

export { Skeleton, SkeletonTheme }

// Export the entire library as a plugin, so it can be installed via app.use()
export default {
    install: (app: App) => {
        app.component('Skeleton', Skeleton)
        app.component('SkeletonTheme', SkeletonTheme)
    },
}
