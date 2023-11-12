defmodule TimemanagerWeb.WorkingTimeController do
  use TimemanagerWeb, :controller

  alias Timemanager.Helpers
  alias Timemanager.WorkingTime
  alias Timemanager.Repo
  alias Timemanager.WorkingTimeView

  # Create
  def create(conn, %{"userID" => user_id} = working_time_params) do
    user = Helpers.checkUserExists(conn, user_id)

    working_time_changeset =
      WorkingTime.changeset(%WorkingTime{user_id: user.id}, working_time_params)

    Helpers.sendResponse(conn,WorkingTimeView ,Repo.insert(working_time_changeset))
  end

  # Read (show)
  def getOne(conn, %{"userID" => user_id, "id" => id}) do
    user = Helpers.checkUserExists(conn, user_id)

    working_time = Helpers.checkWorkingTime(conn, id)
    Helpers.render_ok(conn, WorkingTimeView,working_time)
  end

  # Update
  def update(conn, %{"id" => id} = working_time_params) do
    working_time = Helpers.checkWorkingTime(conn, id)

    changeset = WorkingTime.changeset(working_time, working_time_params)
    Helpers.sendResponse(conn,WorkingTimeView ,Repo.update(changeset))
  end

  # Delete
  def delete(conn, %{"id" => id}) do
    working_time = Helpers.checkWorkingTime(conn, id)
    Helpers.sendResponse(conn,WorkingTimeView ,Repo.delete(working_time))
  end
end
