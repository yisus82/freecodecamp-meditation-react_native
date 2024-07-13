import COLORS from '@/constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () =>
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.grey,
    }}
  >
    <Tabs.Screen
      name="nature-meditate"
      options={{
        tabBarLabel: "Meditate",
        tabBarIcon: ({ color }) =>
          <MaterialCommunityIcons
            name="flower-tulip"
            size={24}
            color={color}
          />,
      }}
    />
    <Tabs.Screen
      name="affirmations"
      options={{
        tabBarLabel: "Affirmations",
        tabBarIcon: ({ color }) =>
          <Entypo
            name="open-book"
            size={24}
            color={color}
          />,
      }}
    />
  </Tabs>;

export default TabsLayout;