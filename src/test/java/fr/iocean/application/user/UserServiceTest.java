package fr.iocean.application.user;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

import fr.iocean.application.IntegrationTest;
import fr.iocean.application.resource.user.UserService;
import fr.iocean.application.resource.user.User;

@Sql("/test-users-data.sql")
public class UserServiceTest extends IntegrationTest {

	@Autowired
	UserService userService;
	
	@Test
	public void testFindOneByLogin() {
		User u = userService.findByLogin("login");
		org.junit.Assert.assertNotNull(u);
	}
	
}
