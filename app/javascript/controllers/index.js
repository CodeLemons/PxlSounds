// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import BackgroundController from "./background_controller"
application.register("background", BackgroundController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import IndexPlayController from "./index_play_controller"
application.register("index-play", IndexPlayController)

import PlayController from "./play_controller"
application.register("play", PlayController)

import RandomDisplayController from "./random_display_controller"
application.register("random-display", RandomDisplayController)

import RenderIconController from "./render_icon_controller"
application.register("render-icon", RenderIconController)

import SaveController from "./save_controller"
application.register("save", SaveController)
