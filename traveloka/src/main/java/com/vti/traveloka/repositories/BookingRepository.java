package com.vti.traveloka.repositories;

import com.vti.traveloka.models.Booking;
import com.vti.traveloka.models.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    Optional<Booking> findById(Long id);

    Page<Booking> findAllByIsDelete(boolean isDelete, Pageable pageable);

}
