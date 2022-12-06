class WorldsController < ApplicationController
  def show
    @world = World.find(params[:id])
  end

  def index
    # @mix = Mix.find(params)
    @worlds = World.all
    @mixes = current_user.mixes
  end

  def play
    @world = World.find(params[:world_id])
  end
end
