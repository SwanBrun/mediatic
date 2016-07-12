package fr.iocean.application.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public User findOneById(Long id) {
		return userRepository.findOne(id);
	}
	
	public User findByLogin(String login){
		return userRepository.findByLogin(login);
	}

	public void create(User resource) {
		resource.setPassword(passwordEncoder.encode(resource.getPassword()));
		userRepository.save(resource);
	}

	public void update(Long id, User resource) {
		userRepository.save(resource);	
	}
}


