const statusLabel = document.getElementById("status-label");

async function main() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    
    const url = tab.url;
    const urlObj = new URL(url);

    if (urlObj.origin !== "https://www.youtube.com" && urlObj.pathname !== "/watch") {
        statusLabel.innerText = "Aby skorzystać z narzędzia do pobierania, otwórz film na YouTube i naciśnij ikonę rozszerzenia.";
        return;
    }

    statusLabel.innerText = "Narzędzie do pobierania powinno się uruchomić.";
    window.open(`ytdl:${url}`);
}

main();