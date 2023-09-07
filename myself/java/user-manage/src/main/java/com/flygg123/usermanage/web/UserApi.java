package com.flygg123.usermanage.web;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserApi {
    @PostMapping("/test")
    public String Test() {
        return "test";
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
