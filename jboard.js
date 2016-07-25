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
    var del = $( board )[0].childNodes[1].childNodes[1].childNodes[1].childNodes[21]

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
    var oneTwoThree   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[1]
    var space               = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[3]
    //var symbols   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[5]


    /*CHARACTERS NOW SHOWN UNTIL CLICKED*/

    var ABC = null;

    var CAPS_ON = false;

    /*NOW WE STUP EVENT HANDLERS FOR OUR KEYBOARD*/
    $(shift).click(function(event){
        if (CAPS_ON == false){

            CAPS_ON = true
            $(this).css('background', "#76ff03")

            q.innerHTML = q.innerHTML.toUpperCase()
            w.innerHTML = w.innerHTML.toUpperCase()
            e.innerHTML = e.innerHTML.toUpperCase()
            r.innerHTML = r.innerHTML.toUpperCase()
            t.innerHTML = t.innerHTML.toUpperCase()
            y.innerHTML = y.innerHTML.toUpperCase()
            u.innerHTML = u.innerHTML.toUpperCase()
            i.innerHTML = i.innerHTML.toUpperCase()
            o.innerHTML = o.innerHTML.toUpperCase()
            p.innerHTML = p.innerHTML.toUpperCase()

            a.innerHTML = a.innerHTML.toUpperCase()
            s.innerHTML = s.innerHTML.toUpperCase()
            d.innerHTML = d.innerHTML.toUpperCase()
            f.innerHTML = f.innerHTML.toUpperCase()
            g.innerHTML = g.innerHTML.toUpperCase()
            h.innerHTML = h.innerHTML.toUpperCase()
            j.innerHTML = j.innerHTML.toUpperCase()
            k.innerHTML = k.innerHTML.toUpperCase()
            l.innerHTML = l.innerHTML.toUpperCase()

            z.innerHTML = z.innerHTML.toUpperCase()
            x.innerHTML = x.innerHTML.toUpperCase()
            c.innerHTML = c.innerHTML.toUpperCase()
            v.innerHTML = v.innerHTML.toUpperCase()
            b.innerHTML = b.innerHTML.toUpperCase()
            n.innerHTML = n.innerHTML.toUpperCase()
            m.innerHTML = m.innerHTML.toUpperCase()

        }
        else {

            CAPS_ON = false
            $(this).css('background', "#fff")

            q.innerHTML = q.innerHTML.toLowerCase()
            w.innerHTML = w.innerHTML.toLowerCase()
            e.innerHTML = e.innerHTML.toLowerCase()
            r.innerHTML = r.innerHTML.toLowerCase()
            t.innerHTML = t.innerHTML.toLowerCase()
            y.innerHTML = y.innerHTML.toLowerCase()
            u.innerHTML = u.innerHTML.toLowerCase()
            i.innerHTML = i.innerHTML.toLowerCase()
            o.innerHTML = o.innerHTML.toLowerCase()
            p.innerHTML = p.innerHTML.toLowerCase()

            a.innerHTML = a.innerHTML.toLowerCase()
            s.innerHTML = s.innerHTML.toLowerCase()
            d.innerHTML = d.innerHTML.toLowerCase()
            f.innerHTML = f.innerHTML.toLowerCase()
            g.innerHTML = g.innerHTML.toLowerCase()
            h.innerHTML = h.innerHTML.toLowerCase()
            j.innerHTML = j.innerHTML.toLowerCase()
            k.innerHTML = k.innerHTML.toLowerCase()
            l.innerHTML = l.innerHTML.toLowerCase()

            z.innerHTML = z.innerHTML.toLowerCase()
            x.innerHTML = x.innerHTML.toLowerCase()
            c.innerHTML = c.innerHTML.toLowerCase()
            v.innerHTML = v.innerHTML.toLowerCase()
            b.innerHTML = b.innerHTML.toLowerCase()
            n.innerHTML = n.innerHTML.toLowerCase()
            m.innerHTML = m.innerHTML.toLowerCase()

        }

    })

    $(enter).click(function(){
        $('#' + board[0].id ).closeModal()
    })

    $(del).click(function(event){
        console.log("delete was clicked!")
        if (input_field.val() != ""){
            input_field.val( input_field.val().substring(0, input_field.val().length - 1) )
        }
    })


    /*INPUT EVENT FOR NORMAL KEYS HANDLERS*************************************/
    $(q).click(function(event){
        if(q.innerHTML != " "){
            $(input_field).val( $(input_field).val() + q.innerHTML )
        }
    })

    $(w).click(function(event){
        if(w.innerHTML != " "){
            $(input_field).val( $(input_field).val() + w.innerHTML )
        }
    })

    $(e).click(function(event){
        if(e.innerHTML != " "){
            $(input_field).val( $(input_field).val() + e.innerHTML )
        }
    })

    $(r).click(function(event){
        if(r.innerHTML != " "){
            $(input_field).val( $(input_field).val() + r.innerHTML )
        }
    })

    $(t).click(function(event){
        if(t.innerHTML != " "){
            $(input_field).val( $(input_field).val() + t.innerHTML )
        }
    })

    $(y).click(function(event){
        if(y.innerHTML != " "){
            $(input_field).val( $(input_field).val() + y.innerHTML )
        }
    })

    $(u).click(function(event){
        if(u.innerHTML != " "){
            $(input_field).val( $(input_field).val() + u.innerHTML )
        }
    })

    $(i).click(function(event){
        if(i.innerHTML != " "){
            $(input_field).val( $(input_field).val() + i.innerHTML )
        }
    })

    $(o).click(function(event){
        if(o.innerHTML != " "){
            $(input_field).val( $(input_field).val() + o.innerHTML )
        }
    })

    $(p).click(function(event){
        if(p.innerHTML != " "){
            $(input_field).val( $(input_field).val() + p.innerHTML )
        }
    })

    /*ROW TWO******************************************************************/
    $(a).click(function(event){
        if(a.innerHTML != " "){
            $(input_field).val( $(input_field).val() + a.innerHTML )
        }
    })

    $(s).click(function(event){
        if(s.innerHTML != " "){
            $(input_field).val( $(input_field).val() + s.innerHTML )
        }
    })

    $(d).click(function(event){
        if(d.innerHTML != " "){
            $(input_field).val( $(input_field).val() + d.innerHTML )
        }
    })

    $(f).click(function(event){
        if(f.innerHTML != " "){
            $(input_field).val( $(input_field).val() + f.innerHTML )
        }
    })

    $(g).click(function(event){
        if(g.innerHTML != " "){
            $(input_field).val( $(input_field).val() + g.innerHTML )
        }
    })

    $(h).click(function(event){
        if(h.innerHTML != " "){
            $(input_field).val( $(input_field).val() + h.innerHTML )
        }
    })

    $(j).click(function(event){
        if(j.innerHTML != " "){
            $(input_field).val( $(input_field).val() + j.innerHTML )
        }
    })

    $(k).click(function(event){
        if(k.innerHTML != " "){
            $(input_field).val( $(input_field).val() + k.innerHTML )
        }
    })

    $(l).click(function(event){
        if(l.innerHTML != " "){
            $(input_field).val( $(input_field).val() + l.innerHTML )
        }
    })

    /*ROW THREE****************************************************************/



    $(z).click(function(event){
        if(z.innerHTML != " "){
            $(input_field).val( $(input_field).val() + z.innerHTML )
        }
    })

    $(x).click(function(event){
        if(x.innerHTML != " "){
            $(input_field).val( $(input_field).val() + x.innerHTML )
        }
    })

    $(c).click(function(event){
        if(c.innerHTML != " "){
            $(input_field).val( $(input_field).val() + c.innerHTML )
        }
    })

    $(v).click(function(event){
        if(v.innerHTML != " "){
            $(input_field).val( $(input_field).val() + v.innerHTML )
        }
    })

    $(b).click(function(event){
        if(b.innerHTML != " "){
            $(input_field).val( $(input_field).val() + b.innerHTML )
        }
    })

    $(n).click(function(event){
        if(n.innerHTML != " "){
            $(input_field).val( $(input_field).val() + n.innerHTML )
        }
    })

    $(m).click(function(event){
        if(m.innerHTML != " "){
            $(input_field).val( $(input_field).val() + m.innerHTML )
        }
    })

    $(comma).click(function(event){
        if(comma.innerHTML != " "){
            $(input_field).val( $(input_field).val() + comma.innerHTML )
        }
    })

    $(dot).click(function(event){
        if(dot.innerHTML != " "){
            $(input_field).val( $(input_field).val() + dot.innerHTML )
        }
    })

    $(at).click(function(event){
        if(at.innerHTML != " "){
            $(input_field).val( $(input_field).val() + at.innerHTML )
        }
    })





    //console.log( $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes )
}


function setupNumKeyboard(input_field, board){

}


































/**/
