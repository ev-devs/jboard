jQuery.fn.extend({

    jboard : function(arg){

        console.log(this)
        console.log(arg)

        if (arg == "standard"){

            this.standard_jboard()
            $(this)[0].onfocus = function(){
                show_jboard()
            }
        }
        else if (arg == "num"){

            this.num_jboard()
            $(this)[0].onfocus = function(){
                show_jboard()
            }
        }
        else {
            console.log('Invalid Arguements for jboard')
        }

    },

    standard_jboard : function() {
        console.log('we in here')

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



    },
    num_jboard : function() {
        this.jboard_width = this[0].clientWidth
    },

    show_jboard : function(){

    }
})
