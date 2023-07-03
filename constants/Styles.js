import Colors from "./Colors";

export const switchStyle = {
  trackColor: {
    darkMode: {
      false: Colors.secondary[1],
      true: Colors.primary[1],
    },
    lightMode: {
      false: Colors.grayscale[3],
      true: Colors.grayscale[1],
    },
  },
  thumbColor: {
    darkMode: Colors.primary[0],
    lightMode: Colors.grayscale[5],
  },
};
