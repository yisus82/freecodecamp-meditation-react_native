import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  buttonAdditionalClassNames?: string;
  textAdditionalClassNames?: string;
}

const Button = ({
  text,
  onPress,
  buttonAdditionalClassNames = '',
  textAdditionalClassNames = '',
}: ButtonProps) =>
  <TouchableOpacity
    activeOpacity={0.7}
    className={`bg-white rounded-xl min-h-[50px] justify-center items-center ${buttonAdditionalClassNames}`.trimEnd()}
    onPress={onPress}
  >
    <Text
      className={`text-primary font-semibold text-lg ${textAdditionalClassNames}`.trimEnd()}
    >
      {text}
    </Text>
  </TouchableOpacity>;

export default Button;