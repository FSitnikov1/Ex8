document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM loaded');

    const form = document.getElementById('forma');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            $("#forma").submit(function (e) {
                e.preventDefault();
                var href = $(this).attr("action");
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: href,
                    data: $(this).serialize(),
                    success: function (response) {
                        if (response.status == "success") {
                            form.reset();
                            alert("We received your submission, thank you!");

                        } else {
                            alert("An error occured: " + response.message);
                        }
                    }
                });
            });
        } else {
            alert('Fill the fields!');
        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        console.log('Error ' + error);
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }

    function emailTest(input) {
        return !/^\2+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});