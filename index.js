const puppeteer = require('puppeteer');

// let cFile=process.argv[2];
// let pUrl=process.argv[3];
// let num=process.argv[4];
// let fs=require("fs");

(async () => {
    try{

    
    // let data = await fs.promises.readFile(cFile);
    // let { username,password} = JSON.parse(data)[0];
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 5, 
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
  });
  let tabs = await browser.pages();
  let tab = tabs[0];
  //const page = await browser.newPage();
  await tab.setDefaultNavigationTimeout(0); 
  await tab.goto('https://web.whatsapp.com', { waitUntil: "networkidle0",timeout: 0 });
  await tab.waitForSelector(".app");
 
  await tab.waitForSelector("._1-iDe._1xXdX");
  
  await tab.waitFor(2000)
      console.log("loading");
      await tab.waitForSelector("._3F6QL._3xlwb");
      let search = await tab.$("._3F6QL._3xlwb");
         await search.click({delay:190});
      console.log("clicked");
      await tab.waitFor(2000)
     
    
     await tab.type("div[data-tab='3']", "Dad", { delay: 290 });

console.log("typed");

await tab.keyboard.press('Enter');

console.log("Opening chat");
await tab.waitForSelector("._1-iDe.Wu52Z ._1GX8_",{visible:true});
await tab.waitForSelector("div[data-tab='1']",{visible:true});
let inputbox = await tab.$("div[data-tab='1']");
inputbox.click();
await tab.waitFor(2000)
// await tab.waitForSelector("._2tW_W",{visible:true});
// await tab.type("div[data-tab='1']", "Hello papa!", { delay: 90 });
// console.log("Msg typed");
// await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:100});
// console.log("Msg sent" );
await tab.waitForSelector(".app");
await tab.exposeFunction("newChat", async (text) =>
{
   // console.log(text);
        if(text.includes("happy") || text.includes("bday") || text.includes("birthday")){
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "Thank you so much ❤️", { delay: 50 });
        
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
        else if(text.includes("morning") && text.includes("good") ){
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "Good Morning ☕️", { delay: 50 });
        
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }

    
    else if(text.includes("hi") || text.includes("hello") || text.includes("hey")){
        console.log("Replying to ... "+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "Hello 🤘", { delay: 50 });
        
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
    else if(text.includes("how are you") && text.includes("are") && text.includes("you")){
        console.log("Replying to ... "+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "I am fine! How about you?", { delay: 50 });
        
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
    else if(text.includes("bye") ){
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "Bye! TC❤️", { delay: 50 });
     
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
    else if(text.includes("namaste")){
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "Namaste🙏", { delay: 50 });
     
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
    else if(text.includes("have") && text.includes("good") && text.includes("day")){
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "You too! Have a Good Day 🍕", { delay: 50 });
     
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");
    }
        else{
        console.log("Replying to ..."+text);
        await tab.waitForSelector("._2tW_W",{visible:true});
        await tab.type("div[data-tab='1']", "🤔", { delay: 50 });
        
        await tab.waitForSelector("._35EW6",{visible:true});
let sendbtn=await tab.$("._35EW6");
sendbtn.click({delay:50});
console.log("Replied!");


    }

    // if (text.ToLower().Contains(args.TriggerWord) && !text.Contains(args.ResponseTemplate))
    // {
    //     await RespondAsync(args, text);
    // }

    // text = text.Replace(args.ResponseTemplate, string.Empty);
    // await File.AppendAllTextAsync(args.SourceText, text + "\n");
});
await tab.waitForSelector(".app");
await tab.evaluate(`
    var observer = new MutationObserver((mutations) => {
        for(var mutation of mutations) {
            if(mutation.addedNodes.length) {
                newChat(mutation.addedNodes[0].querySelector('.copyable-text span').innerText);
           }
        }
    });
    observer.observe(document.querySelector('.app'), { attributes: false, childList: true, subtree: true });
`);
// await tab.exposeFunction("newChat", async (text) =>
// {
//     console.log("Message from user"+text);
//     console.log("Replying..");
//     if(text.includes("happy") || text.includes("bday") || text.includes("birthday")){
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "Thank you so much!", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );
//     }
//     else if(text.includes("morning") && text.includes("good") ){
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "Good Morning", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );
//     }
    
