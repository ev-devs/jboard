$('.modal-trigger').leanModal({
    opacity: 0, // Opacity of modal background
});

var global = null

const standard_jboard   = $('#standard-jboard-container').html()
const num_jboard        = $('#num-jboard-container').html()


var jboard = function( arg, input_field) {

    if (arg == "standard"){ this.keyboardType = "standard" }
    else if (arg == "num"){ this.keyboardType = "num" }
    else { this.keyboardType = undefined; return console.log('ERROR: undefined arguements to jboard')}

    this.input_field = input_field;




}


jQuery.fn.extend({
    jboard : function(arg) {
        return new jboard(arg, this) // instantiate a new jboard
    }

});





jQuery.fn.extend({


    jboard  : function(arg){

        setup_page_for_jboard() // setup the page for the jboard

        if (arg == "standard"){
            this.create_standard_jboard()
        }
        else if (arg == "num"){
            this.create_num_jboard()
        }
        else {
            console.log('ERROR: Invalid Arguements on jboard ' + arg)
        }
    },

    setup_page_for_jboard : function() {
        /* this is so the jboard sticks to the input */
        this.css('margin', '1')
        /*This is so when you click out of the jboard it goes away*/
        $(document).mouseup(function (e){

            var container = $('.jboard');
            var input = $(global)

             // if the target of the click isn't the container...
            if (!container.is(e.target)
                && container.has(e.target).length === 0 // ... nor a descendant of the container
                && !input.is(e.target) // .. nor
            )
            {
                container.hide();
            }
        });
    },

    create_standard_jboard  : function() {
        // first we create the standard jboard

    },

    create_num_jboard       : function() {

    }

})






jQuery.fn.extend({

    standard_jboard : function() {


        this.ready_board = $(document.createElement('div'))
            .addClass('jboard')
            .html( $('#standard-jboard-container').html() )
            .css( 'width', this[0].offsetWidth)
            .css( 'background-color', 'red')
            .css( 'position', 'fixed')


        console.log(this.ready_board)


    },
    num_jboard : function() {
        this.jboard_width = this[0].clientWidth
    },

    show_jboard : function(){
        console.log('show jboard')
        this.ready_board.appendTo( $(this).parent() )
        $('.jboard').show()
    },
    jboard : function(arg){



        this.css('margin', '0')
        inputObj = this

        $(document).mouseup(function (e){

            var container = $('.jboard');
            var input = $(inputObj)


            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0 // ... nor a descendant of the container
                && !input.is(e.target) // .. nor
            )
            {
                container.hide();
            }
        });

        if (arg == "standard"){

            this.standard_jboard()
            $(this)[0].onfocus = function(){
                console.log(this)
                inputObj.show_jboard()
            }
        }
        else if (arg == "num"){

            this.num_jboard()
            $(this)[0].onfocus = function(){
                console.log(this)
                inputObj.show_jboard()
            }
        }
        else {
            console.log('Invalid Arguements for jboard')
        }

    },

    style_board : function() {
        console.log( $(this).parent )
    }
})
