type Values = number | boolean

const myMap = new Map()




let a = 1

myMap.get("foo")
myMap.set("bar", 1)

interface ResponseFromServer<Data> {
  error: string;
  data: Data;
}

interface Post {
  likes: number;
  title: string;
}

interface User {
  age: number;
  name: string;
}

const response1: ResponseFromServer<Post[]> = {
  error: "",
  data: [{ likes: 2, title: "Игуана" }],
};

const response2: ResponseFromServer<User[]> = {
  error: "",
  data: [{ age: 18, name: "Ivan" }],
};
