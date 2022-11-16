package org.sentry;
import java.lang.Exception;

import io.sentry.Sentry;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );

        Sentry.init(options -> {
        options.setDsn("https://626cd6a88c8b4197a443302397b31e21@o565143.ingest.sentry.io/4504170049896448");
        // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
        // We recommend adjusting this value in production.
        options.setTracesSampleRate(1.0);
        // When first trying Sentry it's good to see what the SDK is doing:
        options.setDebug(true);
        });

        try {
            throw new Exception("This is another test.");
        } catch (Exception e) {
            Sentry.captureException(e);
        }
    }

}

