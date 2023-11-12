defmodule TimemanagerWeb.FourOhFour do
  use TimemanagerWeb, :controller

  def index(conn, _params) do
    redirect(conn, to: "/404")
  end
end
