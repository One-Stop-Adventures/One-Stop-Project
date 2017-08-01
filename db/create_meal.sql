INSERT INTO meals (trip_id, meal_day, breakfast, lunch, dinner, snack)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;
