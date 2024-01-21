package com.example.TurnosMedicos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class TurnosMedicosApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurnosMedicosApplication.class, args);

	}
}
