$(".statusBtn").on("click", function () {
    console.log("Clicked on .statusBtn");
    let property_id = $(this).data("id");
    let csrf_token = $('meta[name="csrf-token"]').attr("content");

    $(this).prop("disabled", true);
    $.ajax({
        url: "/unvalidprop",
        type: "POST",
        data: { property_id: property_id },
        headers: {
            "X-CSRF-TOKEN": csrf_token,
        },

        success: (response) => {
            console.log(response);
            $(this).text("valid");
            $(this).addClass("bg-success").removeClass("bg-danger");
        },
        error: (error) => {
            console.log(error);
            $(this).addClass("bg-danger").removeClass("bg-success");
            $(this).text("unvalide");
        },
        complete: () => {
            $(this).prop("disabled", false);
        },
    });
});
