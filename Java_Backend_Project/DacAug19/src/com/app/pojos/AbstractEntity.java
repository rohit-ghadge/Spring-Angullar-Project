package com.app.pojos;

import javax.persistence.*;

@MappedSuperclass
public class AbstractEntity 
{
	private Integer id;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	
	
}
