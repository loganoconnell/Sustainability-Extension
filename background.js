// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.create({"url": "https://www.allbirds.com/"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "opened_amazon" ) {
      chrome.browserAction.setIcon({path:"icon-green.png"});
    }
  }
);
