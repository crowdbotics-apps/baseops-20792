import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings114615Navigator from '../features/Settings114615/navigator';
import SignIn2114613Navigator from '../features/SignIn2114613/navigator';
import BlankScreen9114360Navigator from '../features/BlankScreen9114360/navigator';
import BlankScreen8114359Navigator from '../features/BlankScreen8114359/navigator';
import BlankScreen7114358Navigator from '../features/BlankScreen7114358/navigator';
import BlankScreen6114357Navigator from '../features/BlankScreen6114357/navigator';
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
Settings114615: { screen: Settings114615Navigator },
SignIn2114613: { screen: SignIn2114613Navigator },
BlankScreen9114360: { screen: BlankScreen9114360Navigator },
BlankScreen8114359: { screen: BlankScreen8114359Navigator },
BlankScreen7114358: { screen: BlankScreen7114358Navigator },
BlankScreen6114357: { screen: BlankScreen6114357Navigator },
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
