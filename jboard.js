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
    var a       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[1]
    var s       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[3]
    var d       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[5]
    var f       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[7]
    var g       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[9]
    var h       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[11]
    var j       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[13]
    var k       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[15]
    var l       = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[17]
    var enter   = $( board )[0].childNodes[1].childNodes[1].childNodes[3].childNodes[19]


    /*ROW THREE*/
    var shift   = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[1]
    var z       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[3]
    var x       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[5]
    var c       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[7]
    var v       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[9]
    var b       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[11]
    var n       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[13]
    var m       = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[15]
    var comma   = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[17]
    var dot     = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[19]
    var at      = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[21]

    /*ROW FOUR*/
    var numbersAndSymbols   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[1]
    var space               = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[3]
    var specialCharacters   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[5]


    /*CHARACTERS NOW SHOWN UNTIL CLICKED*/
    var Q = null;
    var W = null;
    var E = null;
    var R = null;
    var T = null;
    var Y = null;
    var U = null;
    var I = null;
    var O = null;
    var P = null;

    var A = null;
    var S = null;
    var D = null;
    var F = null;
    var G = null;
    var H = null;
    var J = null;
    var K = null;
    var L = null;

    var Z = null;
    var X = null;
    var C = null;
    var V = null;
    var B = null;
    var N = null;
    var M = null;

    var CAPS_ON = false;

    /*NOW WE STUP EVENT HANDLERS FOR OUR KEYBOARD*/
    $(shift).click(function(event){
        if (CAPS_ON == false){
            CAPS_ON = true
            $(this).css('background', "green")
            Q = q; q.innerHTML = "Q"
            W = w; w.innerHTML = "W"
            E = e; e.innerHTML = "E"
            R = r; r.innerHTML = "R"
            T = t; t.innerHTML = "T"
        }
        else {
            $(this).css('background', "#fff")
            CAPS_ON = false
            q = Q; Q.innerHTML = "q"
        }

    })

    /* $(q).click(function(event){
        console.log(q.innerHTML)
        console.log(input_field)
    })*/



    console.log( $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes )
}


function setupNumKeyboard(input_field, board){

}






































/**/
