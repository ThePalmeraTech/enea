class ArticleImage < ApplicationRecord
  belongs_to :article
  has_one_attached :image
end
