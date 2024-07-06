import { StatusBar } from 'expo-status-bar'

import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white ">
      <Text className='text-red-500 text-5xl'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
