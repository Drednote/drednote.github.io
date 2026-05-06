I designed and developed a **highly loaded microservice loan reservation platform** for individuals.  
The system is responsible for **reserving loan agreements** and processes hundreds of thousands of transactions daily,
including peak loads at the end of billing periods.

**Responsibilities:**

- Made **key technical decisions** on the architecture and implementation of backend services.
- Designed and developed microservices in `Java/Spring`.
- Participated in the design and development of microservice architecture using `Docker`, `Kubernetes`, `PostgreSQL`,
  and `Kafka`.
- Worked on the development of a **distributed system** with a load of more than **100 RPS**:
  - load balancing;
  - increased fault tolerance;
  - reducing the impact of failures of individual components;
  - Optimize performance and eliminate bottlenecks.
- Solved complex technical problems related to **performance**, **data consistency**, **fault tolerance** and
  processing large amounts of data.
- Conducted a `code review` in several teams, helped maintain the **quality** of architecture and code.
- **Mentored** 3 developers, additionally assisted in the development of 2 more engineers.
- Conducted **technical interviews with** backend developers.

**Achievements:**

- **Designed and put into production** a credit reservation system that processes about **500 thousand** contracts daily
  and more than **5 million** contracts at the end of the month.
- Implemented **key business functions** related to loan agreement reservations.
- Developed an internal library for **partitioning management in PostgreSQL**, which allows you to efficiently partition
  large tables **without downtime** and clean up outdated data in tables with a daily increase of more than **5 million** records.
- Implemented ** a PostgreSQL-based message queuing mechanism** for asynchronous task processing.
- Designed and implemented the process of **“closing the day”** based on Spring Batch; the process was completed in
  about **30 minutes instead of several hours** in the previous system.