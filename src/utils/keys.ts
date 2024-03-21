// keys.ts
import type { InjectionKey } from 'vue'
import { type SkeletonThemeProps } from '@/types/index.types'

export const ThemeInjection = Symbol() as InjectionKey<SkeletonThemeProps>
