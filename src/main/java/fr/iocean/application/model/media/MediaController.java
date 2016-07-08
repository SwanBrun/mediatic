package fr.iocean.application.model.media;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Transactional
@RestController
@RequestMapping("/resource/media")
public class MediaController {

	@Autowired
	private MediaService mediaService;

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Media findById(@PathVariable Long id) {
		return mediaService.findById(id);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Media> findAll() {
		return mediaService.findAll();
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public void delete(Long id) {
		mediaService.delete(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Media media) {

		mediaService.save(media);

	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	public void update(Media media) {

		mediaService.save(media);

	}

}
