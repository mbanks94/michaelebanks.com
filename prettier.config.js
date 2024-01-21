module.exports = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^components/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
