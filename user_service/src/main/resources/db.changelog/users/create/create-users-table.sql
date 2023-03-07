create table users (
    id bigserial primary key,
    email varchar(50) not null unique,
    createdAt timestamp not null,
    updatedAt timestamp not null
)