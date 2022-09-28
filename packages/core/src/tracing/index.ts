export type { SpanStatusType } from './span';

export { Span, spanStatusfromHttpCode } from './span';
// eslint-disable-next-line deprecation/deprecation
export { SpanStatus } from './spanstatus';
export { Transaction } from './transaction';
export { IdleTransaction, DEFAULT_FINAL_TIMEOUT, DEFAULT_IDLE_TIMEOUT } from './idletransaction';
export { startIdleTransaction } from './hubextensions';

export { addExtensionMethods } from './hubextensions';

export {
  extractTraceparentData,
  getActiveTransaction,
  hasTracingEnabled,
  stripUrlQueryAndFragment,
  TRACEPARENT_REGEXP,
  msToSec,
} from './utils';
