package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import static org.springframework.http.HttpStatus.*;
import java.util.List;
import javax.persistence.*;
import javax.servlet.http.HttpSession;
import com.app.dao.IUserDao;
import com.app.pojos.BookingPojo;
import com.app.pojos.SubServicePojo;
import com.app.pojos.UserPojo;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	IUserDao iuserdao;

	@Autowired
	private JavaMailSender mailsender;
	
	public UserController() {
		System.out.println("inside usercontroler");
	}

	@PostMapping("/login")
	public UserPojo processLoginForm(@RequestBody UserPojo user,HttpSession hs,RedirectAttributes flashMap) {
		System.out.println(user);
		// invoke Dao's method
		UserPojo udb = iuserdao.validateUser(user);
		
		System.out.println(udb.getOtp() + "  " + user.getOtp());
		if (udb.getOtp().equals(user.getOtp())) 
		{
			return udb;
		}
		return null;
	}

	@PostMapping("/register")
	Integer registeruser(@RequestBody UserPojo u) {
		System.out.println(u);

		if (iuserdao.registerUser(u) != 0) {
			String msg = "You are registered succesfully";
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(u.getEmail());
			mailMessage.setSubject("One Time Password");
			mailMessage.setText(msg);
			try {
				mailsender.send(mailMessage);
				return 1;
			} catch (MailException e) {
				System.out.println("inside mail exception");
				e.printStackTrace();
			}
		}
		return 0;
	}


	@GetMapping("/isEmailExist/{email:.+}")
	@ResponseBody
	public String otpGeneration(@PathVariable("email") String email) {
		System.out.println("in mail " + email);

		UserPojo user;
		try {
			user = iuserdao.findByEmail(email);
			System.out.println(user + "is valid");
			if (user != null) {
				int otp = iuserdao.generateOtp();
				System.out.println("generated otp method called");
				iuserdao.UpdateOtp(otp, user);
				String msg = "Your one time password for login to service@door is " + otp;
				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(user.getEmail());
				mailMessage.setSubject("One Time Password");
				mailMessage.setText(msg);
				try {
					mailsender.send(mailMessage);
				} catch (MailException e) {
					System.out.println("inside mail exception");
					e.printStackTrace();
				}
				return "otp";
			}
		} catch (NoResultException e) {

			e.printStackTrace();
		}
		return "send successfully";
	}

	@GetMapping("/list")
	public ResponseEntity<?> getAllUser()
	{
		System.out.println("in get all users");
		List<UserPojo> list = iuserdao.getAllUsers();
		if (list.isEmpty())
			return new ResponseEntity<String>("No Users ", NO_CONTENT);
		return new ResponseEntity<List<UserPojo>>(list, OK);
	}
	
	
	
	
}


