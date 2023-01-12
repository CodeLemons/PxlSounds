class WorldsController < ApplicationController
  before_action :set_world, only: [:edit]

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
      redirect_to edit_world_path(@world), notice: "SUCCESS"
    else
      render "new", status: :unprocessable_entity, notice: "FAILED"
    end
  end

  def edit
    @world = World.find(params[:id])
    @sound = Sound.new
  end

  def update

  end

  def play
    @world = World.find(params[:world_id])
  end

  private

  def world_params
    params.require(:world).permit(:name, :description, :image, :bgm)
  end

  def set_world
    @world = World.find(params[:id])
  end
end
