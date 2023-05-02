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
        throw new Exception("WITH LOCAL SCOPE FIX");
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

