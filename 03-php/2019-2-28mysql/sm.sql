# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-28 14:40:14
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "t_score"
#

DROP TABLE IF EXISTS `t_score`;
CREATE TABLE `t_score` (
  `num` varchar(10) DEFAULT NULL,
  `course` varchar(10) DEFAULT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "t_score"
#

INSERT INTO `t_score` VALUES ('001','语文',80),('001','数学',70),('002','语文',50),('002','数学',60),('003','语文',44),('003','数学',55),('004','语文',88),('004','数学',90),('005','语文',94),('005','数学',96),('006','语文',78),('006','数学',85),('007','语文',70),('007','数学',77),('008','语文',86),('008','数学',77),('009','语文',66),('009','数学',60),('010','语文',71),('010','数学',70),('011','语文',76),('011','数学',70);

#
# Structure for table "t_student"
#

DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student` (
  `num` varchar(10) NOT NULL DEFAULT '',
  `sname` varchar(20) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sclass` varchar(10) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "t_student"
#

INSERT INTO `t_student` VALUES ('001','张三','男','1988-09-08','01班',1.7,70),('002','李四','女','1990-08-07','01班',1.6,60),('003','张明','女','1987-08-07','01班',1.5,46),('004','李贤','女','1989-11-07','01班',1.66,56),('005','张晓','女','1989-01-07','01班',1.55,50),('006','张码','男','1989-03-07','01班',1.8,80),('007','黄菊','男','1988-03-07','02班',1.75,80),('008','王丽','女','1991-11-07','02班',1.65,50),('009','王肖','女','1990-11-21','02班',1.6,46),('010','赵力','男','1989-11-21','02班',1.75,70),('011','赵宇','男','1987-11-21','02班',1.75,75),('012','许诸','男','1990-09-09','01班',1.9,100);
