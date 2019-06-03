/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import {name as appName} from './app.json';
import {AppNavigator} from './navigation/AppNavigation'

const nagavite = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => nagavite);
