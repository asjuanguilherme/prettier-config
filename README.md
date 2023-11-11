# Juan - Prettier Config

## 1. How to install

With npm:

```bash
npm install juan-prettier-config
```

Or with yarn:

```bash
yarn add juan-prettier-config
```

## 2. Create a Prettier configuration file

Create a file named `.prettierrc.js` or `.prettierrc` at the root of your project and import the configuration from `juan-prettier-config`:

```javascript
// .prettierrc.js or .prettierrc

module.exports = require("juan-prettier-config");
```

Or you can import the configuration file to your package.json file

```json
{
  "prettier": "juan-prettier-config"
}
```

## 3. Add a script to your `package.json` (optional)

Add a script to your `package.json` to make running Prettier easier:

```json
// package.json

{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

Now, you can run `npm run format` or `yarn format` to format your code using the Prettier configuration.

## 4. Run Prettier

Now, you can run Prettier on your code using the following command:

With npm:

```bash
npx prettier --write .
```

Or with yarn:

```bash
yarn prettier --write .
```

This command formats all files in the current directory using the Prettier configuration specified in the `.prettierrc.js` or `.prettierrc` file.

That's essentially all you need to do to start using your `juan-prettier-config` library in your project. Ensure that the files you want to format are in the specified directory or adjust the Prettier command as needed to include the desired files.
