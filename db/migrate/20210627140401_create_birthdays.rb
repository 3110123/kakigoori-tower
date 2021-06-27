class CreateBirthdays < ActiveRecord::Migration[6.0]
  def change
    create_table :birthdays do |t|
      t.integer :month, null: false
      t.integer :day, null: false

      t.timestamps
    end
  end
end
