# Getting Started with Poco React Typescript app

ReactJS application for Poco React (POCO) application
- [Getting Started](#getting-started)
    - [Prerequisites](#Prerequisites)
    - [Run Local development](#run-local-development)
- [Create react typescript project ](#create-react-typescript-project)


## Getting Started
This project is related to online selling and buying services

## Prerequisites 
- git/github
- nodejs 16.6.1
-

## Create react typescript project 
- `npx create-react-app my-app --template typescript`
-  `npm install --save-dev --save-exact prettier`
-  `yarn add eslint --dev`

## Run Local development
In the project directory, you can run:
- `npm start`
- `npm test`
- `npm run build`
- `yarn prettier`

## Instll tailwind
- [Install Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

## What inside the project?
#Prettier-
We have configured with prettier settings [Link](https://andrebnassis.medium.com/setting-prettier-on-a-react-typescript-project-2021-f9f0d5a1d6b0)

#lint - 
npm install eslint --save-dev

> **Warnings**
> This is work in progress and needs to be reviewed
- [ ] Tiffin
- [ ] lemon
- [ ] Ice
- [ ] Water



To install Cypress, enter:

npm install cypress --save-dev
This installs Cypress locally as a dev dependency for the project.

To open the application, enter:

npx cypress open


Setup React Testing Library
yarn add --dev jest @types/jest ts-jest

Then add the Jest config file jest.config.json :

{
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    }
}


Next, create a simple file for testing, let’s say calculator.ts like this

export const sum = (num1: number, num2: number): number => num1 + num2;


Create calculator.test.ts :

import { sum } from "./calculator";
describe("Calculator tests", () => {
    it("should return sum correctly", () => {
        expect(sum(2, 3)).toBe(5);
    });
    
    it("should return sum correctly with negative number", () => {
        expect(sum(-2, 3)).toBe(1);
    });
});
Then update the scripts in your package.json :

"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest" <- this line
},


Open your command line and run this command in your root folder:

yarn test 



Install RTK via Yarn

yarn add -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom

If you’re using Jest 28 or later, jest-environment-jsdom package must be installed as well. For recent versions of Jest (27), please prefer this documentation

Then we need to update the jest.config.json file:

{
    "testEnvironment": "jsdom",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "setupFilesAfterEnv": [
        "@testing-library/jest-dom/extend-expect"
    ]
}