import { Stack } from 'expo-router';

const MeditateLayout = () =>
  <Stack>
    <Stack.Screen
      name='index'
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name='[id]'
      options={{
        headerShown: false,
      }}
    />
  </Stack>;

export default MeditateLayout;