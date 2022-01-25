database create formularios;

create table if not exists data_usuarios(
    id serial primary key,
    nome text not null,
    sobrenome text not null,
    email varchar(50) not null unique,
    telefone text not null unique,
    cidade text not null,
    estado text not null,
    cep varchar(8) not null,
    estado_civil text not null,
    genero text not null,
    raca text not null,
    peso smallint not null,
    altura smallint not null
);
