package com.vti.traveloka.models;

import java.util.Date;

public class SpecialDatePrice {

    private Long id;
    private Date date;
    private float price;

    public SpecialDatePrice(Date date, float price) {
        this.date = date;
        this.price = price;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
