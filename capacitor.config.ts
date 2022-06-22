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
  },
};

export default config;
