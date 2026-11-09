# Type Alias vs Interface in TypeScript

## Introduction

When working with TypeScript, we often need to define the structure of our data. Type Alias and Interface are two important features that help us do this. At first, they may look very similar, but they have some differences. Understanding these differences makes writing TypeScript code easier and more organized.

## What is Type Alias?

A Type Alias allows us to create a custom name for a type. We can use it with primitive types, objects, unions, and more.

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Rahim",
  age: 25
};
```

Here, we created a type named `User`. Instead of writing the object structure again, we can simply use `User`.

We can also use Type Alias with primitive types and union types.

```ts
type Status = "active" | "inactive";
type UserId = number;
```

## What is Interface?

An Interface is mainly used to describe the structure of an object. It defines which properties an object should have and what their types should be.

```ts
interface Product {
  name: string;
  price: number;
}

const product: Product = {
  name: "Laptop",
  price: 50000
};
```

Interfaces also support inheritance through the `extends` keyword.

```ts
interface Admin extends User {
  role: string;
}
```

This allows `Admin` to reuse the properties of `User` and add new properties.

## Main Differences

The main difference is that Type Alias can represent many kinds of types, including unions and primitives. Interface is mainly designed for object structures.

Another difference is that interfaces support declaration merging. This means we can declare the same interface more than once, and TypeScript combines their properties.

Both Type Alias and Interface are useful, and both can describe object structures.

## Conclusion

In my experience, choosing between Type Alias and Interface depends on the situation. I prefer Interface when defining object structures and Type Alias when working with unions, primitives, or more complex type combinations. Understanding both helps me write cleaner and more maintainable TypeScript code.