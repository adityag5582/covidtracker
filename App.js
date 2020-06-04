import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import WorldStats from "./src/screens/WorldStats";
import CountryList from "./src/screens/CountryList";
import StateWiseIndiaStats from "./src/screens/StateWiseIndiaStats";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    World:WorldStats,
    Country:CountryList,
    India:StateWiseIndiaStats,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Covid Tracker"
    }
  }
);

export default createAppContainer(navigator);
