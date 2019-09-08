import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Search from "./Pages/Search";
import Category from "./Pages/Category";

const Routes = createAppContainer(
  createSwitchNavigator({
    Search,
    Category
  })
);

export default Routes;
