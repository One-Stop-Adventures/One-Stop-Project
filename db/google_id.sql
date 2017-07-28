INSERT INTO users (first_name, last_name, profile_pic, google_id)
VALUES ( $1, $2, $3, $4 )
RETURNING *;