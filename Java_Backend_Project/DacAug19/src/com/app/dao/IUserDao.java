package com.app.dao;

import java.util.List;

import com.app.pojos.BookingPojo;
import com.app.pojos.ServicePojo;
import com.app.pojos.UserPojo;

public interface IUserDao {

	public Integer registerUser(UserPojo user);
	public UserPojo login(UserPojo user);
	public UserPojo findByEmail(String email);
	public int generateOtp();
	public void UpdateOtp(int otp, UserPojo u);
	//public UserPojo validateUser(String email, int otp);
	public UserPojo validateUser(UserPojo user);
	//public Integer registerBooking(BookingPojo booking, int userId, int serviceId);
	public List<UserPojo> getAllUsers(); 
	//public Integer registerBooking(BookingPojo booking);
}
