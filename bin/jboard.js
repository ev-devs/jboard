//var clickSound = new Audio('bin/buttonclick.mp3');
var clickSound = document.getElementById("click-sound")

/* THIS EXTENDS jQuery AND IT IS OUR LOGIC FOR THE KEYBOARD */
jQuery.fn.extend({
    jboard : function(arg) {
        return new jboard(arg, this) // instantiate a new jboard
    }
});

$('.jboard-key').click(function(event){
    console.log('A KEY WAS CLICKED-======')
})

var jboard = function(arg, input_field) {

    if (arg == "standard") {
        console.log("Creating a new standard keyboard")
        var board = createStandardKeyboard(input_field)
        setupStandardEventHandlers(input_field, board)
    }
    else if (arg == "num") {
        console.log('Creating a new num keyboard')
        var board = createNumKeyboard(input_field)
        setupNumEventHandlers(input_field, board)
    }
    else {
        console.error("ERROR: Invalid Argument to jboard \n Only 'standard' or 'num' accepted")
    }
}

function createStandardKeyboard(input_field){

    var newBoard = $('#standard-modal-template').clone()
    newBoard[0].id = input_field[0].id + "-modal"
    $($(newBoard).children()[0]).css('padding', '5')
    $('body').append(newBoard)

    setupStandardKeyboard(input_field, newBoard)
    return newBoard
}


