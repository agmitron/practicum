const num: number = 1;
const str: string = "hello";
const obj: object = { dsf: 1 };
const obj2: object = []
// Присутствие отсутствия
const nullable: null = null
// Отсутствие присутствия
const und: undefined = undefined

const bool: boolean = true 
const bool2: boolean = false 

const digits: number[] = [1, 2, 2, 4]
const digitsAndStrings: (number | string | boolean)[] = [1, 2, 2, 4, "1", "2", true, false]
const digitsAndStrings2: Array<number | string | boolean> = [1, 2, 2, 4, "1", "2", true, false]

const something: unknown = true

if (typeof something == "boolean") {
  // 
}

if (typeof something == "object") {
  //
}

const anything: any = undefined

function sum(a: any, b: any) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b]
  }

  if (typeof a === "number" && typeof b === "string") {
    //
  }
}

function neverReturns(): never {
  throw new Error('a')
}

function returnsNumber(): number {
  return 1
}

function takesStringAndReturnsNumber(value: string): number {
  return 1
}

// const result: string = takesStringAndReturnsNumber("false")


