package com.TechLearnApplication.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.TechLearnApplication.exception.TechLearnException;

@ControllerAdvice
public class GlobalExceptionHandler
{
	 @ExceptionHandler(value = TechLearnException.class)
	   public ResponseEntity<Object> exception(TechLearnException exception) 
	   {
	      return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
	   }
   
}
