class WorldsController < ApplicationController
  def show
    @world = World.find(params[:id])
  end

  def index
    @world = World.all
  end

  def play
    @world = World.find(params[:world_id])
  end
end
