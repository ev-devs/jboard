/* $('.keyboard-trigger').leanModal({
    opacity: 0, // Opacity of modal background
});

$('.keyboard-trigger').leanModal({
    opacity: 0, // Opacity of modal background
});
*/





/**LOGIC FOR THE KEYBOARD*/

jQuery.fn.extend({
    jboard : function(arg) {
        return new jboard(arg, this) // instantiate a new jboard
    }

});


var jboard = function(arg, input_field) {


    if (arg == "standard") {
        console.log("Creating a new standard keyboard")
        var board = createStandardKeyboard(input_field)
        setupStandardEventHandlers(input_field, board)
    }
    else if (arg == "num") {
        var board = createNumKeyboard(input_field)
        setupNumEventHandlers(input_field, board)
    }
    else {
        console.log('ERROR: Invalid Argument to jboard')
    }

}


function createStandardKeyboard(input_field){

    var newBoard = $('#standard-modal-template').clone()
    newBoard[0].id = input_field[0].id + "-modal"
    $('body').append(newBoard)
    return newBoard
}


function createNumKeyboard(input_field){
    var newBoard = $('#num-modal-template').clone()
    newBoard[0].id = input_field[0].id + "-modal"
    $('body').append(newBoard)
    return newBoard
}

function setupStandardEventHandlers(input_field, board){


    input_field.click(function(){
        $('#' + board[0].id ).openModal({
            opacity: 0, // Opacity of modal background
        });
    });
}

function setupNumEventHandlers(input_field, board){
    input_field.click(function(){
        $('#' + board[0].id ).openModal({
            opacity: 0, // Opacity of modal background
        });
    });

}
