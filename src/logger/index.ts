import pino = require('pino');

export const logger = pino({
  prettyPrint: true,
  timestamp: false,
});
