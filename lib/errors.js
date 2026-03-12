export * from '@goastian/mw-common/errors';

export class GasLimitError extends TypeError {
  name = 'GasLimitError';
  constructor(message, options) {
    super(message || 'Invalid gas limit', options);
  }
}
