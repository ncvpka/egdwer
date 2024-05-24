package com.vti.traveloka.repositories;

import com.vti.traveloka.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findAllByIdCustomer(String id);
    Optional<Customer> findByPhone(String id);
}
