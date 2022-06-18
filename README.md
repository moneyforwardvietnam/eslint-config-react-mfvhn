```
yarn add -D eslint-config-react-mfv stylelint-config-sass-mfv typescript-config-mfv
```

.stylelintrc
```
{
  "extends": ["stylelint-config-sass-mfv"]
}
```

.eslintrc
```
{
  "root": true,
  "extends": ["react-mfv"]
}
```

tsconfig.json
{
  "extends": "typescript-config-mfv/tsconfig-react.json",
  "exclude": ["node_modules", ".next", "out", "dist", "build"],
  "include": ["./**/*.ts", "./**/*.tsx"]
}
