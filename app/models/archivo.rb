class Archivo < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy # if you also want comments for archivos
  has_rich_text :body
  has_one_attached :photo
  has_many_attached :images
  validates :title, presence: true
  validates :body, presence: true, allow_blank: true
  validates :vimeo_link, presence: true, allow_blank: true
end
