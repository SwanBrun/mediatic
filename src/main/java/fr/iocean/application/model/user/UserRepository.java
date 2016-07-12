package fr.iocean.application.model.user;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByLogin(String login);
	
}


