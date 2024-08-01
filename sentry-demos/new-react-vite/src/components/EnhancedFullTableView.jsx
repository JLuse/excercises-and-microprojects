// src/EnhancedFullTableView.js
// import React from 'react';
import * as Sentry from '@sentry/react';
import FullTableView from './FullTableView';

const EnhancedFullTableView = Sentry.withProfiler(FullTableView, { name: 'FullTableName' });

export default EnhancedFullTableView;
