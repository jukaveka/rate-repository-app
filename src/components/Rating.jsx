import { StyleSheet, View, Text as NativeText } from "react-native";

import theme from "../theme";

const containerSize = 50;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: containerSize,
    width: containerSize,
    borderRadius: containerSize / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.heading,
  },
  ratingGreat: {
    backgroundColor: theme.colors.ratingGreat,
    color: theme.colors.textLight,
  },
  ratingGood: {
    backgroundColor: theme.colors.ratingGood,
    color: theme.colors.textLight,
  },
  ratingOkay: {
    backgroundColor: theme.colors.ratingOkay,
    color: theme.colors.textPrimary,
  },
  ratingBad: {
    backgroundColor: theme.colors.ratingBad,
    color: theme.colors.textPrimary,
  },
  ratingHorrible: {
    backgroundColor: theme.colors.ratingHorrible,
    color: theme.colors.textLight,
  },
});

const Rating = ({ ratingLevel, style, ...props }) => {
  const ratingBackgroundStyle = [
    styles.container,
    ratingLevel === 5 && styles.ratingGreat,
    ratingLevel === 4 && styles.ratingGood,
    ratingLevel === 3 && styles.ratingOkay,
    ratingLevel === 2 && styles.ratingBad,
    ratingLevel === 1 && styles.ratingHorrible,
  ];

  const ratingTextStyle = [
    styles.text,
    ratingLevel === 5 && styles.ratingGreat,
    ratingLevel === 4 && styles.ratingGood,
    ratingLevel === 3 && styles.ratingOkay,
    ratingLevel === 2 && styles.ratingBad,
    ratingLevel === 1 && styles.ratingHorrible,
    style,
  ];

  return (
    <View style={ratingBackgroundStyle}>
      <NativeText style={ratingTextStyle} {...props} />
    </View>
  );
};

export default Rating;
