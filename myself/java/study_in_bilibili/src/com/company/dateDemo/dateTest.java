package com.company.dateDemo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Set;

/**
 * static Instant now()                         //获取当前时间的Instant对象
 * static Instant ofXxxx(long epochMilli)       //(标准时间)根据 (秒/毫秒/纳秒) 获取Instant对象
 * ZonedDateTime atZone(ZoneId zone)            //指定时区
 * boolean isXxx(Instant otherInstant)          //判断系列的方法
 * Instant minusXxx(long millisToSubtract)      //减少时间系列的方法
 * Instant plusXxx(long millisToSubtract)       //增加时间系列的方法
 */

/**
 * static DateTimeFormatter of
 * Pattern(格式)String format(时间对象)
 */
public class dateTest {
    public static void main(String[] args) throws ParseException {
        Date date = new Date(1000L);
        System.out.println(date);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy年MM月dd HH:mm:ss");
        System.out.println(dateFormat.format(date));
        String str = "2023年01月12 08:00:01";
        Date date1 = dateFormat.parse(str);
        long time = date1.getTime(); // alt + enter
        Set<String> zoneIds = ZoneId.getAvailableZoneIds();
        System.out.println(zoneIds);
        ZoneId zoneId = ZoneId.systemDefault();
        System.out.println(zoneId);
        ZoneId zoneId1 = ZoneId.of("Asia/Pontianak");
        System.out.println(zoneId1);
        // 获取时间对象
        ZonedDateTime time1 = Instant.now().atZone(ZoneId.of("Asia/Shanghai"));
        // 解析格式化器
        DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss EE a");
        // 格式化
        System.out.println(dtf1.format(time1));
    }
}
