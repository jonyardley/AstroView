# Import all of the prelude utilities
global import require 'prelude-ls'

# Core Modules
require! react:React

d = React.DOM

React.render do
	d.h1 null, 'Hello World'
	document.getElementById 'main'