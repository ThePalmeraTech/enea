class AddImageOrderToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :image_order, :text
  end
end
