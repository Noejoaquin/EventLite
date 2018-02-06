class Api::EventsController < ApplicationController

  def index
    @events_one = []
    @events_two = []

    category_names = Category.all.map { |cat|  cat.name }
    category_name = category_names.select { |name| name.downcase.include?(params[:name].downcase)}

    if category_name
      category_id = Category.all.where(name: category_name[0]).ids[0]
      @events_one = Event.all.where(category_id: category_id)
    end

    params[:name] = params[:name].downcase
    @events = Event.all
    @events_two = @events.where(["lower(name) LIKE ?", "%#{params[:name]}%"]) if params[:name] != ""

    @events = @events_one + @events_two

    @events.empty? ? @events = Event.all : @events
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

  def save
    @save = SavedEvent.new(event_id: params[:event_id], user_id: current_user.id)
    @save.save!
    @user = current_user
    render 'api/users/show'
  end

  def unsave
    @save = SavedEvent.find_by(event_id: params[:event_id], user_id: current_user.id)
    @user = current_user
    @save.destroy!
    render 'api/users/show'
  end

  def event_params
    params.require(:event).permit(:name, :description, :location,
                                  :ticket_type, :price, :start_time, :start_date,
                                  :end_date, :end_time, :category_id, :image, :lat, :lng)
  end
end
