window.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("btn_call").addEventListener("click", PopUpShow);
    document.getElementById("btn_uncall").addEventListener("click", PopUpHide);
    document.getElementById("form_confirm").addEventListener("click", PopUpHide);
});

//Скрыть PopUp при загрузке страницы  
//window.onload = PopUpHide;

//Функция отображения PopUp
function PopUpShow() {
    $("#formula_popup").show();
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#formula_popup").hide();
}