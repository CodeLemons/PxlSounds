# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_30_130633) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mix_sounds", force: :cascade do |t|
    t.float "volume"
    t.bigint "mix_id", null: false
    t.bigint "sound_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mix_id"], name: "index_mix_sounds_on_mix_id"
    t.index ["sound_id"], name: "index_mix_sounds_on_sound_id"
  end

  create_table "mixes", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.bigint "world_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_mixes_on_user_id"
    t.index ["world_id"], name: "index_mixes_on_world_id"
  end

  create_table "sounds", force: :cascade do |t|
    t.string "name"
    t.string "path"
    t.float "start_x"
    t.float "start_y"
    t.float "height"
    t.float "width"
    t.bigint "world_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["world_id"], name: "index_sounds_on_world_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "worlds", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "bgm"
  end

  add_foreign_key "mix_sounds", "mixes"
  add_foreign_key "mix_sounds", "sounds"
  add_foreign_key "mixes", "users"
  add_foreign_key "mixes", "worlds"
  add_foreign_key "sounds", "worlds"
end
