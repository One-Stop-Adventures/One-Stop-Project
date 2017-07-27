INSERT INTO meals (trip_id, item, meal_time, meal_day)
VALUES ($1, $2, $3, $4)
RETURNING *;