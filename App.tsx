import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MovieListScreen from './Screens/MovieListScreen';
import WatchedMoviesScreen from './Screens/WatchedMovieScreen';
import AddMovieScreen from './Screens/AddMovieScreen';
import MovieDetailsScreen from './Screens/MovieDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MovieListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'Movie List' }} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Movie Details' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="MovieListStack"
            component={MovieListStack}
            options={{
              tabBarLabel: 'Movies',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="movie-open" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="WatchedMovies"
            component={WatchedMoviesScreen}
            options={{
              tabBarLabel: 'Watched',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="checkbox-marked" color={color} size={size} />,
            }}
          />
          <Tab.Screen
            name="AddMovie"
            component={AddMovieScreen}
            options={{
              tabBarLabel: 'Add Movie',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
