import * as PasswordValidator from "password-validator";

export class PasswordStrength {
  private passwordStrength = new PasswordValidator();

  private specialRegex: RegExp = new RegExp(
    "(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|])"
  );

  constructor() {
    this.passwordProperty();
  }

  private passwordProperty() {
    this.passwordStrength
      .is()
      .min(8)

      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(1)
      .has()
      .symbols();
  }

  public validatePassword(password: string) {
    let validation = this.passwordStrength.validate(password, {
      list: true,
    }) as string[];

    let failedValidation = {
      min: false,
      digits: false,
      symbols: false,
      uppercase: false,
      lowercase: false,
    };

    for (let index = 0; index < validation.length; index++) {
      failedValidation[validation[index]] = true;
    }

    return failedValidation;
  }

  public isPasswordStrong(password: string) {
    return this.passwordStrength.validate(password);
  }
}

export interface failedValidation {
  min: boolean;
  digits: boolean;
  symbols: boolean;
  uppercase: boolean;
  lowercase: boolean;
}
