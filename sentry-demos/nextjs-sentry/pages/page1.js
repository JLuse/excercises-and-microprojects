import * as Sentry from "@sentry/react";

const Page1 = () => {
  Sentry.captureException("Camb.AI is at capacity!");
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
};

export default Page1;
