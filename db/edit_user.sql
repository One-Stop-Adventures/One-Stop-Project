UPDATE users
SET username = $2,
    password = $3,
    email = $4,
    first_name = $5,
    last_name = $6,
    city = $7,
    state = $8,
    profile_pic = $9,
WHERE id = $1;