## Install deps: 
```
yarn add -D eslint-config-react-mfv stylelint-config-sass-mfv typescript-config-mfv eslint prettier stylelint
```

## Config: 

.eslintrc
```
{
  "root": true,
  "extends": ["react-mfv"]
}
```

tsconfig.json
```
{
  "extends": "typescript-config-mfv/tsconfig-react.json",
  "exclude": ["node_modules", ".next", "out", "dist", "build"],
  "include": ["./**/*.ts", "./**/*.tsx"]
}
```

.stylelintrc
```
{
  "extends": ["stylelint-config-sass-mfv"]
}
```
