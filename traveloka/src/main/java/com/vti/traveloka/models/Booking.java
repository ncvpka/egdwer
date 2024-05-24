package com.vti.traveloka.models;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long userId;
    private Long roomId;
    private Date startTime;
    private Date finishTime;
    private boolean isDelete;
    private String sourceId; //nen tang quang cao
    private float price;

    public Booking() {
    }

    public Booking(Long userId, Long roomId, Date startTime, Date finishTime, boolean isDelete, String sourceId, float price) {
        this.userId = userId;
        this.roomId = roomId;
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.isDelete = isDelete;
        this.sourceId = sourceId;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getFinishTime() {
        return finishTime;
    }

    public void setFinishTime(Date finishTime) {
        this.finishTime = finishTime;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public String getSourceId() {
        return sourceId;
    }

    public void setSourceId(String sourceId) {
        this.sourceId = sourceId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
