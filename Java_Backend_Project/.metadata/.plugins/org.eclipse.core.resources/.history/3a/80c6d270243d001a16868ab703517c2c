package com.app.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.ServicePojo;
import com.app.pojos.SubServicePojo;

@Repository
@Transactional
public class SubServiceDao implements ISubServiceDao {
	@Autowired
	private SessionFactory sf;

	@Override
	public List<SubServicePojo> getAllSubServices(int Id) {
		System.out.println("inside dao" + Id);
		String jpql = "select s from SubServicePojo s where s.mainService.id =:Id";
		return sf.getCurrentSession().createQuery(jpql, SubServicePojo.class).setParameter("Id", Id).getResultList();

	}

	@Override
	public ServicePojo getMainService(int Id) {
		System.out.println(Id);
		String jpql = "select s from ServicePojo s where s.id=:Id";
		return sf.getCurrentSession().createQuery(jpql, ServicePojo.class).setParameter("Id", Id).getSingleResult();
	}

	@Override
	public Integer deleteSubService(SubServicePojo serv) {
		System.out.println(serv.getId());
		sf.getCurrentSession().delete(serv);
		return serv.getId();
	}

	@Override
	public SubServicePojo getSubService(int Id) {
		System.out.println(Id);
		String jpql = "select s from SubServicePojo s where s.id=:Id";
		return sf.getCurrentSession().createQuery(jpql, SubServicePojo.class).setParameter("Id", Id).getSingleResult();
	}

	@Override
	public Integer updateSubService(int id, SubServicePojo serv) 
	{
		System.out.println("--------------->>>>>>"+serv);
		System.out.println("--------------->>>>>>"+serv.getMainService().getId());
		
		Session hs = sf.getCurrentSession();
		serv.setId(id);
		serv.getMainService().getId();
		hs.clear();// clears cache
		hs.saveOrUpdate(serv);// e --persistent
		return serv.getId();
	}

	@Override
	public Integer addSubService(SubServicePojo ser) 
	{
		System.out.println(ser.getId());
		sf.getCurrentSession().save(ser);
		return ser.getId();
	}
	
	
}
