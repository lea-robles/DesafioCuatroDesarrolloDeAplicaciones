import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

//VISTAS 
import CategoriesScreen from '../screens/CategoriesScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import ProductsByCategoryScreen from '../screens/ProductsByCategoryScreen'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategoryScreen}
                />
                <Stack.Screen
                    name="Detalle del producto"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator