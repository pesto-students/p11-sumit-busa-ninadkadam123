### Question 1: Normalization

#### 1NF

The table is already in 1NF. As column contain atomic value and no repetation in row.

#### 2NF

Book List

| Book ID | Title                 | Author              | Genre   |
| ------- | --------------------- | ------------------- | ------- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction |
| 103     | Principles of Physics | Jearl Walker        | Science |

Book Details
| Book ID | Publisher | ISBN | Price |
|---------|--------------|----------------|-------|
| 101 |HarperCollins | 978-0061120084 | 10.99 |
|102 | Scribner | 978-0743273565 | 12.50 |
| 103 | Wiley | 978-0321976444 | 50.00 |

BookList contains attributes only depends on book list ID
and Book details only contains attribute depend on book detail id ID

#### 3NF

| Book ID | Title                 | Author              | Genre   |
| ------- | --------------------- | ------------------- | ------- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction |
| 103     | Principles of Physics | Jearl Walker        | Science |

Book Price
| Book ID | Price |
|---------|-------|
| 101 | 10.99 |
|102 | 12.50 |
| 103 | 50.00 |

Book Publisher

| Book ID | Publisher     | ISBN           |
| ------- | ------------- | -------------- |
| 101     | HarperCollins | 978-0061120084 |
| 102     | Scribner      | 978-0743273565 |
| 103     | Wiley         | 978-0321976444 |

In Book details contains transitive value as ISBN number depends on
publication.

### Question 2: Normalization

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

#### 1NF

Table seems to be already in 1NF

#### 2NF

Employee Table
| Employee ID | Employee Name | Department |
|-------------|---------------|--------------|
| 101 | John Doe | HR |
| 102 | Jane Smith | Marketing |
| 103 | Mike Johnson | IT |
| 104 | Sarah Brown | HR |
| 105 | Robert Lee | Finance |
| 106 | Lisa Wang | IT |

Project Table

| Project ID | Project Name |
| ---------- | ------------ |
| 001        | Project A    |
| 002        | Project B    |
| 003        | Project C    |

Employee Project Details

| Employee ID | Project ID | Start Date | End Date   | Salary |
| ----------- | ---------- | ---------- | ---------- | ------ |
| 101         | 001        | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | 002        | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | 001        | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | 002        | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | 003        | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | 002        | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | 001        | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | 001        | 2023-06-01 | 2023-12-31 | 5800   |

As Employee table contain Employee details
Project Table contains Project details
Employee Project details has Employee ID and Project ID as composite primary Key

#### 3NF

As the table do not contains any transitive value tables are already in 3NF

### Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

##### Primary Key

A primary key is a unique identifier for each row in a table. It ensures data integrity and provides a way to uniquely identify records.

##### Foreign Key

A foreign key establishes a link between tables, ensuring referential integrity.

Foreign Key refers to the primary key of another table.

### Explain the ACID properties in the context of database transactions.

ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties represent a set of characteristics that ensure the reliability of transactions within a database.

1. **Atomicity** guarantees that a transaction is treated as a single, indivisible unit. Either all the changes within a transaction are committed, or none of them are. This property prevents partial or incomplete updates to the database.

2. **Consistency** ensures that a transaction takes the database from one consistent state to another. In other words, a transaction should bring the database from one valid state to another valid state, maintaining data integrity and adhering to defined constraints.

3. **Isolation** ensures that transactions can occur concurrently without interfering with each other. Even though multiple transactions may be executed simultaneously, the end result should be the same as if they were executed sequentially. Isolation prevents "dirty reads" and "phantom reads."

4. **Durability** guarantees that once a transaction is committed, its effects are permanent and will survive any subsequent system failures. Committed data will not be lost, even in the face of power outages, crashes, or other disruptions.

### Describe the concept of indexing in a database. How does indexing improve query performance?

Indexing is a fundamental concept in database management systems (DBMS). It's a technique that significantly improves the efficiency of data retrieval operations by providing a fast and efficient way to locate specific rows within a database table.
An index is a data structure that enhances the speed of data retrieval operations on a database table at the cost of additional storage space and maintenance overhead. Indexes are akin to the index of a book, which allows you to quickly locate information in the book without having to read every page sequentially.

Indexing works by creating a separate data structure that stores a subset of the table's columns and their corresponding row identifiers. These row identifiers typically point to the actual rows in the table.

When you execute a query that involves a column with an index, the database engine consults the index rather than scanning the entire table. This leads to a substantial reduction in the number of disk I/O operations and a significant improvement in query speed.

### Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

**Locking** involves acquiring locks on data to prevent other transactions from modifying it. Lock types include:

**Shared Lock:** Allows multiple transactions to read data concurrently.
**Exclusive Lock:** Prevents other transactions from reading or modifying data.
Two-Phase Locking
Transactions acquire locks in two phases: growing (acquiring) and shrinking (releasing). Once a transaction releases a lock, it cannot acquire new locks.

**Optimistic Concurrency Control**
Transactions are allowed to proceed without locks. Before committing, the system checks if other transactions have modified the same data.

### Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

Database sharding is the process of storing a large database across multiple machines. A single machine, or database server, can store and process only a limited amount of data. Database sharding overcomes this limitation by splitting data into smaller chunks, called shards, and storing them across several database servers.

A retail store that sells products to both US and European customers might store replicas of size conversion tables on different shards for both regions.
