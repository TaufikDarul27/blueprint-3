function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index')
        .setTitle('The Ultimate Blueprint 3.0')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}