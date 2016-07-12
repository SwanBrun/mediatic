package fr.iocean.application.resource.user;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.iocean.application.resource.user.User;


public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByLogin(String login);
	
}


