import React, { ReactNode, FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
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
  isDisabled: boolean;
  className?: string;
  disabledClassName?: string;
  disabledStyle?: ViewStyle;
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
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  onPress: () => void;
  onHold: () => void;
};

const sizeMap: Record<Size, { width: number; height: number }> = {
  sm: { width: 100, height: 50 },
  md: { width: 150, height: 60 },
  lg: { width: 200, height: 70 },
};

const Button: FC<ButtonProps> = ({
  title,
  isDisabled = false,
  onPress,
  onHold,
  style,
  disabledStyle,
  className,
  disabledClassName,
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
  iconLeft,
  iconRight,
  loading = false,
}) => {
  const dimensions = size ? sizeMap[size] : undefined;

  return (
    <StyledTouchableOpacity
      tw={className}
      disabled={isDisabled}
      onPress={onPress}
      onLongPress={onHold}
      style={[
        backgroundColor ? { backgroundColor } : {},
        size ? { width: dimensions?.width, height: dimensions?.height } : {},
        width || height ? { width, height } : {},
        borderColor ? { borderColor, borderWidth } : {},
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor || "white"} />
      ) : (
        <>
          {iconLeft && <View style={{ marginRight: 3 }}>{iconLeft}</View>}
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
          {iconRight && <View style={{ marginLeft: 3 }}>{iconRight}</View>}
        </>
      )}
    </StyledTouchableOpacity>
  );
};

export default Button;
