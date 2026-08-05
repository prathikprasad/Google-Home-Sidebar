chrome.storage.sync.get(['homeUrl'], (result) => {
  const homeUrl = result.homeUrl;
  const iframe = document.getElementById('homeFrame');
  const setupMessage = document.getElementById('setupMessage');

  if (homeUrl && homeUrl.trim() !== "") {
    iframe.src = homeUrl.trim();
    iframe.style.display = 'block';
    setupMessage.style.display = 'none';
  } else {
    iframe.style.display = 'none';
    setupMessage.style.display = 'block';
  }
});

// Opens our configuration file right from the sidebar button click
document.getElementById('openSettings').addEventListener('click', () => {
  chrome.tabs.create({ url: "home_settings.html" });
});
