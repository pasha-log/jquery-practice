// jQuery is a library of tools that helps with DOM manipulation, adding event listeners, animating elements, making HTTP requests (AJAX)
// Bootstrap provides you with tremendous power for styling pages.

// jQuery is written on a normal javascript file. 
// code.jquery.com/ to find CDN links

<script src="https://code.jquery.com/jquery-3.6.0.min.js" 
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
crossorigin="anonymous"></script>

// Use this link at the bottom of the html page but before the javascript reference.

// Selecting elements is as easy as selecting CSS elements (if you remember the CSS selectors)

$('ul') 
// Like document.querySelectorAll, this will select all uls.
$("#todo-container")
$(".carousel-image")
// like document.querySelectorAll,
// this will select ALL elements within that class.

// But when you use jQuery to select an element and run it in the console, 
// a jQuery object shows up, as opposed to a nodelist that document.querySelectorAll brings up.

// They both contain the same elements, but the return functions are different.

document.querySelectorAll('h1') instanceof NodeList
// true

$('h1') instanceof NodeList 
// false

// To fix this we use .get()
$('h1').get() // an actual array containing one of those dom elements.
$('h1').get(0) // to get the first one. A regular dom object for an h1.

$('ul li') // Every li inside of ul.
$('img') // All images.
$('*') // Every element.

// Common jQuery Methods
// .val() .text() .attr() .html()
// For retrieving AND setting the values.

// - Vanilla JS: .getAttribute(attrName) and .setAttribute(attrName, newValue)
// - jQuery: .attr(attrName), newValue) (second param is optional)

$('h1').text() // 'Piton de la Fournaise'
$('h1').text('VOLCANOOOOOOO') // Changes the h1 completely.

$('li').text('I AM LI') // Changes every li to the same thing, without any loops.

// .html() - Get the html contents of the first element in the set ig matched elements
// or set the html contents of every matched element. 

$('li').html() // Only gets the innerHTML of the first li that matched.
$('li').html(<b>BOLLLDD</b>) // Changes every li to be a bold BOLLLDD.

$('a') // Access every anchor tag.
$('a').attr('href', 'http://www.chickennuggets.com') // Sets the href to the second parameter.

const newAttrs = {src:
    'jpeg link', alt: 'Lava Flow'
}

$('img').attr(newAttrs) // Each image becomes the same.

$('input') // Selects all the inputs.
$('input').val() // "" unless you add something into the first one.
$('input').eq(3).val() // Starting from index zero, you get the forth element value that matches the selector.
$('input').val('') // Clears the input boxes.
$('input').val('CHICKEN BOYZ 4 LYFE') // Sets their values in.

// jQuery CSS

$('a').css('color') // You can retrieve the color of a particular element.
document.querySelector('a').style.color // "" because style.color only contains inline styles, or
// style object amid the DOM.

$('a').css('font-size') // 18 px. And no need for camel-case. 
$('a').css('font-size', '30px') // Change the size of all 'a' tags.

const bigTealStyles = {color: 'teal', 'font-size': '40px'}
$('a').css(bigTealStyles) // Changes styling completely.

// Suppose you make a CSS file:

// .highlight {
//     color: yellowgreen;
//     border: 2px solid salmon;
//     font-size: 20px;
// }

$('h1').addClass('highlight') // Changes the styling of the 'h1'.
$('h1').removeClass('highlight') 
$('h1').toggleClass('highlight') // Can go on and off like a toggle switch.

// jQuery Method Chaining 

const $h1 = $('h1') // You can add a $ to signify a jQuery value for other devs.
$h1.addClass('highlight') 
$('h1').css('background-color', 'teal') // Gets the jQuery object, just like $('h1') to begin with. So you keep adding methods to the chain.
$('h1').css('background-color', 'purple').addClass('highlight').text('CHAINING IS FUN!') // All in one line. 

// jQuery Traversal

const $specialLi = $('li').eq(3) // A single element in a jQuery object.
$specialLi.next() // The very next sibling.
$specialLi.prev() // The very previous sibling. 
$specialLi.parent() // The direct parent (ul).

$('li a').parent() // Anchor tags within the 'li's.

$('ul').children() // The direct children of the ul. 
$('ul').children('a') // Nothing really shows up because the anchor tags aren't children, merely descendants. 
$('ul').find() // Will look for their children and their children and so on.

// jQuery Creating Appending Removing Elements

document.createElement('h1') // Vanilla js empty h1.
$('ul').append('<li class="highlight">I AM NEW!!!</li>') // jQuery way, all in one line. Set a new li text and CSS styling.
$('li').append('<input type="checkbox"/>') // Each li gets a checkbox.
$('li').prepend('<input type="checkbox"/>') // Each li gets a checkbox at the beginning.
$('<h1>') // A new empty h1 that exists, but doesn't show up in the DOM.
$('<h1>HELLO!</h>').css('color', 'orange').appendTo('p') // After each paragraph, a new h1 with its own styling.
$('li').after('<bold>HI</bold>') // After each li, HI will show up. Even though it looks very ugly and pointless.
$('h1').remove() // Removes all the h1s.

