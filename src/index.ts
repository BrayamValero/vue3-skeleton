import { App } from "vue";

// Export Individual Components
import Skeleton from "@components/Skeleton.vue";
import Test from "@components/Test.vue";

export { Skeleton, Test };

// Export the entire library as a plugin, so it can be installed via app.use()
export default {
  install: (app: App) => {
    app.component("Skeleton", Skeleton);
    app.component("Test", Test);
  },
};
