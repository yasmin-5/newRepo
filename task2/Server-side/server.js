var http=require('http');
var fs =require("fs");
var fileHtml='';
var fileCss=""
var fileIcon=""
var backimg=""
var filewelcome=""
//#region read file
fs.readFile("../Client-side/Html/mainPage.html","utf-8",(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        fileHtml=data
    }
});
fs.readFile("../Client-side/Html/welcomePage.html","utf-8",(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        filewelcome=data
    }
});
fs.readFile("../Client-side/Styles/style.css","utf-8",(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        fileCss=data
    }
})
fs.readFile("../Client-side/Icons/favicon.ico",(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        fileIcon=data
    }
})
fs.readFile("../Client-side/Styles/hand-painted-watercolor-pastel-sky-background_23-214890277.avif",(err,data)=>{
    if(err){
        console.log("error");
    }
    else{
        backimg=data
    }
})
//#endregion
var mydata=""
var newfile=filewelcome;
http
.createServer((req,res)=>{

    //#region GET
    if(req.method == "GET"){
       switch (req.url){
        case '/':
        case '/mainPage.html':
        case '/Client-side/Html/mainPage.html':
           res.writeHead(200,{'content-type':"text/html"})
           res.write(fileHtml);
        break;
        case '/style.css':
        case "/Styles/style.css":
        case '/Client-Side/Styles/style.css':
            res.writeHead(200,{'content-type':"text/css"})
            res.write(fileCss);
        break;
        case "/favicon.ico":
        case "/Client-side/Icons/favicon.io":
        case "/Icons/favicon.ico":
            res.writeHead(200,{'content-type':"image/vnd.microsoft.icon"})
            res.write(fileIcon);
        break;
        case "/hand-painted-watercolor-pastel-sky-background_23-214890277.avif":
        case "/Client-side/Styles/hand-painted-watercolor-pastel-sky-background_23-214890277.avif":
        case "/Styles/hand-painted-watercolor-pastel-sky-background_23-214890277.avif":
                res.writeHead(200,{'content-type':"image/avif"})
                res.write(backimg);
        break;
        case '/welcomePage.html':
            case '/Client-Side/HTML/welcomePage.html':
                res.writeHead(200,{'content-type':"text/html"})
                res.write(filewelcome);
            break;
       }
        res.end();
    }
    //#endregion GET
    //#region POST
    else if(req.method=="POST"){
        req.on("data",(data)=>{
           newfile=filewelcome;
           mydata=data.toString();
        })
        req.on("end",()=>{
            var username=mydata.split("&")[0].split("=")[1].replace("+"," ")
            var mobile=mydata.split("&")[1].split("=")[1]
            var email=mydata.split("&")[2].split("=")[1].replace("%40","@")
            var address=mydata.split("&")[3].split("=")[1]
            newfile=filewelcome
            .replace("{{username}}",username)
            .replace("{{mobile}}",mobile)
            .replace("{{email}}",email)
            .replace("{{address}}",address)
            console.log(mydata)
            res.write(newfile);
            res.end();
        })

    }
    //#endregion

}).listen(7000,()=>{

})