// jQuery Events
// How do we add event listeners?
// Click, doubleclick, hover, etc.

$('img').click(function(){
    alert('HELLO!')
})

// jQuery's on() works similarly to addEventListener. It lets you specify the type of event to listen for.

// prints when item with id 'submit' is clicked
$('submit').on("click", function() {
    console.log("Another click");
});

// Why use on()?
// In most cases, click() and on('click') will both get the job done. HOWEVER, there is one key difference:
// - .click(callback) is a shorthand for .on("click", callback)
// - on() accepts optional argument between type of event and callback
// - This flexibility allows us to leverage event delegation. 

$('img').on('mouseleave', function () { // When you hover over an image, it prints out the message.
    console.log("LEAVING AN IMAGE!")
})

$('img').on('mouseleave', function () { // You can literally print out the source of the image.
    console.log(this.src);
})

$('img').on('mouseleave', function () { // Won't work. Error message will say that 'this.css' is  not a function. It's not a jQuery object. It's a DOM node. 
    this.css('border', '5px solid red');
})

$('img').on('mouseleave', function () { // This time should work. Everytime you hover over an image, it gets a purple borderline.
    $(this).css('border', '10px solid purple')
})

$('img').on('click', function () { // Img disappears with a click.
    $(this).remove();
})

// Event Delegation jQuery

// If you add an new element to a page, it won't react to the event listener, because they weren't there at the time the page loaded.

$('#add-input').on('click', function() { // Here you can add an input text box over and over.
    $('form').append('<input type="text">');
})

$('input').on('focus', function(){ // Should automatically fill in the input with BAMBOOZLED as soon as you focus on it.
    $(this).val('BAMBOOZLED') // But you can type new stuff in. Those inputs are not on the page when the code runs.
})

// Event delegation: Vanilla JS vs. jQuery

// Vanilla JS:                                      
// deletes a meme when it is clicked                
// even if it doesn't exist on page load

document.getElementById("meme-container")
  .addEventListener("click", function(evt) {
    let target = evt.target;

    // checking for "meme" class on target
    // this logic would need to change a bit
    // if we were searching by something
    // else (eg tag name)

    if (target.classList.contains("meme")) {
      deleteMeme(target);
    }
  });

// jQuery:

// deletes a meme when it is clicked
// even if it doesn't exist on page load

$("#meme-container")
  .on("click", ".meme", function(evt) {
    deleteMeme(evt.target);
  });


$('form').on('focus', 'input', function(){ // This time it works even when you add more inputs. 'this' is actually set to the particular 'input'.
    $(this).val('BAMBOOOZLED')
  }) 

// In vanilla JS, 'this' is actually set to the 'meme-container'. So that means you would have had to do something with the evt.target.
// jQuery makes it so you don't even hav to deal with event or event.target. Just the jQuery version of 'this' ($(this)).

// jQuery Animations

// Built in methods call effects. 
// Fade in fade out can require more code in vanilla javascript. You won't have set
// up the timer yourself or control the opacity.

// .fadeOut([duration][,complete]) You can put in some strings (slow or fast) or numbers for the duration.

// But when you make an image fade out, it doesn't remove it completely. It just becomes transparent.

$('img').on('click', function () { // So it does apppear to go away, but it's not actually gone on the DOM. The display is set to none.
    $(this).fadeOut()
})

// And you can't just add .remove() after the .fadeout(), because it'll remove faster than the fade happens.

// So instead:

$('img').on('click', function () { // And you can even drag the fade out longer.
    $(this).fadeOut(3000, function () {
        $(this).remove()
    })
})   

// There's also .fadeIn(). But the element has to already be there. Does the same thing as .fadeOut().
// There's also .slideUp(), .slideDown(), .slideToggle(). Different ways to make an element disappear. 
// Not really considered a performant way of animating. 
// .animate() allows you to pass in a list or an object of properties you'd want to animate
// like opacity, left, right...

$("#clickme").click(function(){
    $("#book").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete. 
    })
})

// With .animate() you can make animations that are more complex. 

$('img').on('click', function () { // Images will shrink painfully slow.
    $(this).animate({
        opacity: 0,
        width: '50px' // DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
    }, 3000, function(){ // function that has a callback.
        $(this).remove();
    })
})

// Nowadays the DOM API is much more standardized. You don't have to worry as much about
// different browsers. It will make code shorter. You could do everything 
// on your own. But jQuery is there whenever you need it. It might come in handy.
// Not end all be all for DOM manipulation. 
