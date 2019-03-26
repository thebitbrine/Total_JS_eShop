var page = new WebPage(), testindex = 0, loadInProgress = false;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log("load finished");
};

var steps = [
  function() {
    //Load Login Page
    page.open("https://g.co/allowaccess/");
  },
  function() {
    //Enter Credentials
    page.evaluate(function() {

      var account = document.getElementsById("identifierId");
      account.value="johanpg27@gmail.com";
      account.value="${KEY_ENTER}";

    });
  },
  function() {
    //Login pass passworddata
    page.evaluate(function() {

      var passworddata = document.getElementsById("identifierId");
      passworddata.value="aB1144058907";
      passworddata.value="${KEY_ENTER}";

    });
  },
  function() {
    // Output content of page to stdout after form has been submitted
    page.evaluate(function() {
      console.log(document.querySelectorAll('html')[0].outerHTML);
    });
  }
];


interval = setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] == "function") {
    console.log("step " + (testindex + 1));
    steps[testindex]();
    testindex++;
  }
  if (typeof steps[testindex] != "function") {
    console.log("test complete!");
    phantom.exit();
  }
}, 50);
