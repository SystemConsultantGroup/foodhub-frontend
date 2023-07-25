
module.exports = {
  "*.{js,jsx}": [
    "eslint",
  ],
  "*.{ts,tsx}": [
    () => "tsc --skipLibCheck --noEmit -p tsconfig.json",
    "eslint",
  ],
}

// const lintStagedConfig = {
//   "**/*.ts?(x)": () => "tsc-files -p tsconfig.json --noEmit --pretty",
// };

// module.exports = lintStagedConfig;
