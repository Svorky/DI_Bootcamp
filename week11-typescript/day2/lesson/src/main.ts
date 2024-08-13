// Index Signatures

interface EmployeeInterface {
    // [key: string]: string | number,
    name:string,
    age:number,
    role:string
}

let employee1: EmployeeInterface = {
    name: 'John',
    age: 30,
    role: 'Developer'
}

// employee1['email'] = "aaa@sss"
let key1: string = 'name'
employee1[key1 as keyof EmployeeInterface]

for(let key in employee1){
    `${key} - ${employee1[key as keyof EmployeeInterface]}`;
    `${key} - ${employee1[key as keyof typeof employee1]}`;
}

const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface): void => {
    console.log(key, employee[key])
}
// logEmployee(employee1, 'email') //error
logEmployee(employee1, 'age')

interface Student {
    name: string,
    grade: number | string,
    courses?: string[] //optional
}

// Record type

type keys = 'name' | 'age' | 'role'
type EmployeeType = Record<keys, string | number>

let employee2: EmployeeType = {
    name: 'a',
    age: 77,
    role: 7,
    // email: 'ddd'
}

// generic

const strEcho = (value: string): string => value;

const echo = <T>(value: T): T => value;
console.log(echo('hello'))

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}
console.log(isObj(true)) //false
console.log(isObj('true')) // false
console.log(isObj({a: true})) // true

const isObj2 = <T>(arg: T): { arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }
    if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
        return {arg, is:true}
    }
    return {arg, is: !!arg}
}

interface BoolCheck<T> {
    arg: T,
    is: boolean
}

const isObj3 = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }
    if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
        return {arg, is:true}
    }
    return {arg, is: !!arg}
}

interface HasId {
    id: number
}

const checkUser = <T extends HasId>(user: T): T => {
    return user
}

console.log(checkUser({id: 1, name: 'John'}))
console.log(checkUser({id: 1}))

const userJson = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];

const getUsersInfo = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

console.log(getUsersInfo(userJson,'email'))

class StateObject<T> {
    private data: T
    constructor(value: T){
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T){
        this.data = value
    }
}

const state = new StateObject('kkk')
console.log((state.state))
state.state = 12

const st = new StateObject<string[]>(['aa','bb'])
console.log(st.state)
st.state = [12,13]

// utility types
interface Post {
    id: number,
    title:string,
    content: string,
    author: string
}

const post1: Partial<Post> = {
    id: 1,
    title: 'title',
}

const updatePost = (post: Post, update: Partial<Post>):Post => {
    return {...post, ...update}
}

const post2: Post = {
    id: 1,
    title: 'title',
    content: 'qq',
    author: 'ww'
}

updatePost(post2, {title:'bla'})

// Required

const updatePost1 = (post: Required<Post>, update: Partial<Post>):Post => {
    return {...post, ...update}
}

updatePost1(post2, {title:'bla'})

// Pick or Omit for interfaces

type MiniPost = Pick<Post, 'id' | 'title'>
type OtherPost = Omit<Post, 'id' | 'title'>

// Exclude or Extract for types
type Grades = 'a' | 'b' | 'c' | 'd' | 'f'
type Pass = Exclude<Grades, 'f' | 'd'>
type Fail = Extract<Grades, 'd' | 'f'>

// Non nullable
type NullableString = string | null | undefined
type NonNullableString = NonNullable<NullableString>

// Return Type
const createUser = (name: string, age: number) => {
    return {name, age}
}

type userReturnType = ReturnType<typeof createUser>

// Parameters
type Usersparams = Parameters<typeof createUser>

const userParams: Usersparams = ['anna', 15]
const newUser: userReturnType = createUser(...userParams)

// awaited
const fetchUser = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser>>