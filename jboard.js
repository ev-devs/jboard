var global = null
var clicks = 0;

jQuery.fn.extend({

    standard_jboard : function() {


        this.ready_board = $(document.createElement('div'))
            .addClass('jboard active')
            .html('html here')
            .css( 'width', this[0].offsetWidth)
            .css( 'background-color', 'red')
        console.log(this.ready_board)

            /*
        d = document.createElement('div');
        $(d).addClass('test')
            .html('TESTSETSET')
            .appendTo( $(this).parent() ) //main div
        .click(function () {
            $(this).remove();
        })
            .hide()
            .slideToggle(300)
            .delay(2500)
            .slideToggle(300)
            .queue(function () {
            $(this).remove();
        });
        */


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

        console.log(this)
        console.log(arg)
        global = this;


        $(document).mouseup(function (e){

            var container = $('.jboard');
            var input = $(global)

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0 // ... nor a descendant of the container
                && !input.is(e.target)
            )
            {
                container.hide();
            }
        });


        if (arg == "standard"){

            this.standard_jboard()
            $(this)[0].onfocus = function(){
                console.log(this)
                global.show_jboard()
            }
        }
        else if (arg == "num"){

            this.num_jboard()
            $(this)[0].onfocus = function(){
                console.log(this)
                global.show_jboard()
            }
        }
        else {
            console.log('Invalid Arguements for jboard')
        }

    }
})
