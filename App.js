import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './src/Screens/StartScreen';
import IngredientsScreen from './src/Screens/IngredientsScreen';
import FoodsScreen from './src/Screens/FoodsScreen';
import RecipeScreen from './src/Screens/RecipeScreen';

const navigator = createStackNavigator(
  {
  Start: {screen : StartScreen, navigationOptions: { headerShown: false } },
  Ingredients: {screen : IngredientsScreen, 
    navigationOptions: { title: "Ingredients", headerLeft: () => null, headerStyle: { //backgroundColor: ''
    },
    headerTitleStyle: { //color: "" 
    } } },
  Foods: {screen: FoodsScreen, navigationOptions: {title: "Foods"}},
  Recipe: {screen: RecipeScreen, navigationOptions: {title: "Recipe"}}
  }, 
  {
  initialRouteName: 'Start',
  defaultNavigationOptions: {
    title: 'YUHUHU'
  }
}
);


export default createAppContainer(navigator);
