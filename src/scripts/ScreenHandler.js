class ScreenHandler{
    constructor(){
        this.showNoneCheckbox = document.getElementById("showNoneCheckbox");
    }

    isPaused(){
        return !this.showNoneCheckbox.checked;
    }
}