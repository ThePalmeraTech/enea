class Article < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy
  has_rich_text :body
  has_one_attached :photo
  has_many_attached :images
  validates :title, presence: true
  validates :body, presence: true, allow_blank: true
   # Validation for vimeo_link (optional based on your requirements)
   validates :vimeo_link, presence: true, allow_blank: true

end
