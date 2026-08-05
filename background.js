// Tells Chrome to open the side panel when the user clicks the extension icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Create a custom right-click menu item specifically for the extension icon
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openHomeSettings",
    title: "Home Settings",
    contexts: ["action"]
  });
});

// Listen for clicks on our custom menu item and open our custom file
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openHomeSettings") {
    chrome.tabs.create({ url: "home_settings.html" });
  }
});
