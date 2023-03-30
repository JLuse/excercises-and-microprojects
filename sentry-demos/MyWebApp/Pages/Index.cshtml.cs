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
        //     throw new Exception("test");
        //     }
        //     catch (Exception e)
        //     {
        //     SentrySdk.CaptureException(e);
        //     }

        // try
        //     {
        //     throw new Exception("breadcrumb test");
        //     }
        //     catch (Exception e)
        //     {
        //     SentrySdk.ConfigureScope(scope =>
        //     {
        //     scope.AddBreadcrumb("test message");
        //     });
        //     SentrySdk.CaptureException(e);
        //     }

        // try
        // {
        // throw new Exception("test");
        // }
        // catch (Exception e)
        // {
       try
        {
        throw new Exception("test");
        }
        catch (Exception e)
        {
        SentrySdk.CaptureException(e, scope =>
        {
        scope.AddBreadcrumb("test message");
        });
        }
        // }

        // {
        //     SentrySdk.CaptureMessage("Hello Sentry");
        // }
    }
}

