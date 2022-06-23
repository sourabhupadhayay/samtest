import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  signUpData: any | null = null;
  forgotPasswordEmail: string | null;
  constructor() {}
}
