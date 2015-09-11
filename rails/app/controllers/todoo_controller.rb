class TodooController < ApplicationController

  before_action :authenticate

  def index
    @todos = current_user.todos
    render json:{todos: @todos}, status: 200
  end

  def new
    @todo=Todo.new
  end

  def create
    @todo=Todo.new(todo_params)
    if @todo.save
      render json: @todo, status: 200
    else
      render json: @todo.errors, status: 422
    end
  end

  def update
    @todo=Todo.find(params[:id])

    if @todo.update_attribute(todo_params)
      render json: @todo, status: 200
    else
      render json: @todo.errors, status: 422
    end
  end

  def destroy
    @todo=Todo.find(params[:id])
    @todo.destroy
  end

  private
  def todo_params
    params.require(:todo).permit(:name, :done, :user_id)
  end

end
