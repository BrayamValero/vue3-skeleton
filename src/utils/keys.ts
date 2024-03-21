// keys.ts
import type { InjectionKey } from 'vue'
import { SkeletonThemeProps } from '@/types/index.types'

export const themeInjection = Symbol() as InjectionKey<SkeletonThemeProps>
