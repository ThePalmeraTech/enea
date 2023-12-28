class ChangeBodyColumnTypeInArticles < ActiveRecord::Migration[7.0]
  def change
    remove_column :articles, :body, :text if column_exists?(:articles, :body)
  end
end
