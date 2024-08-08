import * as Sentry from '@sentry/react';

function OtherTrackedComp() {
  return (
    <div>
      <p>Custom App Component</p>
    </div>
  );
}

export default Sentry.withProfiler(OtherTrackedComp, { name: "CustomAppName" });

