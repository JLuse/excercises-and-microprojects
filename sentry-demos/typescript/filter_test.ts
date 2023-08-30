const dummyBreadcrumbs = [
  { level: 'error', data: { url: 'https://example.com/page1' } },
  { level: 'fatal', data: { url: 'https://doubleclick.net/ad' } },
  { level: 'error', data: { url: 'https://graph.facebook.com/api' } },
  { level: 'critical', data: { url: 'https://example.com/page2' } },
];

const dummyEvent = {
  breadcrumbs: {
    values: dummyBreadcrumbs,
  },
};

const IGNORED_URLS = [
  // Ads
  /doubleclick\.net/i,
  // Google Ads
  /googleads/i,
  /googlesyndication\.com/i,
  /pagead/i,
  // Facebook flakiness
  /graph\.facebook\.com/i,
  // Facebook blocked
  /connect\.facebook\.net\/en_US\/all\.js/i,
  // Woopra flakiness
  /eatdifferent\.com\.woopra-ns\.com/i,
  /static\.woopra\.com\/js\/woopra\.js/i,
  // Chrome extensions
  /extensions\//i,
  /^chrome:\/\//i,
  // Other plugins
  /127\.0\.0\.1:4001\/isrunning/i, // Cacaoweb
  /webappstoolbarba\.texthelp\.com\//i,
  /metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
];

function isErrorPlusLevel(level) {
  const allowedLevels = ['fatal', 'critical', 'error'];
  return allowedLevels.includes(level.toLowerCase());
}

function isIgnoredUrl(url) {
  return url && IGNORED_URLS.some((urlRegex) => urlRegex.test(url));
}

function shouldIgnoreEventByBreadcrumb(event) {
  const breadcrumbs = Array.isArray(event.breadcrumbs?.values)
    ? event.breadcrumbs.values
    : event.breadcrumbs;
  const crumbArray = Array.isArray(breadcrumbs) ? breadcrumbs : [];
  const errorCrumbs = crumbArray.filter((crumb) => isErrorPlusLevel(crumb.level));

  console.log("Error crumbs:", errorCrumbs);
  
  // return errorCrumbs.length
  //   ? errorCrumbs.every((crumb) => isIgnoredUrl(crumb.data?.url))
  //   : false;

  return errorCrumbs.length
    ? errorCrumbs.every((crumb) => {
        console.log("Crumb URL:", crumb.data?.url);
        return isIgnoredUrl(crumb.data?.url);
      })
    : false;

}

if (shouldIgnoreEventByBreadcrumb(dummyEvent)) {
  console.log("Event should be ignored.");
} else {
  console.log("Event should not be ignored.");
}