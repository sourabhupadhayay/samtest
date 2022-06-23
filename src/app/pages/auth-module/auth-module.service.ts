import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthModuleService {
  signUpData: any | null = null;
  forgotPasswordEmail: string | null;
  constructor() {}
}
