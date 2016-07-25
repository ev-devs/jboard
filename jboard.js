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
    setupStandardKeyboard(input_field, newBoard)
    return newBoard
}


function createNumKeyboard(input_field){
    var newBoard = $('#num-modal-template').clone()
    newBoard[0].id = input_field[0].id + "-modal"
    $('body').append(newBoard)
    setupNumKeyboard(input_field, newBoard)
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

function setupStandardKeyboard(input_field, board){

    var rowOne      = $( board )[0].childNodes[1].childNodes[1].childNodes[1]
    var rowTwo      = $( board )[0].childNodes[1].childNodes[1].childNodes[3]
    var rowThree    = $( board )[0].childNodes[1].childNodes[1].childNodes[5]
    var rowFour     = $( board )[0].childNodes[1].childNodes[1].childNodes[7]

    /*ROW ONE*/
    var q   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    var w   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[3]
    var e   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[5]
    var r   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[7]
    var t   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[9]
    var y   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[11]
    var u   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[13]
    var i   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[15]
    var o   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[17]
    var p   = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[19]
    var del = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[19]

    /*ROW TWO*/

    $(q).click(function(event){
        console.log(q.innerHTML)
        console.log(input_field)
    })



    //console.log( $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes)
    console.log(q)
}


function setupNumKeyboard(input_field, board){

}






































/**/
