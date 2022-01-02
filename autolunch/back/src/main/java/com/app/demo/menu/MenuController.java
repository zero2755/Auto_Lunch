package com.app.demo.menu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MenuController {

    @GetMapping("/menu")
    public List<String> getMenu(){
        String[] arr = {"한솥도시락","본설렁탕","카가야쿠","편의점","밥샵","H푸드스토리","참진한설렁탕","2층 중국집","김가네","호또멘"};
        List<String> menu = Arrays.asList(arr);
        return menu;
    }

}
