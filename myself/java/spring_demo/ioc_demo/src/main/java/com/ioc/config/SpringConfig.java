package com.ioc.config;

import org.springframework.context.annotation.*;

@Configuration
@ComponentScan("com.ioc")
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MybatisConfig.class})
@EnableAspectJAutoProxy
public class SpringConfig {
}
