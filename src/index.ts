import { noForLoop } from './rules/no-for-loop'

export default {
  rules: {
    'no-for-loop': noForLoop,
  },
  configs: {
    all: {
      plugins: ['no-for-loop'],
      rules: {
        'no-for-loop': 'error',
      },
    },
  },
}