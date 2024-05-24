package com.vti.traveloka.controllers;


import com.vti.traveloka.models.Customer;
import com.vti.traveloka.models.Hotel;
import com.vti.traveloka.models.ResponseObject;
import com.vti.traveloka.repositories.CustomerRepository;
import com.vti.traveloka.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path = "/api/v1/customer")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;
//    @Autowired
//    CustomerService customerService;
    @Autowired
    HotelRepository hotelRepository;


    @GetMapping("")
    ResponseEntity<ResponseObject> getCustomer()
    {
        List<Customer> customerList = customerRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Insert Customer successfully", customerList)
        );
    }

    @GetMapping("/getAllHotelByCustomerId/{id}")
    ResponseEntity<ResponseObject> getHotelByCustomer(@PathVariable Long id)
    {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if (optionalCustomer.isPresent()) {
            List<Hotel> hotels = hotelRepository.findAllByCustomerId(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200, "", hotels));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject(200, "Customer Id is not exist", ""));
        }
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getCustomerInfo(@PathVariable Long id)
    {


        Optional<Customer> foundCustomer = customerRepository.findById(id);
        if(foundCustomer.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200,"Insert Customer successfully", foundCustomer.get()));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject(200,"Customer not found", ""));
    }

    @GetMapping("/searchByName/{name}")
    ResponseEntity<ResponseObject> searchStudentByName(@PathVariable String name)
    {
        List<Customer> customerList = customerRepository.findAll();
        List<Customer> result = new ArrayList<>();
        for(Customer customer : customerList)
        {
            if(customer.getName().trim().toLowerCase().contains(name.toLowerCase()))
            {
                result.add(customer);
            }
        }
        if(customerList.size()==0)
        {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).
                    body(new ResponseObject(200,"Customer name not found", "" ));
        }
        return  ResponseEntity.status(HttpStatus.OK).
                body(new ResponseObject(200,"success", result ));

    }
//    @DeleteMapping("/{id}")
//    ResponseEntity<ResponseObject> deleteCustomer(@PathVariable Long id)
//    {
//        Optional<Customer> foundCustomer = customerRepository.findById(id);
//        if(foundCustomer.isPresent()) {
//            customerRepository.deleteById(id);
//            return ResponseEntity.status(HttpStatus.OK).body(
//                    new ResponseObject(200,"success", ""));
//        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                new ResponseObject(200,"Customer not found", ""));
//    }
    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertCustomer(@RequestBody Customer newCustomer)
    {

        Optional<Customer> foundCustomer = customerRepository.findAllByIdCustomer(newCustomer.getIdCustomer());
        if(foundCustomer.isPresent()) {
            return  ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject(200,"Customer is exist", "")
            );
        }

        Customer returnCustomer = customerRepository.save(newCustomer);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Insert Customer successfully", returnCustomer)
        );
    }

}
