package com.TechLearnApplication;
import java.net.URI;
//import org.junit.Assert;
import java.net.URISyntaxException;
import java.util.List;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import com.TechLearnApplication.model.UserRegistration;
import com.TechLearnApplication.model.UserRegistrationUI;
import com.google.common.net.MediaType;

import junit.framework.Assert;



import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
//import org.junit.runner.RunWith;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
public class UserRegistrationControllerUnitTest {
	  @LocalServerPort
      int randomServerPort;
       @Test
       public void TestBlukCreateTrainer() throws URISyntaxException 
       {
           RestTemplate restTemplate = new RestTemplate();
         
           final String baseUrl = "http://localhost:" + randomServerPort + "/createAdmin";
           URI uri = new URI(baseUrl);
        
           ResponseEntity<String> result = restTemplate.getForEntity(uri,String.class);
            
           //Verify request succeed
           Assert.assertEquals(200, result.getStatusCodeValue());
           Assert.assertEquals(true, result.getBody().contains("Admin Registered"));
}
       @Test
       public void TestCreateUser() throws URISyntaxException 
       {
       RestTemplate restTemplate = new RestTemplate();
         
       final String baseUrl = "http://localhost:" + randomServerPort + "/createUser";
       URI uri = new URI(baseUrl);
       UserRegistration userregistration=new UserRegistration("Soumik", "chak","abc@gmail.com","9831277665","naksjlka","77883333","M","18-08-1987","kh7665","Soumik718","kh7665");
    
       HttpHeaders headers = new HttpHeaders();
       
       HttpEntity<UserRegistration> request = new HttpEntity<>(userregistration, headers);
   
       ResponseEntity<String> result = restTemplate.postForEntity(uri, request, String.class);







       Assert.assertEquals(200, result.getStatusCodeValue());
       Assert.assertEquals(true, result.getBody().contains("User is Registered"));
       
       
}
     
   
}
