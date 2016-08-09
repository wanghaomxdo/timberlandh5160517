 /*========================================================= Steelcase HBR数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'tlh5160517'@'localhost' IDENTIFIED BY 'tlh5160517' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE tlh5160517 CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON tlh5160517.*  TO 'tlh5160517'@'localhost' IDENTIFIED BY 'tlh5160517';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE tlh5160517;

/*
行为记录表
*/
create table tracking (
id INT(19) NOT NULL auto_increment COMMENT 'ID标识',
ip VARCHAR(128) NOT NULL COMMENT 'IP地址',
platform VARCHAR(8) NOT NULL COMMENT '访问平台类型',
type VARCHAR(128) NOT NULL COMMENT '行为类型(Share to TimeLine, Go Web Button)',
url VARCHAR(256) NOT NULL COMMENT '页面URL',
odate varchar(16) NOT NULL COMMENT '行为操作时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;