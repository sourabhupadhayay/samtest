export class Configuration {
  BASE_URL = "";
  AUTH_KEY: string = "authDetail";

  constructor(public state: projectState) {
    if (this.state == "staging") {
      this.BASE_URL = "https://rr-dev-apis.riskrelease.com/";
    } else if (this.state == "qa") {
      this.BASE_URL = "https://qa-apis.riskrelease.com/";
    } else if (this.state == "production") {
      this.BASE_URL = "https://prod-apis.riskrelease.com/";
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
