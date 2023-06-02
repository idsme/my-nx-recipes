# SandboxNg16
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.
npx @angular/cli@latest new sandboxNg16 --routing --style scss --minimal --package-manager pnpm --inline-style --inline-template --skip-git --skip-install --directory sanboxNg16ScssInline

## TODO
* Add Form Modules
* Create small Form
* Add Jest [doc](https://medium.com/@redin.gaetan/jest-and-angular-cb70ad78ee3d)
* 

```
npm install jest jest-preset-angular --save-dev
cd src
touch setupJest.ts
// setupJest.ts
import 'jest-preset-angular/setup-jest';
// package.json
{
  ...
  "jest": {     
    "preset": "jest-preset-angular", 
    "setupTestFrameworkScriptFile": "<rootDir>/setupJest.ts"
  }
  ...
}
// package.json ADD
"test": "jest",
"test:watch": "jest --watch",
"test:ci": "jest --runInBand"
// Remove karma configuration
 the karma.conf.js and test.ts files.
//package.json DELETE
karma karma-chrome-launcher
karma-coverage-istanbul-reporter
karma-jasmine 
karma-jasmine-html-reporter
```
