class CreateArchivos < ActiveRecord::Migration[7.0]
  def change
    create_table :archivos do |t|
      t.string :title
      t.references :category, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :vimeo_link

      t.timestamps
    end
  end
end
