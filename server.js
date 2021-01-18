const puppeteer = require('puppeteer');


(async function main() {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            product: 'chrome',
            executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
        });
        const page = await browser.newPage();
        await page.setUserAgent(
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
        );

        // NAVIGATES TO WHATSAP WEB
        await page.goto("https://web.whatsapp.com/");
        await page.waitForSelector("._3jNGW");
        //PICK THE CONTACT
        const contactName = "יאללה יאללהההה";
        await page.click(`span[title='${contactName}']`);
        await page.waitForSelector("._2HE1Z");

        //FUCOS ON MSG INPUT
        // const editor = await page.$("div[data-indextab='-1']");
        // await editor.focus(); // focuses byitself
        const msgsNum = 3;
        for (var i = 0; i < msgsNum; i++) {
            await page.evaluate(() => {
                const message = "YES";
                document.execCommand("insertText", false, message);
            });
            await page.click("span[data-testid='send']");
            await dealy(500);
        }
    }
    catch (error) {
        console.log(error);
    }
})();

function dealy(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    })
}