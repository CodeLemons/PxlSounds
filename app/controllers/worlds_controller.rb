class WorldsController < ApplicationController
  def show
    @world = World.find(params[:id])
  end

  def index
    @world = World.all
  end
end
