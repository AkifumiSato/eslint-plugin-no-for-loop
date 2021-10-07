import { TSESLint } from '@typescript-eslint/experimental-utils'

export const noForLoop: TSESLint.RuleModule<'replaceForLoopStatement', []> = {
  meta: {
    type: 'suggestion',
    messages: {
      replaceForLoopStatement:
        'Avoid using for statement, please use Array.prototype.map, Array.prototype.forEach, etc.',
    },
    schema: [],
  },
  create: (context) => {
    return {
      ForStatement(node) {
        context.report({
          node,
          messageId: 'replaceForLoopStatement',
        })
      },
      ForOfStatement(node) {
        context.report({
          node,
          messageId: 'replaceForLoopStatement',
        })
      },
      ForInStatement(node) {
        context.report({
          node,
          messageId: 'replaceForLoopStatement',
        })
      },
    }
  },
}
