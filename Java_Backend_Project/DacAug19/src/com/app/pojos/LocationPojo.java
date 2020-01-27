package com.app.pojos;

import javax.persistence.*;

import org.springframework.util.SystemPropertyUtils;

@Embeddable
public class LocationPojo{
	
	private String city, state, pincode;
	
	public LocationPojo() {
		System.out.println("in loc pojo");
	}
	
	
	public LocationPojo(String city, String state, String pincode) {
		super();
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		
	}

	@Column(length=20)
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	@Column(length=20)
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	@Column(length=20)
	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	
	@Override
	public String toString() {
		return "LocationPojo [city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}

	
	

}