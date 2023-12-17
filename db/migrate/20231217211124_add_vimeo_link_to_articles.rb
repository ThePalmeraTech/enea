class AddVimeoLinkToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :vimeo_link, :string
  end
end
