INSERT INTO trips (user_id, trip_name, description, completed, start_date, end_date, city, state)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;
