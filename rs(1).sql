/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : rs

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-08-18 14:39:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for info
-- ----------------------------
DROP TABLE IF EXISTS `info`;
CREATE TABLE `info` (
  `id` tinyint(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `infoDate` varchar(60) DEFAULT NULL,
  `infoType` varchar(60) DEFAULT NULL,
  `proportion` varchar(60) DEFAULT NULL,
  `infoCount` tinyint(22) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of info
-- ----------------------------
INSERT INTO `info` VALUES ('00000000001', '2019-6-25', '热门召回', '11%', '0000000000000000000576');
INSERT INTO `info` VALUES ('00000000002', '2019-6-25', '基于内容召回', '39%', '00000000000000000002044');
INSERT INTO `info` VALUES ('00000000003', '2019-6-25', '基于用户的协同过滤召回', '29%', '0000000000000000001520');
INSERT INTO `info` VALUES ('00000000004', '2019-6-25', '基于物品的协同过滤召回', '21%', '0000000000000000001101');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` tinyint(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `age` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `company` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `education` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `department` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `position` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `finterest` varchar(4092) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sinterest` varchar(4092) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tinterest` varchar(4092) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `addtime` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '普通用户',
  `state` varchar(20) DEFAULT '未审核',
  `favoriteCat1` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `favoriteCat2` varchar(60) DEFAULT NULL,
  `favoriteCat3` varchar(60) DEFAULT NULL,
  `userProfession` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('00000000100', 'root', '371b8d710409da6b913f0bde5f91c858', '超管', '男', '18', '腾讯', '清华', '测试部门', '北京', null, '{"1042015:tagCategory_001":0.345,"1042015:tagCategory_035":0.134,"1042015:tagCategory_651":0.345,"1042015:tagCategory_001":0.223,"1042015:tagCategory_832":0.112}', null, null, '', '管理员', '审核未通过', '兴趣画像一', '兴趣画像一', '兴趣画像一', '互联网');