class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @world = World.all.sample
    # redirect_to world_path(@world)
  end
end
