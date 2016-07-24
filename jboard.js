/* $('.keyboard-trigger').leanModal({
    opacity: 0, // Opacity of modal background
});

$('.keyboard-trigger').leanModal({
    opacity: 0, // Opacity of modal background
});
*/





/**LOGIC FOR THE KEYBOARD*/

var jboard = function(arg, input_field) {


    if (arg == "standard") {
        setupStandardEventHandlers(input_field)
    }
    else if (arg == "num") {
        setupNumEventHandlers(input_field)
    }
    else {
        console.log('ERROR: Invalid Argument to jboard')
    }

}

function setupStandardEventHandlers(input_field){

    input_field.click(function(){
        $('#keyboard-modal').openModal({
            opacity: 0, // Opacity of modal background
        });
    });


}

function setupNumEventHandlers(input_field){
    input_field.click(function(){
        $('#num-modal').openModal({
            opacity: 0, // Opacity of modal background
        });
    });
}

jQuery.fn.extend({
    jboard : function(arg) {
        return new jboard(arg, this) // instantiate a new jboard
    }

});
