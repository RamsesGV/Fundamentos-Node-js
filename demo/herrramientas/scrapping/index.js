const puppeteer = require('puppeteer');

(async () => { 
    //nuestro codigo 
    console.log('lanzmaos navegador!')
    const  browser = await puppeteer.launch() 

    console.log('cerramos navegador');
    browser.close()
    console.log('Navegador cerrado')
})()