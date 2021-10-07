import { TSESLint } from '@typescript-eslint/experimental-utils'
import { noForLoop } from './no-for-loop'

const tester = new TSESLint.RuleTester({
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

tester.run('noForLoop', noForLoop, {
  valid: [
    {
      code: '[1,2,3].map((item) => { console.log(item) });',
    },
  ],
  invalid: [
    {
      code: 'for (let i = 0; i < 9; i++) { str = str + i; }',
      errors: [{ messageId: 'replaceForLoopStatement' }],
    },
    {
      code: 'for (const item of [1,2,3]) { console.log(item) }',
      errors: [{ messageId: 'replaceForLoopStatement' }],
    },
    {
      code: 'for (const key in { a: 1, b: 2 }) { console.log(key) }',
      errors: [{ messageId: 'replaceForLoopStatement' }],
    },
  ],
})
