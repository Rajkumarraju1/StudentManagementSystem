package com.example.StudentManagementSystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/designation")
@CrossOrigin(origins = "http://localhost:5173")
public class DesignationController {
	
	@Autowired
	private DesignationRepo repo;
	
	@GetMapping
	public List<Designation> getAll(){
		return repo.findAll();
	}

	@PostMapping
	public Designation save(@RequestBody Designation des) {
		return repo.save( des);
	}
}
