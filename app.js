//Client to Server Request. client sends a request in a native language and Server Responses is returned back to client in native language
let translateAPI = require('./translateAPI');

async function getLangDetails(textToDetect, nativeLang = 'en', transDestination = 'en') {
    let TranslateData = await translateAPI(textToDetect, nativeLang, transDestination);
    let englishTranslation = await translateAPI(textToDetect, TranslateData[0].detectedSourceLanguage, 'en');
    let translatedObject = { inputText: textToDetect, inputLang: TranslateData[0].detectedSourceLanguage, enTrans: englishTranslation[0].translatedText, translatedText: TranslateData[0].translatedText, translatedTo: transDestination };
    return translatedObject;
}

async function fetchDataFromServer(userInput) {
    // let searchSpaceResult = runServerAPI(userInput); //Potential Server API respons
    let searchSpaceResult = "Ich bin der fuhrer"; //Server Response text
    let serverResponseLangData = await getLangDetails(searchSpaceResult, 'en', userInput.inputLang); //Get language details of the Server Response
    //Server Response is then translated back to users/client's native language
    if (userInput.inputLang !== serverResponseLangData.inputLang){
        console.log(serverResponseLangData);
        return serverResponseLangData;
    }else{
        console.log("No language Translation required.");
        console.log(serverResponseLangData);
        return serverResponseLangData;
    }
}


    getLangDetails("bonjour").then(data=>{
        fetchDataFromServer( data);
    });