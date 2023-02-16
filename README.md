# YTDownloader-chrome-extension
Rozszerzenie do przeglądarek opartych na Chromium służące do integracji z aplikacją [YouTube Downloader](https://github.com/bartekmuzyk/YTDownloader).

## Instrukcja instalacji
### 1. Pobierz archiwum .zip z kodem źródłowym rozszerzenia
Kliknij zielony przycisk `Code` na górze, a następnie wybierz pozycję `Download ZIP`

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/dl-zip-from-github.png)

### 2. Wypakuj archiwum
Po pobraniu pliku .zip, wypakuj archiwum do łatwo dostępnego miejsca za pomocą wybranego menedżera archiwów.

### 3. Przejdź na stronę zarządzania rozszerzeniami
Aby otworzyć wspomnianą stronę, wpisz w pasku adresu `chrome://extensions`.

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/go-to-ext-page.png)

### 4. Włącz tryb dewelopera
Aby zainstalować lokalnie pobrane rozszerzenie, należy włączyć tryb dewelopera za pomocą przełącznika w górnym-prawym rogu strony.

![](https://github.com/bartekmuzyk/YTDownloader-chrome-extension/blob/master/screenshots/turn-on-dev-mode.png)

### 5. Wybierz folder z rozszerzeniem
Kliknij przycisk `Załaduj rozpakowane` w górnym-lewym rogu strony i w oknie dialogowym przejdź do folderu, w którym znajdują się wypakowane wcześniej przez Ciebie pliki.
Następnie przejdź do folderu o naziwe `YTDownloader-chrome-extension-master` i potwierdź wybór (wybrany folder powinien zawierać m.in. pliki `index.html`, `script.js` oraz `manifest.json`).

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/choose-folder.png)

Na stronie z rozszerzeniami powinien pojawić się nowy kafelek z informacjami o nowo dodanym rozszerzeniu:

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/ext-installed.png)


### 6. (Opcjonalne) Przypnij ikonę rozszerzenia
Aby zapewnić szybki dostęp do przycisku pobierania, zalecane jest przypięcie ikony rozszerzenia do obszaru obok paska adresu.

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/pin-ext-icon.png)

## Jak używać
### 1. Włącz film na YouTube i kliknij ikonę rozszerzenia w górnym-prawym rogu okna
![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/click-icon.png)

### 2. Potwierdź otwarcie aplikacji YTDownloader
Domyślnie kliknięcie ikony rozszerzenia wyświetli monit w nowej karcie, proszący o zezwolenie na otwarcie zewnętrznej aplikacji. Dla wygody zalecane jest zaznaczenie przełącznika "Zawsze pozwalaj".

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/open-app-modal.png)

### 3. Okno YouTube Downloader powinno się otworzyć
Program powinien się włączyć i zacząć ładować informacje na temat strumieni. Jeżeli się tak nie stanie, upewnij się, że aplikacja [YouTube Downloader](https://github.com/bartekmuzyk/YTDownloader) jest zainstalowana i została uruchomiona jako administrator co najmniej jeden raz.

![](https://raw.githubusercontent.com/bartekmuzyk/YTDownloader-chrome-extension/master/screenshots/downloader-opens.png)
