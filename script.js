$(document).ready(function (){
    const $date = $(".date");
    const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5PM" ];
    const $inputsForm = $(".inputs");
    const currentHour = moment().format("H");

    $date.text(moment().format("lll"))

    for (let i in hours) {
        const iTime = parseInt(i) + 9;
        const $inputGroupDiv = $("<div>");
        const $input = $("<input>");
        const $hourDiv = $("<hours>");
        const $buttonDiv = $("<div>");
        const $saveButton = $("<button>");
        const $saveIcon = $("<i>");

        $inputGroupDiv.addClass("input-group mb-3");
        $input.addClass("form-control").attr("type", "text");
        $hourDiv.addClass("input-group-prepend input-group-text").text(hours[i]);
        $buttonDiv.addClass("input-group-append");
        $saveButton.addClass("btn btn-primary saveButton");
        $saveIcon.addClass("material-icons").text("save");

        if (iTime > currentHour) {
            $input.addClass("future");
        }
        else if (iTime < currentHour) {
            $input.addClass("past");
            //target class in css
        }
        else {
            $input.addClass("present");
        }

        if (localStorage.getItem(hours[i])) {
            $input.val(localStorage.getItem(hours[i]));
        }

        $saveButton.append($saveIcon);
        $buttonDiv.append($saveButton);
        $inputGroupDiv.append($hourDiv, $input, $buttonDiv);
        $inputsForm.append($inputGroupDiv);
    }

    $(document).on("click", ".saveButton", function (e) {
        e.preventDefault();
        const inputValue = $(this).parents(".input-group-append").siblings("input").val();
        const inputHour = $(this).parents(".input-group-append").siblings(".input-group-text").text();

        localStorage.setItem(inputHour, inputValue);
    })
})
