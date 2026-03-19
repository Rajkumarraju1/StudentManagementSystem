package com.example.StudentManagementSystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

	@Autowired
	private StudentRepositary srepo;
	
	@Autowired
	private DesignationRepo drepo;
	
	@GetMapping
	public List<Student> getAll(){
		return srepo.findAll();
	}
	
	@PostMapping
	public Student savestu(@RequestBody Student stu) {
		return srepo.save( stu);
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable int id) {
		srepo.deleteById( id);
	}
	
	@PutMapping("{id}")
	public Student updateStudent(@PathVariable int id, @RequestBody Student stu ) {
		Student exist = srepo.findById( id).orElseThrow(()-> new RuntimeException("student not found"));
		
		exist.setName( stu.getName());
		exist.setEmail( stu.getEmail());
		exist.setPh_number( stu.getPh_number());
		exist.setSection( stu.getSection());
		
		if(stu.getDesignation() != null) {
			Designation des = drepo.findById(stu.getDesignation().getId()).orElseThrow(()-> new RuntimeException("Designation not found"));
			exist.setDesignation(des);
		}
		return srepo.save( exist);
		
	}
		public Student getStudentbyId(@PathVariable int id) {
		    return srepo.findById(id)
		        .orElseThrow(() -> new RuntimeException("id not found"));
		}

		
	 
		
	
}
