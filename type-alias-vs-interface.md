# Type Alias vs Interface in TypeScript

## Introduction

Type Alias and Interface are two important features of TypeScript. Both help developers define the structure of data and make code easier to understand. Although they look similar, they have some important differences. Understanding these differences helps us choose the right approach when writing TypeScript applications.

## What is Type Alias?

A Type Alias creates a custom name for any type, including primitives, objects, unions, and tuples.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
type UserId = number;
```

Here, `User` represents an object structure, while `Status` represents a Union Type. This flexibility makes Type Alias useful in different situations.

## What is Interface?

An Interface mainly describes the structure of an object. It defines which properties and methods an object should contain.

```ts
interface Product {
  name: string;
  price: number;
}

interface DigitalProduct extends Product {
  downloadUrl: string;
}
```

Here, `DigitalProduct` inherits the properties of `Product` using the `extends` keyword.

## Main Differences

One major difference is that Type Alias supports primitive types, Union Types, and Intersection Types, while Interface is primarily designed for object structures.

Another important difference is Declaration Merging. TypeScript allows us to declare the same Interface multiple times and automatically combines their properties.

```ts
interface User {
  name: string;
}

interface User {
  email: string;
}
```

Now, `User` contains both `name` and `email`. Type Alias does not support this feature.

We can also combine object types using Intersection (`&`).

```ts
type Admin = User & {
  role: string;
};
```

## When Should We Choose One?

I prefer Interface when defining object structures because it supports inheritance and Declaration Merging. I use Type Alias when working with unions, primitives, tuples, or complex type combinations. However, both can describe object structures, so the choice often depends on the project requirements and coding style.

## Conclusion

Type Alias and Interface are both useful in TypeScript. Learning their differences helps developers write cleaner, reusable, and maintainable code.