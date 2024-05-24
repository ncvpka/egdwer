package com.vti.traveloka.controllers;


import com.vti.traveloka.models.Customer;
import com.vti.traveloka.models.Hotel;
import com.vti.traveloka.models.ResponseObject;
import com.vti.traveloka.models.Room;
import com.vti.traveloka.repositories.CustomerRepository;
import com.vti.traveloka.repositories.HotelRepository;
import com.vti.traveloka.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/hotel")
public class HotelController {

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    RoomRepository roomRepository;

    @GetMapping("")
    ResponseEntity<ResponseObject> getHotel()
    {
        List<Hotel> hotels = hotelRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Insert Hotel successfully", hotels)
        );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> getHotelInfo(@PathVariable Long id)
    {
        Optional<Hotel> foundHotel = hotelRepository.findById(id);
        if(foundHotel.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200,"Insert Hotel successfully", foundHotel.get()));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject(200,"Hotel not found", ""));

    }

    @GetMapping("/searchByName/{name}")
    ResponseEntity<ResponseObject> searchHotelByName(@PathVariable String name)
    {
        List<Hotel> hotelList = hotelRepository.findAll();
        List<Hotel> result = new ArrayList<>();
        for(Hotel hotel : hotelList)
        {
            if(hotel.getName().trim().toLowerCase().contains(name.toLowerCase()))
            {
                result.add(hotel);
            }
        }
        if(hotelList.size()==0)
        {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).
                    body(new ResponseObject(200,"Hotel name not found", "" ));
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
    ResponseEntity<ResponseObject> insertHotel(@RequestBody Hotel newHotel)
    {

        Optional<Hotel> foundHotel = hotelRepository.findByName(newHotel.getName());
        if(foundHotel.isPresent()) {
            return  ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject(200,"Hotel is exist", "")
            );
        }

        Hotel returnHotel = hotelRepository.save(newHotel);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Insert Hotel successfully", returnHotel)
        );
    }


    @PostMapping("/insertRoom")
    ResponseEntity<ResponseObject> insertRoom(@RequestBody Room newRoom)
    {

        Optional<Room> foundRoom = roomRepository.findByName(newRoom.getName());
        if(foundRoom.isPresent()) {
            return  ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                    new ResponseObject(200,"Room is exist", "")
            );
        }

        Room returnRoom = roomRepository.save(newRoom);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"Insert Room successfully", returnRoom)
        );
    }

    @PostMapping("/updateRoom")
    ResponseEntity<ResponseObject> updateRoom(@RequestBody Room newRoom)
    {

        Optional<Room> foundRoom = roomRepository.findById(newRoom.getId());
        if(foundRoom.isPresent())
        {
            Room returnRoom = roomRepository.save(newRoom);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject(200,"Success", returnRoom)
            );
        }


        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject(200,"Update Room successfully", "")
        );
    }

    @GetMapping("/getAllRoomByHotelId/{id}")
    ResponseEntity<ResponseObject> getRooms(@PathVariable Long id)
    {
        List<Room> rooms = roomRepository.findAllByHotelId(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200,"", rooms)
        );
    }

}
