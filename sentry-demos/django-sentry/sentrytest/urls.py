"""
URL configuration for sentrytest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
import sentry_sdk
from sentry_sdk import configure_scope

def trigger_error(request):
    try:
        # Raise an exception with a message
        raise Exception('This is another new Test')
    except Exception as e:
        # Capture the exception explicitly with Sentry
        with configure_scope() as scope:
            scope.add_attachment(bytes=b"Hello World!", filename="test_data.json")
        sentry_sdk.capture_exception(e)
        # Return an error response
        return HttpResponse("An error was captured with Sentry.", status=500)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sentry-debug/', trigger_error),
]


# urlpatterns = [
#     path('sentry-debug/', trigger_error),
#     # ...
# ]
