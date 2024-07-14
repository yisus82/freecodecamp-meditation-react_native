import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { ReactNode } from 'react';
import { View } from 'react-native';

interface ViewWithStatusBarProps {
  children: ReactNode;
  additionalStyles?: string;
  statusBarStyle?: StatusBarStyle;
}

const ViewWithStatusBar = ({ children, additionalStyles = '', statusBarStyle = 'light' }: ViewWithStatusBarProps) =>
  <View className={`flex-1 ${additionalStyles}`.trimEnd()}>
    <StatusBar style={statusBarStyle} />
    {children}
  </View>;

export default ViewWithStatusBar;