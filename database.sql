use database produto

CREATE TABLE produto_entity (
    id INT NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    valor FLOAT NOT NULL,
    descricao varchar(250) NOT NULL,
    PRIMARY KEY (id) 
);