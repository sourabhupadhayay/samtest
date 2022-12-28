import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  // appId: "com.bubble.app",
  appId: "com.bubble_app_9093.app",
  appName: "bubble_app",
  webDir: "www",
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "573316732862-8md2qi83sjbk7a8ma42km4n918s4nvbj.apps.googleusercontent.com",
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
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
