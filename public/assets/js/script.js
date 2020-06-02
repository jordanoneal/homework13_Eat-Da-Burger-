$(function () {

    $("#addBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#addBurger [name=burger_name]").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // devour burger

    $(".devourBtn").on("click", function (event) {

        let id = $(this).data("id");

        let devouredState = {
            devoured: true
        };

        // send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState

        }).then(
            function () {
                console.log("burger devoured");
                location.reload();

            }
        )
    })

    // delete burger
    $(".deleteBtn").on("click", function (event) {
        event.preventDefault();

        let id = $(this).data("id");

        // send delete request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id

        }).then(
            function () {
                console.log("burger deleted");
                location.reload();

            }
        )
    })

})