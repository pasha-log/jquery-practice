// Part Two - Movies App!
// Build an application that uses jQuery to do the following:
// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along 
// with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

$('body').append('<h1>MOVIE APP!</h1>')
$('h1').after('<label>Movie title:</label><input type="text" id="title"><label>Rating:</label><input type="text" id="rating"><button id="button-add-movie">Submit!</button>')
$('#button-add-movie').after('<ul id="movie-list"></ul>')
$('#button-add-movie').on('click', function() {
    let title = $('#title').val() 
    let rating = $('#rating').val()
    if (title !== undefined && title !== '' && rating !== undefined && rating !== '') {
        $('#movie-list').append(`<li>${title}, ${rating}<button class="delete">Delete</button></li>`);
        $('.delete').on('click', function(){
            $(this).parent().remove()
        })
    } else {
        alert("Actually add something!")
    }
})

