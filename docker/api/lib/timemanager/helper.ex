defmodule Timemanager.Helpers do
  use TimemanagerWeb, :controller

  alias Timemanager.User
  alias Timemanager.WorkingTime
  alias Timemanager.Repo

  def render_error_base(conn, status, message) do
    conn
    |> put_status(status)
    |> json(%{errorHelper: message})
  end

  def render_error(conn, changeset) do
    render_error_base(conn,:unprocessable_entity,changeset.messages)
  end

  def render_not_found(conn, type) do
    render_error_base(conn,:not_found,"#{type} not found")
  end

  def render_ok_base(conn,view, status, json,type \\"show") do
    conn
    |> put_status(status)
    |> render(view,"#{type}.json", json: json)
  end

  def render_ok(conn,view,autre,type \\"show") do
    render_ok_base(conn,view,:ok,autre,type)
  end

  def render_created(conn,view,autre,type \\"show") do
    render_ok_base(conn,view,:created,autre,type)
  end

  def checkFromDb(conn, db,nom, search) do
    res = Repo.get(db, search)

    case res do
      %db{} = res ->
        res

      nil ->
        render_not_found(conn, "#{nom}")
    end
  end

  def checkWorkingTime(conn, id) do
    checkFromDb(conn, WorkingTime,  "WorkingTime" ,id)
  end

  def checkUserExists(conn, user_id) do
    checkFromDb(conn, User, "Utilisateur" ,String.to_integer(user_id))
  end

  def sendResponse(conn,view, changeset) do
    case changeset do
      {:ok, changeset} ->
        render_ok(conn,view, changeset)

      {:error, changeset} ->
        render_error(conn, changeset)
    end
  end

  def ensure_current_user(conn, _) do
    case conn.assigns.current_user do
      # nil -> render_error(conn, 401, message: "unauthorized")
      current_user -> conn
    end
  end

end
