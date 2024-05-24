package com.vti.traveloka.repositories;

import com.vti.traveloka.models.Hotel;
import com.vti.traveloka.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room,Long> {

    Optional<Room> findByName(String name);

    List<Room> findAllByHotelId(Long id);
}
