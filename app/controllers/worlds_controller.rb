class WorldsController < ApplicationController

  def show
    @world = World.find(params[:id])
  end
  
  def index
    # @mix = Mix.find(params)
    @worlds = World.all
    @mixes = current_user.mixes
  end
  
  def new
    @world = World.new  
  end

  def create
    @world = World.create(world_params)

    if @world.save!
      redirect_to new_world_path, notice: "SUCCESS"
    else
      render "new", status: :unprocessable_entity, notice: "FAILED"
    end
  end
  
  def play
    @world = World.find(params[:world_id])
  end

  private 

  def world_params
    params.require(:world).permit(:name, :description, :image)
  end

end
