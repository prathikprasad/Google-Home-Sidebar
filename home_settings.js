// Load the existing saved URL when the settings page opens
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['homeUrl'], (result) => {
    if (result.homeUrl) {
      document.getElementById('homeUrl').value = result.homeUrl;
    }
  });
});

// Save the user's typed URL and trigger the confirmation alert
document.getElementById('save').addEventListener('click', () => {
  const homeUrl = document.getElementById('homeUrl').value.trim();
  const status = document.getElementById('status');

  chrome.storage.sync.set({ homeUrl: homeUrl }, () => {
    status.textContent = 'Success! Your settings have been updated.';
    status.style.display = 'block';

    setTimeout(() => {
      status.style.display = 'none';
      status.textContent = '';
    }, 3500);
  });
});
