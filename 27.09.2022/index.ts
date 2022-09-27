type TUser = {
  name: string;
  id: number;
};

const john: TUser = {
  name: "John",
  id: 3,
};

const x = JSON.parse('null')

delete john.id;

// console.log(john);

type TA = {
  name: string;
};

type TB = {
  name: string | number;
  id?: number;
};

const a: TA = {
  name: "aaa",
};

const b: TB = a;

b.name = 33;
b.id = 1;

// console.log(a);

/**
 * keyof
 */

type TRGB = {
  red: number;
  green: number;
  blue: number;
};

type TChangeColorFn = (obj: TRGB, key: keyof TRGB, value: number) => void;

const pink: TRGB = {
  red: 200,
  green: 100,
  blue: 50,
};

const changeColorFn: TChangeColorFn = (obj, key, value) => {
  obj[key] = value;
};

changeColorFn(pink, "green", 180);

console.log(pink);

type TRGBExtends = {
  -readonly [prop in keyof TRGB as Uppercase<prop>]: number;
};

/**
 * typeof
 */

type TRGBCustom = typeof pink;

type TReturnLengthFn = (str: string) => number;

const returnLengthFn: TReturnLengthFn = (str) => str.length;

type TAnotherFn = typeof returnLengthFn;

type TLength = ReturnType<typeof returnLengthFn>;

/**
 * generic
 */

type TFriend = {
  name: string;
  age: number;
};

type TPost = {
  title: string;
  text: string;
  likes: number;
};

type TResponseBody<T> = {
  success: boolean;
  data: T[];
};

type TResponse<T> = Promise<{
  json: () => Promise<T>;
}>;

// type TResponseBodyPost = {
//   success: boolean;
//   data: TPost[];
// };

const api: <T>(url: string) => TResponse<TResponseBody<T>> = (url) => {
  return fetch(url);
};

// const apiPosts: (url: string) => Promise<TResponseBody<TPost>> = (url) => {
//   return fetch(url).then((res) => res.json());
// };

api<TFriend>("ya.ru")
  .then((res) => res.json())
  .then((res) => res.data);

api<TPost>("ya.ru")
  .then((res) => res.json())
  .then((res) => res.data);

/**
 * utility-types
 */

type TRGBNotRequired = Partial<typeof pink>;

type TRGBRequired = Required<TRGB>;

type TRGBRecord = Record<Uppercase<keyof TRGB>, TRGBNotRequired>;

type TRG = Pick<TRGB, "red" | "green">;
type TGB = Omit<TRGB, "red">;
