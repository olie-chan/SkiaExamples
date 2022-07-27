import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStack = {
  Home: undefined;
  CreditCardPerspective: undefined;
  Neumorphism: undefined;
  MultiOptionButton: undefined;
  Switcher: undefined;
  DVDs: undefined;
};
export const RootStackNavigator = createNativeStackNavigator<RootStack>();

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStack>>();
