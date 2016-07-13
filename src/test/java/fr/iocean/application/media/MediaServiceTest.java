package fr.iocean.application.media;

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
import fr.iocean.application.resource.user.UserService;

@Sql("/test-medias-data.sql")
public class MediaServiceTest extends IntegrationTest {

	@Autowired
	UserService userService;

	@WithMockUser
	@Test
	public void testFindOneMediaByIdOK() throws Exception {
		this.mockMvc.perform(get("/resource/media/{id}", 1))
		.andExpect(jsonPath("$.title").value("title1"))
		.andExpect(jsonPath("$.type").value("Livre"))
		.andExpect(status().isOk());
	}
	
	@WithMockUser
	@Test
	public void testSearch() throws Exception {
		this.mockMvc.perform(get("/resource/media").param("search", "author1"))
		.andExpect(jsonPath("$[0].title").value("title1"))
		.andExpect(jsonPath("$[0].type").value("Livre"))
		.andExpect(status().isOk());
	}
	
//
//	@WithMockUser
//	@Test
//	public void testFindAll() throws Exception {
//		this.mockMvc.perform(get("/resource/adherent/{id}", 111)).andExpect(status().isNotFound());
//	}
//
//	@WithMockUser
//	@Test
//	public void testCreateAdherentFail() throws Exception {
//		Adherent adherent = new Adherent();
//		adherent.setBirthDate(null);
//		adherent.setAddress(null);
//		this.mockMvc
//				.perform(post("/resource/users").contentType(MediaType.APPLICATION_JSON)
//						.content(jsonHelper.serialize(adherent)))
//				.andDo(MockMvcResultHandlers.print()).andExpect(status().is4xxClientError());
//	}
//	
//	@WithMockUser
//	@Test
//	public void testCreateAdherentSuccess() throws Exception {
//		Adherent adherent = new Adherent();
//		adherent.setBirthDate(new Date());
//		adherent.setAddress("adresse");
//		adherent.setAmountCotisation(new BigDecimal(200));
//		adherent.setCity("Montpellier");
//		adherent.seteMail("mail@mailto.fr");
//		adherent.setCotisation(new Date());
//		adherent.setFirstName("firstname");
//		adherent.setLastName("lastname");
//		this.mockMvc
//				.perform(post("/resource/adherent").contentType(MediaType.APPLICATION_JSON)
//				.content(jsonHelper.serialize(adherent)))
//				.andDo(MockMvcResultHandlers.print()).andExpect(status().is(201));
//	}
}
