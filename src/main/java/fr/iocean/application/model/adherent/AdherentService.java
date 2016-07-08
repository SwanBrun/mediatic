package fr.iocean.application.model.adherent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdherentService {

	@Autowired
	private AdherentRepository adherentRepository;
	
	public Adherent findById(Long id){
		return adherentRepository.getOne(id);
	}
	
	public List<Adherent> findAll(){
		return adherentRepository.findAll();
	}
	
	public void save(Adherent adherent){
		adherentRepository.saveAndFlush(adherent);
	}
	
	public void delete(Long id){
		adherentRepository.delete(id);
	}
}
