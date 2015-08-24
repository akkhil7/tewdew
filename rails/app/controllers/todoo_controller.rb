class TodooController < ApplicationController
  def index
    @todos=Todo.where(done: false)
    @todone=Todo.where(done: true)
    render json: todos
    render json: todone
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

    if @todo.update_attribute(:done, true)
      render json: @todo, status: 200
    else
      render json: @todo.errors, status: 422
    end
  end

  def destroy
    @todo=Todo.find(params[:id])
    @todo.destroy
    render text: "The todo was destroyed", status: 200
  end

  private
  def todo_params
    params.require(:todo).permit(:name, :done)
  end

end
