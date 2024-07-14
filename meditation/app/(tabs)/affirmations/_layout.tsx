import { Stack } from "expo-router";

const AffirmationsLayout = () =>
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="[id]"
      options={{
        headerShown: false,
      }}
    />
  </Stack>;

export default AffirmationsLayout;