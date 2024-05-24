package com.vti.traveloka.service;


import com.vti.traveloka.models.Booking;
import com.vti.traveloka.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public class BookingService {

    @Autowired
    BookingRepository bookingRepository;

    public List<Booking> getBookingByPagging(int pageNumber, int pageSize)
    {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Booking> listBooking = bookingRepository.findAllByIsDelete(false, pageable);
        return listBooking.stream().toList();
    }
}
