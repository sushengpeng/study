package com.ioc.dao;

import com.ioc.domain.Account;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

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

}
