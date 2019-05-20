# Host: localhost  (Version: 5.5.53)
# Date: 2019-03-06 15:11:43
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "booklist"
#

DROP TABLE IF EXISTS `booklist`;
CREATE TABLE `booklist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `bookname` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='书籍列表';

#
# Data for table "booklist"
#

/*!40000 ALTER TABLE `booklist` DISABLE KEYS */;
INSERT INTO `booklist` VALUES (2,'三国','裸官中国',100,NULL),(3,'西游记','施耐庵',100,NULL),(18,'如果','爱',100,NULL),(19,'论语','孔子',100,NULL),(30,'aa','aa',12,'/upload/15516709608619.png'),(31,'','',0,'/upload/15516721599950.png'),(32,'ccc','cc',123,'/upload/15516722738891.png');
/*!40000 ALTER TABLE `booklist` ENABLE KEYS */;

#
# Structure for table "userlist"
#

DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "userlist"
#

/*!40000 ALTER TABLE `userlist` DISABLE KEYS */;
INSERT INTO `userlist` VALUES (1,'zs','123'),(2,'zsf','123456'),(3,'aaa','123456'),(4,'zz','123456'),(6,'多福多寿','123456'),(7,'aaaaaa','123456'),(8,'cccccc','123456');
/*!40000 ALTER TABLE `userlist` ENABLE KEYS */;
