package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class SubServicePojo extends AbstractEntity
{
	private String subServiceName;
	private String subServiceDesc;
	private int amount;
	
	private ServicePojo mainService;
	@JsonIgnore
	private List<BookingPojo> servicebook = new ArrayList<BookingPojo>();
	
	public SubServicePojo() {
		System.out.println("in subservice pojo");
	}

	public SubServicePojo(String subServiceName, String serviceDesc, int amount) {
		super();
		this.subServiceName = subServiceName;
		this.subServiceDesc = serviceDesc;
		this.amount = amount;
	}

	public String getSubServiceName() {
		return subServiceName;
	}

	public void setSubServiceName(String subServiceName) {
		this.subServiceName = subServiceName;
	}

	public String getServiceDesc() {
		return subServiceDesc;
	}

	public void setServiceDesc(String serviceDesc) {
		this.subServiceDesc = serviceDesc;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "mainServiceId")
	public ServicePojo getMainService() {
		return mainService;
	}

	public void setMainService(ServicePojo mainService) {
		this.mainService = mainService;
	}
	@OneToMany(mappedBy = "service", cascade = CascadeType.MERGE, orphanRemoval = true)
	public List<BookingPojo> getServicebook() {
		return servicebook;
	}

	public void setServicebook(List<BookingPojo> servicebook) {
		this.servicebook = servicebook;
	}

	@Override
	public String toString() {
		return "SubServicePojo [subServiceName=" + subServiceName + ", serviceDesc=" + subServiceDesc + ", amount="
				+ amount + "]";
	}
	

}
