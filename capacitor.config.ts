import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bubble.app",
  appName: "bubble_app",
  webDir: "www",
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "1082803264576-fvuob1bdp3sgcb4e0qe0tcrkohgkkddq.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidSplashResourceName: "splash",

      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
    },
  },
};

export default config;
