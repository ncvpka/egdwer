package com.vti.traveloka.controllers;


import com.vti.traveloka.models.Booking;
import com.vti.traveloka.models.Customer;
import com.vti.traveloka.models.Hotel;
import com.vti.traveloka.models.ResponseObject;
import com.vti.traveloka.repositories.BookingRepository;
import com.vti.traveloka.repositories.CustomerRepository;

import com.vti.traveloka.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.*;

@RestController
@RequestMapping(path = "/api/v1/booking")
public class BookingController {
    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    BookingService bookingService;


    @PostMapping("/insert")
    ResponseEntity<ResponseObject> insertBooking(@RequestBody Booking newBooking)
    {

        Booking returnBooking = bookingRepository.save(newBooking);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Success", returnBooking)
        );


    }
    @PostMapping("/delete")
    ResponseEntity<ResponseObject> deleteBooking(@RequestParam long id)
    {

        Optional<Booking> optionalBooking = bookingRepository.findById(id);

        if(optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            booking.setDelete(true);
            Booking returnBooking = bookingRepository.save(booking);
            return  ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject(200,"Booking is exist", returnBooking)
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Booking not Found", "")
        );
    }




    @GetMapping("/getByPagging")
    ResponseEntity<ResponseObject> getBooking(@RequestParam int pageNumber, @RequestParam int pageSize)
    {
        List<Booking> bookings = bookingService.getBookingByPagging(pageNumber, pageSize);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"", bookings)
        );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getBookingById(@PathVariable Long id)
    {
        Optional<Booking> foundBooking = bookingRepository.findById(id);
        if(foundBooking.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200,"Success", foundBooking.get()));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject(200,"Customer not found", ""));
    }

    @PostMapping("/getBookingSource")
    ResponseEntity<ResponseObject> getBookingSource()
    {

        Set<String> sourceDistintSet = new HashSet<>();
        List<Booking> bookings = bookingRepository.findAll();

        for(Booking booking: bookings)
        {
            sourceDistintSet.add(booking.getSourceId());
        }

        return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200,"Success", sourceDistintSet));
//        Optional<Booking> foundBooking = bookingRepository.findById(id);
//        if(foundBooking.isPresent()) {
//            return ResponseEntity.status(HttpStatus.OK).body(
//                    new ResponseObject("ok","Success", foundBooking.get()));
//        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
//                new ResponseObject("ok","Customer not found", ""));
    }

}