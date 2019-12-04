var request = require('request');

async function languageTranslator(languageText, source, target){
    let respData = await TranslatorAPI(languageText, source, target)
    // console.log("Language JSON ==> ",respData.data.translations);
    return respData.data.translations;
}

function TranslatorAPI(input, source, target){
    var request_json ={
        "q": input,
        "target": target,
        "source": source
        }
    return new Promise((resolve,reject)=>{
            request.post({
                url:"https://example.com",
                body:JSON.stringify(request_json),
                headers: {
                    apikey: 'shjsjsjsjjsjsF',
                    "Content-Type":"application/json"
                }
            }
            ,(error,response,body)=>{
                if(!error){
                    // console.log("BODY:",body);
                    resolve(JSON.parse(body));
                }else{
                    console.log("ERROR",error)
                    reject(error);
                }
            });
    });
}

module.exports = languageTranslator;