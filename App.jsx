import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./front-src/screens/HomeScreen";
import ProductScreen from "./front-src/screens/ProductScreen";


const navigator = createStackNavigator(
  //Neste primeiro colchete estarão todos as telas que serão renderizadas na tela através da pilha
  {
    Home: HomeScreen,
    ProductPage: ProductScreen
  },
  //Esse segundo componente fornece a primeira tela que irá aparecer e o título desta tela.
  {
    initialRouteName: 'Home', //indica qual é o primeiro componente que será mostrado na tela
    defaultNavigationOptions: {
      title: "McLE",
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);