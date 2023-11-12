defmodule TimemanagerWeb.ClockController do
  use TimemanagerWeb, :controller

  alias Timemanager.Clock
  alias Timemanager.Repo

  # Create
  def create(conn, %{"clock" => clock_params}) do
    changeset = Clock.changeset(%Clock{}, clock_params)

    case Repo.insert(changeset) do
      {:ok, clock} ->
        conn
        |> put_status(:created)
        |> render("show.json", clock: clock)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(TimemanagerWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end

  # Read (index)
  def index(conn, _params) do
    clocks = Repo.all(Clock)

    conn
    |> put_status(:ok)
    |> render("index.json", clocks: clocks)
  end

  # Read (show)
  def show(conn, %{"id" => id}) do
    clock = Repo.get(Clock, id)

    case clock do
      nil ->
        conn
        |> put_status(:not_found)
        |> render("error.json", message: "Clock not found")

      _ ->
        conn
        |> put_status(:ok)
        |> render("show.json", clock: clock)
    end
  end

  # Update
  def update(conn, %{"id" => id, "clock" => clock_params}) do
    clock = Repo.get(Clock, id)

    case clock do
      nil ->
        conn
        |> put_status(:not_found)
        |> render("error.json", message: "Clock not found")

      _ ->
        changeset = Clock.changeset(clock, clock_params)

        case Repo.update(changeset) do
          {:ok, updated_clock} ->
            conn
            |> put_status(:ok)
            |> render("show.json", clock: updated_clock)

          {:error, changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> render(TimemanagerWeb.ChangesetView, "error.json", changeset: changeset)
        end
    end
  end

  # Delete
  def delete(conn, %{"id" => id}) do
    clock = Repo.get(Clock, id)

    case clock do
      nil ->
        conn
        |> put_status(:not_found)
        |> render("error.json", message: "Clock not found")

      _ ->
        Repo.delete(clock)

        conn
        |> put_status(:no_content)
        |> send_resp()
      end
  end
end
