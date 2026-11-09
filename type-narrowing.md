# Type Narrowing in TypeScript

## Introduction

TypeScript allows us to define multiple possible types for a variable using Union Types. However, sometimes we need to perform operations that are only available for a specific type. Type Narrowing helps TypeScript identify the actual type of a value before performing those operations. It makes our code safer and reduces runtime errors.

## What is Type Narrowing?

Type Narrowing is the process of reducing a variable's possible types to a more specific type using conditions and type checks. TypeScript automatically understands the narrowed type inside the corresponding block.

## Common Type Narrowing Techniques

**1. typeof Operator**

The `typeof` operator checks primitive types such as string, number, and boolean.

```ts
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here, TypeScript knows that `value` is a string inside the first block and a number inside the second block.

**2. instanceof Operator**

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

This allows us to safely access the `message` property of an Error object.

**3. in Operator**

The `in` operator checks whether a property exists in an object.

```ts
type Admin = { name: string; permissions: string[] };
type User = { name: string; email: string };

function showInfo(person: Admin | User): void {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.email);
  }
}
```

TypeScript uses the property check to identify which object type is being used.

**4. Truthiness Narrowing**

Truthiness checks help narrow values by checking whether they are truthy or falsy.

```ts
function printName(name?: string): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}
```

## Why is Type Narrowing Important?

Type Narrowing helps developers write safer and more predictable code. It prevents invalid operations and allows TypeScript to provide better type checking and editor suggestions.

## Conclusion

Type Narrowing is an essential concept in TypeScript. Understanding `typeof`, `instanceof`, and `in` helps us handle different types correctly. Using these techniques makes applications easier to maintain and reduces common programming mistakes.