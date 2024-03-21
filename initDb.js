import PG from "pg";
const Pool = PG.Pool;

const initDb = async () => {
  const pool = new Pool({
    user: "admin",
    password: "1234",
    database: "template1",
    host: "localhost",
    port: "9000",
  });

  await pool.query("drop database if exists task_manager;", []);
  await pool.query("create database task_manager;", []);
  pool.end();
  initTables();
  //await pool.query("use task_manager;", []);
};

const initTables = async () => {
  const pool = new Pool({
    user: "admin",
    password: "1234",
    database: "task_manager",
    host: "localhost",
    port: "9000",
  });

  await pool.query(
    "create table tags( id serial not null, title varchar(255), constraint tags_pk primary key(id));",
    []
  );
  await pool.query("insert into tags(title) values('красный');", []);
  await pool.query("insert into tags(title) values('зеленый');", []);

  await pool.query(
    "create table todos(id serial unique, title varchar(255) unique, description varchar (255), completed bool, tag_id int null, constraint todos_pk primary key(id), constraint todos_tag_fkey foreign key (tag_id) references tags(id));",
    []
  );
  await pool.query(
    "insert into todos(title,description,completed,tag_id) values('Первая задача','Описание первой задачи',false,1);",
    []
  );
  await pool.query(
    "insert into todos(title,description,completed,tag_id) values('Вторая задача','Описание второй задачи',true,2);",
    []
  );

  pool.end();
};

initDb();
//initTables();
