module.exports = {
    globals: {
      __PATH_PREFIX__: true,
    },
    "parser": "babel-eslint",
    "extends": ["react-app", "prettier" ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
          "modules": true
        }
      },
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": ["error", {
          "semi": false,
          "endOfLine": "crlf",
        }],
      }
  }