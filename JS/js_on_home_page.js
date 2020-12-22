
// List of sentences that will be type_sentenced out.
var sentences_to_type_sentence = [ 
	"\xa0am a high school student.", 
	"\xa0am a self-taught programmer.", 
	"\xa0code things that help make lives easier!"
];


// The current sentence being processed
var current_sentence = 0;

// Character number of the current sentence being processed 
var current_sentence_letter = 0;

// Holds the handle returned from setInterval
var typing_interval;

// Element that holds the text
var changing_text_id = document.querySelector("#home_changing_text");

// Cursor element 
var blinking_line_id = document.querySelector("#blinking_line");

// Implements typing effect
function type_sentence() { 
	// Get substring with 1 characater added
	var sentence_text =  sentences_to_type_sentence[current_sentence].substring(0, current_sentence_letter + 1);
	changing_text_id.innerHTML = sentence_text;
	current_sentence_letter++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(sentence_text === sentences_to_type_sentence[current_sentence]) {
		clearInterval(typing_interval);
		setTimeout(function() {
			typing_interval = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var sentence_text =  sentences_to_type_sentence[current_sentence].substring(0, current_sentence_letter - 1);
	changing_text_id.innerHTML = sentence_text;
	current_sentence_letter--;

	// If sentence has been deleted then start to display the next sentence
	if(sentence_text === '') {
		clearInterval(typing_interval);

		// If current sentence was last then display the first one, else move to the next
		if(current_sentence == (sentences_to_type_sentence.length - 1))
			current_sentence = 0;
		else
			current_sentence++;
		
		current_sentence_letter = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			blinking_line_id.style.display = 'inline-block';
			typing_interval = setInterval(type_sentence, 100);
		}, 200);
	}
}

// Start the typing effect on load
typing_interval = setInterval(type_sentence, 100);





// Js for accordion 
var acc = document.getElementsByClassName("accordion");

/*
// Resets the status of all the plus and minus signs
function accordion_btn() {
	var plus = document.getElementsByClassName("accordion_plus_symbol");
	var minus = document.getElementsByClassName("accordion_minus_symbol");
	for (var i=0;i<plus.length;i+=1){
	plus[i].style.display = "block";
	minus[i].style.display = "none";	
	}
}
*/


var i;

for (i = 0; i < acc.length; i++) {
	
		
acc[i].addEventListener("click", function() {

var accordion_pop_up = this.nextElementSibling;

if (accordion_pop_up.style.maxHeight){
	accordion_pop_up.style.maxHeight = null;
	
	let active = document.querySelectorAll(".experience_accordion_container .accordion.active");
	for(let j = 0; j < active.length; j++){ 
		//Removes the light blue colour on the accordion when it is closed
		active[j].classList.remove("active");
	}
} 

else {
	let active = document.querySelectorAll(".experience_accordion_container .accordion.active");
	for(let j = 0; j < active.length; j++){
		active[j].classList.remove("active");
		active[j].nextElementSibling.style.maxHeight = null;
		
  }

  this.classList.toggle("active");
	accordion_pop_up.style.maxHeight = accordion_pop_up.scrollHeight + "px";
	}

});

}


document.getElementById("default_accordion").click();

// Runs after the default accordion is clicked
setTimeout(() => {
	var default_accordion = document.getElementById("a_p_u_id");
	default_accordion.className += " accordion_pop_up_transition";
}, 0);


// Filter Projects
$(document).ready(function(){
  $('.project_filter_item').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'All') {
      $('.project').show('1000');
    }
    else {
      $('.project').not('.' +value).hide('1000');
      $('.project').filter('.' +value).show('1000');
    }
  })


  // add active class on selected item
  $('.project_filter_item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})