function createNumKeyboard(input_field){
    var newBoard = $('#num-modal-template').clone()
    newBoard[0].id = input_field[0].id + "-modal"
    $($(newBoard).children()[0]).css('padding', '5')
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
    var extra   = $( board )[0].childNodes[1].childNodes[1].childNodes[5].childNodes[23]


    /*ROW FOUR*/
    var oneTwoThree   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[1]
    var space               = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[3]
    //var symbols   = $( board )[0].childNodes[1].childNodes[1].childNodes[7].childNodes[5]


    /*CHARACTERS NOW SHOWN UNTIL CLICKED*/

    var ABC = null;
    var CAPS_ON = false;
    var NUM_AND_SYM_ON = false;

    var prevState_q,
        prevState_w,
        prevState_e,
        prevState_r,
        prevState_t,
        prevState_y,
        prevState_u,
        prevState_i,
        prevState_o,
        prevState_p;

    var prevState_a,
        prevState_s,
        prevState_d,
        prevState_f,
        prevState_g,
        prevState_h,
        prevState_j,
        prevState_k,
        prevState_l;

    var prevState_shift,
        prevState_z,
        prevState_x,
        prevState_c,
        prevState_v,
        prevState_b,
        prevState_n,
        prevState_m,
        prevState_comma,
        prevState_dot,
        prevState_at;

    var prevState_oneTwoThree;



    /*NOW WE STUP EVENT HANDLERS FOR OUR KEYBOARD*/
    $(shift).click(function(event){

        //console.log(jpress)
        //this.dispatchEvent(jpress)
        $(input_field).trigger("jpress", ['shift'])

        if (CAPS_ON == false){

            CAPS_ON = true
            $(this).css('background', "#ea80fc")

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
        //clickSound.play()
        $(input_field).trigger("jpress", ['enter'])
        $('#' + board[0].id ).closeModal()
    })

    $(del).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", ['delete'])
        if (input_field.val() != ""){
            input_field.val( input_field.val().substring(0, input_field.val().length - 1) )
        }
    })

    $(space).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", ['space'])
        if (input_field.val() != ""){
            input_field.val( input_field.val() + " ")
        }
    })


    /*INPUT EVENT FOR NORMAL KEYS HANDLERS*************************************/
    $(q).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [q.innerHTML])
        if(q.innerHTML != " "){
            $(input_field).val( $(input_field).val() + q.innerHTML )
        }
    })

    $(w).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [w.innerHTML])
        if(w.innerHTML != " "){
            $(input_field).val( $(input_field).val() + w.innerHTML )
        }
    })

    $(e).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [e.innerHTML])
        if(e.innerHTML != " "){
            $(input_field).val( $(input_field).val() + e.innerHTML )
        }
    })

    $(r).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [r.innerHTML])
        if(r.innerHTML != " "){
            $(input_field).val( $(input_field).val() + r.innerHTML )
        }
    })

    $(t).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [t.innerHTML])
        if(t.innerHTML != " "){
            $(input_field).val( $(input_field).val() + t.innerHTML )
        }
    })

    $(y).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [y.innerHTML])
        if(y.innerHTML != " "){
            $(input_field).val( $(input_field).val() + y.innerHTML )
        }
    })

    $(u).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [u.innerHTML])
        if(u.innerHTML != " "){
            $(input_field).val( $(input_field).val() + u.innerHTML )
        }
    })

    $(i).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [i.innerHTML])
        if(i.innerHTML != " "){
            $(input_field).val( $(input_field).val() + i.innerHTML )
        }
    })

    $(o).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [o.innerHTML])
        if(o.innerHTML != " "){
            $(input_field).val( $(input_field).val() + o.innerHTML )
        }
    })

    $(p).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [p.innerHTML])
        if(p.innerHTML != " "){
            $(input_field).val( $(input_field).val() + p.innerHTML )
        }
    })

    /*ROW TWO******************************************************************/
    $(a).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [a.innerHTML])
        if(a.innerHTML != " "){
            $(input_field).val( $(input_field).val() + a.innerHTML )
        }
    })

    $(s).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [s.innerHTML])
        if(s.innerHTML != " "){
            $(input_field).val( $(input_field).val() + s.innerHTML )
        }
    })

    $(d).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [d.innerHTML])
        if(d.innerHTML != " "){
            $(input_field).val( $(input_field).val() + d.innerHTML )
        }
    })

    $(f).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [f.innerHTML])
        if(f.innerHTML != " "){
            $(input_field).val( $(input_field).val() + f.innerHTML )
        }
    })

    $(g).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [g.innerHTML])
        if(g.innerHTML != " "){
            $(input_field).val( $(input_field).val() + g.innerHTML )
        }
    })

    $(h).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [h.innerHTML])
        if(h.innerHTML != " "){
            $(input_field).val( $(input_field).val() + h.innerHTML )
        }
    })

    $(j).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [j.innerHTML])
        if(j.innerHTML != " "){
            $(input_field).val( $(input_field).val() + j.innerHTML )
        }
    })

    $(k).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [k.innerHTML])
        if(k.innerHTML != " "){
            $(input_field).val( $(input_field).val() + k.innerHTML )
        }
    })

    $(l).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [l.innerHTML])
        if(l.innerHTML != " "){
            $(input_field).val( $(input_field).val() + l.innerHTML )
        }
    })

    /*ROW THREE****************************************************************/

    $(z).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [z.innerHTML])
        if(z.innerHTML != " "){
            $(input_field).val( $(input_field).val() + z.innerHTML )
        }
    })

    $(x).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [x.innerHTML])
        if(x.innerHTML != " "){
            $(input_field).val( $(input_field).val() + x.innerHTML )
        }
    })

    $(c).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [c.innerHTML])
        if(c.innerHTML != " "){
            $(input_field).val( $(input_field).val() + c.innerHTML )
        }
    })

    $(v).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [v.innerHTML])
        if(v.innerHTML != " "){
            $(input_field).val( $(input_field).val() + v.innerHTML )
        }
    })

    $(b).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [b.innerHTML])
        if(b.innerHTML != " "){
            $(input_field).val( $(input_field).val() + b.innerHTML )
        }
    })

    $(n).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [n.innerHTML])
        if(n.innerHTML != " "){
            $(input_field).val( $(input_field).val() + n.innerHTML )
        }
    })

    $(m).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [m.innerHTML])
        if(m.innerHTML != " "){
            $(input_field).val( $(input_field).val() + m.innerHTML )
        }
    })

    $(comma).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [comma.innerHTML])
        $(input_field).trigger("jpress", ['m'])
        if(comma.innerHTML != " "){
            $(input_field).val( $(input_field).val() + comma.innerHTML )
        }
    })

    $(dot).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [dot.innerHTML])
        if(dot.innerHTML != " "){
            $(input_field).val( $(input_field).val() + dot.innerHTML )
        }
    })

    $(at).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [at.innerHTML])
        if(at.innerHTML != " "){
            $(input_field).val( $(input_field).val() + at.innerHTML )
        }
    })

    $(extra).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [extra.innerHTML])
        if(extra.innerHTML != " "){
            $(input_field).val( $(input_field).val() + extra.innerHTML )
        }
    })


    $(oneTwoThree).click(function(event){
        //q.innerHTML =
        $(input_field).trigger("jpress", [oneTwoThree.innerHTML])

        if (NUM_AND_SYM_ON == false){
            NUM_AND_SYM_ON = true
            oneTwoThree.innerHTML = "ABC"
            prevState_q = q.innerHTML; q.innerHTML = "1";
            prevState_w = w.innerHTML; w.innerHTML = "2";
            prevState_e = e.innerHTML; e.innerHTML = "3";
            prevState_r = r.innerHTML; r.innerHTML = "4";
            prevState_t = t.innerHTML; t.innerHTML = "5";
            prevState_y = y.innerHTML; y.innerHTML = "6";
            prevState_u = u.innerHTML; u.innerHTML = "7";
            prevState_i = i.innerHTML; i.innerHTML = "8";
            prevState_o = o.innerHTML; o.innerHTML = "9";
            prevState_p = p.innerHTML; p.innerHTML = "0";

            prevState_a = a.innerHTML; a.innerHTML = "-";
            prevState_s = s.innerHTML; s.innerHTML = "/";
            prevState_d = d.innerHTML; d.innerHTML = ":";
            prevState_f = f.innerHTML; f.innerHTML = ";";
            prevState_g = g.innerHTML; g.innerHTML = "(";
            prevState_h = h.innerHTML; h.innerHTML = ")";
            prevState_j = j.innerHTML; j.innerHTML = "$";
            prevState_k = k.innerHTML; k.innerHTML = "\&";
            prevState_l = l.innerHTML; l.innerHTML = "@";

            $(shift).hide()
            prevState_z = z.innerHTML; z.innerHTML = "?"
            prevState_x = x.innerHTML; x.innerHTML = "!"
            prevState_c = c.innerHTML; c.innerHTML = "\""
            prevState_v = v.innerHTML; v.innerHTML = "\'"
            prevState_b = b.innerHTML; b.innerHTML = "\\"
            prevState_n = n.innerHTML; n.innerHTML = "*"
            prevState_m = m.innerHTML; m.innerHTML = "+"
            prevState_comma = comma.innerHTML; comma.innerHTML = "="
            prevState_dot = dot.innerHTML; dot.innerHTML = "#"
            prevState_at = at.innerHTML; at.innerHTML = "%"
            $(extra).show()


        }
        else {
            NUM_AND_SYM_ON = false

            $(shift).show()
            $(extra).hide()

            oneTwoThree.innerHTML = "123"
            q.innerHTML = prevState_q;
            w.innerHTML = prevState_w;
            e.innerHTML = prevState_e;
            r.innerHTML = prevState_r;
            t.innerHTML = prevState_t;
            y.innerHTML = prevState_y;
            u.innerHTML = prevState_u;
            i.innerHTML = prevState_i;
            o.innerHTML = prevState_o;
            p.innerHTML = prevState_p;

            a.innerHTML = prevState_a;
            s.innerHTML = prevState_s;
            d.innerHTML = prevState_d;
            f.innerHTML = prevState_f;
            g.innerHTML = prevState_g;
            h.innerHTML = prevState_h;
            j.innerHTML = prevState_j;
            k.innerHTML = prevState_k;
            l.innerHTML = prevState_l;

            z.innerHTML = prevState_z;
            x.innerHTML = prevState_x;
            c.innerHTML = prevState_c;
            v.innerHTML = prevState_v;
            b.innerHTML = prevState_b;
            n.innerHTML = prevState_n;
            m.innerHTML = prevState_m;
            comma.innerHTML = prevState_comma;
            dot.innerHTML = prevState_dot;
            at.innerHTML = prevState_at;

        }
    })

}


