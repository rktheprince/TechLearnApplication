package com.TechLearnApplication;
import java.util.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.TechLearnApplication")
public class TechApplication implements CommandLineRunner{

	public static void main(String[] args) {
	    SpringApplication.run(TechApplication.class, args);
	    Scanner sc=new Scanner(System.in);
		System.out.println("Welcome to TechLearn India's Largest E-Learning Platform");
		System.out.println("Please Choose Anyone Option");
		System.out.print("1.Registration \n2.Login");
		int choose=sc.nextInt();
		sc.close();
		switch (choose)
		
		{
		case 1:System.out.println("Refer to registration page");
		break;
		case 2:System.out.println("Refer to Login page");
		break;
		}
		
		
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("This App is made for you all...");
		
	}
	


}
