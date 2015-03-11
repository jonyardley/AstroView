# Import all of the prelude utilities
global import require 'prelude-ls'

# Core Modules
require! react:React
require! './components/app.ls'

d = React.DOM

React.render do
	React.createElement app
	document.getElementById 'main'
