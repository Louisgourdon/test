defmodule Timemanager.User do
  use Ecto.Schema
  import Ecto.Changeset

  # Derive the Jason.Encoder protocol for the User struct
  @derive {Jason.Encoder, only: [:id, :username, :email,:active, :inserted_at, :updated_at]}

  schema "users" do
    field :username, :string
    field :email, :string
    field :active, :boolean, default: true
    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :active])
    |> validate_required([:username, :email])
    |> validate_format(:email, ~r/\A[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\z/, message: "Invalid email address")
    |> unique_constraint(:email)
    |> unique_constraint(:username)
  end
end
