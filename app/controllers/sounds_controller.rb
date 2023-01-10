class SoundsController < ApplicationController
    def new
        @world = World.find(params[:world_id])
        @sound = Sound.new
    end

    def create
        @world = World.find(params[:world_id])
        @sound = Sound.create(sound_params)

        respond_to do |format|
            if @sound.save
                format.html { redirect_to edit_world_path(@world), notice: "Added sound" }
                format.json
            else
                format.html { render 'new', status: :unprocessable_entity }
                format.json
            end
        end
    end

    private

    def sound_params
        params.require(:sound).permit(:name, :path, :start_x, :start_y, :height, :width, world_id: @world)
    end
end
