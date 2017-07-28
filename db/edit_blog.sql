UPDATE blog
SET post = $2,
    title = $3,
    image = $4
WHERE id = $1;
