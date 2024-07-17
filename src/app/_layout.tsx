import '@/styles/global.css';

import { Slot } from 'expo-router';
import { StatusBar } from 'react-native';

import { View } from 'react-native';

import { Loading } from '@/components/loading';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return Loading();
  }

  return (
    <View className='flex-1 bg-zinc-950'>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
        translucent
      />
      <Slot />
    </View>
  );
}
