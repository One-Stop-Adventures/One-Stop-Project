UPDATE users
SET username = $2,
    password = $3,
    email = $4,
    first_name = $5,
    last_name = $6,
    city = $7,
    state = $8,
    profile_pic = $9,
    birthday = $10,
    bio = $11
WHERE id = $1
RETURNING *;