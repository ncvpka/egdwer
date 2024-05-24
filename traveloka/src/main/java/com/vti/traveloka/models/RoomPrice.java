package com.vti.traveloka.models;

import java.util.Date;
import java.util.List;



public class RoomPrice {

    private int roomID;
    private int hotelID;

    private float commonPrice;
    private List<SpecialDatePrice> specialDatePrices;

    public RoomPrice(int roomID, int hotelID, float commonPrice, List<SpecialDatePrice> specialDatePrices) {
        this.roomID = roomID;
        this.hotelID = hotelID;
        this.commonPrice = commonPrice;
        this.specialDatePrices = specialDatePrices;
    }

    public RoomPrice() {
    }

    public int getRoomID() {
        return roomID;
    }

    public void setRoomID(int roomID) {
        this.roomID = roomID;
    }

    public int getHotelID() {
        return hotelID;
    }

    public void setHotelID(int hotelID) {
        this.hotelID = hotelID;
    }

    public float getCommonPrice() {
        return commonPrice;
    }

    public void setCommonPrice(float commonPrice) {
        this.commonPrice = commonPrice;
    }

    public List<SpecialDatePrice> getSpecialDatePrices() {
        return specialDatePrices;
    }

    public void setSpecialDatePrices(List<SpecialDatePrice> specialDatePrices) {
        this.specialDatePrices = specialDatePrices;
    }
}
