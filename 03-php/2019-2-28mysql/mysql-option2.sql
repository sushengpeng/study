#########################################数据库的操作

##创建数据库
#create database if not exists book ;

##查看数据库
#show databases;
#show create database book;
##修改数据库
##alter database 库名 [default] character set 编码方式

#删除数据库
#drop database book

#选中数据库
#use bookmanage;

#获取选中的数据库
#select database();

#获取当前选中数据库中的表格
#show tables;

##################################表结构操作
#create table bookdetial(
#       id int(4) not null primary key auto_increment,
#       booktype varchar(20) default "经典",
#       bookcontent varchar(255) ,
#       bookimg varchar(100)
#)

#显示表格信息
#desc booklist;
#show columns from booklist;

#删除表
#drop table bookdetial
#增加字段
#alter table 表名 add [column]  字段名 数据类型 [约束] [after 插入位置]
#例如：在表MyClass中添加了一个字段passtest，类型为int(4)，默认值为0 
#mysql> alter table MyClass add passtest int(4) default '0'
#修改字段名
#alter table 表名 change 字段名  新字段名 数据类型 [约束]
#例如：alter table MyClass change 旧字段  新字段   passtest int(4) default '0'；
#删除字段
#alter table 表名 drop [column]  字段名
#更改表名
#alter table 表名 rename  [to]  新表名
#添加主键 
#alter table 表名 add primary key(字段);
#删除主键 
#alter table 表名 drop primary key;

####################################################重点是（表数据的操作）
#insert into booklist(id,bookname,author,price) values
#(1,"红楼梦","曹雪芹",58)

#insert into booklist(id,bookname,author,price) values
#(2,"三国","罗贯中",60),
#(3,"西游记","吴承恩",66)

#insert into booklist(bookname,author,price) values 
#("水浒传","施耐庵",88)

#insert into booklist values
#(5,"小猪配齐","english",100)

##########查询数据
#select * from booklist; 

#select bookname,price from booklist

#select bookname,price from booklist where id=2

#limit n,m   后面两个参数指的是从索引为n开始筛选m条数据
#select bookname,price from booklist limit 1,3   


###########删除数据
#delete from booklist where id=5

##########修改数据
#update booklist set price=68  where id=3

#update booklist set bookname=replace(bookname,"=","") where id=2

#update booklist set bookname = concat("《",bookname,"》")


############查询语句
#as 用于给列起别名
#select num as "学号" from t_student

#select * from t_student where sname not like "王_"
#select * from t_student where sname like "王"
#select * from T_score where score in (70,80,90)

select * from T_score where score>=60

select * from t_score where score between 70 and 80 and course="语文"


#distinct 去重
select distinct num from t_score

#order by 排序
select * from t_student order by birthday asc     #升序

select * from t_student order by birthday desc    #降序

select * from t_student where sex="男" order by height asc limit 0,3

##group by 
select sclass,count(sclass) from t_student group by sclass 

select sex,count(sex) from t_student group by sex

select course,avg(score) from t_score where course="语文"  

select course,avg(score) as 平均分 from t_score group by course having 平均分>73

select max(score) from t_score where course="语文"

select count(*) from t_score 

#limit 

select * from t_score limit 0*10,10

select * from t_score limit 1*10,10

select * from t_score limit 20,10

####################################################多表查询
#表的别名

select s.num from T_score s 

select * from t_student a, t_score b where a.num = b.num 
select * from t_student a join t_score b on a.num = b.num 

select * from t_student a left join t_score b on a.num = b.num

#把大于语文平均分的学生学号查出来
select num from t_score where score>(select avg(score) from t_score where course="语文") and course="语文"


select * from t_student where num in (select num from t_score where course="语文" order by score desc  limit 0,3) 


select * from t_student where num in ("004","005","008")

select * from t_student a,t_score b where a.num = b.num and course="语文" order by score desc limit 0,3

select * from t_score a where a.num in ( select num from t_student where sclass="02班")



































