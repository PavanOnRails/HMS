class Avatar < ApplicationRecord
	mount_uploader :image, ImageUploader
	enum image_type: [:profile_image]
end
