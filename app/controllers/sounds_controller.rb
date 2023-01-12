class SoundsController < ApplicationController
  def new
    @world = World.find(params[:world_id])
    @sound = Sound.new
  end

  def create
    p params
    @world = World.find(params[:world_id])
    @sound = Sound.new(sound_params)
    @sound.world = @world

    respond_to do |format|
      if @sound.save
        format.html { redirect_to edit_world_path(@world), notice: "Added sound" }
        format.json { render json: @sound, status: :created }
      else
        format.html { render 'new', status: :unprocessable_entity }
        format.json { render json: @sound.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def sound_params
    params.require(:sound).permit(:name, :path, :start_x, :start_y, :height, :width, :audio)
  end
end
