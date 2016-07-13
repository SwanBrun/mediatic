package fr.iocean.application.emprunt;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import fr.iocean.application.IntegrationTest;
import fr.iocean.application.resource.adherent.Adherent;
import fr.iocean.application.resource.adherent.AdherentService;

@Sql("/test-emprunts-data.sql")
public class EmpruntServiceTest extends IntegrationTest{

	@Autowired
	AdherentService adherentService;

	@WithMockUser
	@Test
	public void testFindOneAdherentByLoginOK() throws Exception {
		this.mockMvc.perform(get("/resource/adherent/{id}", 1)).andExpect(jsonPath("$.address").value("adresse1"))
				.andExpect(jsonPath("$.eMail").value("mail@mail.fr")).andExpect(status().isOk());
	}

	@WithMockUser
	@Test
	public void testFindAll() throws Exception {
		this.mockMvc.perform(get("/resource/adherent/{id}", 111)).andExpect(status().isNotFound());
	}

	@WithMockUser
	@Test
	public void testCreateAdherentFail() throws Exception {
		Adherent adherent = new Adherent();
		adherent.setBirthDate(null);
		adherent.setAddress(null);
		this.mockMvc
				.perform(post("/resource/users").contentType(MediaType.APPLICATION_JSON)
						.content(jsonHelper.serialize(adherent)))
				.andDo(MockMvcResultHandlers.print()).andExpect(status().is4xxClientError());
	}
	
	@WithMockUser
	@Test
	public void testCreateAdherentSuccess() throws Exception {
		Adherent adherent = new Adherent();
		adherent.setBirthDate(new Date());
		adherent.setAddress("adresse");
		adherent.setAmountCotisation(new BigDecimal(200));
		adherent.setCity("Montpellier");
		adherent.seteMail("mail@mailto.fr");
		adherent.setCotisation(new Date());
		adherent.setFirstName("firstname");
		adherent.setLastName("lastname");
		this.mockMvc
				.perform(post("/resource/adherent").contentType(MediaType.APPLICATION_JSON)
				.content(jsonHelper.serialize(adherent)))
				.andDo(MockMvcResultHandlers.print()).andExpect(status().is(201));
	}
}
