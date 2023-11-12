defmodule TimemanagerWeb.WorkingTimeView do
  use TimemanagerWeb, :view

  alias Timemanager.WorkingTime

  def render("show.json", %{json: working_time}) do
    %{
      id: working_time.id,
      start: working_time.start,
      end: working_time.end,
      user_id: working_time.user_id
    }
  end

  def render("index.json", %{working_times: working_times}) do
    %{data: Enum.map(working_times, &render("show.json", %{working_time: &1}))}
  end

end
