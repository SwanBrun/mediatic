package fr.iocean.application.model.adherent;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Transactional
@RestController
@RequestMapping("/resource/adherent")
public class AdherentController {

	@Autowired
	private AdherentService adherentService;
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Adherent findById(@PathVariable Long id){
		return adherentService.findById(id);
	}
	
	@RequestMapping(value = "all", method = RequestMethod.GET)
	public List<Adherent> findAll(){
		return adherentService.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(Adherent adherent){
		adherentService.save(adherent);
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public void upDate(Adherent adherent){
		adherentService.save(adherent);
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public void delete(Long id){
		adherentService.delete(id);
	}
}
