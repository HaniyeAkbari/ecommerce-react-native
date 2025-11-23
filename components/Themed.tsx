import { Text as DefaultText, View as DefaultView } from "react-native";
import { Colors } from "@/constants/Colors";
import { useThemeStore } from "@/store/theme.store";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

// --- 🔥 AUTO TYPES --- //
type GlobalColorKeys = keyof Omit<typeof Colors, "light" | "dark">;
type ThemeColorKeys = keyof typeof Colors.light;
type ColorName = GlobalColorKeys | ThemeColorKeys;
// --------------------------------------------- //

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: ColorName
) {
  const { theme } = useThemeStore();

  // User override
  const override = props[theme];
  if (override) return override;

  // Global colors (primary, secondary)
  if (colorName in Colors.primary || colorName in Colors.secondary) {
    const colorGroup = Colors[colorName as GlobalColorKeys];

    if (typeof colorGroup === "object") {
      return colorGroup[500]; // default shade
    }

    return colorGroup;
  }

  // Theme colors (background)
  return Colors[theme][colorName as ThemeColorKeys];
}

// ---------------- Components ---------------- //

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...other } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondary"
  );

  return <DefaultText style={[{ color }, style]} {...other} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...other } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...other} />;
}
