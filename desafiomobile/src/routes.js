import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Main from "./Pages/Main";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home: { screen: Main }
  })
);

export default Routes;
