import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(
  TouchableOpacity,
  "justify-center items-center flex-row p-2 bg-[#007BFF] shadow-sm rounded-md"
);

const StyledText = styled(Text, "text-white font-semibold");

type Size = "sm" | "md" | "lg";
type ButtonProps = {
  title: string;
  className?: string;
  style?: ViewStyle;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  size?: Size;
  height?: number;
  width?: number;
  textColor?: string;
  onPress: () => void;
};

const sizeMap: Record<Size, { width: number; height: number }> = {
  sm: { width: 100, height: 50 },
  md: { width: 150, height: 60 },
  lg: { width: 200, height: 70 },
};

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  className,
  backgroundColor,
  borderColor,
  borderWidth,
  size = null,
  width,
  height,
  textColor,
}) => {
  const dimensions = size ? sizeMap[size] : undefined;
  return (
    <StyledTouchableOpacity
      tw={className}
      onPress={onPress}
      style={[
        backgroundColor ? { backgroundColor } : {},
        size ? { width: dimensions?.width, height: dimensions?.height } : {},
        width || height ? { width, height } : {},
        borderColor ? { borderColor, borderWidth } : {},
        style,
      ]}
    >
      <StyledText style={[textColor ? { color: textColor } : undefined]}>
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
