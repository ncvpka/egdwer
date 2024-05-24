package com.vti.traveloka.models;

import jakarta.persistence.*;

@Entity
@Table(name = "room")
public class Room {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private Long hotelId;
    private String name;
    private Long roomType;
    private boolean isDelete;

    public Room() {
    }

    public Room(Long hotelId, String name, Long roomType, boolean isDelete) {
        this.hotelId = hotelId;
        this.name = name;
        this.roomType = roomType;
        this.isDelete = isDelete;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getRoomType() {
        return roomType;
    }

    public void setRoomType(Long roomType) {
        this.roomType = roomType;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
