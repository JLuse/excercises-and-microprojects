// import React from 'react';
import * as Sentry from '@sentry/react';

const CustomFeedbackButton = () => {
    const handleFeedbackClick = () => {
        Sentry.showReportDialog({
          
        });
    };

    return <button onClick={handleFeedbackClick}>Report an Issue</button>;
};

export default CustomFeedbackButton;
