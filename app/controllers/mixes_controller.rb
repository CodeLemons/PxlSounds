class MixesController < ApplicationController
  before_action :set_mix, only: [:edit]
  before_action :set_world, only: [:edit, :create, :new]

  def new
    @mix = Mix.new
  end

  def create
    @mix = Mix.new(mix_params)
    @mix.world = @world
    if @mix.save
      redirect_to edit_world_mix_path(@mix), notice: "Succesfully created"
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @mix.update(mixes_params)

    redirect_to edit_world_mix_path(@mix), notice: "Succesfully updated"
  end

  def destroy
    @mix.destroy

    redirect_to worlds_path, status: :see_other
  end

  private

  def mix_params
    params.require(:mix).permit(:name, sounds: [])
  end

  def set_mix
    @mix = Mix.find(params[:id])
  end

  def set_world
    @world = World.find(params[:world_id])
  end
end
