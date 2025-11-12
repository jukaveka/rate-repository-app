const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#ACB9A4",
    textLight: "#FCFCF8",
    textError: "#CC444B",
    primary: "#84A98C",
    secondary: "#E2E8DD",
    highlight: "#3D5467",
    background: "#ECECEC",
    button: "#4A8FE7",
    ratingGreat: "#178B58",
    ratingGood: "#25DC8C",
    ratingOkay: "#FDE74C",
    ratingBad: "#FC8D4C",
    ratingHorrible: "#D72323",
  },
  fontSizes: {
    caption: 11,
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    android: "Roboto",
    ios: "Arial",
    default: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  forms: {
    container: {
      display: "flex",
      width: "90%",
      margin: "5%",
      backgroundColor: "white",
      padding: "5%",
      alignItems: "center",
    },
    label: {
      marginTop: "5%",
      alignSelf: "flex-start",
      marginStart: "5%",
    },
    field: {
      marginTop: "1%",
      width: "90%",
      padding: 5,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "gray",
    },
    error: {
      alignSelf: "flex-start",
      marginStart: "5%",
    },
    button: {
      valid: {
        backgroundColor: "#4A8FE7",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: "90%",
        marginVertical: "5%",
      },
      disabled: {
        backgroundColor: "#DFE0E2",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: "90%",
        marginVertical: "5%",
      },
    },
  },
};

export default theme;
