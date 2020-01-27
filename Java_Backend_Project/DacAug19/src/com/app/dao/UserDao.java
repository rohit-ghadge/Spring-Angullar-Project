package com.app.dao;

import java.util.List;
import java.util.Random;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.BookingPojo;
import com.app.pojos.ServicePojo;
import com.app.pojos.UserPojo;

@Service
@Transactional
public class UserDao implements IUserDao {
	@Autowired
	SessionFactory sf;

	public UserDao() {
		System.out.println("in user dao");
	}

	@Override
	public Integer registerUser(UserPojo user) {
		System.out.println("in register user");
		System.out.println(user);
		return (Integer) sf.getCurrentSession().save(user);
	}

	@Override
	public UserPojo login(UserPojo user) {
		String jpql = "select u from User u where u.email = :em";
		return sf.getCurrentSession().createQuery(jpql, UserPojo.class).setParameter("em", user.getEmail())
				.getSingleResult();
	}

	@Override
	public UserPojo findByEmail(String email) {
		System.out.println("in findbyemail"+email);
		String str = "select u from UserPojo u where u.email=:em";
		return sf.getCurrentSession().createQuery(str, UserPojo.class).setParameter("em", email).getSingleResult();
	}
	
	@Override
	public void UpdateOtp(int otp, UserPojo u)
	{
		System.out.println(u);
		u.setOtp(otp);
		System.out.println(otp);
		sf.getCurrentSession().update(u);
	}

	@Override
	public int generateOtp() {
		System.out.println("inside otp");
		Random random = new Random();
		int num = random.nextInt(99999) + 99999;
		if (num < 100000 || num > 999999) {
			num = random.nextInt(99999) + 99999;
			if (num < 100000 || num > 999999) {
				System.out.println("Unable to generate PIN at this time..");
			}
		}
		return num;
	}

	@Override
	public UserPojo validateUser(UserPojo user) {
		String str = "select u from UserPojo u where u.email=:em";
		return sf.getCurrentSession().createQuery(str,UserPojo.class).setParameter("em", user.getEmail()).getSingleResult();
	}

	@Override
	public List<UserPojo> getAllUsers() 
	{
		String jpql = "select u from UserPojo u ";
		return sf.getCurrentSession().createQuery(jpql, UserPojo.class).getResultList();
		
	}
	
}
