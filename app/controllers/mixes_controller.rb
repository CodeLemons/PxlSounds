class MixesController < ApplicationController
  before_action :set_mix, only: [:edit, :update, :destroy]

  def new
    @mix = Mix.new
  end

  def create
    @mixes = Mix.new(mixes_params)
    @mixes.save

    redirect_to world_mixes_path(@mixes)
  end

  def edit
  end

  def update
    @mix.update(mixes_params)

    redirect_to world_mixes_path(@mix)
  end

  def destroy
    @mix.destroy

    redirect_to worlds_path, status: :see_other
  end

  private

  def mixes_params
    params.require(:mixes).permit(:name)
  end

  def set_mix
    @mix = Mix.find(params[:id])
  end
end
