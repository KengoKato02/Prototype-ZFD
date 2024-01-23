module.exports = {
 '*': [() => 'bun format', 'bun format:write'],
 '*.{ts,tsx,js,jsx,json}': [() => 'bun typecheck', () => 'bun lint:fix']
};