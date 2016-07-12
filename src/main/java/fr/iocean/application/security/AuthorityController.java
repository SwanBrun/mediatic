package fr.iocean.application.security;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/resource/authority")
@Transactional
public class AuthorityController {

	@RequestMapping(method = RequestMethod.GET)
	@SuppressWarnings("unchecked")
	public List<GrantedAuthority> getAuthority(){	
	      Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	      return (List<GrantedAuthority>) auth.getAuthorities();
	}
}
