defmodule TimemanagerWeb.UserController do
  use TimemanagerWeb, :controller

  alias Timemanager.Helpers
  alias Timemanager.Repo
  alias Timemanager.User
  alias TimemanagerWeb.UserView

  # action_fallback TimemanagerWeb.FallbackController

  def index(conn, _params) do
    users = Repo.all(User)
    Helpers.render_ok(conn, UserView, users,"index")
  end

  def create(conn,user_params) do
    user_changeset =
      User.changeset(%User{},user_params)

    Helpers.sendResponse(conn,  UserView, Repo.insert(user_changeset))

  end

  def show(conn, %{"id" => user_id}) do
    user = Helpers.checkUserExists(conn, user_id)
    Helpers.render_ok(conn, UserView, user)
  end

  def update(conn, %{"id" => id} = user_params) do
    user = Helpers.checkUserExists(conn, id)
    user_changeset = User.changeset(user, user_params)
    Helpers.sendResponse(conn, UserView, Repo.update(user_changeset))
  end

  def delete(conn, %{"id" => id}) do
    user = Helpers.checkUserExists(conn, id)
    user_changeset =
      User.changeset(user,%{active: false})

    Helpers.sendResponse(conn,  UserView, Repo.update(user_changeset))
  end
end
