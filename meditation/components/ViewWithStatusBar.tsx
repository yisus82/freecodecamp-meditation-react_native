import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ReactNode } from 'react';
import { View } from 'react-native';

const ViewWithStatusBar = ({
  children,
  additionalStyles,
  statusBarStyle = 'light'
}: {
  children: ReactNode,
  additionalStyles?: string,
  statusBarStyle?: StatusBarStyle;
}) =>
  <View className={`flex-1 ${additionalStyles}`.trimEnd()}>
    <StatusBar style={statusBarStyle} />
    {children}
  </View>;

export default ViewWithStatusBar;