using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Sentry.AspNetCore;
using Sentry;

namespace MyWebApp.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }

    public void OnGet() {
        // To test switch between where global scope is set:
        // 1. Run only with local scope try/catch to .AddBreadcrumb
        // 2. Run again, uncomment first try/catch to apply HTTP context to local scope test with breadcrumbs
        // 3. Run once more, comment first try/catch, uncomment last try/catch, HTTP is no longer applied to local scope test with breadcrumbs

        // 2. uncomment to have HTTP context applied to the scope
        // try
        // {
        // throw new Exception("HTTP Applied to global scope");
        // }
        // catch (Exception e)
        // {
        // SentrySdk.CaptureException(e);
        // }
        // local scope with addBreadcrumb
       try
        {
        throw new Exception("WITH LOCAL SCOPE");
        }
        catch (Exception e)
        {
        SentrySdk.CaptureException(e, scope =>
        {
        scope.AddBreadcrumb("Breadcrumb test message");
        });
        }

        // 3. uncomment to test HTTP info after local scope is set.
        // try
        // {
        // throw new Exception("Global Test no SCOPE PART2");
        // }
        // catch (Exception e)
        // {
        // SentrySdk.CaptureException(e);
        // }

                //  - at the time there is no HTTP context, b/c not on scope
        // If you test by switching 
        // make Github issue for Matt

    }
}

