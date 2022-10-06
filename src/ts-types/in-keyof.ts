interface LoginFormFields {
  password: string;
  name: string;
  email: string;
}

interface Rules {
  type: string;
  prompt: string;
}

type ValidationScheme<T> = {
  [K in keyof T]: {
    value: T[K];
    check: boolean;
    rules?: Rules[];
  };
};

type ValidationSchemeForLoginForm = ValidationScheme<LoginFormFields>;
