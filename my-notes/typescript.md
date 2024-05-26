# Typescript

### Fun facts of interfaces

- multiple interfaces can be extended to other interfaces (not implemented)
- similarly multiple interfaces can be implemented in classes (not extended)
- In multiple interfaces inheritance into one interfaces if 2 or more interfaces have same props then TS compiler will throw an error

### Fun facts of types

- Unlike interfaces types cant be exteded to other types but it does not matter that much as types can be intersected using & keyword (type1 & type2)
- the interface can extend type
- the type can intersect interface
- interfaces can not intersect each other (because impelements)

# Types vs Interfaces

- it is required for an interface to be an object but type can represent a single value
  e.g type NumOrBool = string | boolean

- we can extract type from an js object using 'typeof' operator and assign it to type
  e.g type ObjType = typeof myObject

- In the above case if there is an nested object whouse type we want to assign we can also do that

- we can define multiple interfaces with the same name (in this case they all will be merged)

# as const

- it makes an object readonly similar to Object.freeze() but it will also lock the nested objects

# access modifires

- public, private, protected, readonly
