package com.app.pojos;
import java.util.Date;


import javax.persistence.*;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BookingPojo extends AbstractEntity
{
	//private boolean status;
	private Date dateTime;
	private float serviceAmount;

	private UserPojo user;
	
	private SubServicePojo service;
	
	public BookingPojo() {
		System.out.println("inside bookin pojo");
	}
	
	public BookingPojo(Date dateTime, float serviceAmount, String email) {
		super();
		//this.status = status;
		this.dateTime = dateTime;
		this.serviceAmount= serviceAmount;
		
	}

//	public boolean isStatus() {
//		return status;
//	}
//
//	public void setStatus(boolean status) {
//		this.status = status;
//	}
	
	@DateTimeFormat(pattern = "DD-MM-YYYY")
	@Temporal(TemporalType.DATE)
	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userId")
	public UserPojo getUser() {
		return user;
	}

	public void setUser(UserPojo user) {
		this.user = user;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "serviceId")
	public SubServicePojo getService() {
		return service;
	}

	public void setService(SubServicePojo service) {
		this.service = service;
	}

	public float getServiceAmount() {
		return serviceAmount;
	}

	public void setServiceAmount(float serviceAmount) {
		this.serviceAmount = serviceAmount;
	}

	@Override
	public String toString() {
		return "BookingPojo [ dateTime=" + dateTime + ", serviceAmount=" + serviceAmount
				+ ", service=" + service + "]";
	}

	
}
