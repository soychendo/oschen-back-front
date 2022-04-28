/*-----------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendito
    Description: Windows 10 - Clone 70% | - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
import { startHover, grid_user, close, closeE, winRefresh} from '@scripts/selectors.js';
import { arrayForExplorer } from '@scripts/explorer.js'
import { 
    openMenu, 
    gridOut, 
    gridOver, 
    srcOut, 
    srcOver, 
    touring, 
    filter,
    dateHour,
    showPreview,
    closeExplorer,
    defaultOver,
    closeCalc,
    contextMenuCustom,
    clickContextMenu,
    refresh,
} from '@scripts/functions.js';

class App {
    constructor() {
        this.initWindows();
    }

    initWindows() {
        //init all windows functions - movement
        document.addEventListener('DOMContentLoaded', touring);
        //Start Menu
        document.addEventListener('click', openMenu);
        // Menu Chendo | Context Menu
        document.addEventListener('contextmenu', contextMenuCustom);
        document.addEventListener('click', clickContextMenu);
        // Hour - Ecuador
        document.addEventListener('DOMContentLoaded', dateHour);
        // show preview
        document.addEventListener('DOMContentLoaded', showPreview);
        //src over
        startHover.addEventListener('mouseover', srcOver);
        startHover.addEventListener('mouseout', srcOut);
        // grid show
        grid_user.addEventListener('mouseover', gridOver);
        grid_user.addEventListener('mouseout', gridOut);
        //calc close
        close.addEventListener('click', closeCalc);
        closeE.addEventListener('click', closeExplorer);
        // default over
        document.addEventListener('DOMContentLoaded', defaultOver);
        // Change Explorer Items
        document.addEventListener('DOMContentLoaded', arrayForExplorer);
        // Window Refresh
        winRefresh.addEventListener('click', refresh);
        
        // The mousedown event fires when the user depresses the mouse button.
        document.onmousedown = filter;
        document.ontouchstart = filter;
    }
}

export default App;