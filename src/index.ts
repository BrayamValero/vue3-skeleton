import { App } from "vue";

// Export Individual Components
import Skeleton from "@components/Skeleton.vue";

export { Skeleton };

// Export the entire library as a plugin, so it can be installed via app.use()
export default {
  install: (app: App) => {
    app.component("Skeleton", Skeleton);
  },
};
