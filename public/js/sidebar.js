const init = () => {
    // event to open the sidebar on trigger button click
    const triggerBtns = Array.from(document.querySelectorAll(".sidebar-trigger"));
    triggerBtns.forEach(triggerBtn => {
        triggerBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const selector = triggerBtn.dataset.sidebar;
            const sidebar = document.querySelector(selector);
            sidebarOpen(sidebar);
        }, true);
    });
    // event to close the sidebar on close button click
    const closeBtns = Array.from(document.querySelectorAll(".sidebar__header-close-btn"));
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const sidebar = _getClosest(closeBtn, '.sidebar');
            sidebarClose(sidebar);
        }, true);
    });
}


const sidebarOpen = (sidebar) => {
    sidebarCloseAll();
    sidebar.classList.add("sidebar--active");
}

const sidebarCloseAll = () => {
    const sidebars = Array.from(document.querySelectorAll(".sidebar--active"));
    sidebars.forEach(sidebar => {
        sidebar.classList.remove("sidebar--active");
    });
}

const sidebarClose = (sidebar) => {
    sidebar.classList.remove("sidebar--active");
}

const _getClosest = (element, selector) => {
    let result = null;
    while ((element = element.parentElement)) { 
        if (element.matches(selector)) { 
            result = element; 
            break;
        } 
    }
    return result;
}

document.addEventListener("DOMContentLoaded", init);
