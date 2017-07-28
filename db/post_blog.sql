INSERT INTO blog ( post, title, date, image )
VALUES ( $1, $2, $3, $4 )
RETURNING *;