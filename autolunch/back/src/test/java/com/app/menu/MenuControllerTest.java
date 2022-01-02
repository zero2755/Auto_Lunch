package com.app.menu;
import com.app.demo.menu.MenuController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = MenuController.class)
public class MenuControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void callController() throws Exception{
        String[] arr = {"한솥도시락","본설렁탕","카가야쿠","편의점","밥샵","H푸드스토리","참진한설렁탕","2층 중국집","김가네","호또멘"};
        List<String> menu = Arrays.asList(arr);
        System.out.println(mvc.perform(get("/menu")));
    }

}
