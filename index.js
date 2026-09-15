'use strict';

const path = require('path');
const { library } = require('@fortawesome/fontawesome-svg-core');
const icon = require('./assets/icon.json');

// Use poi's shared FontAwesome registry and a plugin-specific name.
library.add(icon);

let popup = null;

exports.handleClick = () => {
  if (popup) {
    if (popup.isMinimized()) popup.restore();
    popup.show();
    popup.focus();
    return;
  }

  const { BrowserWindow } = require('@electron/remote');
  const current = new BrowserWindow({
    title: '马路油',
    width: 200,
    height: 200,
    minWidth: 120,
    minHeight: 120,
    useContentSize: true,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#faf7f1',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });
  popup = current;
  current.setMenu(null);
  current.once('ready-to-show', () => current.show());
  current.once('closed', () => {
    if (popup === current) popup = null;
  });
  current.loadFile(path.join(__dirname, 'popup.html')).catch((error) => {
    if (!current.isDestroyed()) current.close();
    require('@electron/remote').dialog.showErrorBox('马路油加载失败', error.message);
  });
};

exports.pluginWillUnload = () => {
  if (popup) popup.close();
};