function setupNumKeyboard(input_field, board){

    var seven   = board[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
    var eight   = board[0].childNodes[1].childNodes[1].childNodes[1].childNodes[3]
    var nine    = board[0].childNodes[1].childNodes[1].childNodes[1].childNodes[5]
    var del     = board[0].childNodes[1].childNodes[1].childNodes[1].childNodes[7]

    var four    = board[0].childNodes[1].childNodes[1].childNodes[3].childNodes[1]
    var five    = board[0].childNodes[1].childNodes[1].childNodes[3].childNodes[3]
    var six     = board[0].childNodes[1].childNodes[1].childNodes[3].childNodes[5]
    var clear   = board[0].childNodes[1].childNodes[1].childNodes[3].childNodes[7]

    var one     = board[0].childNodes[1].childNodes[1].childNodes[5].childNodes[1]
    var two     = board[0].childNodes[1].childNodes[1].childNodes[5].childNodes[3]
    var three   = board[0].childNodes[1].childNodes[1].childNodes[5].childNodes[5]
    var blank   = board[0].childNodes[1].childNodes[1].childNodes[5].childNodes[7]

    var zero    = board[0].childNodes[1].childNodes[1].childNodes[7].childNodes[1]
    var dot     = board[0].childNodes[1].childNodes[1].childNodes[7].childNodes[3]
    var accept  = board[0].childNodes[1].childNodes[1].childNodes[7].childNodes[5]
    var reject  = board[0].childNodes[1].childNodes[1].childNodes[7].childNodes[7]


    /*EVENT LISTENERS FOR OUR KEYBOARD KEYS*/
    $(seven).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [seven.innerHTML])
        $(input_field).val( $(input_field).val() + seven.innerHTML )
    })

    $(eight).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [eight.innerHTML])
        $(input_field).val( $(input_field).val() + eight.innerHTML )
    })

    $(nine).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [nine.innerHTML])
        $(input_field).val( $(input_field).val() + nine.innerHTML )
    })

    $(del).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", ['delete'])
        input_field.val( input_field.val().substring(0, input_field.val().length - 1) )
    })


    $(four).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [four.innerHTML])
        $(input_field).val( $(input_field).val() + four.innerHTML )
    })

    $(five).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [five.innerHTML])
        $(input_field).val( $(input_field).val() + five.innerHTML )
    })

    $(six).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", [six.innerHTML])
        $(input_field).val( $(input_field).val() + six.innerHTML )
    })

    $(clear).click(function(event){
        //clickSound.play()
        $(input_field).trigger("jpress", ['clear'])
        $(input_field).val( "" )
    })

    $(one).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", [one.innerHTML])
        $(input_field).val( $(input_field).val() + one.innerHTML )
    })

    $(two).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", [two.innerHTML])
        $(input_field).val( $(input_field).val() + two.innerHTML )
    })

    $(three).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", [three.innerHTML])
        $(input_field).val( $(input_field).val() + three.innerHTML )
    })

    $(blank).click(function(event){
        /*Nothig is supposed to happen here*/
    })

    $(zero).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", [four.innerHTML])
        $(input_field).val( $(input_field).val() + zero.innerHTML )
    })

    $(dot).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", [dot.innerHTML])
        $(input_field).val( $(input_field).val() + dot.innerHTML )
    })

    $(accept).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", ['enter'])
        $('#' + board[0].id ).closeModal()
    })

    $(reject).click(function(event){
        //clickSound.play();
        $(input_field).trigger("jpress", ['exit'])
        $(input_field).val( "" )
        $('#' + board[0].id ).closeModal()
    })
}



/**/
