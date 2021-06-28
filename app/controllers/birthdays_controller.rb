class BirthdaysController < ApplicationController
  def new
  end

  def create
    input_birthday = params[:q]
    @convert_month = input_birthday["birthday(2i)"].to_i
    @convert_day = input_birthday["birthday(3i)"].to_i
  end

  def edit
  end

  def update
  end
end
