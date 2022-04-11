package com.gmk.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmk.demo.exception.ResourceNotFoundException;
import com.gmk.demo.model.Employee;
import com.gmk.demo.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	private EmployeeRepository repo;
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		System.out.println(repo);
		return repo.findAll();
	}
	//create emp
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee emp) {
		return repo.save(emp);
	}
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		Employee employee=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" + id));
		repo.deleteById(id);
	}
	@GetMapping("/employees/{id}")
	public Optional<Employee> getbyIDEmployee(@PathVariable Long id){
		Employee employee=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" + id));
		return repo.findById(id);
	}
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> putEmployee(@PathVariable Long id,@RequestBody Employee emp){
		Employee employee=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setFirstname(emp.getFirstname());
		employee.setEmail(emp.getEmail());
		employee.setLastname(emp.getLastname());
		Employee updatedEmp =repo.save(employee);
		return ResponseEntity.ok(updatedEmp);
//aha tempos
		
	}
	
}
