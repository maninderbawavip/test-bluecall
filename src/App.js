import { StackNavigator } from 'react-navigation';
import SearchScreen from './screens/Search';
import DetailScreen from './screens/Details';
import SplashScreen from './screens/Splash';

export default StackNavigator({
	Splash: { screen: SplashScreen },
	Search: { screen: SearchScreen },
	Detail: {screen: DetailScreen }
});