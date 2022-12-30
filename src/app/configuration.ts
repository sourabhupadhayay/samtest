export class Configuration {
  BASE_URL = "";
  AUTH_KEY: string = "authDetail";
  //VIDEO_URL = "https://dev-video-apis.bubbleapp.com/video/";
  VIDEO_URL = "http://192.168.0.24:8084/";
  constructor(public state: projectState) {
    if (this.state == "staging") {
      this.BASE_URL = "https://dev-apis.bubbleapp.com/";
    } else if (this.state == "qa") {
      this.BASE_URL = "https://qa-apis.riskrelease.com/";
    } else if (this.state == "production") {
      this.BASE_URL = "https://prod-apis.bubbleapp.com/";
    } else if (this.state == "preprod") {
      //this.BASE_URL = "https://prod-apis.riskrelease.com/";
      this.BASE_URL = "https://preprod-apis.riskrelease.com/";
    } else {
      this.BASE_URL = "https://demo-apis.riskrelease.com/";
    }
  }
}

type projectState = "staging" | "production" | "qa" | "preprod";
export const configuration = new Configuration("production");
