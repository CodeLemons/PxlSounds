class WorldsController < ApplicationController
  def show
    @world = World.find(params[:id])
  end

  def index
    @worlds = World.all
    @mixes = current_user.mixes
  end

  def play
    @world = World.find(params[:world_id])
  end
end
