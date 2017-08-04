SELECT t.id, t.trip_name, t.description, t.city, t.state, u.id, u.username, u.first_name
FROM trips t
WHERE t.id = $1;
JOIN users u
ON u.id = t.user_id
