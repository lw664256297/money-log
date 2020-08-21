-- *****bill_detail_list*****
-- bill_money_log_id
-- detailId
-- iconType
-- typeName
-- isOutInCome
-- creationTime
-- remark
-- amount
-- createdAt
-- updateAt
-- deletedAt

-- ****bill_money_list_log***
-- timeDay
-- bill_money_log_id

-- 条件查询
SELECT * from tb_users WHERE tel='13438888888'

-- 查询icon数据
SELECT * FROM bill_type_icon;

-- 查询账单数据
SELECT bill_money_list_log.timeDay, bill_detail_list.* from bill_money_list_log, bill_detail_list WHERE 1234=bill_detail_list.bill_money_log_id

--  新增账号数据
INSERT INTO tb_users (username, password, sex, tel, role, createdAt) VALUES ("zhangds", "zhangds123", "男", 13438888888, "1", now())

-- 新增 bill_detail_list
INSERT INTO bill_detail_list (bill_money_log_id, detailId, iconType, typeName, isOutInCome, creationTime, remark, amount, createdAt) VALUES (123,1, "shopping-cart-o", "购物", 0, "08:20", "成都衣服新增", "100.00", now());

-- 新增 bill_money_list_log 数据
INSERT INTO bill_money_list_log (timeDay, bill_money_log_id, createdAt) VALUES ("2018-05-27 16:25:33", 123, now())
