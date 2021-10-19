import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BlogListScreen from './src/screens/BlogListScreen';
import BlogViewScreen from './src/screens/BlogViewScreen';
import BlogCreateScreen from './src/screens/BlogCreateScreen';
import BlogEditScreen from './src/screens/BlogEditScreen';
import { Provider } from './src/context/BlogContext';
const navigator = createStackNavigator(
  {
    BlogList: BlogListScreen,
    BlogView: BlogViewScreen,
    BlogCreate: BlogCreateScreen,
    BlogEdit: BlogEditScreen,
  },
  {
    initialRouteName: 'BlogList',
    defaultNavigationOptions: { title: 'Blog list' },
  }
);

//export default createAppContainer(navigator);
// createAppContainer(navigator) is React Navigation Stack Navigator

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
