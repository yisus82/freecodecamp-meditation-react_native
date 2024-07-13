import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ReactNode } from 'react';
import { View } from 'react-native';

const ViewWithStatusBar = ({
  children,
  style = 'light'
}: {
  children: ReactNode,
  style?: StatusBarStyle;
}) =>
  <View className="flex-1">
    <StatusBar style={style} />
    {children}
  </View>;

export default ViewWithStatusBar;