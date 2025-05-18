import { Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactScreen from './screens/ContactScreen';
import EventsScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Events: EventsScreen,
    Contacts: ContactScreen,
  },
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}