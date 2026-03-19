package com.example.StudentManagementSystem;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;
	private String section;
	private Long ph_number;
	
	@ManyToOne
	@JoinColumn(name="des_id")
	private Designation designation;

	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", email=" + email + ", section=" + section + ", ph_number="
				+ ph_number + ", designation=" + designation + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public Long getPh_number() {
		return ph_number;
	}

	public void setPh_number(Long ph_number) {
		this.ph_number = ph_number;
	}

	public Designation getDesignation() {
		return designation;
	}

	public void setDesignation(Designation designation) {
		this.designation = designation;
	}

	public Student(Integer id, String name, String email, String section, Long ph_number, Designation designation) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.section = section;
		this.ph_number = ph_number;
		this.designation = designation;
	}

	public Student() {
		super();
	}
	
}
