defmodule TimemanagerWeb.UserView do
  use TimemanagerWeb, :view
  alias TimemanagerWeb.UserView

  def render("index.json", %{json: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{json: user}) do
    render_one(user, UserView, "user.json")
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      username: user.username,
      email: user.email,
      active: user.active
    }
  end
end
