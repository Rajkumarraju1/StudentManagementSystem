package com.example.StudentManagementSystem;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagementSystemApplication.class, args);
	}

	@Bean
	CommandLineRunner seedDesignations(DesignationRepo repo) {
		return args -> {
			if (repo.count() == 0) {
				repo.save(new Designation(null, "Software Engineer"));
				repo.save(new Designation(null, "Project Manager"));
				repo.save(new Designation(null, "System Architect"));
				repo.save(new Designation(null, "QA Engineer"));
				repo.save(new Designation(null, "DevOps Engineer"));
				System.out.println("Seeded initial designations.");
			}
		};
	}

}
