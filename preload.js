// Ponte segura entre a janela e o disco: só estas funções ficam visíveis para a página.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('volterDesktop', {
  load: () => ipcRenderer.invoke('data:load'),
  saveSync: (json) => ipcRenderer.sendSync('data:save', json),
  saveFile: (name, data) => ipcRenderer.invoke('file:save', name, data)
});
