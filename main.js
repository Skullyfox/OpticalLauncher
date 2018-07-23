const   electron    = require('electron'),
        url         = require('url'),
        path        = require('path'),
        {app, BrowserWindow, Menu, ipcMain} = electron;

// SET ENV
//process.env.NODE_ENV = 'production';

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 450,
        resizable: false,
        frame: false,
    });
    //Load html in window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Quit App when Closed
    mainWindow.on('closed', function(){
        app.quit();
    });

    //build menu from Template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu)
});

//Create Menu Template
const mainMenuTemplate = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q':'Ctrl+Q',
                click(){
                    app.quit();
                }
            },
        ]
    }
];

// If mac, add empty object to menu
if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developper Tools',
        submenu: [
            {
                label:'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I':
                'Ctrl+I',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}