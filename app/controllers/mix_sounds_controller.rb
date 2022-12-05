class MixSoundsController < ApplicationController
  before_action :set_mix_sound, only: [:edit, :update, :destroy]

  def new
    @mix_sound = MixSound.new
  end

  def create
    @mix_sound = MixSound.new(mix_sound_params)
    @mix = Mix.find(params[:mix_id])
    @mix_sound.mix = @mix
    respond_to do |format|
      if @mix_sound.save
        format.html { redirect_to edit_world_mix_path(@mix.world, @mix), notice: "Succesfully created" }
        format.json
      else
        format.html { render 'mixes/new', status: :unprocessable_entity }
        format.json
      end

    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @mix_sound.update(mix_sound_params)
        format.html { redirect_to mix_sound_path(@mix_sound) }
        format.json
      else
        format.html { render :edit }
        format.json
      end
    end

  end

  def destroy
    @mix_sound.destroy

    redirect_to mix_sound_path, status: :see_other
  end

  private

  def mix_sound_params
    params.require(:mix_sound).permit(:volume, :sound_id)
  end

  def set_mix_sound
    @mix_sound = MixSound.find(params[:id])
  end
end
