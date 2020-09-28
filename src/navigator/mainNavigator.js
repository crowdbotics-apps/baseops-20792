import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7114358Navigator from '../features/BlankScreen7114358/navigator';
import BlankScreen6114357Navigator from '../features/BlankScreen6114357/navigator';
import SignIn26114266Navigator from '../features/SignIn26114266/navigator';
import BlankScreen4114265Navigator from '../features/BlankScreen4114265/navigator';
import BlankScreen3114264Navigator from '../features/BlankScreen3114264/navigator';
import BlankScreen2114263Navigator from '../features/BlankScreen2114263/navigator';
import BlankScreen1114262Navigator from '../features/BlankScreen1114262/navigator';
import BlankScreen0114261Navigator from '../features/BlankScreen0114261/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7114358: { screen: BlankScreen7114358Navigator },
BlankScreen6114357: { screen: BlankScreen6114357Navigator },
SignIn26114266: { screen: SignIn26114266Navigator },
BlankScreen4114265: { screen: BlankScreen4114265Navigator },
BlankScreen3114264: { screen: BlankScreen3114264Navigator },
BlankScreen2114263: { screen: BlankScreen2114263Navigator },
BlankScreen1114262: { screen: BlankScreen1114262Navigator },
BlankScreen0114261: { screen: BlankScreen0114261Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