//     else if(text.includes("hi") || text.includes("hello") || text.includes("heya")){
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "Hello!", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );
//     }
//     else if(text.includes("how are you") && text.includes("are") && text.includes("you")){
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "I am fine! How about you?", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );
//     }
//     else if(text.includes("namaste")){
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "Namaste🙏", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );
//     }
//     else{
//         console.log("Replying to "+text);
//         await tab.waitForSelector("._2tW_W",{visible:true});
//         await tab.type("div[data-tab='1']", "🤔", { delay: 50 });
//         console.log("Msg typed");
//         await tab.waitForSelector("._35EW6",{visible:true});
// let sendbtn=await tab.$("._35EW6");
// sendbtn.click({delay:50});
// console.log("Msg sent" );

//     }
    

//     // if (text.ToLower().Contains(args.TriggerWord) && !text.Contains(args.ResponseTemplate))
//     // {
//     //     await RespondAsync(args, text);
//     // }

//     // text = text.Replace(args.ResponseTemplate, string.Empty);
//     // await File.AppendAllTextAsync(args.SourceText, text + "\n");
// });


// await tab.evaluate(`
//     var observer = new MutationObserver((mutations) => {
//         for(var mutation of mutations) {
//             console.log(mutation);
//             if(mutation.addedNodes.length) {
//                 console.log(78);
//                 newChat(mutation.addedNodes[0].querySelector('.copyable-text span').innerText);
//             }
//         }
//     });
//     observer.observe(document.querySelector('.app'), { attributes: false, childList: true, subtree: true});
// `);
    // await tab.evaluate(`
    // console.log("here60");
    //     var observer = new MutationObserver((mutations) => {
    //         for (var mutation of mutations) {
    //             console.log(mutation);
    //             if (mutation.addedNodes.length && mutation.addedNodes[0].id === 'main') {
    //                 newChat(mutation.addedNodes[0].querySelector('.copyable-text span').innerText);
    //                 console.log("%cChat changed !!", "font-size:x-large");
    //                // WAPI.addOptions();
    //             }
    //         }
    //     });
    //     observer.observe(document.querySelector('.app'), { attributes: false, childList: true, subtree: true });
    //     console.log("here72");
    // `);
    // console.log("here");
    // let message="reply";
    // tab.waitForSelector("#main", { timeout: 0 }).then(async () => {
    //     await tab.exposeFunction("newChat", async message => {
    //         console.log("here74");
    //         console.log(message);
    //         return new Promise(async (resolve, reject) => {
                
    //             //send message to the currently open chat using power of puppeteer 
    //             await page.type("div.selectable-text[data-tab]", message);
    //             // if (configs.smartreply.clicktosend) {
    //              await page.click("#main > footer > div.copyable-area > div:nth-child(3) > button");
    //             // }
    //         });
    //     });
    // });
// await tab.exposeFunction("newChat",async text =>
// {
//     console.log(text);

//     // if (text.ToLower().Contains(args.TriggerWord) && !text.Contains(args.ResponseTemplate))
//     // {
//     //     await RespondAsync(args, text);
//     // }

//     // text = text.Replace(args.ResponseTemplate, string.Empty);
//     // await File.AppendAllTextAsync(args.SourceText, text + "\n");
// });

//     await tab.type("input[type=email]", username, { delay: 90 });
//     await tab.type("input[type=password]", password, { delay: 90 });
//   //await page.goto('https://facebook.com');
//   //await page.screenshot({path: 'example.png'});
//   await Promise.all([
//     tab.waitForNavigation({ waitUntil: "networkidle2" }), // The promise resolves after navigation has finished
//     tab.click('.login_form_login_button '), // Clicking the link will indirectly cause a navigation
//   ]);
 
   



  

  
 

}
catch(err){
    console.log(err);
}

  //await browser.close();
})();
async function setupSmartReply() {
   
    await tab.waitForSelector(".app");
    await tab.evaluate(`
        var observer = new MutationObserver((mutations) => {
            for (var mutation of mutations) {
                //console.log(mutation);
                if (mutation.addedNodes.length && mutation.addedNodes[0].id === 'main') {
                    //newChat(mutation.addedNodes[0].querySelector('.copyable-text span').innerText);
                    console.log("%cChat changed !!", "font-size:x-large");
                    WAPI.addOptions();
                }
            }
        });
        observer.observe(document.querySelector('.app'), { attributes: false, childList: true, subtree: true });
    `);
    
    tab.waitForSelector("#main", { timeout: 0 }).then(async () => {
        await tab.exposeFunction("sendMessage", async message => {
            console.log(message);
            return new Promise(async (resolve, reject) => {
                
                //send message to the currently open chat using power of puppeteer 
                // await page.type("div.selectable-text[data-tab]", message);
                // if (configs.smartreply.clicktosend) {
                //     await page.click("#main > footer > div.copyable-area > div:nth-child(3) > button");
                // }
            });
        });
    });
}