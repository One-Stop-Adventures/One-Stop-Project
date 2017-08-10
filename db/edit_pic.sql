UPDATE users
SET profile_pic = $2
WHERE id = $1
RETURNING *;
