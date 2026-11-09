# Type Narrowing in TypeScript

## Introduction

One of the useful features of TypeScript is Type Narrowing. Sometimes a variable can have more than one possible type. In that situation, TypeScript needs to understand which type we are working with before performing certain operations. Type Narrowing helps us solve this problem.

## What is Type Narrowing?

Type Narrowing means reducing a variable's possible types to a more specific type. We can do this using conditions and type-checking techniques.

For example, a variable can be either a string or a number.

```ts
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, `value` can be a string or a number. The `typeof` operator checks its actual type. Inside the first condition, TypeScript understands that the value is a string. Otherwise, it treats the value as a number.

## Common Type Narrowing Techniques

There are several ways to narrow types in TypeScript.

**1. typeof:** It checks primitive types such as string, number, and boolean.

```ts
if (typeof value === "number") {
  console.log(value * 2);
}
```

**2. Truthiness Narrowing:** It checks whether a value is truthy or falsy.

```ts
function printName(name?: string): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}
```

**3. in Operator:** It checks whether a property exists inside an object.

```ts
if ("email" in user) {
  console.log(user.email);
}
```

**4. instanceof:** It checks whether an object belongs to a particular class.

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

## Why is Type Narrowing Important?

Type Narrowing helps us write safer code and avoid unnecessary errors. It also allows TypeScript to understand what operations are valid for a particular value. Without proper narrowing, we may not be able to access certain properties or methods safely.

## Conclusion

Type Narrowing is an important concept for every TypeScript developer. It helps us work with multiple types confidently and write more predictable code. Learning techniques like `typeof`, truthiness checks, `in`, and `instanceof` makes handling different data types much easier.