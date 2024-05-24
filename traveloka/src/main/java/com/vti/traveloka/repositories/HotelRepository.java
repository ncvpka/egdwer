package com.vti.traveloka.repositories;

import com.vti.traveloka.models.Customer;
import com.vti.traveloka.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long>
{
    Optional<Hotel> findByName(String id);

    List<Hotel> findAllByCustomerId(Long id);
}
