chrome.runtime.onInstalled.addListener(() => {
    console.log("Hide Review Scores extension installed!");
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'onSpecificSite') {
      console.log(message.message);  // Log the message from content.js
    }
  });