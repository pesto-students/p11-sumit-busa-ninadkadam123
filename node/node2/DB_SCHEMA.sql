use pesto;

CREATE TABLE IF NOT EXISTS cities(
city_id INT AUTO_INCREMENT PRIMARY KEY,
city VARCHAR(20),
state VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS  WAREHOUSES(
wid INT AUTO_INCREMENT PRIMARY KEY,
wname VARCHAR(20),
city_id INT,
extra JSON NOT NULL,
FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS  stores(
sid INT AUTO_INCREMENT PRIMARY KEY,
store_name VARCHAR(20) ,
cid int, 
w_id int,
FOREIGN KEY (cid) REFERENCES cities(city_id),
FOREIGN KEY (w_id) REFERENCES WAREHOUSES(wid)
);

CREATE TABLE IF NOT EXISTS  customers(
cno INT AUTO_INCREMENT PRIMARY KEY,
cname VARCHAR(20),
address VARCHAR(50),
city INT,
FOREIGN KEY (city) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS  orders(
ono INT AUTO_INCREMENT PRIMARY KEY,
odate DATE,
customer_id INT,
FOREIGN KEY(customer_id) REFERENCES customers(cno)
);

CREATE TABLE IF NOT EXISTS  items(
item_id INT AUTO_INCREMENT PRIMARY KEY,
descript TEXT,
weight float,
cost float
);

CREATE TABLE IF NOT EXISTS  order_item_details(
id INT AUTO_INCREMENT PRIMARY KEY,
order_id  INT,
item_id INT,
order_quantity INT,
FOREIGN KEY(order_id) REFERENCES orders(ono),
FOREIGN KEY(item_id) REFERENCES items(item_id)
);

CREATE TABLE IF NOT EXISTS  store_item_details(
 id INT AUTO_INCREMENT PRIMARY KEY,
 store_id INT,
 item_id INT,
 quantity INT,
 FOREIGN KEY(store_id) REFERENCES stores(sid),
 FOREIGN KEY(item_id) REFERENCES items(item_id)
);



