# jBoard
A virtual keyboard and numpad written on top of [jQuery](https://jquery.com/) and [Materialize.css](http://materializecss.com/)

![jboard gif goes here](jboard.gif)

## Installation
	$ git clone https://github.com/ev-devs/jboard.git
	$ cd jboard
	$ npm install
	$ open index.html || python -m SimpleHTTPServer

Either you are viewing it already by simply opening the file or if you could not  
get a file descriptor then python will serve you the webpage on port `8000`  
(i.e. point your browser to `localhost:8000`)

## Programmatically Creating jboards

In order to create a `jboard` you will need the following

 * jQuery installed
 * Materialize.css
 * a template of the respective board you want (either `standard` or `num`)

## Step one

Copy and paste the "starter" html from the `bin` folder into the html file you  
want to have a board on. Either the  `standard.html` or `num.html`.

<a href="./bin/standard.html" target="_blank">Standard</a> OR <a href="./bin/num.html" target="_blank">Num</a>


## Step two

Within your html file link both the `jboard.js` and `jboard.css` files into   
your html file.

	<script src="path/to/jboard.js" charset="utf-8"></script>
	<link rel="stylesheet" href="path/to/jboard.css" media="screen" charset="utf-8">

## Step three

create an input tag that looks like the following

	<div class="input-field col s6">
	  <input placeholder="Placeholder" id="keyboard-1" type="text" class="validate">
	  <label for="first_name">First Name</label>
	</div>

Then within your script tag or in any subsequent javascript files declare   
the following code

	$('#id-of-input-here').jboard('standard');
	$('#id-of-input-here').jboard('num');

And now you have a fully functional jboard.

## EXTRAS!

In addition to the jboard, you will also have access to a custom event emitted by  
every key within the jboard. You can access they event by binding an event listener  
to whatever input has been jboardified with the following code

	$('#id-of-input-here').on( "jpress" , function(event, key){
		console.log(event, key)
		// do any other thing here, like $.ajax() request to search engine ;)
	})
