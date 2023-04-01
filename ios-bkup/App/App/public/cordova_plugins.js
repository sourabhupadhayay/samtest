
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
          "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
          "pluginId": "cordova-plugin-sign-in-with-apple",
        "clobbers": [
          "cordova.plugins.SignInWithApple"
        ]
        },
      {
          "id": "cordova-plugin-nativeaudio.nativeaudio",
          "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
          "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
          "window.plugins.NativeAudio"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-nativeaudio": "3.0.9",
      "cordova-plugin-sign-in-with-apple": "0.1.2"
    };
    // BOTTOM OF METADATA
    });
    