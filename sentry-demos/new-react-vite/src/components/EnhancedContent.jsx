import * as Sentry from '@sentry/react';
import withCustomPageSize from './withCustomPageSize';
import Content from './Content';

const EnhancedContent = withCustomPageSize(Content);

export default Sentry.withProfiler(EnhancedContent, { name: 'This Is EnhancedContent' });