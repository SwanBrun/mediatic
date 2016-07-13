package fr.iocean.application.user;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import fr.iocean.application.IntegrationTest;
import fr.iocean.application.resource.user.UserService;
import fr.iocean.application.resource.user.User;

@Sql("/test-users-data.sql")
public class UserServiceTest extends IntegrationTest {

	@Autowired
	UserService userService;
	
	@WithMockUser
	@Test
	public void testFindOneByLoginOK() throws Exception{
		this.mockMvc.perform(get("/resource/users").param("login", "login1"))
        .andExpect(jsonPath("$.login").value("login1"))
        .andExpect(jsonPath("$.password").value("mdp1"))
        .andExpect(status().isOk());
	}
	
	@WithMockUser
	@Test
	public void testCreateUserOK() throws Exception{
		User user = new User();
		user.setLogin("login");
		user.setPassword("password");
		this.mockMvc.perform(post("/resource/users").contentType(MediaType.APPLICATION_JSON).content(jsonHelper.serialize(user)))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(status().is(201));
	}
	
	@WithMockUser
	@Test
	public void testCreateUserFail() throws Exception{
		User user = new User();
		user.setLogin(null);
		user.setPassword(null);
		this.mockMvc.perform(post("/resource/users").contentType(MediaType.APPLICATION_JSON).content(jsonHelper.serialize(user)))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(status().is4xxClientError());
	}
}
