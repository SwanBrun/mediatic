package fr.iocean.application.resource.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.iocean.application.resource.user.User;

@RestController
@RequestMapping("/resource/users")
@Transactional
public class UserController {
	@Autowired
	private UserService userService;

	@RequestMapping(method = RequestMethod.GET, params = "login")
	@ResponseBody
	public User findOneByLogin(@RequestParam String login) {
		return userService.findByLogin(login);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	//@PreAuthorize("hasAuthority('ADMIN')")
	public void create(@RequestBody @Valid User resource) {
		userService.create(resource);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	public void update(@PathVariable Long id, @RequestBody @Valid User resource) {
		userService.update(id, resource);
	}	
}