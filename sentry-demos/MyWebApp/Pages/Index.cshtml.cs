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

        // local - at the time there is no HTTP context, b/c not on scope
        // make Github issue for Matt
       try
        {
        throw new Exception("WITH LOCAL SCOPE PART2");
        }
        catch (Exception e)
        {
        SentrySdk.CaptureException(e, scope =>
        {
        scope.AddBreadcrumb("Breadcrumb test message");
        });
        }

        try
        {
        throw new Exception("Global Test no SCOPE PART2");
        }
        catch (Exception e)
        {
        SentrySdk.CaptureException(e);
        }

    }
}

