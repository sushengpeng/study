package com.ioc.dao;

import com.ioc.domain.Account;
import com.ioc.service.impl.UserAccountImpl;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface AccountDao {
    @Select("select * from user")
    List<Account> findAll();

    @Insert("insert into user (name,password) values(#{name},#{password})")
    void addUser(Account account);

    @Select("select * from user where user_id = #{id}")
    Account getUserById(String id);

    @Delete("delete from user where user_id = #{id}")
    void deleteUser(String id);

    @Update("update tbl_account set money = (money - #{money}) where user_id = #{id}")
    void outMoney(@Param("id") String id, @Param("money") Double money);

    @Update("update tbl_account set money = (money + #{money}) where user_id = #{id}")
    void inMoney(@Param("id") String id, @Param("money") Double money);

    @Select("select * from tbl_account where user_id = #{id}")
    UserAccountImpl queryUserAccount(@Param("id") String id);
}
