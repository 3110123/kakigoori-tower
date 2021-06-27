class BirthdaysController < ApplicationController
  def new
  end

  def create
    input_birthday = params[:q]
    convert_month = input_birthday["birthday(2i)"].to_i
    convert_day = input_birthday["birthday(3i)"].to_i
    @birthday = Birthday.new(month: convert_month, day: convert_day)
    @birthday.save
  end

  def edit
    @birthday = Birthday.find(params[:id])
  end

  def update
  end
end
