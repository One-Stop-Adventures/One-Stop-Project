INSERT INTO packing_list ( trip_id, item )
VALUES ( $1, $2 )
RETURNING *;