import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

const circleSize = 250;
export default function CreditCard({
  name,
  date,
  suffix,
  style,
  textColor = "white",
  bgColor = "#0047cc"
}: {
  name: string;
  date: string;
  suffix: number | string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  bgColor?: string;
}) {
  const dotStyle = [s.dot, { backgroundColor: textColor }];
  return (
    <View style={[s.container, { backgroundColor: bgColor }, style]}>
      <View style={[s.bgCircle, s.rightBgCircle]} />
      <View style={[s.bgCircle, s.bottomBgCircle]} />
      <View style={s.logoContainer}>
        <View style={[s.circle, s.leftCircle]} />
        <View style={[s.circle, s.rightCircle]} />
      </View>
      <View style={s.cardNumberContainer}>
        <View style={s.cardNumberPart}>
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
        </View>
        <View style={s.cardNumberPart}>
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
        </View>
        <View style={s.cardNumberPart}>
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
          <View style={dotStyle} />
        </View>
        <Text style={[s.text, { color: textColor }]}>{suffix}</Text>
      </View>
      <View style={s.footerContainer}>
        <Text style={[s.text, { color: textColor }]}>{name}</Text>
        <Text style={[s.text, { color: textColor }]}>{date}</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    borderRadius: 12,
    width: 290,
    position: "relative"
  },
  logoContainer: { position: "relative", marginBottom: 24 },
  circle: { width: 34, height: 34, borderRadius: 17 },
  rightCircle: { backgroundColor: "#f9a000", position: "absolute", left: 20 },
  leftCircle: { backgroundColor: "#ed0006", zIndex: 999 },
  cardNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18
  },
  cardNumberPart: { flexDirection: "row" },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontFamily: "Courier",
    fontSize: 16,
    letterSpacing: 0.53
  },
  bgCircle: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.05,
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize
  },
  rightBgCircle: {
    top: (-1 * circleSize) / 4,
    right: (-1 * circleSize) / 2
  },
  bottomBgCircle: {
    bottom: (-1 * circleSize) / 2,
    left: (0 * (-1 * circleSize)) / 2
  }
});
