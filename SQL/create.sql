CREATE DATABASE mizu;

use mizu;

CREATE TABLE user(
    user_id int(10),
    user_name varchar(50),
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50),
    password varchar(50),
    category_user varchar(50),
    image varchar(100),
    PRIMARY KEY (user_id)
);

CREATE TABLE pet(
    pet_id  int(10),
    user_id int(10),
    specie varchar(50),
    age int(3),
    PRIMARY KEY (pet_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


CREATE TABLE product(
    product_id int(10),
    category_product varchar(50),
    name varchar(50),
    description varchar(100),
    brand varchar(50),
    price int(50),
    image varchar(100),
    PRIMARY KEY (product_id)
);

CREATE TABLE order(
    order_id int(10),
    user_id int(10),
    product_id int(10),
    oder_date date,
    quantity int(10),
    price int(50),
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE order_products(
    order_id int(10),
    product_id int(10),
    units int(3),
    FOREIGN KEY (order_id) REFERENCES order(order_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE shipment(
    shipment_id int(10),
    order_id int(10),
    date_shipment date,
    PRIMARY KEY (shipment_id),
    FOREIGN KEY (order_id) REFERENCES order(order_id)
);