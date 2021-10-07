import { noForLoop } from './rules/no-for-loop'

module.exports = {
  rules: {
    noForLoop,
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
