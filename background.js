const proxyDomains = {
  "ieeexplore.ieee.org": "ieeexplore-ieee-org.ez54.periodicos.capes.gov.br",
  "www.science.org": "www-science-org.ez54.periodicos.capes.gov.br",
  "onlinelibrary.wiley.com": "onlinelibrary-wiley-com.ez54.periodicos.capes.gov.br",
  "www.nature.com": "www-nature-com.ez54.periodicos.capes.gov.br",
  "dl.acm.org": "dl-acm-org.ez54.periodicos.capes.gov.br",
};

chrome.commands.onCommand.addListener((command) => {
  if (command === "modify_url") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      let tab = tabs[0];
      try {
        let url = new URL(tab.url);
        let proxyHost = proxyDomains[url.hostname];
        if (proxyHost) {
          let newUrl = url.href.replace(url.hostname, proxyHost);
          chrome.tabs.update(tab.id, { url: newUrl });
        }
      } catch (e) {
        console.error("Invalid URL or failed to process:", e);
      }
    });
  }
});
