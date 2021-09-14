import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import {Main} from './src/components';7
import {Main, Refil, Shop} from './src/components';

// Screens and their routes
const navigator = createStackNavigator(
  {
    Main: Main,
    Refil: Refil,
    Shop: Shop,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'Main List',
      header: null,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(navigator);
