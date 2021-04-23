package com.TechLearnApplication;

import java.net.URI;
import java.net.URISyntaxException;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.TechLearnApplication.model.Courses;

import junit.framework.Assert;
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
public class CourseControllerUnitTest {
	@LocalServerPort
    int randomServerPort;
     @Test
     public void TestBulkcreatecourses() throws URISyntaxException 
     {
         RestTemplate restTemplate = new RestTemplate();
       
         final String baseUrl = "http://localhost:" + randomServerPort + "/courses";
         URI uri = new URI(baseUrl);
      
         ResponseEntity<String> result = restTemplate.getForEntity(uri,String.class);
          
         //Verify request succeed
         Assert.assertEquals(200, result.getStatusCodeValue());
         Assert.assertEquals(true, result.getBody().contains("Courses are Registered"));
}
     @Test
     public void TestCreateCourse() throws URISyntaxException 
     {
     RestTemplate restTemplate = new RestTemplate();
       
     final String baseUrl = "http://localhost:" + randomServerPort + "/createcourse";
     URI uri = new URI(baseUrl);
     Courses courses=new Courses(110L,"Machine Learning",60,"Mohit",10000,"Mohit5656",5);
  
     HttpHeaders headers = new HttpHeaders();
     
     HttpEntity<Courses> request = new HttpEntity<>(courses, headers);
 
     ResponseEntity<String> result = restTemplate.postForEntity(uri, request, String.class);

}
}
