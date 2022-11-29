class MixSoundsController < ApplicationController
  # new, create, edit, update, destroy

  def new
    @mix_sound = Mix_sound.new
  end

  def create
    @mix_sound = Mix_sound.new(mix_sound_params)
    @mix_sound.save
    redirect_to mix_sound_path(@mix_sound)
  end

  def edit
    @mix_sound = Mix_sound.find(params[:id])
  end

  def update
    @mix_sound.update(mix_sound_params)
    redirect_to mix_sound_path(@mix_sound)
  end

  def destroy
    @mix_sound = Mix_sound.find(params[:id])
    @mix_sound.destroy

    redirect_to mix_sound_path, status: :see_other
  end

  private

  def mix_sound_params
    params.require(:mix_sound).permit(:volume)
  end


end
