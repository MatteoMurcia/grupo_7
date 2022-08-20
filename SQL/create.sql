CREATE DATABASE mizu;

use mizu;

CREATE TABLE users(
    user_id int(10) NOT NULL AUTO_INCREMENT,
    user_name varchar(50) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    category_user varchar(50) NOT NULL,
    images varchar(100) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE pet(
    pet_id  int(10) NOT NULL AUTO_INCREMENT,
    user_id int(10) NOT NULL,
    specie varchar(50),
    age int(3),
    PRIMARY KEY (pet_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE product(
    product_id int(10) NOT NULL AUTO_INCREMENT,
    category_product varchar(50) NOT NULL,
    product_name varchar(50) NOT NULL,
    desc_product varchar(100) NOT NULL,
    brand varchar(50) NOT NULL,
    price decimal NOT NULL,
    type varchar(50),
    images varchar(100) NOT NULL,
    PRIMARY KEY (product_id)
);

CREATE TABLE orders(
    order_id int(10) NOT NULL AUTO_INCREMENT,
    user_id int(10) NOT NULL,
    product_id int(10) NOT NULL,
    order_date date NOT NULL,
    quantity int(10) NOT NULL,
    price decimal NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE order_products(
    order_id int(10) NOT NULL,
    product_id int(10) NOT NULL,
    units int(3),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE shipment(
    shipment_id int(10) NOT NULL AUTO_INCREMENT,
    order_id int(10) NOT NULL,
    date_shipment date NOT NULL,
    PRIMARY KEY (shipment_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);