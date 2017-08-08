SELECT u.id, u.first_name, t.id, t.trip_name, t.city, t.state, t.start_date, t.end_date
FROM trips t
JOIN users u
ON t.user_id = u.id;
