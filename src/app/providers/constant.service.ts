import { Injectable } from "@angular/core";
import { Configuration } from "../configuration";
@Injectable({
  providedIn: "root",
})
export class ConstantService {
  HOST_URL: string = "";

  //URL constant

  // Validation Message
  WAIT = "Please Wait..";
  UPLOADING = "Uploading,Please Wait..";
  VALID_EMAIL_OR_MOBILE_MSG = "Please enter valid email or phone number";

  VALID_EMAIL_MSG = "Please enter valid email id";
  VALID_OTP = "Please enter valid OTP";
  PASSWORD_NOT_MATCH = "New password does not match with confirm password";
  VALID_CONF_PSW = "Please enter valid confirm password";
  VALID_FIRST_NAME = "Please enter valid first name";
  VALID_LAST_NAME = "Please enter valid last name";
  ENTER_EMAIL_ID = "Please enter valid email address";
  VALID_PASSWORD_MSG = "Please enter valid password";

  // TOAST TYPE Constants
  TOAST_SUCCESS = "TOAST_SUCCESS";
  TOAST_ERROR = "TOAST_ERROR";
  TOAST_WARNING = "TOAST_WARNING";
  TOAST_INFO = "TOAST_INFO";
  SPLAHSCREEN_STATUS = "SPLAHSCREEN_STATUS";

  // KEY Constants
  LOGIN_STATUS = "LOGIN_STATUS";
  ACCESS_TOKEN = "TOKEN";
  USER_DATA = "USER_DATA";
  USER_TYPE = "USER_TYPE";

  // API status
  STATUS_OK = "OK";
  STATUS_SUCCESS = "SUCCESS";
  STATUS_CREATED = "CREATED";
  STATUS_UPDATED = "UPDATED";
  STATUS_INVALID = "INVALID";
  STATUS_DELETED = "DELETED";

  constructor(public config: Configuration) {
    this.HOST_URL = config.BASE_URL;
  }
}
