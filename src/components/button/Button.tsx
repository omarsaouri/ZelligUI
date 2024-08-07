import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(
  TouchableOpacity,
  "justify-center items-center flex-row p-2 bg-[#007BFF] shadow-sm rounded-md"
);

const StyledText = styled(Text, "text-white font-semibold");

type Size = "sm" | "md" | "lg";
type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "bold"
  | "normal"
  | "thin"
  | "light"
  | "medium"
  | "semibold"
  | "extrabold"
  | "black";

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
  textWrap?: boolean;
  fontSize?: number;
  fontWeight?: FontWeight;
  letterSpacing?: number;
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
  textWrap = true,
  fontSize,
  fontWeight,
  letterSpacing,
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
      <StyledText
        numberOfLines={textWrap ? 2 : 1}
        style={[
          textColor ? { color: textColor } : undefined,
          fontSize ? { fontSize: fontSize } : undefined,
          fontWeight
            ? { fontWeight: fontWeight as TextStyle["fontWeight"] }
            : undefined,
          letterSpacing ? { letterSpacing: letterSpacing } : undefined,
        ]}
      >
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
