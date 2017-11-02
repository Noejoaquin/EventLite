class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.save
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy!
    render :show
  end

  def update
    debugger 
    @event = current_user.events.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def attend
    @attendance = Attendance.new(event_id: params[:event_id], user_id: current_user.id)
    @attendance.save!
    @user = current_user
    render '/api/users/show'
  end

  def unattend
    @attendance = Attendance.find_by(event_id: params[:event_id], user_id: current_user.id)
    @attendance.destroy!
    @user = current_user
    render '/api/users/show'
  end

  def event_params
    params.require(:event).permit(:name, :description, :location,
                                  :ticket_type, :price, :start_time, :start_date,
                                  :end_date, :end_time, :category_id, :image)

  end
end
