$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/FeatureFile/AssignmentFeature.feature");
formatter.feature({
  "name": "Booking Trip on ClearTrip",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Book a return trip on cleartrip",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch a browser and navigate to Clear Trip",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.Assignments.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search two return tickets after two weeks",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.Assignments.searchReturnTickets()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Returning Flights",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.Assignments.selectReturningFlight()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".radio__light\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027A948LBLR\u0027, ip: \u002710.104.7.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\U75420\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65246}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7f3c8659f21beffa1056853925ac839c\n*** Element info: {Using\u003dcss selector, value\u003d.radio__light}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.Assignments.selectReturningFlight(Assignments.java:99)\r\n\tat ✽.Select Returning Flights(file:///C:/Users/U75420/eclipse-workspace-1/oneTrustAssignment/src/main/resources/FeatureFile/AssignmentFeature.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify the Bangalore to Delhi flight Booking",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.Assignments.verifyBooking()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Gifting a book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch a browser and navigate to Amazon",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefination.Assignments.launchAmazon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search a product and click on Buy Now",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefination.Assignments.searchAProduct()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#buy\\-now\\-button\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027A948LBLR\u0027, ip: \u002710.104.7.95\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\U75420\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:65458}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4012f7b8ed68943fe8257dea73127850\n*** Element info: {Using\u003did, value\u003dbuy-now-button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefination.Assignments.searchAProduct(Assignments.java:183)\r\n\tat ✽.Search a product and click on Buy Now(file:///C:/Users/U75420/eclipse-workspace-1/oneTrustAssignment/src/main/resources/FeatureFile/AssignmentFeature.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify the SignIn Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.Assignments.verifyLogin()"
});
formatter.result({
  "status": "skipped"
});
});