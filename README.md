# :skull: Vue3-Skeleton

Build and craft amazing loading experiences that automatically adapts to your Vue app.

This repository is inspired by [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)

## :rocket: Install

Install the package via [NPM](https://www.npmjs.com/package/@brayamvalero/vue3-skeleton)

```bash
npm i @brayamvalero/vue3-skeleton
```

### :memo: Basic usage

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

### :sparkles: Features

Adapting to your defined styles seamlessly, The `<Skeleton />` module seamlessly integrates into your components,
filling the void during loading. Unlike other frameworks where crafting a skeleton screen is a meticulous task of
matching font size, line height, and margins, our Skeleton component effortlessly adjusts to the correct dimensions.

Take, for instance:

```html
<template>
    <div class="Home">
        <h1>
            <Skeleton>{{ data.title }}</Skeleton>
        </h1>
        <p>
            <Skeleton :rows="3">{{ data.description }}</Skeleton>
        </p>
    </div>
</template>
```

This code snippet ensures the generation of precisely proportioned skeletons for both the `<h1>` and `<p>` elements
without needing any additional configuration. Moreover, it orchestrates a seamless transition, waiting until the content
is fully loaded before concealing the Skeleton and unveiling the loaded content gracefully.

Avoid creating dedicated skeleton screens; instead, fashion components with inherent skeleton states.

### :warning: Avoid the creation of dedicated skeleton screens

Instead, craft components equipped with integrated skeleton states.

**This methodology offers several advantages:**

-   **Harmonized Styles:** Ensures consistency across styles.
-   **Comprehensive Representation:** Components should embody all conceivable states, including loading.
-   **Enhanced Loading Flexibility:** Enables more adaptable loading sequences.

### :art: Theming

Customize individual skeletons with props, or render a SkeletonTheme to style all skeletons below it.

```html
<script setup>
    import { Skeleton, SkeletonTheme } from '@brayamvalero/vue3-skeleton'
    import '@brayamvalero/vue3-skeleton/dist/style.css'
</script>

<template>
    <div class="Home">
        <!-- This applies Base Color and Highligh Color to all Skeletons -->
        <SkeletonTheme base-color="#303030" highlight-color="#505050">
            <h1>
                <Skeleton>{{ data.title }}</Skeleton>
            </h1>
            <p>
                <Skeleton :rows="3">{{ data.description }}</Skeleton>
            </p>
        </SkeletonTheme>
    </div>
</template>
```

> Props declared inside `<Skeleton />` will take priority over `<SkeletonTheme />` props.

### :page_facing_up: Props Declaration

Down bellow you can take a look at each prop available.

### `<Skeleton>`

| Name           | Type      | Description                                | Default |
| -------------- | --------- | ------------------------------------------ | ------- |
| rows           | `number`  | Set component amount of rows               | `1`     |
| circle         | `boolean` | Set component `border-radius` to 50%       | `false` |
| containerClass | `string`  | Set component class to skeleton container  | `null`  |
| childClass     | `string`  | Set component class to each skeleton child | `null`  |

### `<Skeleton>` `<SkeletonTheme>`

| Name               | Type                                               | Description                                                                                                           | Default   |
| ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------- |
| width              | `string` `number`                                  | Set component `width`, it can be either number `px` or string with its corresponding css value                        | `100%`    |
| height             | `string` `number`                                  | Set component `height`, it can be either number `px` or string with its corresponding css value                       | `inherit` |
| borderRadius       | `string` `number`                                  | Set component `border-radius`, it can be either number `px` or string with its corresponding css value                | `0.25rem` |
| baseColor          | `string`                                           | Set component base color                                                                                              | `#ebebeb` |
| highlightColor     | `string`                                           | Set component highlight color animation                                                                               | `#f5f5f5` |
| animationDuration  | `number`                                           | Set component `animation-duration` in seconds                                                                         | `1.5`     |
| animationDirection | `normal` `reverse` `alternate` `alternate-reverse` | Set component `animation-direction` [Read docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) | `normal`  |
| enableAnimation    | `boolean`                                          | Set component animation status                                                                                        | `true`    |
| inline             | `boolean`                                          | Set component inline behavior                                                                                         | `false`   |

### Troubleshooting

The skeleton width is 0 when the parent has `display: flex` In the example below, the width of the skeleton will be 0:

```html
<div :style="{ display: 'flex' }">
    <Skeleton :style="{ flex: 1 }" />
</div>
```

This happens because the skeleton has no intrinsic width. You can fix it by applying `flex: 1` to the skeleton
container, you can also set this style via the `containerClass` prop.
