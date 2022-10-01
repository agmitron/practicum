export type TUser = {
  readonly id: number;
  readonly password: string;
  readonly email: string;
  readonly name: string;
};

export type TRawUser = Omit<TUser, 'id'> & { _id: number };

export type TAffiliations = {
  readonly name: string;
  readonly city: string;
  readonly country: string;
};

export type TPrize = {
  readonly year: string;
  readonly category: string;
  readonly share: string;
  readonly motivation: string;
  readonly affiliations: ReadonlyArray<TAffiliations>;
};

export type TCountry = {
  readonly name: string;
  readonly code: string;
};

export type TLaureate = {
  readonly id: string;
  readonly firstname: string;
  readonly surname: string;
  readonly born: string;
  readonly died: string;
  readonly bornCountry: string;
  readonly bornCountryCode: string;
  readonly bornCity: string;
  readonly diedCountry: string;
  readonly diedCountryCode: string;
  readonly diedCity: string;
  readonly gender: string;
  readonly prizes: ReadonlyArray<TPrize>
};

export type TResponseBody<TDataKey extends '', TDataType> = {
  [key in TDataKey]: TDataType;
} & {
  success: boolean;
  message?: string;
  headers?: Headers;
};

type a = TResponseBody<'', {}>

export interface CustomResponse<T> extends Body {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
  json(): Promise<T>;
}
