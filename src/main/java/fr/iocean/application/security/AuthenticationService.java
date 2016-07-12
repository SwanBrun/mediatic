package fr.iocean.application.security;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import fr.iocean.application.model.user.User;
import fr.iocean.application.model.user.UserRepository;

@Component
public class AuthenticationService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(final String username) {
		User user = userRepository.findByLogin(username);
		if (user!=null) {
			List<GrantedAuthority> rules = this.getAuthorities(user);
			return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), rules);
		}
		throw new UsernameNotFoundException("username.not.found");
	}

	private List<GrantedAuthority> getAuthorities(User user) {
		ArrayList<GrantedAuthority> listeGtases = new ArrayList<GrantedAuthority>();
		for(Authority autority :user.getAuthorities() ){
			GrantedAuthority gta = new SimpleGrantedAuthority(autority.getCode());
			listeGtases.add(gta);
		}
		return  listeGtases;
	}
}