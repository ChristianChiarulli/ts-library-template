import { HelloWorld } from ".";

export function hello({ firstName, lastName }: HelloWorld) {
  if (!firstName) {
    throw new Error("First name is required");
  }

  if (!lastName) {
    console.log(`Hello ${firstName}`);
    return;
  }
  console.log(`Hello ${firstName} ${lastName}`);
}
