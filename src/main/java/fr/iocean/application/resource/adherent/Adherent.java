package fr.iocean.application.resource.adherent;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table
public class Adherent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "birthDate")
	private Date birthDate;
	
	@Column(name = "eMail")
	private String eMail;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "postCode")
	private String postCode;
	
	@Column(name = "city")
	private String city;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "cotisation")
	private Date cotisation;
	
	@Column(name = "amountCotisation")
	private BigDecimal amountCotisation; 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostCode() {
		return postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Date getCotisation() {
		return cotisation;
	}

	public void setCotisation(Date cotisation) {
		this.cotisation = cotisation;
	}

	public BigDecimal getAmountCotisation() {
		return amountCotisation;
	}

	public void setAmountCotisation(BigDecimal amountCotisation) {
		this.amountCotisation = amountCotisation;
	}
}
