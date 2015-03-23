# Import all of the prelude utilities
global import require 'prelude-ls'

# Core Modules
require! <[
  react
  ./components/app/app.ls
]>

d = react.DOM

react.render do
  react.create-element app
  document.get-element-by-id 'main'
