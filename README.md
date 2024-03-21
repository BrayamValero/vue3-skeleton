## Install

Install the package via NPM

```bash
npm i @brayamvalero/vue3-skeleton
```

## Basic usage

Install the plugin globally.

```tsx
import { createApp } from 'vue'
import App from './App.vue'
// Import the component library & Stylesheet
import Skeleton from '@brayamvalero/vue3-skeleton'
import '@brayamvalero/vue3-skeleton/dist/style.css'

createApp(App)
    // Install the Skeleton Plugin
    .use(Skeleton)
    .mount('#app')
```

Or, install the plugin locally, whether be `<script>` or `<script setup>`

```html
<script>
    import { Skeleton } from '@brayamvalero/vue3-skeleton'
    import '@brayamvalero/vue3-skeleton/dist/style.css'

    export default {
        components: { Skeleton },
    }
</script>
```

```html
<script setup>
    import { Skeleton } from '@brayamvalero/vue3-skeleton'
    import '@brayamvalero/vue3-skeleton/dist/style.css'
</script>
```

Now, you're ready to go

```html
<template>
    <div class="Home">
        <h1>
            <!--Skeleton will inherit <h1> height -->
            <Skeleton />
        </h1>
        <p>
            <!--Skeleton will inherit <p> height -->
            <Skeleton :rows="3" />
        </p>
    </div>
</template>
```
