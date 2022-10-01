type TUser = {
  id: number;
  name?: string;
}

const john: TUser = {
  id: 213,
  name: 'John'
}

delete john.name

type TA = {
  name: string
}

type TB = {
  id?: number
  name: string | number
}

const a: TA = {
  name: 'string'
}

const b: TB = a

b.id = 12
b.name = 'asdsad'

type TRGB = {
  red: number;
  green: number;
  blue: number;
}

const colorA: TRGB = {
  red: 120,
  green: 210,
  blue: 15
}

type TColor = keyof TRGB

function changeColor(obj: TRGB, key: TColor, value: number) {
  obj[key] = value
}

changeColor(colorA, 'blue', 220)

type TRGBExtends = {
  [index in TColor]: `${number}:${Capitalize<TColor>}`;
}

type Rqrd<T> = {
  [key in keyof T]-?: T[key]
}

interface ISomething<T> { 
  
}

type Opt = {
  a?: number
  b?: string
}

type RqrdOpt = Rqrd<Opt>

type TFriend = {
  name: string
  age: number
}

type TPost = {
  title: string
  text: string
  likes: number
}

type TResponseBody<D> = {
  success: boolean
  data: D
}

type TResponse<T> = Promise<{
  json: () => Promise<T>
}>

type TResponseFriends = TResponse<TFriend[]>
type TResponsePosts = TResponse<TPost[]>

const api = <T>(url: string): TResponse<T> => fetch(url)
const example = <T extends string>(data: T) => ({ data })

type SomeString = 'a' | 'b' | 'c' | number

const ex2 = example('')
const ex3 = example<SomeString>(213)
const ex4 = example('asdad')

api('ya.ru')
  .then(res => res.json())
  .then(res => res)

api<TResponseBody<TFriend[]>>('ya.ru')
  .then(res => res.json())
  .then(res => res.data)