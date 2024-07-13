import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AppGradient = ({
  children,
  colors,
}: {
  children: ReactNode;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;