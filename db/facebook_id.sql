INSERT INTO users (facebook_id, profile_pic)
VALUES ($1, $2)
RETURNING *;