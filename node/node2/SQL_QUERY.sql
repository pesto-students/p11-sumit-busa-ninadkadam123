use pesto;

INSERT INTO  cities (city,state) VALUES ('Pune','Maharashtra');
INSERT INTO  cities (city,state) VALUES ('Mumbai','Maharashtra');
INSERT INTO  cities (city,state) VALUES ('Delhi','Delhi');
INSERT INTO cities (city,state) VALUES ('Bangalore','Karnataka');
INSERT INTO cities (city,state) VALUES ('Chennai','Tamil Nadu');


INSERT INTO  WAREHOUSES (wname,city_id,extra) VALUES('Warehouse A',1,'{"capacity": 1000}');
INSERT INTO  WAREHOUSES (wname,city_id,extra) VALUES('Warehouse B',2,'{"capacity": 800}');
INSERT INTO  WAREHOUSES (wname,city_id,extra) VALUES('Warehouse C',3,'{"capacity": 1200}');
INSERT INTO  WAREHOUSES (wname,city_id,extra) VALUES('Warehouse D',4,'{"capacity": 900}');



INSERT INTO  stores (store_name,cid,w_id) VALUES('Store 2',2,1);
INSERT INTO stores (store_name,cid,w_id) VALUES('Store 3',3,2);
INSERT INTO  stores (store_name,cid,w_id) VALUES('Store 4',4,3);
INSERT INTO  stores (store_name,cid,w_id) VALUES('Store 5',4,3);
INSERT INTO  stores (store_name,cid,w_id) VALUES('Store 6',4,3);


INSERT INTO  customers (cno,cname,address,city ) VALUES(101,'Mr. Patil','123 Main St',1);
INSERT INTO  customers (cno,cname,address,city ) VALUES(102,'Mrs. Sharma','123 Main St',2);
INSERT INTO  customers (cno,cname,address,city ) VALUES(103,'Mr. Singh','123 Main St',3);
INSERT INTO  customers (cno,cname,address,city ) VALUES(104,'Ms. Gupta','123 Main St',4);
INSERT INTO  customers (cno,cname,address,city ) VALUES(105,'Mr. Kumar','123 Main St',5);

INSERT INTO  orders (ono,odate,customer_id ) VALUES(1,'2023-06-15',102);
INSERT INTO  orders (ono,odate,customer_id ) VALUES(2,'2023-06-16',104);
INSERT INTO  orders (ono,odate,customer_id ) VALUES(3,'2023-06-17',103);
INSERT INTO  orders (ono,odate,customer_id ) VALUES(4,'2023-06-18',105);
INSERT INTO  orders (ono,odate,customer_id ) VALUES(5,'2023-06-19',101);
INSERT INTO  orders (ono,odate,customer_id ) VALUES(6,'2023-06-19',101);


INSERT INTO items(item_id,descript,weight,cost ) VALUES(101,'Laptop',2.5,1200.50);
INSERT INTO items(item_id,descript,weight,cost ) VALUES(102,'Smartphone',0.5,800.00);
INSERT INTO items(item_id,descript,weight,cost ) VALUES(103,'TV',15.0,1000.00);
INSERT INTO items(item_id,descript,weight,cost ) VALUES(104,'Microwave Oven',10.0,500.00);
INSERT INTO items(item_id,descript,weight,cost ) VALUES(105,'Refrigerator',25.0,1500.0);
INSERT INTO items(item_id,descript,weight,cost ) VALUES(106,'Washing Machine',30,1800.00);

INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(1,106,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(5,103,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(4,104,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(2,105,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(3,102,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(1,101,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(3,104,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(5,103,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(4,104,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(2,105,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(3,102,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(1,101,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(3,104,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(2,105,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(3,102,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(1,101,10);
INSERT INTO  order_item_details(order_id,item_id,order_quantity) VALUES(1,102,10);
-- Find the item that has the minimum weight.
SELECT * FROM items where weight=(SELECT  MIN(weight)  FROM items);

-- Find the different warehouses in "Pune".
SELECT wid,wname,city,extra FROM WAREHOUSES w join cities c on w.city_id=c.city_id where c.city='Pune';



-- Find the details of items ordered by a customer named "Mr. Patil".
SELECT cname AS customer,descript AS item,order_quantity,cost,odate from order_item_details od JOIN items i on od.item_id=i.item_id JOIN orders o ON od.order_id=o.ono JOIN customers c on o.customer_id=c.cno where  c.cname='Mr. Patil';

-- Find a Warehouse that has the maximum number of stores.
SELECT wname ,stores FROM WAREHOUSES w Join (SELECT w_id,COUNT(*) AS stores FROM stores GROUP BY w_id ORDER BY COUNT(*) DESC LIMIT 1) t on w.wid=t.w_id ;

-- Find an item that is ordered for a minimum number of times.
SELECT * FROM items where item_id IN (SELECT  item_id FROM order_item_details GROUP BY item_id HAVING COUNT(*)=(SELECT min(count) FROM (SELECT item_id,COUNT(*) as count FROM order_item_details GROUP BY item_id) t));

-- Find the detailed orders given by each customer.
SELECT cname AS customer,address,descript,odate,order_quantity FROM order_item_details od join orders o on od.order_id=o.ono join customers c on o.customer_id=c.cno join items i on od.item_id=i.item_id;

