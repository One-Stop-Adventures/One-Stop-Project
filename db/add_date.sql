UPDATE trips 
set start_date = $1, end_date = $2
where id = $3
returning *;