INSERT INTO todo (trip_id, item)
VALUES ($1, $2)
RETURNING *;